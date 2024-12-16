import { BorderStyle, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
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
                    style: BorderStyle.NONE,
                },
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
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '4. DE LAS OPERACIONES',
                                            bold: true,
                                            font: "Tahoma",
                                            size: 18
                                        }),
                                    ],
                                    pageBreakBefore: true,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `SECTOR: `,
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
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `ACTIVIDAD: ${this.business.turnOfBusiness.toUpperCase()}`,
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
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `LOCAL(ES): `,
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
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `ASEGURADORAS: `,
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
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `BANQUEROS: `,
                                            font: "Tahoma",
                                            size: 18
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}