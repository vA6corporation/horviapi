import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as path from 'path';
import { plainToInstance } from 'class-transformer';
import { Storage } from '@google-cloud/storage';
import { Auth } from 'src/auth/auth.interface';
import { SeaceNode, SeaceNodeDocument } from 'src/schemas/seace-node.schema';
import { ReadSeaceNodeDto } from './dto/read-seace-node.dto';
import { CreateSeaceNodeDto } from './dto/create-seace-node.dto';

@Injectable()
export class SeaceNodesService {

    constructor(
        @InjectModel(SeaceNode.name)
        private readonly seaceNodeModel: Model<SeaceNodeDocument>,
    ) { }

    private BUCKET_NAME = process.env.BUCKET_NAME || ''
    private KEY_FILE_NAME = path.join(__dirname, '../../' + process.env.KEY_FILE_NAME)

    async getSeaceNodeById(seaceNodeId: string): Promise<ReadSeaceNodeDto> {
        const foundSeaceNode = await this.seaceNodeModel.findOne({ _id: seaceNodeId })
        if (foundSeaceNode) {
            return plainToInstance(ReadSeaceNodeDto, foundSeaceNode.toObject())
        } else {
            throw new Error("Sin resultados")
        }
    }

    async getSeaceNodesBySeace(
        seaceId: string
    ): Promise<ReadSeaceNodeDto[]> {
        const foundSeaceNodes = await this.seaceNodeModel.find({ seaceId })
        return plainToInstance(ReadSeaceNodeDto, foundSeaceNodes.map(e => e.toObject()))
    }

    async getFileBySeaceNodeId(seaceNodeId: string): Promise<Buffer | null> {
        const storage = new Storage({
            keyFilename: this.KEY_FILE_NAME
        })
        const [buffer] = await storage.bucket(this.BUCKET_NAME).file('seaces/' + seaceNodeId).download()
        return buffer
    }

    async uploadFile(file: Buffer, fileName: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const storage = new Storage({
                keyFilename: this.KEY_FILE_NAME
            })
    
            const bucket = storage.bucket(this.BUCKET_NAME)
            const blob = bucket.file('seaces/' + fileName)
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
        seace: CreateSeaceNodeDto,
        seaceId: string,
        auth: Auth
    ): Promise<ReadSeaceNodeDto> {
        const createdSeaceNode = new this.seaceNodeModel({
            ...seace,
            seaceId,
            userId: auth.userId
        })
        const savedSeaceNode = await createdSeaceNode.save()
        return plainToInstance(ReadSeaceNodeDto, savedSeaceNode.toObject())
    }

    async delete(seaceNodeId: string) {
        await this.seaceNodeModel.deleteOne({ _id: seaceNodeId })
    }

    async deleteFile(seaceNodeId: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const storage = new Storage({
                keyFilename: this.KEY_FILE_NAME
            })
            const bucket = storage.bucket(this.BUCKET_NAME)
            const [files] = await bucket.getFiles({ prefix: 'seaces' })
            files.forEach(e => {
                if (e.name.includes(seaceNodeId)) {
                    e.delete()
                }
            })
            resolve()
        })
    }

}
