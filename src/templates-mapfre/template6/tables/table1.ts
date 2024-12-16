import { BorderStyle, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { ReadTemplateDto } from "src/templates/dto/read-template.dto";

export class Table1 {

    constructor(
        private readonly business: ReadBusinessDto,
        private readonly template: ReadTemplateDto,
        private readonly itsConsortium: boolean
    ) { }

    create(): Table {
        const borderParagrapg = {
            bottom: {
                space: 1,
                style: BorderStyle.SINGLE,
                size: 1,
                color: 'e7e7e7',
            },
        };

        return new Table({
            borders: {
                insideHorizontal: {
                    style: BorderStyle.NONE
                },
                insideVertical: {
                    style: BorderStyle.NONE
                },
                top: {
                    style: BorderStyle.SINGLE,
                    size: 18,
                    color: 'e40520',
                },
                bottom: {
                    style: BorderStyle.SINGLE,
                    size: 18,
                    color: 'e40520',
                },
                left: {
                    style: BorderStyle.SINGLE,
                    size: 18,
                    color: 'e40520',
                },
                right: {
                    style: BorderStyle.SINGLE,
                    size: 18,
                    color: 'e40520',
                },
            },
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            margins: {
                                top: 100,
                                right: 140,
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: ` SOLICITANTE `,
                                            shading: {
                                                fill: 'e7e7e7',
                                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                                color: '#e7e7e7',
                                            }
                                        }),
                                        new TextRun({
                                            text: `  ${this.itsConsortium ? this. template.partnership?.name?.toUpperCase() : this.business.name?.toUpperCase()}`,
                                        }),
                                    ]
                                }),
                            ]
                        }),
                    ]
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: {
                                right: 140,
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: ` CAPACIDAD CONTRATACIÓN `,
                                            shading: {
                                                fill: 'e7e7e7',
                                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                                color: '#e7e7e7',
                                            }
                                        }),
                                    ]
                                }),
                            ]
                        }),
                    ]
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: {
                                right: 140,
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: ` BENEFICIARIO `,
                                            shading: {
                                                fill: 'e7e7e7',
                                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                                color: '#e7e7e7',
                                            }
                                        }),
                                        new TextRun({
                                            text: `   ${this.template.beneficiary.name}`,
                                        }),
                                    ]
                                }),
                            ]
                        }),
                    ]
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: {
                                right: 140,
                                left: 140,
                                bottom: 100,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: ` CORREDOR `,
                                            shading: {
                                                fill: 'e7e7e7',
                                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                                color: '#e7e7e7',
                                            }
                                        }),
                                        new TextRun({
                                            text: `   JOSELITO LIMAYLLA`,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }

} 