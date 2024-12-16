import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as path from 'path';
import { InsuranceNode, InsuranceNodeDocument } from 'src/schemas/insurance-node.schema';
import { Storage } from '@google-cloud/storage';
import { ReadInsuranceNodeDto } from './dto/read-insurance-node.dto';
import { plainToInstance } from 'class-transformer';
import { CreateInsuranceNodeDto } from './dto/create-insurance-node.dto';
import { Auth } from 'src/auth/auth.interface';

@Injectable()
export class InsuranceNodesService {

    constructor(
        @InjectModel(InsuranceNode.name)
        private readonly insuranceNodeModel: Model<InsuranceNodeDocument>,
    ) { }

    private BUCKET_NAME = process.env.BUCKET_NAME || ''
    private KEY_FILE_NAME = path.join(__dirname, '../../' + process.env.KEY_FILE_NAME)

    async getInsuranceNodeById(insuranceNodeId: string): Promise<ReadInsuranceNodeDto> {
        const foundInsuranceNode = await this.insuranceNodeModel.findOne({ _id: insuranceNodeId })
        if (foundInsuranceNode) {
            return plainToInstance(ReadInsuranceNodeDto, foundInsuranceNode.toObject())
        } else {
            throw new Error("Sin resultados")   
        }
    }

    async getInsuranceNodesByInsurance(
        fileType: string,
        insuranceId: string
    ): Promise<ReadInsuranceNodeDto[]> {
        const foundInsuranceNodes = await this.insuranceNodeModel.find({ fileType, insuranceId })
        return plainToInstance(ReadInsuranceNodeDto, foundInsuranceNodes.map(e => e.toObject()))
    }

    async getFileByInsuranceNodeId(insuranceNodeId: string): Promise<Buffer | null> {
        const storage = new Storage({
            keyFilename: this.KEY_FILE_NAME
        })
        const [buffer] = await storage.bucket(this.BUCKET_NAME).file('insurances/' + insuranceNodeId).download()
        return buffer
    }

    async uploadFile(file: Buffer, fileName: string): Promise<string> {
        return new Promise((resolve, reject) => {
            const storage = new Storage({
                keyFilename: this.KEY_FILE_NAME
            })
    
            const bucket = storage.bucket(this.BUCKET_NAME)
            const blob = bucket.file('insurances/' + fileName)
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
        insurance: CreateInsuranceNodeDto,
        insuranceId: string,
        auth: Auth
    ): Promise<ReadInsuranceNodeDto> {
        const createdInsuranceNode = new this.insuranceNodeModel({
            ...insurance,
            insuranceId,
            userId: auth.userId
        })
        const savedInsuranceNode = await createdInsuranceNode.save()
        return plainToInstance(ReadInsuranceNodeDto, savedInsuranceNode.toObject())
    }

    async delete(insuranceNodeId: string) {
        await this.insuranceNodeModel.deleteOne({ _id: insuranceNodeId })
    }

    async deleteFile(insuranceNodeId: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            const storage = new Storage({
                keyFilename: this.KEY_FILE_NAME
            })
            const bucket = storage.bucket(this.BUCKET_NAME)
            const [files] = await bucket.getFiles({ prefix: 'insurances' })
            files.forEach(e => {
                if (e.name.includes(insuranceNodeId)) {
                    e.delete()
                }
            })
            resolve()
        })
    }

}
