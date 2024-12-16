import { Controller, Delete, Get, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { OperationSuretyNodesService } from './operation-surety-nodes.service';
import { CreateOperationSuretyNodeDto } from './dto/create-operation-surety-node.dto';
import { ReadOperationSuretyNodeDto } from './dto/read-operation-surety-node.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthUser } from 'src/auth/auth.decorator';
import { Auth } from 'src/auth/auth.interface';
import { Readable } from 'stream';
import { Response } from 'express'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('operationSuretyNodes')
export class OperationSuretyNodesController {

    constructor(
        private readonly operationSuretyNodesService: OperationSuretyNodesService,
    ) { }

    @Get('files/:operationSuretyNodeId')
    async getFileByOperationSuretyNodeId(
        @Param('operationSuretyNodeId') operationSuretyNodeId: string,
        @Res() res: Response,
    ): Promise<void> {
        const foundOperationSuretyNode = await this.operationSuretyNodesService.getOperationSuretyNodeById(operationSuretyNodeId)
        const buffer = await this.operationSuretyNodesService.getFileByOperationSuretyNodeId(operationSuretyNodeId)
        if (buffer) {
            const stream = Readable.from(buffer)
            res.writeHead(200, {
                "Content-Disposition": "attachment;",
                'Content-Type': foundOperationSuretyNode.mimeType,
            })
            stream.pipe(res)
        } else {
            res.end()
        }
    }

    @Get('byOperationSurety/:operationSuretyId')
    async getOperationSuretyNodesByOperationSurety(
        @Param('operationSuretyId') operationSuretyId: string,
    ): Promise<ReadOperationSuretyNodeDto[]> {
        return await this.operationSuretyNodesService.getOperationSuretyNodesByOperationSurety(operationSuretyId)
    }

    @Post('upload/:fileType/:operationSuretyId')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @Param('operationSuretyId') operationSuretyId: string,
        @Param('fileType') fileType: string,
        @UploadedFile() file: Express.Multer.File,
        @AuthUser() auth: Auth,
    ): Promise<ReadOperationSuretyNodeDto> {
        const createdOperationSuretyNode: CreateOperationSuretyNodeDto = {
            name: file.originalname,
            mimeType: file.mimetype,
            fileType,
            size: file.size
        }
        const savedOperationSuretyNode = await this.operationSuretyNodesService.create(createdOperationSuretyNode, operationSuretyId, auth)
        await this.operationSuretyNodesService.uploadFile(file.buffer, savedOperationSuretyNode._id)
        return savedOperationSuretyNode
    }

    @Delete(':operationSuretyNodeId')
    async delete(
        @Param('operationSuretyNodeId') operationSuretyNodeId: string,
    ): Promise<void> {
        await this.operationSuretyNodesService.delete(operationSuretyNodeId)
        await this.operationSuretyNodesService.deleteFile(operationSuretyNodeId)
    }

}