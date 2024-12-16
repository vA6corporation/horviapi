import { Paragraph, Table, TableCell, TableRow, WidthType, BorderStyle, TextRun, ShadingType, VerticalAlign } from "docx";
import { ReadTemplateDto } from "src/templates/dto/read-template.dto";

export class Table2 {

    constructor(
        private readonly template: ReadTemplateDto
    ) { }

    create(): Table {
        const borderParagrapg = {
            bottom: {
                space: 1,
                style: BorderStyle.SINGLE,
                size: 1,
                color: 'e7e7e7',
            },
        }

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
                                            text: ' TIPOS DE CONTRATO  ',
                                            shading: {
                                                fill: 'e7e7e7',
                                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                                color: '#e7e7e7',
                                            }
                                        }),
                                        new TextRun({
                                            text: '          OBRA ',
                                        }),
                                        new TextRun({
                                            text: '  X  ',
                                            border: {
                                                style: BorderStyle.SINGLE,
                                                size: 16,
                                                color: 'e40520',
                                            },
                                            size: 18,
                                        }),
                                        new TextRun({
                                            text: '          SERVICIOS ',
                                        }),
                                        new TextRun({
                                            text: '    ',
                                            border: {
                                                space: 1,
                                                style: BorderStyle.SINGLE,
                                                size: 16,
                                                color: 'e40520',
                                            },
                                        }),
                                        new TextRun({
                                            text: '          SUMINISTROS ',
                                        }),
                                        new TextRun({
                                            text: '    ',
                                            border: {
                                                space: 1,
                                                style: BorderStyle.SINGLE,
                                                size: 16,
                                                color: 'e40520',
                                            },
                                        }),
                                        new TextRun({
                                            text: '          ADUANAS ',
                                        }),
                                        new TextRun({
                                            text: '    ',
                                            border: {
                                                space: 1,
                                                style: BorderStyle.SINGLE,
                                                size: 16,
                                                color: 'e40520',
                                            },
                                        }),
                                        new TextRun({
                                            text: '           OTROS ',
                                        }),
                                        new TextRun({
                                            text: '   _  ',
                                            size: 15,
                                            color: 'ffffff',
                                            border: {
                                                space: 1,
                                                style: BorderStyle.SINGLE,
                                                size: 16,
                                                color: 'e40520',
                                            },
                                        }),
                                    ]
                                }),
                            ],
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
                                            text: ' DETALLAR ',
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
                                            text: ` DENOMINACIÓN PROCESO DE SELECCIÓN `,
                                            shading: {
                                                fill: 'e7e7e7',
                                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                                color: '#e7e7e7',
                                            }
                                        }),
                                        new TextRun({
                                            text: ``,
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
                                            text: ` OBJETO DEL CONTRATO `,
                                            shading: {
                                                fill: 'e7e7e7',
                                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                                color: '#e7e7e7',
                                            }
                                        }),
                                        new TextRun({
                                            text: ` ${this.template.objectDescription}`,
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
                                            text: ` MONTO TOTAL DEL CONTRATO  `,
                                            shading: {
                                                fill: 'e7e7e7',
                                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                                color: '#e7e7e7',
                                            }
                                        }),
                                        new TextRun({
                                            text: `  S/ ${this.template.contractAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
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
                                            text: ` PLAZO DE EJECUCIÓN `,
                                            shading: {
                                                fill: 'e7e7e7',
                                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                                color: '#e7e7e7',
                                            }
                                        }),
                                        new TextRun({
                                            text: `  ${this.template.daysLimit} DIAS`,
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
                                            text: ` MODALIDAD DE CONTRATCIÓN  `,
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
                                bottom: 100,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: ' FUENTE DE FINANCIAMIENTO ',
                                            shading: {
                                                fill: 'e7e7e7',
                                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                                color: '#e7e7e7',
                                            }
                                        }),
                                    ],
                                })
                            ]
                        }),
                    ]
                }),
            ]
        });
    }

} 