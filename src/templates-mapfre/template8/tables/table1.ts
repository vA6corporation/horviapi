import { Paragraph, BorderStyle, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, ShadingType, VerticalAlign, TextRun, UnderlineType, } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table1 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        let d = new Date();
        let day = ('0' + d.getDate()).slice(-2);
        let month = ('0' + (d.getMonth() + 1)).slice(-2);
        let year = d.getFullYear();
        const heightRowTitle = {
            value: 600,
            rule: HeightRule.EXACT,
        };
        const heightRowcontent = {
            value: 650,
            rule: HeightRule.EXACT,
        };
        const shading1 = {
            fill: 'c00000',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#c00000',
        };
        const shading2 = {
            fill: 'bfbfbf',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#bfbfbf',
        };
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    height: heightRowTitle,
                    tableHeader: true,
                    children: [
                        new TableCell({
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 8,
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            text: 'PERFIL  DEL  CLIENTE - PERSONA JURIDICA',
                                            style: 'title',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    tableHeader: true,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 8,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Tipo de Seguro: _____________________________________________',
                                            break: 1,
                                            font: 'Calibri',
                                            size: 24,
                                        }),
                                        new TextRun({
                                            text: `Fecha: `,
                                            break: 1,
                                            font: 'Calibri',
                                            size: 24,
                                        }),
                                        new TextRun({
                                            text: `${day} de ${month} de ${year}                          `,
                                            font: 'Calibri',
                                            size: 24,
                                            underline: {
                                                color: '#000000',
                                                type: UnderlineType.SINGLE,
                                            }
                                        }),
                                        new TextRun({
                                            text: `.`,
                                            color: 'ffffff'
                                        }),
                                        new TextRun({
                                            text: 'Nota Importante: ',
                                            break: 1,
                                            style: 'subtitle2',
                                        }),
                                        new TextRun({
                                            text: 'Si en este formulario no hubiese espacio suficiente para las explicaciones y respuestas requeridas, en la pestaña anexa "ACCIONISTAS - R.L." puede continuar ingresando datos.',
                                            font: 'Arial',
                                            size: 28,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    tableHeader: true,
                    children: [
                        new TableCell({
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 8,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'I. INFORMACIÓN BÁSICA',
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
                    height: heightRowcontent,
                    tableHeader: true,
                    children: [
                        new TableCell({
                            shading: shading2,
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 8,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'IDENTIFICACIÓN DEL CLIENTE ( marcar con "X":   ',
                                            style: 'subtitle2',
                                        }),
                                        new TextRun({
                                            text: '    ',
                                            border: {
                                                space: 1,
                                                style: BorderStyle.SINGLE,
                                                size: 1,
                                                color: '000000',
                                            },
                                        }),
                                        new TextRun({
                                            text: ' CONTRATANTE   -   ',
                                            style: 'subtitle2',
                                        }),
                                        new TextRun({
                                            text: '    ',
                                            border: {
                                                space: 1,
                                                style: BorderStyle.SINGLE,
                                                size: 1,
                                                color: '000000',
                                            },
                                        }),
                                        new TextRun({
                                            text: ' ASEGURADO   -    ',
                                            style: 'subtitle2',
                                        }),
                                        new TextRun({
                                            text: '    ',
                                            border: {
                                                space: 1,
                                                style: BorderStyle.SINGLE,
                                                size: 1,
                                                color: '000000',
                                            },
                                        }),
                                        new TextRun({
                                            text: ' BENEFICIARIO)',
                                            style: 'subtitle2',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: heightRowcontent,
                    tableHeader: true,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Razón Social:',
                                            style: 'small',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.name?.toUpperCase()}`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Ciudad:',
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.provinceOrigin?.toUpperCase()}`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'País:',
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.countryOrigin?.toUpperCase()}`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: heightRowcontent,
                    tableHeader: true,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Domicilio Legal:',
                                            style: 'small',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.addressOrigin?.toUpperCase()}`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Tipo de Documento:',
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `RUC`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Número de Documento:',
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.document}`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: heightRowcontent,
                    tableHeader: true,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'E-mail:',
                                            style: 'small',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 28,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.email}`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Giro del Negocio:',
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 19,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.turnOfBusiness?.toUpperCase()}`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Teléfono:',
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.phoneNumber != null ? this.business.phoneNumber : ''}`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Celular:',
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.mobileNumber != null ? this.business.mobileNumber : ''}`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: heightRowcontent,
                    tableHeader: true,
                    children: [
                        new TableCell({
                            shading: shading2,
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 8,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '*EN EL CASO DE EMPRESAS EXTRANJERAS',
                                            style: 'subtitle2',
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
