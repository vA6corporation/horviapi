import { AlignmentType, BorderStyle, HeightRule, Paragraph, Table, TableCell, TableRow, TextRun, VerticalAlign, WidthType } from "docx";
import { formatDateShort } from "../formatDate";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";

export class TableOne {

    constructor(
        private readonly business: ReadBusinessDto,
    ) { }

    create(): Table {
        const heightRow = {
            rule: HeightRule.EXACT,
            value: 650,
        }
        let rows = [
            new TableRow({
                children: [
                    new TableCell({
                        width: {
                            size: 11,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            text: "Entidad Pública Contratante",
                            style: "header",
                            alignment: AlignmentType.CENTER,
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            text: "N° de Licitación y Objeto del Contrato",
                            style: "header",
                            alignment: AlignmentType.CENTER,
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 7,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            text: "Fecha de Inicio de Obra",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            text: "Ubicación Geográfica de la obra",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 7,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            text: "Monto de Contrato (Monto Adjudicado)",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 7,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Plazo",
                                }),
                                new TextRun({
                                    text: "Original de",
                                    break: 1,
                                }),
                                new TextRun({
                                    text: "la Obra (en",
                                    break: 1,
                                }),
                                new TextRun({
                                    text: "días)",
                                    break: 1,
                                }),
                            ],
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 7,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Ampliaciones",
                                }),
                                new TextRun({
                                    text: "de plazo",
                                    break: 1,
                                }),
                                new TextRun({
                                    text: "(en días)",
                                    break: 1,
                                }),
                            ],
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "%",
                                }),
                                new TextRun({
                                    text: "Avance a",
                                    break: 1,
                                }),
                                new TextRun({
                                    text: "la fecha",
                                    break: 1,
                                }),
                            ],
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            text: "En Arbitraje? SI/NO",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Nombre del Consorcio",
                                }),
                                new TextRun({
                                    text: "y % de su",
                                    break: 1,
                                }),
                                new TextRun({
                                    text: "participación",
                                    break: 1,
                                }),
                            ],
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 11,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            text: "Nombre de los otros consorciados y respectivo % de participación",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Nombre de Entidades",
                                }),
                                new TextRun({
                                    text: "Afianzadoras, e",
                                    break: 1,
                                }),
                            ],
                            style: "header",
                            alignment: AlignmentType.CENTER
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: " Indicar : ",
                                }),
                                new TextRun({
                                    text: " A) FC;  B)  AD;  C) AM",
                                    break: 1,
                                }),
                            ],
                            style: "header",
                        })
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow,
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
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ]
            }),
            new TableRow({
                height: heightRow,
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
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ]
            }),
            new TableRow({
                height: heightRow,
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
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ]
            }),
            new TableRow({
                height: heightRow,
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
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ]
            }),
            new TableRow({
                height: heightRow,
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
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ]
            }),
            new TableRow({
                height: heightRow,
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
                    new TableCell({
                        children: [],
                    }),
                    new TableCell({
                        children: [],
                    }),
                ]
            }),
        ];

        this.business.experiences.filter(e => !e.isCompleted).forEach((experience, index) => {
            const dataRow = new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({
                            text: experience.convener,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: experience.objectDescription,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: formatDateShort(experience.startAt),
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: experience.location,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: `${experience.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: experience.daysLimit.toString(),
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: "",
                            // style: "header",
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: experience.advancedPercent.toString(),
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: '',
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: ``,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: ``,
                            // style: "header",
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: '',
                            // style: "header",
                        })],
                    }),
                ]
            })
            if (index < 6) {
                rows[index + 1] = dataRow;
            } else {
                rows.push(dataRow);
            }
        });

        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE
            },
            borders: {
                top: {
                    style: BorderStyle.DOTTED,
                    size: 1,
                },
                bottom: {
                    style: BorderStyle.DOTTED,
                    size: 1,
                },
                left: {
                    style: BorderStyle.DOTTED,
                    size: 1,
                },
                right: {
                    style: BorderStyle.DOTTED,
                    size: 1,
                },
                insideHorizontal: {
                    style: BorderStyle.DOTTED,
                    size: 1,
                },
                insideVertical: {
                    style: BorderStyle.DOTTED,
                    size: 1,
                },
            },
            rows,
        })
    }

} 