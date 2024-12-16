import { Controller, Get, Header, HttpException, HttpStatus, Param, Res } from '@nestjs/common';
import { Packer } from 'docx';
import { Readable } from 'stream';
import { LetterInstructions } from './template1';
import { AddendumGeneralConditions } from './template2';
import { SwornStatementObligedSubjects } from './template3';
import { WillPay } from './template4';
import { SuretyFinanceUnit } from './template5';
import { WarrantyRequest } from './template6';
import { LegalEntityClientFile } from './template7';
import { LegalClientProfile } from './template8';
import { BacklogWorks } from './template9';
import { Response } from 'express';
import { TemplatesService } from 'src/templates/templates.service';
import * as JSZip from 'jszip';

@Controller('templatesMapfre')
export class TemplatesMapfreController {

    constructor(
        private readonly templatesService: TemplatesService
    ) { }
    
    @Get('letterInstructions/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=CARTA_DE_INSTRUCCIONES_PERSONA_JURIDICA.zip',
    )
    async buildDocumentOne(
        @Param('templateId') templateId: string, 
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if ( template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new LetterInstructions(element.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new LetterInstructions(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                    buffer,
                )
            }
            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then((buf) => {
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

    @Get('addendumGeneralConditions/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=ADDENDUM_A_LAS_CONDICIONES_GENERALES.zip',
    )
    async buildDocumentTwo(
        @Param('templateId') templateId: string, 
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if ( template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new AddendumGeneralConditions(element.business)
                    const buffer = await Packer.toBuffer(document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new AddendumGeneralConditions(template.business)
                const buffer = await Packer.toBuffer(document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                    buffer,
                )
            }
            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then((buf) => {
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

    @Get('swornStatementObligedSubjects/:templateId')
    @Header('Content-Disposition', 'attachment;filename=DECLARACION_JURADA_DE_SUJETOS_OBLIGADOS.zip')
    async buildDocumentThree(
        @Param('templateId') templateId: string,
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()

            if ( template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new SwornStatementObligedSubjects(element.business)
                    const buffer = await Packer.toBuffer(document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new SwornStatementObligedSubjects(template.business)
                const buffer = await Packer.toBuffer(document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                    buffer,
                )
            }
            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then((buf) => {
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

    @Get('willPay/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=PAGARE.zip',
    )
    async buildDocumentFor(
        @Param('templateId') templateId: string, 
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if ( template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new WillPay(element.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new WillPay(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                    buffer,
                )
            }
            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then((buf) => {
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

    @Get('suretyFinanceUnit/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=UNIDAD_DE_CAUCIONES_Y_FIANZAS.zip',
    )
    async buildDocumentFive(
        @Param('templateId') templateId: string, 
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if ( template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new SuretyFinanceUnit(element.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new SuretyFinanceUnit(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                    buffer,
                )
            }
            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then((buf) => {
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

    @Get('warrantyRequest/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=SOLICITUD_DE_GARANTIA.docx',
    )
    async buildDocumentSix(
        @Param('templateId') templateId: string, 
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            if ( template.partnership) {
                const document = new WarrantyRequest(template.business, template, true)
                Packer.toBuffer(await document.create()).then((buffer) => {
                    const stream = Readable.from(buffer)
                    stream.pipe(res)
                })
            } else {
                const document = new WarrantyRequest(template.business, template, false)
                Packer.toBuffer(await document.create()).then((buffer) => {
                    const stream = Readable.from(buffer)
                    stream.pipe(res)
                })
            }
        } catch (error) {
            console.log(error)
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

    @Get('legalEntityClientFile/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=FICHA_CLIENTE_PERSONA_JURIDICA.zip',
    )
    async buildDocumentSeven(
        @Param('templateId') templateId: string, 
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if ( template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new LegalEntityClientFile(element.business)
                    const buffer = await Packer.toBuffer(document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new LegalEntityClientFile(template.business)
                const buffer = await Packer.toBuffer(document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                    buffer,
                )
            }
            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then((buf) => {
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

    @Get('legalClientProfile/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=PERFIL_CLIENTE_PJURIDICA.zip',
    )
    async buildDocumentEight(
        @Param('templateId') templateId: string, 
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if ( template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new LegalClientProfile(element.business)
                    const buffer = await Packer.toBuffer(document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new LegalClientProfile(template.business)
                const buffer = await Packer.toBuffer(document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                    buffer,
                )
            }
            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then((buf) => {
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

    @Get('backlogWorks/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=BACKLOG_DE_OBRAS.zip',
    )
    async buildDocumentNine(
        @Param('templateId') templateId: string, 
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if ( template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new BacklogWorks(element.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new BacklogWorks(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-MAPFRE.docx`,
                    buffer,
                )
            }
            zip.generateAsync({
                type: 'nodebuffer',
                mimeType: 'application/epub+zip',
                compression: 'DEFLATE',
                compressionOptions: { level: 9 },
            }).then((buf) => {
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
}
