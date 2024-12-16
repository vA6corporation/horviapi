import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, VerticalAlign, TextRun, HeightRule, BorderStyle, ImageRun } from 'docx';
import { ReadBankDto } from 'src/banks/dto/read-bank.dto';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
import { formatDateShort } from 'src/format-date';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';
const sizeOf = require("image-size")

export class Table2 {

    constructor(
        private readonly template: ReadTemplateDto
    ) { }

    async create(): Promise<Table[]> {
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = ('0' + (date.getMonth() + 1)).slice(-2)
        let year = date.getFullYear()
        const marginsCells = {
            left: 100,
            right: 100,
        }
        const heightRow1 = {
            value: 550,
            rule: HeightRule.EXACT,
        }
        var dataGeneral: Table[] = []
        let row2: TableRow[] = []

        let imageBuffer: ArrayBuffer | string = ''
        let width = 0
        let height = 0

        if (this.template.business.urlSignature) {
            const arrayBuffer = await fetch(this.template.business.urlSignature).then(res => res.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
            const dimensions = sizeOf(buffer)
            const ratio = calculateAspectRatio(dimensions.width, dimensions.height, 200, 200)
            width = ratio.width
            height = ratio.height
            imageBuffer = arrayBuffer
        }

        // if (this.template.partnership) {
        // }
        const { business, partnership } = this.template
        const businesses: ReadBusinessDto[] = partnership ? partnership.partnershipItems.map(e => e.business) : [business]
        
        businesses.forEach(business => {
            dataGeneral.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'OBRAS EN EJECUCIÓN DE CADA CONSORCIADO',
                            style: 'title',
                            break: 3,
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    pageBreakBefore: true,
                }),
                new Paragraph({
                    spacing: {
                        after: 450,
                    },
                    children: [
                        new TextRun({
                            text: '     CONTRATISTA: ',
                            style: 'subtitle',
                            bold: true,
                            break: 2,
                        }),
                        new TextRun({
                            text: business.name.toUpperCase(),
                            style: 'subtitle',
                        }),
                    ],

                }),
            )
            row2 = [
                new TableRow({
                    height: heightRow1,
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 11,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 12,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: heightRow1,
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 11,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 12,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: heightRow1,
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 11,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 12,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                            bold: true,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ]
            business.experiences.forEach((element, index) => {
                if (element.advancedPercent >= 100) {
                    const itemRow = new TableRow({
                        height: heightRow1,
                        children: [
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 11,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: element.convener.toUpperCase(),
                                                style: 'contentTable',
                                                bold: true,
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: element.objectDescription,
                                                style: 'contentTable',
                                                bold: true,
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 7,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${formatDateShort(element.startAt)}`,
                                                style: 'contentTable',
                                                bold: true,
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 7,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.location?.toUpperCase()}`,
                                                style: 'contentTable',
                                                bold: true,
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 7,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `S/.${element.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                                                style: 'contentTable',
                                                bold: true,
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 7,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.daysLimit} DÍAS`,
                                                style: 'contentTable',
                                                bold: true,
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 7,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.advancedPercent}`,
                                                style: 'contentTable',
                                                bold: true,
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 7,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contentTable',
                                                bold: true,
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contentTable',
                                                bold: true,
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 12,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contentTable',
                                                bold: true,
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                style: 'contentTable',
                                                bold: true,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                    if (index < 3) {
                        row2[index] = itemRow;
                    } else {
                        row2.push(itemRow);
                    }
                }
            })
            dataGeneral.push(
                new Table({
                    borders: {
                        top: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                        bottom: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                        left: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                        right: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                        insideHorizontal: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                        insideVertical: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                    },
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 11,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Entidad Pública Contratante ',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    size: 14,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'N° de Licitación y Objeto del Contrato',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    size: 14,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 7,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Fecha de Inicio de Obra ',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    size: 14,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 7,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Ubicación Geográfica de la obra ',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    size: 14,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 7,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Monto de Contrato (Monto Adjudicado)',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    size: 14,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 7,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Plazo Original de la Obra (en días)',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    size: 14,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 7,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '% Avance a la fecha (*)',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    size: 14,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 7,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'En Arbitraje? SI/NO',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    size: 14,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Nombre del Consorcio y % de su  participación',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    size: 14,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 12,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Nombre de los otros consorciados y respectivo % de participación',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    size: 14,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 15,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Nombre de Entidades Afianzadoras, e Indicar :',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    size: 14,
                                                }),
                                                new TextRun({
                                                    text: 'A)FC; B) AD; C) AM',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    break: 2,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        ...row2,
                    ]
                }),
                new Paragraph({
                    children: [
                        new ImageRun({
                            data: imageBuffer,
                            transformation: {
                                width,
                                height,
                            },
                            floating: {
                                zIndex: 1,
                                behindDocument: true,
                                horizontalPosition: {
                                    offset: 400000,
                                },
                                verticalPosition: {
                                    offset: 4800000,
                                },
                            },
                        })
                    ],
                }),
                new Paragraph({
                    spacing: {
                        after: 150,
                    },
                    children: [
                        new TextRun({
                            text: '      Consignar el detalle de TODAS las obras que el contratista esté actualmente ejecutando, ya sea directamente o bajo la modalidad de ',
                            style: 'subtitle',
                            bold: true,
                            break: 2,
                        }),
                        new TextRun({
                            text: '      Consorcio, y sea que hayan sido afianzadas por nuestra compañía o por cualquier otra aseguradora o banco.',
                            style: 'subtitle',
                            bold: true,
                            break: 1,
                        }),

                        new TextRun({
                            text: '       ___________________________________	',
                            style: 'subtitle',
                            bold: true,
                            size: 18,
                            break: 5,
                        }),
                        new TextRun({
                            text: '       Firma y sello del Representante Legal',
                            style: 'subtitle',
                            bold: true,
                            size: 18,
                            break: 1,
                        }),
                        new TextRun({
                            text: `       FECHA: ${day} / ${month} / ${year}`,
                            style: 'subtitle',
                            bold: true,
                            size: 18,
                            break: 2,
                        }),
                    ],
                }),
                new Paragraph({
                    spacing: {
                        after: 250,
                    },
                    children: [
                        new TextRun({
                            text: 'Los abajo suscritos declaramos que la información y documentación que proporcionamos es veraz y fiel reflejo de la realidad, a los cuales asignamos carácter de declaración jurada en los términos consignados en el artículo 179 de la Ley General del sistema financiero y del sistema de seguros y orgánica de la Superintendencia de Banca y Seguros, y declaramos que somos conocedores del delito de fraude en la administración de personas jurídicas (art. 198, incisos 1 y 2 del código penal) y de sus efectos legale',
                            style: 'contentTable',
                            break: 1,
                        }),
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                }),
            )
        })
        return dataGeneral
    }
}
