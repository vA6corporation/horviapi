import { BorderStyle, Paragraph, Table, TableCell, TableRow, WidthType } from "docx";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { formatDateShort } from "src/format-date";

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
                left: 80,
                right: 80,
            },
            rows: [
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
                            margins: {
                                top: 20,
                                bottom: 20,
                            },
                            children: [new Paragraph({
                                text: "1. DATOS GENERALES DE LA EMPRESA",
                                style: "header",
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `RAZON SOCIAL: ${this.business.name}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `DOMICILIO LEGAL: ${this.business.addressOrigin}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `TELEFONO(S): ${this.business.mobileNumber} ${this.business.mobileNumber}                                                FAX(S):`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `R.U.C. Nº: ${this.business.document}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `INSCRITA EN EL REGISTRO MERCANTIL DE:           EN FECHA: ${formatDateShort(this.business.inscriptionAt)}             FICHA:`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `FIRMA(S) AUTORIZADA(S): ${this.business.representativeName.toUpperCase()}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: "EMPRESA(S) RELACIONADA(S):",
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `EMAIL DE CONTACTO: ${this.business.email}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: {
                                bottom: 200,
                            },
                            children: [new Paragraph({
                                text: `EMAIL DE FACTURACION: ${this.business.email}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
            ],
        });
    }

} 