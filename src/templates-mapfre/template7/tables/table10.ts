import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, ShadingType, VerticalAlign, TextRun } from "docx";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";

export class Table10 {

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
        let row: TableRow[] = [
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Cuentas por Pagar',
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
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'días',
                                        style: 'contenttable',
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
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Cuentas por Cobrar',
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
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'días',
                                        style: 'contenttable',
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
                        width: {
                            size: 50,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Existencias',
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
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 25,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'días',
                                        style: 'contenttable',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ];
        if (this.business.accountRotation.length > 0) {
            this.business.accountRotation.forEach((element, index) => {
                if (element.typeAccount == 'Cuentas por Pagar') {
                    row[0] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 50,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.typeAccount}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.rotation}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `dias`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (element.typeAccount == 'Cuentas por Cobrar') {
                    row[1] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 50,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.typeAccount}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.rotation}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `dias`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (element.typeAccount == 'Existencias') {
                    row[2] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 50,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.typeAccount}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.rotation}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 25,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `dias`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                } else {
                    row.push(
                        new TableRow({
                            height: heightRow2,
                            children: [
                                new TableCell({
                                    width: {
                                        size: 50,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.typeAccount}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 25,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.rotation}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 25,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `dias`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        })
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
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'POLÍTICAS DE ROTACIÓN DE CUENTAS',
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
                                size: 50,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Tipo de Cuenta',
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
                            columnSpan: 2,
                            width: {
                                size: 50,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Rotación',
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
                ...row
            ],
        });
    }

} 