import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, BorderStyle, ShadingType, AlignmentType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table1 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const marginCells = {
            left: 50,
        };
        const borderCells = {
            top: {
                size: 1,
                style: BorderStyle.SINGLE,
            },
            bottom: {
                style: BorderStyle.NONE,
            },
            left: {
                size: 1,
                style: BorderStyle.SINGLE,
            },
            right: {
                size: 1,
                style: BorderStyle.SINGLE,
            },
        };
        const backgroundCells = {
            fill: 'bfbfbf',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#bfbfbf',
        };
        return new Table({
            borders: borderCells,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            shading: backgroundCells,
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'FORMULARIO DE DEBIDA',
                                            style: 'title',
                                        }),
                                        new TextRun({
                                            text: 'DILIGENCIA',
                                            style: 'title',
                                            break: 1,
                                        }),
                                        new TextRun({
                                            text: 'PERSONA JURÍDICA',
                                            style: 'title',
                                            size: 18,
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            shading: backgroundCells,
                            margins: {
                                left: 10,
                            },
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'I. Datos Generales del Contratante / Asegurado / Beneficiario:',
                                            style: 'subtitle',
                                        }),
                                        new TextRun({
                                            text: '     (En caso el Contratante, Asegurado y Beneficiario no fueran las mismas personas, cada uno debe completar un Formulario)',
                                            style: 'subtitle',
                                            break: 1,
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
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Denominación o Razón Social:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.name?.toUpperCase()}`,
                                            style: 'contentTable',
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
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'País de Constitución:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.countryOrigin?.toUpperCase()}`,
                                            style: 'contentTable',
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
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'RUC o similar para no domiciliados:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.document}`,
                                            style: 'contentTable',
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
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Objeto social / CIIU:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.turnOfBusiness}`,
                                            style: 'contentTable',
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
                            margins: marginCells,
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Datos de la oficina o local principal, donde desarrolla las actividades propias al giro del negocio:',
                                            style: 'contentTable',
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
                            margins: marginCells,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Teléfono:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.mobileNumber} ${this.business.mobileNumber}`,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Dirección:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 55,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.addressOrigin?.toUpperCase()}`,
                                            style: 'contentTable',
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
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Correo electrónico',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.business.email,
                                            style: 'contentTable',
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
