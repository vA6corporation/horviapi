import { Paragraph, Table, TableCell, TableRow, WidthType, BorderStyle, TextRun, AlignmentType, VerticalAlign } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table5 {

    constructor(
        private readonly business: ReadBusinessDto,
    ) { }

    create(): Table {
        let row: TableRow[] = [
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
                ],
            }),
        ];
        if (this.business.linkedBusinesses?.length > 0) {
            this.business.linkedBusinesses.forEach((element, index) => {
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
                                            text: element.representativeName,
                                            style: 'content',
                                        }),
                                    ],
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
                                            text: `${element.representativeNationality}`,
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
                                            text: element.representativeDocument,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                });
                if (index < 4) {
                    row[index] = dataRow;
                } else {
                    row.push(dataRow);
                }
            });
        }
        return new Table({
            borders: {
                insideHorizontal: {
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 1,
                    color: '333399',
                },
                insideVertical: {
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 1,
                    color: '333399',
                },
                top: {
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 1,
                    color: '333399',
                },
                bottom: {
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 1,
                    color: '333399',
                },
                left: {
                    space: 1,
                    style: BorderStyle.SINGLE,
                    size: 1,
                    color: '333399',
                },
                right: {
                    space: 1,
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
                            width: {
                                size: 40,
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
                                            text: `NACIONALIDAD`,
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
                                size: 39,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `R.U.C. / R.U.T. / C.U.I.T. `,
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
