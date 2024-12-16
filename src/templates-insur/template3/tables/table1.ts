import { Paragraph, BorderStyle, Table, TableCell, TableRow, WidthType, TextRun, VerticalAlign, ShadingType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { formatDateShort } from 'src/format-date';
import { ReadPartnershipDto } from 'src/partnerships/dto/read-partnership.dto';

export class Table1 {

    constructor(
        private readonly partnership: ReadPartnershipDto | null,
        private readonly business: ReadBusinessDto,
    ) { }

    create(): Table {
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
                            shading: { fill: '000080', type: ShadingType.REVERSE_DIAGONAL_STRIPE, color: '#000080' },
                            verticalAlign: VerticalAlign.CENTER,
                            margins: {
                                left: 80,
                            },
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `IDENTIFICACIÓN DEL CLIENTE / CONTRATANTE / AFIANZADO`,
                                            color: 'ffffff',
                                            style: 'title',
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
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `RAZÓN SOCIAL / NOMBRE DEL CONSORCIO`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.partnership ? this.partnership.name.toUpperCase() : this.business.name.toUpperCase()}`,
                                            style: 'content',
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
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `R.U.C.`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.partnership ? this.partnership.document : this.business.document}`,
                                            style: 'content',
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
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `DIRECCIÓN: Calle / Av. / Jr. / Psje. / N°`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.partnership ? this.partnership.address.toUpperCase() : this.business.addressOrigin.toUpperCase()}`,
                                            style: 'content',
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
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Urb. / Distrito / Prov. / Depto.`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.partnership ? `` : `${this.business.districtOrigin.toUpperCase()} ${this.business.provinceOrigin.toUpperCase()} ${this.business.departmentResidence.toUpperCase()}`,
                                            style: 'content',
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
                            verticalAlign: VerticalAlign.BOTTOM,
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
                                            text: `TELÉFONO`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.partnership ? this.partnership.phoneNumber : this.business.phoneNumber} ${this.partnership ? '' : this.business.mobileNumber}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `FAX`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 23,
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
                new TableRow({
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `E-MAIL`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.partnership ? this.partnership.email.toUpperCase() : this.business.email.toUpperCase()}`,
                                            style: 'content',
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
                            verticalAlign: VerticalAlign.BOTTOM,
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
                                            text: `PERSONA DE CONTACTO`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.partnership ? this.partnership.representativeName.toUpperCase() : this.business.representativeName.toUpperCase()}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `E-MAIL`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            width: {
                                size: 23,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.partnership ? '' : this.business.representativeEmail?.toUpperCase()}`,
                                            style: 'content',
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
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `FECHA DE CONSTITUCIÓN DE LA EMPRESA`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.partnership ? formatDateShort(this.partnership.constitutedAt) : formatDateShort(this.business.inscriptionAt)}`,
                                            style: 'content',
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
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `ACTIVIDAD ECONÓMICA`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.BOTTOM,
                            margins: {
                                left: 80,
                            },
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.business.turnOfBusiness.toUpperCase(),
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
}
