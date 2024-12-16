import { Controller, Delete, Get, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ReadInsuranceNodeDto } from './dto/read-insurance-node.dto';
import { InsuranceNodesService } from './insurance-nodes.service';
import { CreateInsuranceNodeDto } from './dto/create-insurance-node.dto';
import { Response } from 'express';
import { Readable } from 'stream';

@UseGuards(JwtAuthGuard)
@Controller('insuranceNodes')
export class InsuranceNodesController {

    constructor(
        private readonly insuranceNodesService: InsuranceNodesService,
    ) { }

    @Get('files/:insuranceNodeId')
    async getFileByInsuranceNodeId(
        @Param('insuranceNodeId') insuranceNodeId: string,
        @Res() res: Response,
    ): Promise<void> {
        const foundInsuranceNode = await this.insuranceNodesService.getInsuranceNodeById(insuranceNodeId)
        const buffer = await this.insuranceNodesService.getFileByInsuranceNodeId(insuranceNodeId)
        if (buffer) {
            const stream = Readable.from(buffer)
            res.writeHead(200, {
                "Content-Disposition": "attachment;",
                'Content-Type': foundInsuranceNode.mimeType,
            })
            stream.pipe(res)
        } else {
            res.end()
        }
    }

    @Get('byInsurance/:fileType/:insuranceId')
    async getInsuranceNodesByInsurance(
        @Param('fileType') fileType: string,
        @Param('insuranceId') insuranceId: string,
    ): Promise<ReadInsuranceNodeDto[]> {
        return await this.insuranceNodesService.getInsuranceNodesByInsurance(fileType, insuranceId)
    }

    @Post('upload/:fileType/:insuranceId')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @Param('insuranceId') insuranceId: string,
        @Param('fileType') fileType: string,
        @UploadedFile() file: Express.Multer.File,
        @AuthUser() auth: Auth,
    ) {
        const createdInsuranceNode: CreateInsuranceNodeDto = {
            name: file.originalname,
            mimeType: file.mimetype,
            fileType,
            size: file.size
        }
        const savedInsuranceNode = await this.insuranceNodesService.create(createdInsuranceNode, insuranceId, auth)
        await this.insuranceNodesService.uploadFile(file.buffer, savedInsuranceNode._id)
    }

    @Delete(':insuranceNodeId')
    async delete(
        @Param('insuranceNodeId') insuranceNodeId: string,
    ): Promise<void> {
        await this.insuranceNodesService.delete(insuranceNodeId)
        await this.insuranceNodesService.deleteFile(insuranceNodeId)
    }

}
