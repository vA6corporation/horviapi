import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, ShadingType, VerticalAlign, TextRun } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table9 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const heightRow1 = {
            value: 550,
            rule: HeightRule.EXACT,
        }
        const heightRow2 = {
            value: 650,
            rule: HeightRule.EXACT,
        }
        const shading1 = {
            fill: 'c00000',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#c00000',
        }
        const shading2 = {
            fill: '1f4e78',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#1f4e78',
        }
        let row: TableRow[] = [
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
        ]
        if (this.business.movableProperties.length > 0) {
            this.business.movableProperties.forEach((element, index) => {
                if (index == 0) {
                    row[0] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'contenttable',
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
                                        children: [
                                            new TextRun({
                                                text: `${element.description}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.Brand}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.modelo}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.serie}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.year}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.capacity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.Antiquity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.location}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                } else if (index == 1) {
                    row[1] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'contenttable',
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
                                        children: [
                                            new TextRun({
                                                text: `${element.description}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.Brand}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.modelo}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.serie}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.year}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.capacity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.Antiquity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.location}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                } else if (index == 2) {
                    row[2] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'contenttable',
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
                                        children: [
                                            new TextRun({
                                                text: `${element.description}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.Brand}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.modelo}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.serie}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.year}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.capacity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.Antiquity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.location}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                } else if (index == 3) {
                    row[3] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'contenttable',
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
                                        children: [
                                            new TextRun({
                                                text: `${element.description}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.Brand}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.modelo}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.serie}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.year}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.capacity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.Antiquity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.location}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                } else if (index == 4) {
                    row[4] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'contenttable',
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
                                        children: [
                                            new TextRun({
                                                text: `${element.description}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.Brand}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.modelo}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.serie}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.year}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.capacity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.Antiquity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.location}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                } else {
                    row.push(
                        new TableRow({
                            height: heightRow2,
                            children: [
                                new TableCell({
                                    width: {
                                        size: 15,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${index + 1}`,
                                                    style: 'contenttable',
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
                                            children: [
                                                new TextRun({
                                                    text: `${element.description}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.Brand}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.modelo}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.serie}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.year}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.capacity}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.Antiquity}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.location}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    );
                }
            });
        }
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    height: heightRow1,
                    children: [
                        new TableCell({
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 9,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'ACTIVO FIJO - RELACIÓN DE INMUEBLES,EQUIPOS Y MÁQUINAS PROPIAS ',
                                            size: 20,
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: heightRow2,
                    children: [
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'ITEM',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Descripción del equipo',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Marca',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Modelo',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Serie',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Año de Fabricación',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Capacidad',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Antigüedad',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Ubicación Actual',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                ...row,
            ],
        })
    }
}
