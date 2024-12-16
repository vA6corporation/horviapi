import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, TextRun } from 'docx';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';

export class Table1 {

    constructor(
        private readonly template: ReadTemplateDto
    ) { }

    create(): Table {
        const marginsCells = {
            left: 100,
            right: 100,
        }

        const spacingPha = {
            after: 70,
        }

        let name = this. template.partnership ? this. template.partnership.name : this.template.business.name
        let address = this. template.partnership ? this. template.partnership.address : this.template.business.addressOrigin
        let representativeName = this. template.partnership ? this. template.partnership.representativeName : this.template.business.representativeName
        let document = this. template.partnership ? this. template.partnership.document : this.template.business.document
        let mobileNumber = this. template.partnership ? this. template.partnership.mobileNumber : this.template.business.mobileNumber
        let email = this.template.business.email
        let nameBusiness = this.template.business.name
        let documentBusiness = this.template.business.document

        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            alignment: AlignmentType.RIGHT,
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Nombre del solicitante:  nombre del Consorcio o Empresa contratante',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 70,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: name?.toUpperCase(),
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Domicilio Legal',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 70,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: address.toUpperCase(),
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Representante legal',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 70,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: representativeName.toUpperCase(),
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'RUC N°',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 70,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: document,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Teléfonos',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 70,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: mobileNumber,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Nombre del Ejecutivo a Tratar y e-mail',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 70,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: email,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Razón Social de empresa a facturar',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 70,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: nameBusiness?.toUpperCase(),
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'RUC N°',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 70,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: documentBusiness,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Afianzado (sea la misma empresa, consorcio o tercero)',
                                            style: 'title',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    }
}
