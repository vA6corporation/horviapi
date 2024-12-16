import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, AlignmentType } from 'docx';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';

export class Table2 {

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
                                            text: 'Nombre de la entidad Licitante o Beneficiario',
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
                                            text: this.template.beneficiary.name.toUpperCase(),
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
                                            text: 'Dirección completa',
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
                                            text: this.template.beneficiary.address.toUpperCase(),
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
                                            text: this.template.beneficiary.document,
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
                                            text: 'Teléfono',
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
                                            text: this.template.beneficiary.mobileNumber,
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
                                            text: 'Nombre del funcionario de contacto',
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
                                            text: ``,
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
                                            text: 'E-mail',
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
                                            text: this.template.beneficiary.email.toUpperCase(),
                                            style: 'contentTable',
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
