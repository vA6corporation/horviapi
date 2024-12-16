import { Controller, Delete, Get, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { SeaceNodesService } from './seace-nodes.service';
import { Response } from 'express';
import { Readable } from 'stream';
import { ReadSeaceNodeDto } from './dto/read-seace-node.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { CreateSeaceNodeDto } from './dto/create-seace-node.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('seaceNodes')
export class SeaceNodesController {

    constructor(
        private readonly seaceNodesService: SeaceNodesService,
    ) { }

    @Get('files/:seaceNodeId')
    async getFileBySeaceNodeId(
        @Param('seaceNodeId') seaceNodeId: string,
        @Res() res: Response,
    ): Promise<void> {
        const foundSeaceNode = await this.seaceNodesService.getSeaceNodeById(seaceNodeId)
        const buffer = await this.seaceNodesService.getFileBySeaceNodeId(seaceNodeId)
        if (buffer) {
            const stream = Readable.from(buffer)
            res.writeHead(200, {
                "Content-Disposition": "attachment;",
                'Content-Type': foundSeaceNode.mimeType,
            })
            stream.pipe(res)
        } else {
            res.end()
        }
    }

    @Get('bySeace/:seaceId')
    async getSeaceNodesBySeace(
        @Param('seaceId') seaceId: string,
    ): Promise<ReadSeaceNodeDto[]> {
        return await this.seaceNodesService.getSeaceNodesBySeace(seaceId)
    }

    @Post('upload/:fileType/:seaceId')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @Param('seaceId') seaceId: string,
        @Param('fileType') fileType: string,
        @UploadedFile() file: Express.Multer.File,
        @AuthUser() auth: Auth,
    ): Promise<ReadSeaceNodeDto> {
        const createdSeaceNode: CreateSeaceNodeDto = {
            name: file.originalname,
            mimeType: file.mimetype,
            fileType,
            size: file.size
        }
        const savedSeaceNode = await this.seaceNodesService.create(createdSeaceNode, seaceId, auth)
        await this.seaceNodesService.uploadFile(file.buffer, savedSeaceNode._id)
        return savedSeaceNode
    }

    @Delete(':seaceNodeId')
    async delete(
        @Param('seaceNodeId') seaceNodeId: string,
    ): Promise<void> {
        await this.seaceNodesService.delete(seaceNodeId)
        await this.seaceNodesService.deleteFile(seaceNodeId)
    }

}
