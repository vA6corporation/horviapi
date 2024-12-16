import { Controller, Delete, Get, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { TenderNodesService } from './tender-nodes.service';
import { Response } from 'express'
import { Readable } from 'stream';
import { ReadTenderNodeDto } from './dto/read-tender-node.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { CreateTenderNodeDto } from './dto/create-tender-node.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tenderNodes')
export class TenderNodesController {

    constructor(
        private readonly tenderNodesService: TenderNodesService,
    ) { }

    @Get('files/:tenderNodeId')
    async getFileByTenderNodeId(
        @Param('tenderNodeId') tenderNodeId: string,
        @Res() res: Response,
    ): Promise<void> {
        const foundTenderNode = await this.tenderNodesService.getTenderNodeById(tenderNodeId)
        const buffer = await this.tenderNodesService.getFileByTenderNodeId(tenderNodeId)
        if (buffer) {
            const stream = Readable.from(buffer)
            res.writeHead(200, {
                "Content-Disposition": "attachment;",
                'Content-Type': foundTenderNode.mimeType,
            })
            stream.pipe(res)
        } else {
            res.end()
        }
    }

    @Get('byTender/:fileType/:tenderId')
    async getTenderNodesByTender(
        @Param('fileType') fileType: string,
        @Param('tenderId') tenderId: string,
    ): Promise<ReadTenderNodeDto[]> {
        return await this.tenderNodesService.getTenderNodesByTender(fileType, tenderId)
    }

    @Post('upload/:fileType/:tenderId')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @Param('tenderId') tenderId: string,
        @Param('fileType') fileType: string,
        @UploadedFile() file: Express.Multer.File,
        @AuthUser() auth: Auth,
    ) {
        const createdTenderNode: CreateTenderNodeDto = {
            name: file.originalname,
            mimeType: file.mimetype,
            fileType,
            size: file.size
        }
        const savedTenderNode = await this.tenderNodesService.create(createdTenderNode, tenderId, auth)
        await this.tenderNodesService.uploadFile(file.buffer, savedTenderNode._id)
    }

    @Delete(':tenderNodeId')
    async delete(
        @Param('tenderNodeId') tenderNodeId: string,
    ): Promise<void> {
        await this.tenderNodesService.delete(tenderNodeId)
        await this.tenderNodesService.deleteFile(tenderNodeId)
    }

}
