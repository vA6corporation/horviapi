import { AlignmentType, BorderStyle, HeightRule, Paragraph, Table, TableCell, TableRow, TextRun, VerticalAlign, WidthType } from "docx";
import { formatDateShort } from "../formatDate";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";

export class TableOne {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const heightRow = {
            rule: HeightRule.AUTO,
            value: 650,
        }
        const rows = [
            new TableRow({
                children: [
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 11,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [new Paragraph({
                            text: "Entidad Pública Contratante",
                            style: "header",
                            alignment: AlignmentType.CENTER,
                        })],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 11,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'N° de Licitación y',
                                        style: 'header',
                                        bold: true,
                                    }),
                                    new TextRun({
                                        text: 'Objeto del Contrato',
                                        style: 'header',
                                        break: 1,
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            })],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [new Paragraph({
                            text: "Fecha de Inicio de Obra",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [new Paragraph({
                            text: "Ubicación Geográfica de la obra",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 7,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [new Paragraph({
                            text: "Monto de Contrato (Monto Adjudicado)",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Plazo',
                                        style: 'header',
                                        bold: true,
                                    }),
                                    new TextRun({
                                        text: 'Original',
                                        style: 'header',
                                        break: 1,
                                        bold: true,
                                    }),
                                    new TextRun({
                                        text: 'de la Obra',
                                        style: 'header',
                                        break: 1,
                                        bold: true,
                                    }),
                                    new TextRun({
                                        text: '(en días)',
                                        style: 'header',
                                        break: 1,
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            })],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 7,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Ampliaciones',
                                        style: 'header',
                                        bold: true,
                                    }),
                                    new TextRun({
                                        text: 'de plazo',
                                        style: 'header',
                                        break: 1,
                                        bold: true,
                                    }),
                                    new TextRun({
                                        text: '(en días)',
                                        style: 'header',
                                        break: 1,
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            })],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: '%',
                                        style: 'header',
                                        bold: true,
                                    }),
                                    new TextRun({
                                        text: 'Avance a',
                                        style: 'header',
                                        break: 1,
                                        bold: true,
                                    }),
                                    new TextRun({
                                        text: 'la fecha',
                                        style: 'header',
                                        break: 1,
                                        bold: true,
                                    }),
                                    new TextRun({
                                        text: '(*)',
                                        style: 'header',
                                        break: 1,
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER
                            })
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 7,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [new Paragraph({
                            text: "Nombre del Consorcio y % de su  participación",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [new Paragraph({
                            text: "Nombre de los otros consorciados y respectivo % de participación",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 11,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Nombre de Entidades',
                                        style: 'header',
                                        bold: true,
                                    }),
                                    new TextRun({
                                        text: 'Afianzadoras (**)',
                                        style: 'header',
                                        break: 1,
                                        bold: true,
                                    }),
                                    new TextRun({
                                        text: 'A)FC; B) AD; C) AM',
                                        style: 'header',
                                        break: 2,
                                        bold: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            })],
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
                ]
            }),
        ]

        this.business.experiences.filter(e => e.isCompleted).forEach((experience, index) => {
            const dataRow = new TableRow({
                height: heightRow,
                children: [
                    new TableCell({
                        children: [new Paragraph({
                            text: experience.convener.toUpperCase(),
                        })],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: experience.objectDescription,
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: `${formatDateShort(experience.startAt)}`,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: `${experience.location}`,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: `${experience.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: `${experience.daysLimit}`,
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
                            text: `${experience.advancedPercent}`,
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
                            style: "header",
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
        })

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