import { Paragraph, Table, TableCell, TableRow, WidthType, BorderStyle, TextRun, AlignmentType, VerticalAlign } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { ReadPartnershipDto } from 'src/partnerships/dto/read-partnership.dto';

export class Table2 {

    constructor(
        private readonly partnership: ReadPartnershipDto | null,
        private readonly business: ReadBusinessDto,
    ) { }

    create(): Table {
        let row: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                ],
            })
        ];
        if (this.business.boardMembers?.length > 0 && this.partnership == null) {
            this.business.boardMembers.forEach((element, index) => {
                const dataRow = new TableRow({
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 40,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: element.position?.toUpperCase(),
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 22,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: element.name,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 21,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${element.document}`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: element.countryOrigin?.toUpperCase(),
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                });
                if (index < 2) {
                    row[index] = dataRow;
                } else {
                    row.push(dataRow);
                }
            });
        } else if (this.partnership) {
            const dataRow = new TableRow({
                children: [
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        margins: {
                            left: 80,
                        },
                        width: {
                            size: 40,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "GERENTE GENERAL",
                                        style: 'content',
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 22,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: this.partnership.representativeName?.toUpperCase(),
                                        style: 'content',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `${this.partnership.representativeDocument}`,
                                        style: 'content',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: this.partnership.representativeNationality?.toUpperCase(),
                                        style: 'content',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            });
            row[0] = dataRow;
        }
        return new Table({
            borders: {
                insideHorizontal: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                    color: '333399',
                },
                insideVertical: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                    color: '333399',
                },
                top: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                    color: '333399',
                },
                bottom: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                    color: '333399',
                },
                left: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                    color: '333399',
                },
                right: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                    color: '333399',
                },
            },
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            width: { size: 40, type: WidthType.PERCENTAGE },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `CARGO`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 22,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `NOMBRE`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 21,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `DOC. IDENTIDAD`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `NACIONALIDAD`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                ...row,
            ],
        });
    }
}
