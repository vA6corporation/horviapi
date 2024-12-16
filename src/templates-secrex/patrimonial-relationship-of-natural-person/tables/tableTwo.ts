import { AlignmentType, BorderStyle, Paragraph, Table, TableCell, TableRow, TextRun, VerticalAlign, WidthType } from "docx";
import { ReadShareholderDto } from "src/shareholders/dto/read-shareholder.dto";

export class TableTwo {

    constructor(
        private readonly shareholder: ReadShareholderDto,
    ) { }

    create(): Table {
        const rows = [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 13,
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 13,
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 13,
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 13,
                            },
                        },
                        columnSpan: 10,
                        children: [new Paragraph({
                            text: "BIENES INMUEBLES (1)",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 10,
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "(*) Indicar si es casa, departamento, oficina, local industrial, almacén, terreno, casa de playa, casa de campo, etc.",
                                    size: 14
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        width: {
                            size: 9,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Descripcion",
                                    size: 12
                                }),
                                new TextRun({
                                    text: "del Bien (*)",
                                    size: 12, break: 1
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Ubicacion",
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 5,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Area Terreno",
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER,
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 5,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Area Const",
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Valor Comercial",
                                    size: 12
                                }),
                                new TextRun({
                                    text: "US$",
                                    size: 12, break: 1,
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 7,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Hipoteca",
                                    size: 12
                                }),
                                new TextRun({
                                    text: "(Si o No)",
                                    size: 12, break: 1,
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Valor",
                                    size: 12
                                }),
                                new TextRun({
                                    text: "Hipoteca",
                                    size: 12, break: 1,
                                }),
                                new TextRun({
                                    text: "US$",
                                    size: 12, break: 1,
                                }),
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 9,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Deuda Relacionanda (US$)",
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Banco o Institucion",
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Patrimonio",
                                    size: 12
                                }),
                                new TextRun({
                                    text: "Familiar",
                                    size: 12, break: 1,
                                }),
                                new TextRun({
                                    text: "(Si o No)",
                                    size: 12, break: 1,
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                ],
            }),

            new TableRow({
                children: [
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
                        children: [],
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
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
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
                        children: [],
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
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
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
                        children: [],
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
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
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
                        children: [],
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
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
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
                        children: [],
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
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
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
                        children: [],
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
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
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
                        children: [],
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
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ],
            }),
        ];
        let total1 = 0, total2 = 0;
        this.shareholder.properties?.forEach((property, index) => {
            const row = new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: property.description,
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: property.location,
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: property.landArea.toString(),
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: property.constructionArea.toString(),
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: property.commercialPrice.toFixed(2),
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: property.isMortgage ? 'SI' : 'NO',
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: property.mortgagePrice ? property.mortgagePrice.toFixed(2) : '',
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: property.debt ? property.debt.toFixed(2) : '',
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: property.financier,
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: property.isFamiliarPatrimony ? 'SI' : '',
                                    size: 12
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                ],
            });
            total1 = property.commercialPrice + total1;
            total2 = property.mortgagePrice + total2;
            if (index < 6) {
                rows[index + 3] = row;
            } else {
                rows.push(row);
            }
        });

        const row = new TableRow({
            children: [
                new TableCell({
                    columnSpan: 4,
                    verticalAlign: VerticalAlign.BOTTOM,
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: "TOTAL",
                                size: 12,
                                bold: true
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    })],
                }),
                new TableCell({
                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 13,
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 13,
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 13,
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 13,
                        },
                    },
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: `${total1.toFixed(2)}`,
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    })],
                }),
                new TableCell({
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: "",
                                size: 12
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    })],
                }),
                new TableCell({
                    borders: {
                        top: {
                            style: BorderStyle.SINGLE,
                            size: 13,
                        },
                        bottom: {
                            style: BorderStyle.SINGLE,
                            size: 13,
                        },
                        left: {
                            style: BorderStyle.SINGLE,
                            size: 13,
                        },
                        right: {
                            style: BorderStyle.SINGLE,
                            size: 13,
                        },
                    },
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: `${total2.toFixed(2)}`,
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    })],
                }),
                new TableCell({
                    columnSpan: 3,
                    children: [new Paragraph({
                        children: [
                            new TextRun({
                                text: "",
                                size: 12
                            })
                        ],
                        alignment: AlignmentType.CENTER
                    })],
                }),
            ]
        });

        rows.push(row);

        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE
            },
            rows,
        });
    }

} 