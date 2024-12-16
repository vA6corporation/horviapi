import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, TextRun, VerticalAlign, HeightRule } from 'docx';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';

export class Table3 {

    constructor(
        private readonly template: ReadTemplateDto
    ) { }

    height = {
        value: 500,
        rule: HeightRule.EXACT,
    }

    create(): Table {
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    height: this.height,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 26,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `NOMBRE / RAZÓN SOCIAL`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            width: {
                                size: 74,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.template.beneficiary?.name?.toUpperCase()}`,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: this.height,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 26,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `RUC / DNI `,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            width: {
                                size: 74,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.template.beneficiary?.document}`,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: this.height,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 26,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `DIRECCIÓN `,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            width: {
                                size: 74,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.template.beneficiary.address !== null ? this.template.beneficiary.address.toUpperCase() : ''}`,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: this.height,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 26,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `TELÉFONO `,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 42,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.template.beneficiary?.phoneNumber != null ? this.template.beneficiary.phoneNumber : ''}`,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 22,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: this.height,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 26,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `REPRESENTANTE LEGAL `,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 42,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.template.beneficiary?.legalRepresentative != null ? this.template.beneficiary?.legalRepresentative?.toUpperCase() : ''}`,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 22,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: this.height,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 26,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `PERSONA DE CONTACTO `,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 42,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.template.beneficiary?.contactPerson != null ? this.template.beneficiary?.contactPerson?.toUpperCase() : ''}`,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `CARGO`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 22,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.template.beneficiary?.positioncontactPerson != null ? this.template.beneficiary?.positioncontactPerson?.toUpperCase() : ''}`,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: this.height,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 26,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `E-MAIL `,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            width: {
                                size: 74,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.template.beneficiary.email !== null ? this.template.beneficiary.email.toUpperCase() : ''}`,
                                            style: 'content',
                                        }),
                                    ],

                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: this.height,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 26,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `ACTIVIDAD ECONÓMICA `,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            width: {
                                size: 74,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
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
