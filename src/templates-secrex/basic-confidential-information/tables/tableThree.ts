import { AlignmentType, BorderStyle, Paragraph, Table, TableCell, TableRow, WidthType } from "docx";
import { ReadShareholderDto } from "src/shareholders/dto/read-shareholder.dto";

export class TableThree {

    constructor(
        private readonly shareholders: ReadShareholderDto[]
    ) { }

    create(): Table {

        const rows = [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                        },
                        columnSpan: 3,
                        children: [new Paragraph({
                            text: "3. ACCIONISTAS",
                            style: "header",
                        })],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                        },
                        columnSpan: 3,
                        children: [new Paragraph({
                            text: "CAPITAL ACTUADO ACTUAL:",
                            style: "header"
                        })],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                        },
                        children: [new Paragraph({
                            text: "NOMBRES",
                            style: "header",
                            alignment: AlignmentType.CENTER,
                        })],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                        },
                        children: [new Paragraph({
                            text: "%",
                            style: "header",
                            alignment: AlignmentType.CENTER,
                        })],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                        },
                        children: [new Paragraph({
                            text: "RUC/DNI",
                            style: "header",
                            alignment: AlignmentType.CENTER,
                        })],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            left: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            right: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                            bottom: {
                                style: BorderStyle.SINGLE,
                                size: 1,
                            },
                        },
                        children: [new Paragraph({
                            text: "NACIONALIDAD",
                            style: "header",
                            alignment: AlignmentType.CENTER,
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
                ],
            }),
        ];
        this.shareholders.forEach((shareholder, index) => {
            if (index == 0) {
                rows[3] = new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.name?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.percent.toString(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.document,
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.nationality?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                    ],
                });
            } else if (index == 1) {
                rows[4] = new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.name?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.percent.toString(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.document,
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.nationality?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                    ],
                });
            } if (index == 2) {
                rows[5] = new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.name?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.percent.toString(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.document,
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.nationality?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                    ],
                });
            } if (index == 3) {
                rows[6] = new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.name?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.percent.toString(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.document,
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.nationality?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                    ],
                });
            } if (index == 4) {
                rows[7] = new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.name?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.percent.toString(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.document,
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.nationality?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                    ],
                });
            } if (index == 5) {
                rows[8] = new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.name?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.percent.toString(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.document,
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.nationality?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                    ],
                });
            } else if (index > 5) {
                rows.push(new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.name?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.percent.toString(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.document,
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: shareholder.nationality?.toUpperCase(),
                                style: "body",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                    ],
                }));
            }
        });

        return new Table({
            borders: {
                top: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                },
                left: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                },
                right: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                },
                bottom: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                },
                insideHorizontal: {
                    style: BorderStyle.NONE,
                },
                insideVertical: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                },
            },
            margins: {
                left: 80,
                right: 80,
            },
            width: {
                size: 100,
                type: WidthType.PERCENTAGE
            },
            rows
        });
    }
}