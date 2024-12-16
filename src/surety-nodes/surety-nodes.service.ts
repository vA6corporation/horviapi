import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import * as path from 'path';
import { SuretyNode, SuretyNodeDocument } from 'src/schemas/surety-node.schema';
import { ReadSuretyNodeDto } from './dto/read-surety-node.dto';
import { CreateSuretyNodeDto } from './dto/create-surety-node.dto';
import { Auth } from 'src/auth/auth.interface';

@Injectable()
export class SuretyNodesService {

    constructor(
        @InjectModel(SuretyNode.name)
        private readonly suretyNodeModel: Model<SuretyNodeDocument>,
    ) { }

    private BUCKET_NAME = process.env.BUCKET_NAME || ''
    private KEY_FILE_NAME = path.join(__dirname, '../../' + process.env.KEY_FILE_NAME)

    async getSuretyNodeById(suretyNodeId: string): Promise<ReadSuretyNodeDto> {
        const foundSuretyNode = await this.suretyNodeModel.findOne({ _id: suretyNodeId })
        if (foundSuretyNode) {
            return plainToInstance(ReadSuretyNodeDto, foundSuretyNode.toObject())
        } else {
            throw new Error("Sin resultados")
        }
    }

    async getSuretyNodesBySurety(
        fileType: string,
        suretyId: string
    ): Promise<ReadSuretyNodeDto[]> {
        const foundSuretyNodes = await this.suretyNodeModel.find({ fileType, suretyId })
        return plainToInstance(ReadSuretyNodeDto, foundSuretyNodes.map(e => e.toObject()))
    }

    async getFileBySuretyNodeId(suretyNodeId: string): Promise<Buffer | null> {
        const storage = new Storage({
            keyFilename: this.KEY_FILE_NAME
        })
        const [buffer] = await storage.bucket(this.BUCKET_NAME).file('sureties/' + suretyNodeId).download()
        return buffer
    }

    async uploadFile(file: Buffer, fileName: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const storage = new Storage({
                keyFilename: this.KEY_FILE_NAME
            })
    
            const bucket = storage.bucket(this.BUCKET_NAME)
            const blob = bucket.file('sureties/' + fileName)
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
        surety: CreateSuretyNodeDto,
        suretyId: string,
        auth: Auth
    ): Promise<ReadSuretyNodeDto> {
        const createdSuretyNode = new this.suretyNodeModel({
            ...surety,
            suretyId,
            userId: auth.userId
        })
        const savedSuretyNode = await createdSuretyNode.save()
        return plainToInstance(ReadSuretyNodeDto, savedSuretyNode.toObject())
    }

    async delete(suretyNodeId: string) {
        await this.suretyNodeModel.deleteOne({ _id: suretyNodeId })
    }

    async deleteFile(suretyNodeId: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const storage = new Storage({
                keyFilename: this.KEY_FILE_NAME
            })
            const bucket = storage.bucket(this.BUCKET_NAME)
            const [files] = await bucket.getFiles({ prefix: 'sureties' })
            files.forEach(e => {
                if (e.name.includes(suretyNodeId)) {
                    e.delete()
                }
            })
            resolve()
        })
    }

}
