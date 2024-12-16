import { AlignmentType, BorderStyle, HeightRule, Paragraph, Table, TableBorders, TableCell, TableRow, TextRun, VerticalAlign, WidthType } from "docx";
import { formatDateShort } from "src/format-date";
import { ReadGuaranteeDto } from "src/templates/dto/read-guarantee.dto";
import { ReadTemplateDto } from "src/templates/dto/read-template.dto";

export class Table4 {

    constructor(
        private readonly guarantiesItem: ReadGuaranteeDto, 
        private readonly template: ReadTemplateDto
    ) { }
    
    borders = {
        top: {
            style: BorderStyle.SINGLE,
            size: 1,
        },
        bottom: {
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
    }
    
    height = {
        value: 500,
        rule: HeightRule.EXACT,
    }

    create1(): Table {
        return new Table({
            borders: TableBorders.NONE,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    height: this.height,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 21,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `RENUEVA PÓLIZA`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.borders,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `SI`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.borders,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 2,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            borders: this.borders,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `NO`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.borders,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `X`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 2,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            borders: this.borders,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Nº`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.borders,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 51,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
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

    create2(): Table {
        return new Table({
            borders: TableBorders.NONE,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    height: this.height,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 21,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `VIGENCIA SOLICITADA`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.borders,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `DESDE `,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.borders,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 12,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ` ${formatDateShort(this.guarantiesItem.startAt)}`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            borders: this.borders,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `HASTA `,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.borders,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 37,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ` ${formatDateShort(this.guarantiesItem.endAt)}`,
                                            style: 'content',
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

    create3(): Table {
        return new Table({
            borders: TableBorders.NONE,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    height: this.height,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 21,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `SUMA ASEGURADA`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.borders,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 22,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `S/. ${this.guarantiesItem.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 57,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                    ],
                }),
            ],
        });
    }
} 