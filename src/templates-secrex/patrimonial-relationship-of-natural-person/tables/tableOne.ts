import { AlignmentType, BorderStyle, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import { formatDateShort } from "src/format-date";
import { ReadShareholderDto } from "src/shareholders/dto/read-shareholder.dto";

export class TableOne {

    constructor(
        private readonly shareholder: ReadShareholderDto,
    ) { }

    create(): Table {
        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE
            },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.SINGLE,
                                    size: 10,
                                },
                            },
                            columnSpan: 5,
                            children: [new Paragraph({
                                text: "N O M B R E S  Y  A P E L L I D O S",
                                style: "header",
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            columnSpan: 5,
                            children: [new Paragraph({
                                text: this.shareholder.name?.toUpperCase(),
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: this.shareholder.birthDate ? formatDateShort(this.shareholder.birthDate) : '',
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: `${this.shareholder.document}`,
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: this.shareholder.nationality,
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: this.shareholder.maritalStatus,
                                alignment: AlignmentType.CENTER,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: '',
                                style: "header",
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "FECHA NACIMIENTO",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                                // style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "L.E./C.E./D.N.I./C.I.",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                                // style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "NACIONALIDAD",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                                // style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "ESTADO CIVIL",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER,
                                // style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "REGIMEN DE BIENES",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                                // style: "header",
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            columnSpan: 5,
                            children: [new Paragraph({
                                text: "N O M B R E S  Y  A P E L L I D O S  D E L  C O N Y U G E",
                                style: "header",
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            columnSpan: 5,
                            children: [new Paragraph({
                                text: `${this.shareholder.nameSpouse?.toUpperCase()}`,
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `${formatDateShort(this.shareholder.birthDateSpouse)}`,
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: `${this.shareholder.documentSpouse}`,
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: `${this.shareholder.nationalitySpouse?.toUpperCase()}`,
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: `${this.shareholder.maritalStatusSpouse?.toUpperCase()}`,
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: ``,
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "FECHA NACIMIENTO",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                                // style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "L.E./C.E./D.N.I./C.I.",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                                // style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "NACIONALIDAD",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                                // style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "ESTADO CIVIL",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER,
                                // style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "REGIMEN DE BIENES",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                                // style: "header",
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            // borders: {
                            //   right: {
                            //     style: BorderStyle.WAVE, 
                            //     size: 0, 
                            //     color: "#ffffff",
                            //   },
                            // },
                            columnSpan: 3,
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: this.shareholder.addressResidence?.toUpperCase(),
                                        size: 14,
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: this.shareholder.phoneNumber,
                                        size: 14,
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: this.shareholder.mobileNumber,
                                        size: 14,
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
                            columnSpan: 3,
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "DIRECCION",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "TELEFONO",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "CELULAR",
                                        size: 14
                                    })
                                ],
                                alignment: AlignmentType.CENTER
                            })],
                        }),
                    ],
                }),
            ],
        });
    }

} 