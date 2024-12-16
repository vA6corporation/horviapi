import { Controller, Get, Header, HttpException, HttpStatus, Param, Res } from '@nestjs/common';
import { TemplatesService } from 'src/templates/templates.service';
import * as JSZip from 'jszip';
import { SwornDeclaration } from './template1';
import { Packer } from 'docx';
import { Readable } from 'stream';
import { Response } from 'express';
import { StatePatrimonialSituation } from './template2';
import { CustomerCardPjGuarantee } from './template3';
import { SuretyInsurance } from './template4';
import { TableOfCautions } from './template5';
import { SimilarServiceSupply } from './template6';

@Controller('templatesInsur')
export class TemplatesInsurController {

    constructor(
        private readonly templatesService: TemplatesService
    ) { }

    @Get('swornDeclaration/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=DJ_CONTAR_CON_OF_CUMPLIMIENTO.zip',
    )
    async buildDocumentOne(
        @Param('templateId') templateId: string,
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if (template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new SwornDeclaration(element.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-INSUR.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new SwornDeclaration(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-INSUR.docx`,
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

    @Get('statePatrimonialSituation/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=ESTADO_DE_SITUACION_PATRIMONIAL.zip',
    )
    async buildDocumentTwo(
        @Param('templateId') templateId: string,
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if (template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new StatePatrimonialSituation(element.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-INSUR.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new StatePatrimonialSituation(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-INSUR.docx`,
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

    @Get('customerCardPjGuarantee/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=FICHA_CLIENTE_ PJ_CAUCION.zip',
    )
    async buildDocumentThree(
        @Param('templateId') templateId: string,
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if (template.partnership) {
                const document = new CustomerCardPjGuarantee(template.partnership, template.business)
                const buffer = await Packer.toBuffer(document.create())
                zip.file(
                    `${template.partnership.name.replace(/ /g, '_')}-INSUR.docx`,
                    buffer,
                )
                for (const element of template.partnership.partnershipItems) {
                    const document = new CustomerCardPjGuarantee(template.partnership, element.business)
                    const buffer = await Packer.toBuffer(document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-INSUR.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new CustomerCardPjGuarantee(template.partnership, template.business)
                const buffer = await Packer.toBuffer(document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-INSUR.docx`,
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

    @Get('suretyInsurance/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=SOLICITUD_SEGURO_DE_CAUCION.zip',
    )
    async buildDocumentFor(
        @Param('templateId') templateId: string, 
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            template.guaranties
            const zip = new JSZip()
            for (const guarantiesItem of template.guaranties) {
                var document = new SuretyInsurance(guarantiesItem, template)
                var buffer = await Packer.toBuffer(document.create())
                zip.file(
                    `${guarantiesItem.guaranteeType.replace(/ /g, '_')}-INSUR.docx`,
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

    @Get('tableOfCautions/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=CUADRO_DE_CAUCIONES.zip',
    )
    async buildDocumentFive(
        @Param('templateId') templateId: string, 
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if (template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new TableOfCautions(element.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(
                        `${element.business.name.replace(/ /g, '_')}-INSUR.docx`,
                        buffer,
                    )
                }
            } else {
                const document = new TableOfCautions(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(
                    `${template.business.name.replace(/ /g, '_')}-INSUR.docx`,
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

    @Get('similarServiceSupply/:templateId')
    @Header(
        'Content-Disposition',
        'attachment;filename=EXPERIENCIA_ESPECIFICA_DE_LA_EMPRESA_EN_CONTRATOS_DE_OBRA_SERVICIO_O_SUMINISTRO_SIMILARES.zip',
    )
    async buildDocumentSix(
        @Param('templateId') templateId: string,
        @Res() res: Response
    ) {
        try {
            const template = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if (template.partnership) {
                for (const element of template.partnership.partnershipItems) {
                    const document = new SimilarServiceSupply(element.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(`${element.business.name.replace(/ /g, '_')}-INSUR.docx`, buffer)
                }
            } else {
                const document = new SimilarServiceSupply(template.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${template.business.name.replace(/ /g, '_')}-INSUR.docx`, buffer)
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
