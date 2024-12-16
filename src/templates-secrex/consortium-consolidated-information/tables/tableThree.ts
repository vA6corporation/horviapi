import { AlignmentType, BorderStyle, Paragraph, Table, TableBorders, TableCell, TableRow, WidthType } from "docx";
import { ReadPartnershipItemDto } from "src/partnerships/dto/read-partnership-item.dto";

export class TableThree {

    constructor(
        private readonly partnershipItems: ReadPartnershipItemDto[]
    ) { }

    create(): Table {
        const borders1 = {
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
        };
        const borders2 = {
            left: {
                style: BorderStyle.SINGLE,
                size: 1,
            },
            right: {
                style: BorderStyle.SINGLE,
                size: 1,
            },
        };
        const borders3 = {
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
        };
        const rows = [
            new TableRow({
                children: [
                    new TableCell({
                        borders: borders1,
                        columnSpan: 3,
                        children: [new Paragraph({
                            text: "Empresas Integrantes del Consorcio",
                            style: "header",
                        })],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: borders1,
                        width: {
                            size: 45,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            text: "Nombres",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        borders: borders1,
                        width: {
                            size: 7,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            text: "%",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                    new TableCell({
                        borders: borders1,
                        width: {
                            size: 48,
                            type: WidthType.PERCENTAGE
                        },
                        children: [new Paragraph({
                            text: "RUC",
                            style: "header",
                            alignment: AlignmentType.CENTER
                        })],
                    }),
                ],
            }),

            new TableRow({
                children: [
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                    new TableCell({
                        borders: borders2,
                        children: [],
                    }),
                ],
            }),
        ];

        this.partnershipItems.forEach((partnershipItem, index) => {
            const dataItem = new TableRow({
                children: [
                    new TableCell({
                        margins: { left: 70 },
                        borders: borders2,
                        children: [new Paragraph({
                            text: partnershipItem.business.name.toUpperCase(),
                            style: "body",
                        })],
                    }),
                    new TableCell({
                        margins: { left: 70 },
                        borders: borders2,
                        children: [new Paragraph({
                            text: partnershipItem.percent.toString(),
                            style: "body",
                        })],
                    }),
                    new TableCell({
                        margins: { left: 70 },
                        borders: borders2,
                        children: [new Paragraph({
                            text: partnershipItem.business.document,
                            style: "body",
                        })],
                    }),
                ],
            })
            if (index <= 6) {
                rows[index + 2] = dataItem;
            } else {
                rows.push(dataItem);
            }
        });

        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE
            },
            borders: TableBorders.NONE,
            rows: [
                ...rows,
                new TableRow({
                    children: [
                        new TableCell({
                            borders: borders3,
                            children: [],
                        }),
                        new TableCell({
                            borders: borders3,
                            children: [],
                        }),
                        new TableCell({
                            borders: borders3,
                            children: [],
                        }),
                    ],
                }),
            ]
        });
    }
}