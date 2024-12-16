import { BorderStyle, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { formatDateShort } from "src/format-date";
import { ReadPartnershipDto } from "src/partnerships/dto/read-partnership.dto";

export class TableOne {

    constructor(
        private readonly partnership: ReadPartnershipDto,
        private readonly business: ReadBusinessDto,
    ) { }

    create(): Table {
        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE
            },
            margins: {
                left: 60,
            },
            borders: {
                insideVertical: {
                    style: BorderStyle.NONE,
                },
                insideHorizontal: {
                    style: BorderStyle.NONE,
                },
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
                            children: [new Paragraph({
                                text: "1. Datos Generales del Consorcio (Obligatorio)",
                                style: "header",
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `RAZON SOCIAL: ${this.partnership.name}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `DOMICILIO LEGAL: ${this.partnership.address}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `TELEFONO(S): ${this.business.mobileNumber} ${this.business.mobileNumber}                     EMAIL DE CONTACTO: ${this.business.email}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                bottom: {
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                    color: '000000',
                                },
                            },
                            children: [new Paragraph({
                                spacing: {
                                    after: 150,
                                },
                                text: `EMAIL DE FACTURACION: ${this.business.email}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `R.U.C. Nº: ${this.partnership.document || this.business.document}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `FECHA CONSTITUCION: ${this.partnership.constitutedAt ? formatDateShort(this.partnership.constitutedAt) : formatDateShort(this.business.inscriptionAt)}`,
                                style: "body"
                            })],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                children: [
                                    new TextRun({
                                        text: "* Incluir el RUC de la empresa a la cual se facturara si es distinta al consorcio",
                                        style: "body",
                                        bold: true,
                                        size: 16,
                                        break: 1,
                                    }),
                                ],
                            })],
                        }),
                    ],
                }),
            ],
        });
    }

} 