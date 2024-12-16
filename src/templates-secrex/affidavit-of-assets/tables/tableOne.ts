import { Paragraph, Table, TableCell, TableRow, WidthType } from "docx";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";

export class TableOne {

    constructor(
        private readonly business: ReadBusinessDto,
    ) { }

    create(): Table {
        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE
            },
            columnWidths: [1200, 5000, 1000, 1500],
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: "NOMBRES",
                                style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: this.business.name,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: "R.U.C.",
                                style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: this.business.document,
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: "DOMICILIO",
                                style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: this.business.addressOrigin,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: "TELF.",
                                style: "header",
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                text: this.business.mobileNumber,
                            })],
                        }),
                    ],
                }),
            ],
        });
    }

} 