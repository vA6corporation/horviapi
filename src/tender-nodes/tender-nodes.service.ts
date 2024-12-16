import { Storage } from '@google-cloud/storage';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { Model } from 'mongoose';
import * as path from 'path';
import { TenderNode, TenderNodeDocument } from 'src/schemas/tender-node.schema';
import { ReadTenderNodeDto } from './dto/read-tender-node.dto';
import { CreateTenderNodeDto } from './dto/create-tender-node.dto';
import { Auth } from 'src/auth/auth.interface';

@Injectable()
export class TenderNodesService {

    constructor(
        @InjectModel(TenderNode.name)
        private readonly tenderNodeModel: Model<TenderNodeDocument>,
    ) { }

    private BUCKET_NAME = process.env.BUCKET_NAME || ''
    private KEY_FILE_NAME = path.join(__dirname, '../../' + process.env.KEY_FILE_NAME)

    async getTenderNodeById(tenderNodeId: string): Promise<ReadTenderNodeDto> {
        const foundTenderNode = await this.tenderNodeModel.findOne({ _id: tenderNodeId })
        if (foundTenderNode) {
            return plainToInstance(ReadTenderNodeDto, foundTenderNode.toObject())
        } else {
            throw new Error("Sin resultados")   
        }
    }

    async getTenderNodesByTender(
        fileType: string,
        tenderId: string
    ): Promise<ReadTenderNodeDto[]> {
        const foundTenderNodes = await this.tenderNodeModel.find({ fileType, tenderId })
        return plainToInstance(ReadTenderNodeDto, foundTenderNodes.map(e => e.toObject()))
    }

    async getFileByTenderNodeId(tenderNodeId: string): Promise<Buffer | null> {
        const storage = new Storage({
            keyFilename: this.KEY_FILE_NAME
        })
        const [buffer] = await storage.bucket(this.BUCKET_NAME).file('tenders/' + tenderNodeId).download()
        return buffer
    }

    async uploadFile(file: Buffer, fileName: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const storage = new Storage({
                keyFilename: this.KEY_FILE_NAME
            })
    
            const bucket = storage.bucket(this.BUCKET_NAME)
            const blob = bucket.file('tenders/' + fileName)
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
        tender: CreateTenderNodeDto,
        tenderId: string,
        auth: Auth
    ): Promise<ReadTenderNodeDto> {
        const createdTenderNode = new this.tenderNodeModel({
            ...tender,
            tenderId,
            userId: auth.userId
        })
        const savedTenderNode = await createdTenderNode.save()
        return plainToInstance(ReadTenderNodeDto, savedTenderNode.toObject())
    }

    async delete(tenderNodeId: string) {
        await this.tenderNodeModel.deleteOne({ _id: tenderNodeId })
    }

    async deleteFile(tenderNodeId: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const storage = new Storage({
                keyFilename: this.KEY_FILE_NAME
            })
            const bucket = storage.bucket(this.BUCKET_NAME)
            const [files] = await bucket.getFiles({ prefix: 'tenders' })
            files.forEach(e => {
                if (e.name.includes(tenderNodeId)) {
                    e.delete()
                }
            })
            resolve()
        })
    }

}
