import { AlignmentType, BorderStyle, HeightRule, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import { formatDateShort } from "src/format-date";
import { ReadTemplateDto } from "src/templates/dto/read-template.dto";

export class Table3 {

    constructor(
        private readonly template: ReadTemplateDto
    ) { }

    square(check: boolean): TextRun {
        return new TextRun({
            text: check ? '  X  ' : '    X',
            border: {
                style: BorderStyle.SINGLE,
                size: 16,
                color: 'e40520',
            },
            color: check ? '000000' : 'ffffff',
            size: check ? 17 : 16,
        })
    }

    create(): Table {
        const borderParagrapg = {
            bottom: {
                space: 1,
                style: BorderStyle.SINGLE,
                size: 1,
                color: 'e7e7e7',
            },
        }

        let GAOS = this.template.guaranties.find(e => e.guaranteeType === 'GAOS') || null
        let GAMF = this.template.guaranties.find(e => e.guaranteeType === 'GAMF') || null
        let GADF = this.template.guaranties.find(e => e.guaranteeType === 'GADF') || null
        let GFCF = this.template.guaranties.find(e => e.guaranteeType === 'GFCF') || null
        let GFWE = this.template.guaranties.find(e => e.guaranteeType === 'GFWE') || null

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
                            columnSpan: 6,
                            margins: {
                                right: 140,
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: 'FIANZA ',
                                        }),
                                        this.square(true),
                                        new TextRun({
                                            text: '               PÓLIZA CAUCIÓN ',
                                        }),
                                        this.square(false),
                                    ]
                                }),
                            ]
                        }),
                    ]
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 42,
                                type: WidthType.PERCENTAGE,
                            },
                            margins: {
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: 'TIPO DE PÓLIZA',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: 'MONEDA',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: 'MONTO',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: 'DÍAS',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 1,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 19,
                                type: WidthType.PERCENTAGE,
                            },
                            margins: {
                                right: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: 'VIGENCIA',
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
                            margins: {
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        GAOS ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: 'SERIEDAD OFERTA',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        GAOS?.currencyCode == 'PEN' ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: ' S/      ',
                                        }),
                                        GAOS?.currencyCode == 'USD' ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: ' $.',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GAOS?.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GAOS?.daysLimit.toString(),
                                            size: 20,
                                            bold: true,
                                        }),
                                    ]
                                })
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GAOS ? `${formatDateShort(GAOS.startAt).split('/')[0]}/${formatDateShort(GAOS.startAt).split('/')[1]}` : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: `Del `,
                                        }),
                                        new TextRun({
                                            text: GAOS ? formatDateShort(GAOS.startAt).split('/')[2] : '         ',
                                            size: 20,
                                            bold: true,
                                        }),
                                        new TextRun({
                                            text: `  al `,
                                        }),
                                        new TextRun({
                                            text: GAOS ? formatDateShort(GAOS.endAt) : '',
                                            size: 20,
                                            bold: true,
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
                            margins: {
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
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
                                            text: 'ADICIONAL DIFIRENCIACIÓN DE PROPUESTA',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        this.square(false),
                                        new TextRun({
                                            text: ' S/      ',
                                        }),
                                        this.square(false),
                                        new TextRun({
                                            text: ' $.',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            margins: {
                                right: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: `Del            al`,
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
                            margins: {
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        GFCF ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: 'FIEL CUMPLIMIENTO',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        GFCF?.currencyCode == 'PEN' ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: ' S/      ',
                                        }),
                                        GFCF?.currencyCode == 'USD' ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: ' $.',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GFCF ? GFCF.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GFCF ? GFCF.daysLimit.toString() : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                })
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GFCF ? `${formatDateShort(GFCF.startAt).split('/')[0]}/${formatDateShort(GFCF.startAt).split('/')[1]}` : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: `Del `,
                                        }),
                                        new TextRun({
                                            text: GFCF ? formatDateShort(GFCF.startAt).split('/')[2] : '         ',
                                            size: 20,
                                            bold: true,
                                        }),
                                        new TextRun({
                                            text: `  al `,
                                        }),
                                        new TextRun({
                                            text: GFCF ? formatDateShort(GFCF.endAt) : '',
                                            size: 20,
                                            bold: true,
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
                            margins: {
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        GADF ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: 'ADELANTO DIRECTO',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        GADF?.currencyCode == 'PEN' ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: ' S/      ',
                                        }),
                                        GADF?.currencyCode == 'USD' ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: ' $.',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GADF ? GADF.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GADF ? GADF.daysLimit.toString() : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                })
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GADF ? `${formatDateShort(GADF.startAt).split('/')[0]}/${formatDateShort(GADF.startAt).split('/')[1]}` : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: `Del `,
                                        }),
                                        new TextRun({
                                            text: `${GADF ? formatDateShort(GADF.startAt).split('/')[2] : '         '}`,
                                            size: 20,
                                            bold: true,
                                        }),
                                        new TextRun({
                                            text: `  al `,
                                        }),
                                        new TextRun({
                                            text: GADF ? formatDateShort(GADF.startAt) : '',
                                            size: 20,
                                            bold: true,
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
                            margins: {
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        GAMF ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: 'ADELANTO DE MATERIALES',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        GAMF?.currencyCode == 'PEN' ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: ' S/      ',
                                        }),
                                        GAMF?.currencyCode == 'USD' ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: ' $.',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GAMF ? GAMF.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GAMF ? GAMF.daysLimit.toString() : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                })
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GAMF ? `${formatDateShort(GAMF.startAt).split('/')[0]}/${formatDateShort(GAMF.startAt).split('/')[1]}` : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: `Del `,
                                        }),
                                        new TextRun({
                                            text: `${GAMF ? formatDateShort(GAMF.startAt).split('/')[2] : '         '}`,
                                            size: 20,
                                            bold: true,
                                        }),
                                        new TextRun({
                                            text: `  al `,
                                        }),
                                        new TextRun({
                                            text: GAMF ? formatDateShort(GAMF.endAt) : '',
                                            size: 20,
                                            bold: true,
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
                            margins: {
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        GFWE ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: 'BUEN FUNCIONAMIENTO',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        GFWE?.currencyCode == 'PEN' ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: ' S/      ',
                                        }),
                                        GFWE?.currencyCode == 'USD' ? this.square(true) : this.square(false),
                                        new TextRun({
                                            text: ' $.',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GFWE ? GFWE.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER
                                })
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GFWE ? GFWE.daysLimit.toString() : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                })
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: GFWE ? `${formatDateShort(GFWE.startAt).split('/')[0]}/${formatDateShort(GFWE.startAt).split('/')[1]}` : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: `Del `,
                                        }),
                                        new TextRun({
                                            text: GFWE ? formatDateShort(GFWE.startAt).split('/')[2] : '         ',
                                            size: 20,
                                            bold: true,
                                        }),
                                        new TextRun({
                                            text: `  al `,
                                        }),
                                        new TextRun({
                                            text: GFWE ? formatDateShort(GFWE.endAt) : '',
                                            size: 20,
                                            bold: true,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: { value: 500, rule: HeightRule.ATLEAST },
                    children: [
                        new TableCell({
                            margins: {
                                left: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        this.square(false),
                                        new TextRun({
                                            text: 'OTROS',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        this.square(false),
                                        new TextRun({
                                            text: ' S/      ',
                                        }),
                                        this.square(false),
                                        new TextRun({
                                            text: ' $.',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            margins: {
                                right: 140,
                            },
                            children: [
                                new Paragraph({
                                    border: borderParagrapg,
                                    children: [
                                        new TextRun({
                                            text: `Del            al`,
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