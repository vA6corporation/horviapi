import { AlignmentType, BorderStyle, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, VerticalAlign, WidthType } from "docx";
import { formatDateShort } from "src/format-date";
import { ReadPropertyDto } from "src/properties/dto/read-property.dto";

export class TableTwo {

    constructor(
        private readonly properties: ReadPropertyDto[],
    ) { }

    create(): Table {
        const rows = [
            new TableRow({
                children: [
                    new TableCell({
                        shading: {
                            fill: 'dfdfdf',
                            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                            color: 'dfdfdf',
                        },
                        columnSpan: 5,
                        children: [new Paragraph({
                            text: "1.- DETALLE DE LOS BIENES INMUEBLRES DE SU PROPIEDAD",
                            style: "header",
                        })],
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                                color: "000000"
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                                color: "000000"
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                                color: "000000"
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                                color: "000000"
                            },
                        },
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        verticalAlign: VerticalAlign.BOTTOM,
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "UBICACION",
                                    underline: {}
                                })
                            ],
                            style: "header",
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "FECHA DE ",
                                }),
                                new TextRun({
                                    text: "ADQUISICION",
                                    underline: {},
                                    break: 1,
                                })
                            ],
                            style: "header",
                            alignment: AlignmentType.CENTER,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: " INSCRIP. EN ",
                                }),
                                new TextRun({
                                    text: "REG. PUBLICOS",
                                    underline: {},
                                    break: 1,
                                })
                            ],
                            style: "header"
                        })],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.BOTTOM,
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "VALOR",
                                    underline: {}
                                })
                            ],
                            style: "header"
                        })],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.BOTTOM,
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "GRAVAMENES",
                                    underline: {}
                                })
                            ],
                            alignment: AlignmentType.CENTER,
                            style: "header",
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
                ],
            }),
        ];
        this.properties.forEach((property, index) => {
            if (index <= 6) {
                rows[index + 2] = new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: property.location,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: formatDateShort(property.purchaseAt),
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: property.inscription,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: property.commercialPrice.toFixed(2),
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: property.encumbrance.toFixed(2),
                            })],
                        }),
                    ],
                });
            } else {
                rows.push(
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [new Paragraph({
                                    text: property.location,
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: formatDateShort(property.purchaseAt),
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: property.inscription,
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: property.commercialPrice.toFixed(2),
                                })],
                            }),
                            new TableCell({
                                children: [new Paragraph({
                                    text: property.encumbrance.toFixed(2),
                                })],
                            }),
                        ],
                    })
                );
            }
        });

        return new Table({
            borders: {
                insideHorizontal: {
                    style: BorderStyle.NONE
                },
                insideVertical: {
                    style: BorderStyle.NONE
                },
            },
            width: {
                size: 100,
                type: WidthType.PERCENTAGE
            },
            margins: {
                left: 70,
            },
            rows,
        });
    }

}