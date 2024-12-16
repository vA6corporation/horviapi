import { Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";

export class TableFour {

    constructor(
        private readonly business: ReadBusinessDto,
    ) { }

    create() {
        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE
            },
            margins: {
                top: 80,
                left: 80,
                right: 80,
            },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            margins: {
                                top: 20,
                                bottom: 20,
                            },
                            columnSpan: 5,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '4. Líneas u Operaciones Específicas vigentes aprobadas por el sistema financiero y/o asegurador',
                                            bold: true,
                                            font: "Tahoma",
                                            size: 18
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            width: { size: 20, type: WidthType.PERCENTAGE },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Entidad Financiera`,
                                            font: "Tahoma",
                                            bold: true
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: { size: 15, type: WidthType.PERCENTAGE },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Crédito No.`,
                                            font: "Tahoma",
                                            bold: true
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: { size: 18, type: WidthType.PERCENTAGE },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Modalidad`,
                                            font: "Tahoma",
                                            bold: true
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: { size: 18, type: WidthType.PERCENTAGE },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Línea de Crédito US$ y/o S/.`,
                                            font: "Tahoma",
                                            bold: true
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: { size: 29, type: WidthType.PERCENTAGE },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Garantía Otorgada`,
                                            font: "Tahoma",
                                            bold: true
                                        }),
                                    ],
                                }),
                            ],
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
            ],
        });
    }
}