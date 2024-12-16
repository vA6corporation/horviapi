import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, Table, TableRow, TableCell, BorderStyle, WidthType, TableBorders } from 'docx';
import { styles } from './styles';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class SwornStatementObligedSubjects {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Document {
        let d = new Date()
        let day = ('0' + d.getDate()).slice(-2)
        let month = d.toLocaleString('default', { month: 'long' })
        let year = d.getFullYear()
        return new Document({
            styles,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(24.5),
                                right: convertMillimetersToTwip(22),
                                bottom: convertMillimetersToTwip(24.5),
                                left: convertMillimetersToTwip(22),
                            },
                        },
                    },
                    children: [
                        new Table({
                            width: {
                                size: 40,
                                type: WidthType.PERCENTAGE,
                            },
                            alignment: AlignmentType.RIGHT,
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            borders: {
                                                top: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 26,
                                                },
                                                bottom: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 26,
                                                },
                                                left: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 26,
                                                },
                                                right: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 26,
                                                },
                                            },
                                            margins: {
                                                top: 50,
                                                left: 300,
                                                bottom: 50,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: 'USAR PAPEL MEMBRETADO',
                                                            style: 'title',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'DECLARACIÓN JURADA DE SUJETOS OBLIGADOS',
                                    style: 'title',
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            style: 'body',
                            children: [
                                new TextRun({
                                    text: `Nombre de la empresa: ${this.business.name}  RUC: ${this.business.document}`,
                                    break: 3,
                                }),
                                new TextRun({
                                    text: `Dirección: ${this.business.addressOrigin}  Localidad: ${this.business.departmentOrigin}`,
                                    break: 2,
                                }),
                                new TextRun({
                                    text: `Actividad económica: ${this.business.turnOfBusiness}`,
                                    break: 2,
                                }),
                            ],
                        }),
                        new Paragraph({
                            style: 'body',
                            children: [
                                new TextRun({
                                    text: 'Por la presente, en aplicación del Artículo 3° de la Ley N° 29038 y sus modificatorias –Ley que incorpora la Unidad de Inteligencia Financiera a la Superintendencia de Banca, Seguros y AFP, y del artículo 8. m) de la Resolución SBS-838-2008 y sus modificatorias – Normas Complementarias para la Prevención del Lavado de Activos y Financiamiento del Terrorismo, el(los) abajo firmante(s), en la condición de Representante(s) Legal(es) bajo la que actúa(n), (indique su cargo)',
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            style: 'body',
                            children: [
                                new TextRun({
                                    text: this.business.representativeName + ' - ' + this.business.representativePosition != null ? this.business.representativePosition : '',
                                    style: 'title',
                                    bold: false,
                                    break: 7,
                                }),
                                new TextRun({
                                    text: 'DECLARA BAJO JURAMENTO',
                                    style: 'title',
                                    break: 3,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            style: 'body',
                            children: [
                                new TextRun({
                                    text: 'Con carácter de Declaración Jurada, que tiene la calidad de “Sujeto Obligado” a informar a la Unidad de Inteligencia Financiera (UIF-Perú), de acuerdo a lo especificado en el Artículo 3° de la Ley 29038, y que, además, cuenta con un Oficial de Cumplimiento que se encuentra registrado en la Superintendencia de Banca, Seguros y AFP, cuya identidad es de conocimiento de este órgano supervisor.',
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 900,
                            },
                            style: 'body',
                            children: [
                                new TextRun({
                                    text: `En LIMA, ${day} de ${month} de ${year}`,
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.RIGHT,
                        }),
                        new Table({
                            borders: TableBorders.NONE,
                            width: {
                                size: 95,
                                type: WidthType.PERCENTAGE,
                            },
                            alignment: AlignmentType.CENTER,
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            width: {
                                                size: 50,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    style: 'body',
                                                    children: [
                                                        new TextRun({
                                                            text: '____________________________',
                                                            break: 4,
                                                        }),
                                                        new TextRun({
                                                            text: 'Firma',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: `DNI: ${this.business.representativeDocument != null ? this.business.representativeDocument : ''}`,
                                                            break: 2,
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 50,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    style: 'body',
                                                    children: [
                                                        new TextRun({
                                                            text: '____________________________',
                                                            break: 4,
                                                        }),
                                                        new TextRun({
                                                            text: 'Firma',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: `DNI: __________________________`,
                                                            break: 2,
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                },
            ],
        })
    }
}
