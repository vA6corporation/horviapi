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
        this.shareholders.forEach((shareholder, index) => {
            const dataRow = new TableRow({
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
                            text: shareholder.nationality?.toUpperCase(),
                            style: "body",
                            alignment: AlignmentType.CENTER,
                        })],
                    }),
                ],
            });
            if (index < 5) {
                rows[index + 3] = dataRow;
            } else {
                rows.push(dataRow);
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