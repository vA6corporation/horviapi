import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, ShadingType, VerticalAlign, TextRun } from "docx";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";

export class Table12 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const heightRow1 = {
            value: 550,
            rule: HeightRule.EXACT,
        };
        const heightRow2 = {
            value: 650,
            rule: HeightRule.EXACT,
        };
        const shading1 = {
            fill: 'c00000',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#c00000',
        };
        const shading2 = {
            fill: '1f4e78',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#1f4e78',
        };
        let rows: TableRow[] = [
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
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
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
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
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
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
                    rows[0] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
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
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `RUC: ${element.document}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.turnOfBusiness}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                //text: `${element.operationActivity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 1) {
                    rows[1] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
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
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `RUC: ${element.document}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.turnOfBusiness}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                //text: `${element.operationActivity}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 2) {
                    rows[2] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
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
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `RUC: ${element.document}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.turnOfBusiness}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                //text: `${element.operationActivity}`,
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
                                        size: 25,
                                        type: WidthType.PERCENTAGE,
                                    },
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
                                        size: 25,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `RUC: ${element.document}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 25,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.turnOfBusiness}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 25,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    //text: `${element.operationActivity}`,
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
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'PERSONAS JURÍDICAS / EMPRESAS VINCULADAS',
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
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Razón Social',
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
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'RUC/DNI/C. Ext',
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
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Giro del Negocio',
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
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Tipo de vinculación (Accionista, Rep. Legal, etc)',
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
                ...rows
            ],
        });
    }

} 