import { Controller, Delete, Get, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { SuretyNodesService } from './surety-nodes.service';
import { Readable } from 'stream';
import { Response } from 'express'
import { ReadSuretyNodeDto } from './dto/read-surety-node.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { CreateSuretyNodeDto } from './dto/create-surety-node.dto';

@UseGuards(JwtAuthGuard)
@Controller('suretyNodes')
export class SuretyNodesController {

    constructor(
        private readonly suretyNodesService: SuretyNodesService,
    ) { }

    @Get('files/:suretyNodeId')
    async getFileBySuretyNodeId(
        @Param('suretyNodeId') suretyNodeId: string,
        @Res() res: Response,
    ): Promise<void> {
        const foundSuretyNode = await this.suretyNodesService.getSuretyNodeById(suretyNodeId)
        const buffer = await this.suretyNodesService.getFileBySuretyNodeId(suretyNodeId)
        if (buffer) {
            const stream = Readable.from(buffer)
            res.writeHead(200, {
                "Content-Disposition": "attachment;",
                'Content-Type': foundSuretyNode.mimeType,
            })
            stream.pipe(res)
        } else {
            res.end()
        }
    }

    @Get('bySurety/:fileType/:suretyId')
    async getSuretyNodesBySurety(
        @Param('fileType') fileType: string,
        @Param('suretyId') suretyId: string,
    ): Promise<ReadSuretyNodeDto[]> {
        return await this.suretyNodesService.getSuretyNodesBySurety(fileType, suretyId)
    }

    @Post('upload/:fileType/:suretyId')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @Param('suretyId') suretyId: string,
        @Param('fileType') fileType: string,
        @UploadedFile() file: Express.Multer.File,
        @AuthUser() auth: Auth,
    ) {
        const createdSuretyNode: CreateSuretyNodeDto = {
            name: file.originalname,
            mimeType: file.mimetype,
            fileType,
            size: file.size
        }
        const savedSuretyNode = await this.suretyNodesService.create(createdSuretyNode, suretyId, auth)
        await this.suretyNodesService.uploadFile(file.buffer, savedSuretyNode._id)
    }

    @Delete(':suretyNodeId')
    async delete(
        @Param('suretyNodeId') suretyNodeId: string,
    ): Promise<void> {
        await this.suretyNodesService.delete(suretyNodeId)
        await this.suretyNodesService.deleteFile(suretyNodeId)
    }

}
