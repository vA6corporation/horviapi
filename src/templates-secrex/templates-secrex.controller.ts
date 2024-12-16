import { Controller, Get, Header, HttpException, HttpStatus, Param, Res } from '@nestjs/common';
import { Packer } from 'docx';
import { Response } from 'express';
import * as JSZip from 'jszip';
import { BusinessesService } from 'src/businesses/businesses.service';
import { TemplatesService } from 'src/templates/templates.service';
import { Readable } from 'stream';
import { AffidavidOfAssets } from './affidavit-of-assets';
import { AffidavitOfOriginOfFunds } from './affidavit-of-origin-of-funds';
import { BasicConfidentialInformation } from './basic-confidential-information';
import { BasicConfidentialInformationBusiness } from './basic-confidential-information-business';
import { ConsortioConsolidatedInformation } from './consortium-consolidated-information';
import { PatrimonialRelationshipOfNaturalPerson } from './patrimonial-relationship-of-natural-person';
import { SpecificExperienceOfEachConsorciate } from './specific-experience-of-each-consorciate';
import { SpecificExperienceOfEachConsorciateCompleted } from './specific-experience-of-each-consorciate-completed';
import { SuretyInsuranceSolution } from './surety-insurance-solution';
import { PartnershipsService } from 'src/partnerships/partnerships.service';

@Controller('templatesSecrex')
export class TemplatesSecrexController {

    constructor(
        private readonly templatesService: TemplatesService,
        private readonly businessesService: BusinessesService,
        private readonly partnershipsService: PartnershipsService,
    ) { }

    @Get('basicConfidentialInformation/:templateId')
    @Header("Content-Disposition", "attachment;filename=INFORMACION_CONFIDENCIAL_BASICA.zip")
    async buildDocumentOne(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const foundTemplate = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()

            if (foundTemplate.partnership) {
                const partnershipItems = foundTemplate.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const document = new BasicConfidentialInformation(partnershipItem.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(`${partnershipItem.business.name.replace(/ /g, '_')}.docx`, buffer)
                }
            } else {
                const document = new BasicConfidentialInformation(foundTemplate.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${foundTemplate.business.name.replace(/ /g, '_')}.docx`, buffer)
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

    @Get('basicConfidentialInformationBusiness/:templateId')
    @Header("Content-Disposition", "attachment;filename=INFORMACION_CONSOLIDADA_EMPRESA_CONSORCIADA.zip")
    async buildDocumentOneExtra(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const foundTemplate = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()

            if (foundTemplate.partnership) {
                const partnershipItems = foundTemplate.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const document = new BasicConfidentialInformationBusiness(partnershipItem.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(`${partnershipItem.business.name.replace(/ /g, '_')}.docx`, buffer)
                }
            } else {
                const document = new BasicConfidentialInformationBusiness(foundTemplate.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${foundTemplate.business.name.replace(/ /g, '_')}.docx`, buffer)
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

    @Get('suretyInsuranceSolution/:templateId')
    @Header("Content-Disposition", "attachment;filename=SOLICITUD_DE_SEGURO_DE_CAUCION.zip")
    async buildDocumentTwo(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const foundTemplate = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()

            for (const guarantee of foundTemplate.guaranties) {
                const document = new SuretyInsuranceSolution(foundTemplate, guarantee)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${guarantee.guaranteeLabel.replace(/ /g, '_')}_${foundTemplate.business.name.replace(/ /g, '_')}.docx`, buffer)
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

    @Get('affidavidOfAssets/:templateId')
    @Header("Content-Disposition", "attachment;filename=DECLARACION_JURADA_DE_BIENES.zip")
    async buildFour(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const foundTemplate = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if (foundTemplate.partnership) {
                const partnershipItems = foundTemplate.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const document = new AffidavidOfAssets(partnershipItem.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(`${partnershipItem.business.name.replace(/ /g, '_')}.docx`, buffer)
                }
            } else {
                const document = new AffidavidOfAssets(foundTemplate.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${foundTemplate.business.name.replace(/ /g, '_')}.docx`, buffer)
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

    @Get('affidavitOfOriginOfFunds/:templateId')
    @Header("Content-Disposition", "attachment;filename=DECLARACION_JURADA_DE_ORIGEN_DE_FONDOS.zip")
    async buildDocumentFive(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const foundTemplate = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            if (foundTemplate.partnership) {
                const partnershipItems = foundTemplate.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const document = new AffidavitOfOriginOfFunds(partnershipItem.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(`${partnershipItem.business.name.replace(/ /g, '_')}.docx`, buffer)
                }
            } else {
                const document = new AffidavitOfOriginOfFunds(foundTemplate.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${foundTemplate.business.name.replace(/ /g, '_')}.docx`, buffer)
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

    @Get('specificExperienceOfEachConsorciate/:templateId')
    @Header("Content-Disposition", "attachment;filename=RELACION_DE_OBRAS_EN_EJECUCION_A_LA_FECHA.zip")
    async buildDocumentSeven(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const foundTemplate = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()
            
            if (foundTemplate.partnership) {
                const partnershipItems = foundTemplate.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const document = new SpecificExperienceOfEachConsorciate(partnershipItem.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(`${partnershipItem.business.name.replace(/ /g, '_')}.docx`, buffer)
                }
            } else {
                const document = new SpecificExperienceOfEachConsorciate(foundTemplate.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${foundTemplate.business.name.replace(/ /g, '_')}.docx`, buffer)
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

    @Get('specificExperienceOfEachConsorciateCompleted/:templateId')
    @Header("Content-Disposition", "attachment;filename=EXPERIENCIA_ESPECIFICA_DE_CADA_CONSORCIADO_EN_OBRAS.zip")
    async buildDocumentSix(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const foundTemplate = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()

            if (foundTemplate.partnership) {
                const partnershipItems = foundTemplate.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const document = new SpecificExperienceOfEachConsorciateCompleted(partnershipItem.business)
                    const buffer = await Packer.toBuffer(await document.create())
                    zip.file(`${partnershipItem.business.name.replace(/ /g, '_')}.docx`, buffer)
                }
            } else {
                const document = new SpecificExperienceOfEachConsorciateCompleted(foundTemplate.business)
                const buffer = await Packer.toBuffer(await document.create())
                zip.file(`${foundTemplate.business.name.replace(/ /g, '_')}.docx`, buffer)
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

    @Get('patrimonialRelationshipOfNaturalPerson/:templateId')
    @Header("Content-Disposition", "attachment;filename=RELACION_PATRIMONIAL_DE_PERSONA_NATURAL.zip")
    async buildDocumentEight(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const foundTemplate = await this.templatesService.getTemplateById(templateId)
            const zip = new JSZip()

            if (foundTemplate.partnership) {
                const partnershipItems = foundTemplate.partnership.partnershipItems
                for (const partnershipItem of partnershipItems) {
                    const shareholders = partnershipItem.business.shareholders || []
                    for (const shareholder of shareholders) {
                        const document = new PatrimonialRelationshipOfNaturalPerson(shareholder)
                        const buffer = await Packer.toBuffer(document.create())
                        zip.file(`${shareholder.name.replace(/ /g, '_')}.docx`, buffer)
                    }
                }
            } else {
                for (const shareholder of foundTemplate.business.shareholders) {
                    const document = new PatrimonialRelationshipOfNaturalPerson(shareholder)
                    const buffer = await Packer.toBuffer(document.create())
                    zip.file(`${shareholder.name.replace(/ /g, '_')}.docx`, buffer)
                }
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

    @Get('consortiunConsolidatedInformation/:templateId')
    @Header("Content-Disposition", "attachment;filename=INFORMACION_CONSOLIDADA_CONSORCIO.docx")
    async buildThree(
        @Param('templateId') templateId: string,
        @Res() res: Response,
    ) {
        try {
            const foundTemplate = await this.templatesService.getTemplateById(templateId)
            if (foundTemplate.partnershipId) {
                const foundPartnership = await this.partnershipsService.getPartnershipById(foundTemplate.partnershipId)
                const business = await this.businessesService.getBusinessById(foundTemplate.businessId)
                const document = new ConsortioConsolidatedInformation(foundPartnership, business)
                Packer.toBuffer(document.create()).then((buffer) => {
                    const stream = Readable.from(buffer)
                    stream.pipe(res)
                })
            } else {
                res.end()
            }
        } catch (error) {
            if (error instanceof Error) {
                throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
            } else {
                throw new HttpException('Error desconocido', HttpStatus.BAD_REQUEST)
            }
        }
    }

}
