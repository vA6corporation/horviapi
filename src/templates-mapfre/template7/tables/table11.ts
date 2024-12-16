import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, ShadingType, VerticalAlign, TextRun } from "docx";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";

export class Table11 {

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
                            size: 30,
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
                            size: 20,
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
                            size: 30,
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
                            size: 20,
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
                            size: 30,
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
                            size: 20,
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
                            size: 30,
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
                            size: 20,
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
                            size: 30,
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
                            size: 20,
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
            })
        ];
        if (this.business.accessCredit.length > 0) {
            this.business.accessCredit.forEach((element, index) => {
                if (index == 0) {
                    row[0] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 30,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.insuranceCarrier}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.financialProducts}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.creditLine}`,
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
                                                text: `${element.amount}`,
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
                                                text: `${element.typeGuarantee}`,
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
                                                text: `${element.amountGuarantee}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 1) {
                    row[1] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 30,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.insuranceCarrier}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.financialProducts}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.creditLine}`,
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
                                                text: `${element.amount}`,
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
                                                text: `${element.typeGuarantee}`,
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
                                                text: `${element.amountGuarantee}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 2) {
                    row[2] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 30,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.insuranceCarrier}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.financialProducts}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.creditLine}`,
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
                                                text: `${element.amount}`,
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
                                                text: `${element.typeGuarantee}`,
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
                                                text: `${element.amountGuarantee}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 3) {
                    row[3] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 30,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.insuranceCarrier}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.financialProducts}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.creditLine}`,
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
                                                text: `${element.amount}`,
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
                                                text: `${element.typeGuarantee}`,
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
                                                text: `${element.amountGuarantee}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 4) {
                    row[4] = new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 30,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.insuranceCarrier}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.financialProducts}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.creditLine}`,
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
                                                text: `${element.amount}`,
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
                                                text: `${element.typeGuarantee}`,
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
                                                text: `${element.amountGuarantee}`,
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
                                        size: 30,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.insuranceCarrier}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 20,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.financialProducts}`,
                                                    style: 'contenttable',
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 20,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.creditLine}`,
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
                                                    text: `${element.amount}`,
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
                                                    text: `${element.typeGuarantee}`,
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
                                                    text: `${element.amountGuarantee}`,
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
                            columnSpan: 6,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'ACCESO AL CRÉDITO',
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
                            rowSpan: 2,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Entidad Financiera / Aseguradora',
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
                            rowSpan: 2,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Productos Financieros (Pagaré, Carta Fianza, Leasing, Etc)',
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
                            rowSpan: 2,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Línea de crédito / Operación puntual',
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
                            rowSpan: 2,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Monto',
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
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Garantías',
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
                new TableRow({
                    height: heightRow2,
                    children: [
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
                                            text: 'Tipo',
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
                                            text: 'Monto (S/.)',
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