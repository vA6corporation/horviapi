import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, VerticalAlign, TextRun, ShadingType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { formatDateShort } from 'src/format-date';

export class Table5 {

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
        let rows: TableRow[] = [
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Gerente General',
                                        style: 'contenttable',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Gerente Administrativo',
                                        style: 'contenttable',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Gerente Financiero',
                                        style: 'contenttable',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Contador',
                                        style: 'contenttable',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                ],
            }),
        ];
        if (this.business.boardMembers.length > 0) {
            this.business.boardMembers.forEach((element) => {
                if (element.position == 'Gerente General') {
                    rows[0] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.position}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.name}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.typeDocument}: ${element.document}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${formatDateShort(element.birthDate)}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.countryOrigin}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.profession}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (element.position == 'Gerente Administrativo') {
                    rows[1] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.position}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.name}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.typeDocument}: ${element.document}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${formatDateShort(element.birthDate)}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.countryOrigin}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.profession}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (element.position == 'Gerente Financiero') {
                    rows[2] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.position}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.name}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.typeDocument}: ${element.document}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${formatDateShort(element.birthDate)}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.countryOrigin}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.profession}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (element.position == 'Contador') {
                    rows[3] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.position}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.name}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.typeDocument}: ${element.document}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${formatDateShort(element.birthDate)}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.countryOrigin}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.profession}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else {
                    rows.push(
                        new TableRow({
                            height: heightRow2,
                            children: [
                                new TableCell({
                                    width: {
                                        size: 20,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.position}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 16,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.name}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 16,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.typeDocument}: ${element.document}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 16,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${formatDateShort(element.birthDate)}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 16,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.countryOrigin}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 16,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.profession}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
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
                            columnSpan: 7,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'PLANA GERENCIAL',
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
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Cargo',
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
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Nombre / Razón Social',
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
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'DNI/ RUC/ C.Ext.',
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
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Fecha Nacimiento',
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
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'País de Origen',
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
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Profesión',
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
                ...rows,
            ],
        })
    }
}
