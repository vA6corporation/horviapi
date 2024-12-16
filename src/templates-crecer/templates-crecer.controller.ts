import { Controller, Get, Header, HttpException, HttpStatus, Param, Res } from '@nestjs/common';
import { Packer } from 'docx';
import { Response } from 'express';
import * as JSZip from 'jszip';
import { Readable } from 'stream';
import { BasicInformation } from './template1';
import { SwornDeclarationOfOriginOfFunds } from './template2';
import { SwornAssetsDeclaration } from './template3';
import { DueDiligenceForm } from './template4';
import { ExperienceOfEachConsortiateInWorks } from './template5';
import { TableOfCurrentDepositsOfEachConsortiate } from './template6';
import { IssueRequest } from './template7';
import { dueDiligenceFormTwo } from './template8';
import { TemplatesService } from 'src/templates/templates.service';

@Controller('templatesCrecer')
export class TemplatesCrecerController {

    constructor(
        private readonly templatesService: TemplatesService
    ) { }

    @Get('basicInformation/:templateId')
    @Header('Content-Disposition', 'attachment;filename=INFORMACION_BASICA.zip')
    async buildDocumentOne(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()

            if ( template.partnership) {
                const partnershipItems = template.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const document = new BasicInformation(partnershipItem.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(`${partnershipItem.business.name.replace(/ /g, '_')}.docx`, buffer)
                }
            } else {
                const document = new BasicInformation(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${template.business.name.replace(/ /g, '_')}.docx`, buffer)
            }

            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then(buf => {
                const stream = Readable.from(buf)
                stream.pipe(res)
            })
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Get('swornDeclarationOfOriginOfFunds/:templateId')
    @Header('Content-Disposition', 'attachment;filename=DECLARACION_JURADA_DE_ORIGEN_DE_FONDOS_PERSONA_JURIDICA.zip')
    async buildDocumentTwo(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()

            if ( template.partnership) {
                const partnershipItems = template.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const document = new SwornDeclarationOfOriginOfFunds(partnershipItem.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(`${partnershipItem.business.name.replace(/ /g, '_')}.docx`, buffer)
                }
            } else {
                const document = new SwornDeclarationOfOriginOfFunds(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${template.business.name.replace(/ /g, '_')}.docx`, buffer)
            }

            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then(buf => {
                const stream = Readable.from(buf)
                stream.pipe(res)
            })
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Get('swornAssetsDeclaration/:templateId')
    @Header('Content-Disposition', 'attachment;filename=DECLARACION_JURADA_PATRIMONIAL.zip')
    async buildDocumentThree(@Param('templateId') templateId: string, @Res() res: Response,) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()

            if ( template.partnership) {
                const partnershipItems = template.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const document = new SwornAssetsDeclaration(partnershipItem.business)
                    const buffer = await Packer.toBuffer(document.create())
                    zip.file(`${partnershipItem.business.name.replace(/ /g, '_')}.docx`, buffer)
                }
            } else {
                const document = new SwornAssetsDeclaration(template.business)
                const buffer = await Packer.toBuffer(document.create())
                zip.file(`${template.business.name.replace(/ /g, '_')}.docx`, buffer)
            }

            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then(buf => {
                const stream = Readable.from(buf)
                stream.pipe(res)
            })
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Get('dueDiligenceForm/:templateId')
    @Header('Content-Disposition', 'attachment;filename=FORMULARIO_DE_DEBIDA_DILIGENCIA.zip')
    async buildDocumentFour(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()

            if ( template.partnership) {
                const partnershipItems = template.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const document = new DueDiligenceForm(partnershipItem.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(`${partnershipItem.business.name.replace(/ /g, '_')}.docx`, buffer)
                }
            } else {
                const document = new DueDiligenceForm(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${template.business.name.replace(/ /g, '_')}.docx`, buffer)
            }

            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then(buf => {
                const stream = Readable.from(buf)
                stream.pipe(res)
            })
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Get('dueDiligenceFormTwo/:templateId')
    @Header('Content-Disposition', 'attachment;filename=FORMULARIO_DE_DEBIDA_DILIGENCIA.zip')
    async buildDocumentFourTwo(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()

            if ( template.partnership) {
                const partnershipItems = template.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const document = new dueDiligenceFormTwo(partnershipItem.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(`${partnershipItem.business.name.replace(/ /g, '_')}.docx`, buffer)
                }
            } else {
                const document = new dueDiligenceFormTwo(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${template.business.name.replace(/ /g, '_')}.docx`, buffer)
            }
            
            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then(buf => {
                const stream = Readable.from(buf)
                stream.pipe(res)
            })
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Get('experienceOfEachConsortiateInWorks/:templateId')
    @Header('Content-Disposition', 'attachment;filename=EXPERIENCIA_DE_CADA_CONSORCIADO_EN_OBRAS.docx')
    async buildDocumentFive(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const document = new ExperienceOfEachConsortiateInWorks(template)
            Packer.toBuffer(await document.create()).then((buffer) => {
                const stream = Readable.from(buffer)
                stream.pipe(res)
            })
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Get('tableOfCurrentDepositsOfEachConsortiate/:templateId')
    @Header('Content-Disposition', 'attachment;filename=CUADRO_DE_FIANZAS_VIGENTES_DE_CADA_CONSORCIADO.docx')
    async buildDocumentSix(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const document = new TableOfCurrentDepositsOfEachConsortiate(template)
            Packer.toBuffer(await document.create()).then((buffer) => {
                const stream = Readable.from(buffer)
                stream.pipe(res)
            })
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Get('issueRequest/:templateId')
    @Header('Content-Disposition', 'attachment;filename=SOLICITUD_DE_EMISION.docx')
    async buildDocumentSeven(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const document = new IssueRequest(template)
            Packer.toBuffer(document.create()).then((buffer) => {
                const stream = Readable.from(buffer)
                stream.pipe(res)
            })
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }
}
