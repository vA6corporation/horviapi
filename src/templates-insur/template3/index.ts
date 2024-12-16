import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, ImageRun, LineRuleType, Table, WidthType, TableRow, TableCell, ShadingType, VerticalAlign, BorderStyle } from 'docx';
import { styles } from './styles';
import * as fs from 'fs';
import { Table1, Table2, Table3, Table4, Table5, Table6, Table7 } from './tables';
import { ReadPartnershipDto } from 'src/partnerships/dto/read-partnership.dto';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class CustomerCardPjGuarantee {

    constructor(
        private readonly partnership: ReadPartnershipDto | null,
        private readonly business: ReadBusinessDto,
    ) { }

    create(): Document {

        const table1 = new Table1(this.partnership, this.business)
        const table2 = new Table2(this.partnership, this.business)
        const table3 = new Table3(this.partnership, this.business)
        const table4 = new Table4(this.partnership, this.business)
        const table5 = new Table5(this.business)
        const table6 = new Table6(this.business)
        const table7 = new Table7(this.business)

        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()
        const lineBlank = new Paragraph({
            spacing: {
                line: 80,
                lineRule: LineRuleType.EXACTLY,
            },
        })
        return new Document({
            styles,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(5),
                                right: convertMillimetersToTwip(1),
                                bottom: convertMillimetersToTwip(5),
                                left: convertMillimetersToTwip(1),
                            },
                            size: {
                                width: convertMillimetersToTwip(245.4),
                            },
                        },
                    },
                    children: [
                        new Paragraph({
                            spacing: {
                                after: 2050,
                            },
                            children: [
                                new ImageRun({
                                    floating: {
                                        zIndex: 1,
                                        horizontalPosition: {
                                            offset: 1,
                                        },
                                        verticalPosition: {
                                            offset: 1,
                                        },
                                    },
                                    data: fs.readFileSync(
                                        './src/templates-insur/template3/headerINSUR.png',
                                    ),
                                    transformation: {
                                        width: 930,
                                        height: 170,
                                    },
                                }),
                            ],
                        }),
                        table1.create(),
                        lineBlank,
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            shading: { fill: '000080', type: ShadingType.REVERSE_DIAGONAL_STRIPE, color: '#000080' },
                                            verticalAlign: VerticalAlign.CENTER,
                                            margins: {
                                                left: 80,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `ADMINISTRADORES`,
                                                            color: 'ffffff',
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
                        lineBlank,
                        table2.create(),
                        lineBlank,
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            shading: { fill: '000080', type: ShadingType.REVERSE_DIAGONAL_STRIPE, color: '#000080' },
                                            verticalAlign: VerticalAlign.CENTER,
                                            margins: {
                                                left: 80,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `ACCIONISTAS - SOCIOS - EMPRESAS QUE CONFORMAN EL CONSORCIO`,
                                                            color: 'ffffff',
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
                        lineBlank,
                        table3.create(),
                        lineBlank,
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            shading: { fill: '000080', type: ShadingType.REVERSE_DIAGONAL_STRIPE, color: '#000080' },
                                            verticalAlign: VerticalAlign.CENTER,
                                            margins: {
                                                left: 80,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `REPRESENTANTES LEGALES (adjuntar poderes)`,
                                                            color: 'ffffff',
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
                        lineBlank,
                        table4.create(),
                        lineBlank,
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            shading: { fill: '000080', type: ShadingType.REVERSE_DIAGONAL_STRIPE, color: '#000080' },
                                            verticalAlign: VerticalAlign.CENTER,
                                            margins: {
                                                left: 80,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `PERSONAS JURÍDICAS / EMPRESAS VINCULADAS`,
                                                            color: 'ffffff',
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
                        lineBlank,
                        table5.create(),
                        lineBlank,
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            shading: { fill: '000080', type: ShadingType.REVERSE_DIAGONAL_STRIPE, color: '#000080' },
                                            verticalAlign: VerticalAlign.CENTER,
                                            margins: {
                                                left: 80,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `LÍNEAS U OPERACIONES ESPECÍFICAS VIGENTES APROBADAS POR EL SISTEMA FINANCIERO Y/0 ASEGURADOR`,
                                                            color: 'ffffff',
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
                        lineBlank,
                        table6.create(),
                        lineBlank,
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            shading: { fill: '000080', type: ShadingType.REVERSE_DIAGONAL_STRIPE, color: '#000080' },
                                            verticalAlign: VerticalAlign.CENTER,
                                            margins: {
                                                left: 80,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `JUICIOS CIVILES, COMERCIALES, LABORALES, ARBITRALES Y CONTENCIOSOS ADMINISTRATIVOS VIGENTES`,
                                                            color: 'ffffff',
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
                        lineBlank,
                        table7.create(),
                        lineBlank,
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            shading: { fill: '000080', type: ShadingType.REVERSE_DIAGONAL_STRIPE, color: '#000080' },
                                            verticalAlign: VerticalAlign.CENTER,
                                            margins: {
                                                left: 80,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `TIPO DE SEGURO DE CAUCIÓN`,
                                                            color: 'ffffff',
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
                        lineBlank,
                        new Table({
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
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
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
                                                            text: `Obligaciones con Organismos Públicos`,
                                                            style: 'content',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            verticalAlign: VerticalAlign.CENTER,
                                            width: {
                                                size: 22,
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
                                        new TableCell({
                                            verticalAlign: VerticalAlign.CENTER,
                                            width: {
                                                size: 18,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `Oblig. en General`,
                                                            style: 'content',
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            verticalAlign: VerticalAlign.CENTER,
                                            width: {
                                                size: 20,
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
                            ],
                        }),
                        lineBlank,
                        new Table({
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
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            verticalAlign: VerticalAlign.CENTER,
                                            margins: {
                                                left: 80,
                                            },
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        before: 200,
                                                        after: 200,
                                                        line: 350,
                                                        lineRule: LineRuleType.EXACTLY,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: `GERENTE GENERAL/REPRESENTANTE LEGAL: ${this.business.representativeName?.toUpperCase()}`,
                                                            style: 'content',
                                                        }),
                                                        new TextRun({
                                                            text: `DOCUMENTO DE IDENTIDAD: ${this.business.representativeDocument}`,
                                                            style: 'content',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: `FIRMA______________________		FECHA: ${day} / ${month} / ${year}`,
                                                            style: 'content',
                                                            break: 1,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        lineBlank,
                        lineBlank,
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            verticalAlign: VerticalAlign.CENTER,
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `ESTE DOCUMENTO DEBE SER FIRMADO POR QUIEN CORRESPONDA, ASUMIENDO LA RESPONSABILIDAD EN CUANTO A LA VERACIDAD Y LA EXACTITUD DE LA INFORMACIÓN PROPORCIONADA. DECLARACIÓN JURADA DE ACUERDO AL ARTÍCULO 179º DE LA LEY GENERAL.`,
                                                            font: 'Arial',
                                                            size: 20,
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
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Insur S.A. Compañía de Seguros`,
                                    font: 'Arial',
                                    size: 20,
                                    break: 2,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: `Av. Pardo y Aliaga 699, Of. 302, San Isidro, Lima Perú - T:(511) 6164141`,
                                    font: 'Arial',
                                    size: 20,
                                    break: 1,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                },
            ],
        });
    }
}
