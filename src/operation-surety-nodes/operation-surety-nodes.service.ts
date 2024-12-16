import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OperationSuretyNode, OperationSuretyNodeDocument } from 'src/schemas/operation-surety-node.schema';
import { Model } from 'mongoose'
import * as path from 'path';
import { ReadOperationSuretyNodeDto } from './dto/read-operation-surety-node.dto';
import { plainToInstance } from 'class-transformer';
import { CreateOperationSuretyNodeDto } from './dto/create-operation-surety-node.dto';
import { Auth } from 'src/auth/auth.interface';

@Injectable()
export class OperationSuretyNodesService {

    constructor(
        @InjectModel(OperationSuretyNode.name)
        private readonly operationSuretyNodeModel: Model<OperationSuretyNodeDocument>,
    ) { }

    private BUCKET_NAME = process.env.BUCKET_NAME || ''
    private KEY_FILE_NAME = path.join(__dirname, '../../' + process.env.KEY_FILE_NAME)

    async getOperationSuretyNodeById(operationSuretyNodeId: string): Promise<ReadOperationSuretyNodeDto> {
        const foundOperationSuretyNode = await this.operationSuretyNodeModel.findOne({ _id: operationSuretyNodeId })
        if (foundOperationSuretyNode) {
            return plainToInstance(ReadOperationSuretyNodeDto, foundOperationSuretyNode.toObject())
        } else {
            throw new Error("Sin resultados")   
        }
    }

    async getOperationSuretyNodesByOperationSurety(
        operationSuretyId: string
    ): Promise<ReadOperationSuretyNodeDto[]> {
        const foundOperationSuretyNodes = await this.operationSuretyNodeModel.find({ operationSuretyId })
        return plainToInstance(ReadOperationSuretyNodeDto, foundOperationSuretyNodes.map(e => e.toObject()))
    }

    async getFileByOperationSuretyNodeId(operationSuretyNodeId: string): Promise<Buffer | null> {
        const storage = new Storage({
            keyFilename: this.KEY_FILE_NAME
        })
        const [buffer] = await storage.bucket(this.BUCKET_NAME).file('operationSureties/' + operationSuretyNodeId).download()
        return buffer
    }

    async uploadFile(file: Buffer, fileName: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const storage = new Storage({
                keyFilename: this.KEY_FILE_NAME
            })
    
            const bucket = storage.bucket(this.BUCKET_NAME)
            const blob = bucket.file('operationSureties/' + fileName)
            const blobStream = blob.createWriteStream()
            blobStream.on('finish', async () => {
                resolve(blob.publicUrl())
            })
            blobStream.on('error', (error) => {
                reject(error)
            })
            blobStream.end(file)
        })
    }

    async create(
        operationSurety: CreateOperationSuretyNodeDto,
        operationSuretyId: string,
        auth: Auth
    ): Promise<ReadOperationSuretyNodeDto> {
        const createdOperationSuretyNode = new this.operationSuretyNodeModel({
            ...operationSurety,
            operationSuretyId,
            userId: auth.userId
        })
        const savedOperationSuretyNode = await createdOperationSuretyNode.save()
        return plainToInstance(ReadOperationSuretyNodeDto, savedOperationSuretyNode.toObject())
    }

    async delete(operationSuretyNodeId: string) {
        await this.operationSuretyNodeModel.deleteOne({ _id: operationSuretyNodeId })
    }

    async deleteFile(operationSuretyNodeId: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const storage = new Storage({
                keyFilename: this.KEY_FILE_NAME
            })
            const bucket = storage.bucket(this.BUCKET_NAME)
            const [files] = await bucket.getFiles({ prefix: 'operationSureties' })
            files.forEach(e => {
                if (e.name.includes(operationSuretyNodeId)) {
                    e.delete()
                }
            })
            resolve()
        })
    }

}
