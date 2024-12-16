import { Paragraph, Table, TableCell, TableRow, WidthType, HeightRule, TextRun, AlignmentType, VerticalAlign, ShadingType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table4 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const marginCells = {
            left: 50,
        };
        const backgroundCells = {
            fill: 'd9d9d9',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#d9d9d9',
        };
        const heightRow1 = {
            value: 290,
            rule: HeightRule.EXACT,
        };
        let row1: TableRow[] = [
            new TableRow({
                height: heightRow1,
                children: [
                    new TableCell({
                        margins: {
                            left: 50,
                        },
                        columnSpan: 4,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: '3.3. Personas jurídicas vinculadas al cliente y/o a su grupo económico2 (de ser el caso):',
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
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 45,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Denominación o Razón Social:',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'RUC o similar',
                                        style: 'subtitle',

                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'N°',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 18,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'País de Constitución',
                                        style: 'subtitle',
                                        size: 19,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            }),
        ];
        let row2: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        width: {
                            size: 45,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 18,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        width: {
                            size: 45,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 18,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        width: {
                            size: 45,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 18,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        width: {
                            size: 45,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 18,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
        ];
        if (this.business.linkedBusinesses?.length > 0) {
            this.business.linkedBusinesses.forEach((element, index) => {
                if (index == 0) {
                    row2[0] = new TableRow({
                        children: [
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 45,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.name?.toUpperCase()}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 12,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'RUC',
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.document}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 18,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.countryOrigin?.toUpperCase()}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 1) {
                    row2[1] = new TableRow({
                        children: [
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 45,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.name?.toUpperCase()}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 12,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'RUC',
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: element.document,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 18,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.countryOrigin?.toUpperCase()}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 2) {
                    row2[2] = new TableRow({
                        children: [
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 45,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.name?.toUpperCase()}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 12,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'RUC',
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: element.document,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 18,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.countryOrigin?.toUpperCase()}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 3) {
                    row2[3] = new TableRow({
                        children: [
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 45,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.name?.toUpperCase()}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 12,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'RUC',
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: element.document,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 18,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.countryOrigin?.toUpperCase()}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                } else {
                    row2.push(
                        new TableRow({
                            children: [
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    margins: marginCells,
                                    width: {
                                        size: 45,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.name?.toUpperCase()}`,
                                                    style: 'contentTable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    margins: marginCells,
                                    width: {
                                        size: 12,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'RUC',
                                                    style: 'contentTable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    margins: marginCells,
                                    width: {
                                        size: 20,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: element.document,
                                                    style: 'contentTable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    verticalAlign: VerticalAlign.CENTER,
                                    margins: marginCells,
                                    width: {
                                        size: 18,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.countryOrigin?.toUpperCase()}`,
                                                    style: 'contentTable',
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
        Array.prototype.push.apply(row1, row2);
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: row1,
        });
    }
}
