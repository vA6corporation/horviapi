import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, ImageRun, LineRuleType, Table, WidthType, TableRow, TableCell, ShadingType, VerticalAlign, HeightRule, TableBorders, BorderStyle } from 'docx';
import { styles } from './styles';
import * as fs from 'fs';
import { Table1, Table2, Table3, Table4, Table5 } from './tables';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';
import { ReadGuaranteeDto } from 'src/templates/dto/read-guarantee.dto';

export class SuretyInsurance {

    constructor(
        private readonly guarantiesItem: ReadGuaranteeDto,
        private readonly template: ReadTemplateDto
    ) { }

    create(): Document {
        const table1 = new Table1(this.template)
        const table2 = new Table2(this.template)
        const table3 = new Table3(this.template)
        const table4 = new Table4(this.guarantiesItem, this.template)
        const table5 = new Table5(this.guarantiesItem, this.template)
        
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = ('0' + date.getMonth() + 2).slice(-2)
        let year = date.getFullYear()
        let height = {
            value: 500,
            rule: HeightRule.ATLEAST,
        }

        const lineBlank = new Paragraph({
            spacing: {
                line: 80,
                lineRule: LineRuleType.EXACTLY,
            },
        })
        
        const lineBlankCero = new Paragraph({
            spacing: {
                line: 0,
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
                                        './src/templates-insur/template4/headerINSUR.png',
                                    ),
                                    transformation: {
                                        width: 930,
                                        height: 170,
                                    },
                                }),
                            ],
                        }),
                        lineBlank,
                        table1.create(),
                        lineBlank,
                        new Table({
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            rows: [
                                new TableRow({
                                    height: height,
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
                                                            text: `IDENTIFICACIÓN DEL SOLICITANTE / CONTRATANTE / AFIANZADO     (Responsable de pago)`,
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
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            rows: [
                                new TableRow({
                                    height: height,
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
                                                            text: `ENTIDAD BENEFICIARIA`,
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
                        lineBlank,
                        table4.create1(),
                        lineBlank,
                        table4.create2(),
                        lineBlank,
                        table4.create3(),
                        lineBlank,
                        new Table({
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            rows: [
                                new TableRow({
                                    height: height,
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
                                                            text: `COBERTURA: Determinar si es Seriedad de Oferta / Fiel Cumplimiento / Anticipo / Otra (en otra detallar)`,
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
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            rows: [
                                new TableRow({
                                    height: height,
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
                                                            text: `${this.guarantiesItem.guaranteeType}`,
                                                            style: 'content',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    height: height,
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
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            rows: [
                                new TableRow({
                                    height: height,
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
                                                            text: `CONTRATO / OBLIGACIÓN (describir contrato u obligación cuyo cumplimiento se solicita garantizar, indicando fecha de suscripción)`,
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
                        lineBlank,
                        new Table({
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            rows: [
                                new TableRow({
                                    height: height,
                                    children: [
                                        new TableCell({
                                            verticalAlign: VerticalAlign.BOTTOM,
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: ``,
                                                            style: 'content',
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    height: {
                                        value: 700,
                                        rule: HeightRule.ATLEAST,
                                    },
                                    children: [
                                        new TableCell({
                                            verticalAlign: VerticalAlign.BOTTOM,
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `${this.template.objectDescription.toUpperCase()}`,
                                                            style: 'content',
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    height: height,
                                    children: [
                                        new TableCell({
                                            children: [],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        lineBlank,
                        lineBlank,
                        table5.create1(),
                        lineBlank,
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `(Todas las cantidades señaladas deben ir en la moneda indicada)`,
                                    style: 'content',
                                    bold: false,
                                    size: 24
                                }),
                            ],
                        }),
                        new Table({
                            borders: TableBorders.NONE,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    height: height,
                                    children: [
                                        new TableCell({
                                            shading: {
                                                fill: 'b8cce4',
                                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                                color: '#b8cce4',
                                            },
                                            verticalAlign: VerticalAlign.CENTER,
                                            margins: {
                                                left: 80,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `Para uso exclusivo de InSur`,
                                                            style: 'content',
                                                            size: 29,
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
                        table5.create2(),
                        lineBlank,
                        table5.create3(),
                        lineBlankCero,
                        table5.create4(),
                        lineBlankCero,
                        table5.create5(),
                        lineBlank,
                        table5.create6(),
                        lineBlank,
                        new Paragraph({
                            spacing: {
                                after: 400,
                            },
                            border: {
                                bottom: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                },
                            },
                            children: [],
                        }),
                        new Table({
                            borders: TableBorders.NONE,
                            width: {
                                size: 99,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            verticalAlign: VerticalAlign.BOTTOM,
                                            margins: {
                                                left: 80,
                                            },
                                            width: {
                                                size: 6,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `FECHA`,
                                                            style: 'content',
                                                            bold: false,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            verticalAlign: VerticalAlign.BOTTOM,
                                            width: {
                                                size: 18,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            borders: {
                                                bottom: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                },
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `${day}/${month}/${year}`,
                                                            style: 'content',
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 9,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [],
                                        }),
                                        new TableCell({
                                            verticalAlign: VerticalAlign.BOTTOM,
                                            width: {
                                                size: 19,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            borders: {
                                                bottom: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                },
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: ` `,
                                                            style: 'content',
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 9,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [],
                                        }),
                                        new TableCell({
                                            verticalAlign: VerticalAlign.BOTTOM,
                                            width: {
                                                size: 19,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            borders: {
                                                bottom: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                },
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: ` `,
                                                            style: 'content',
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    height: height,
                                    children: [
                                        new TableCell({
                                            width: {
                                                size: 6,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 18,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 9,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [],
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
                                                            text: `Firma y DNI Solicitante`,
                                                            style: 'content',
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 9,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [],
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
                                                            text: `Firma Corredor`,
                                                            style: 'content',
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
                        lineBlank,
                        new Table({
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            rows: [
                                new TableRow({
                                    height: height,
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
                                                            text: `ACEPTACIÓN DE LA SOLICITUD DE SEGURO (para uso exclusivo de InSur)`,
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
                        new Paragraph({
                            spacing: {
                                before: 300,
                            },
                            children: [new TextRun({
                                text: `NOMBRE Y FIRMA APODERADO(S): ____________________________________________________________________`,
                                style: 'content',
                                bold: false,
                                size: 24
                            }),],
                        }),
                        new Paragraph({
                            spacing: {
                                before: 200,
                            },
                            children: [new TextRun({
                                text: `FECHA ${day}/${month}/${year}`,
                                style: 'content',
                                bold: false,
                                size: 24
                            }),],
                        }),
                        new Paragraph({
                            spacing: {
                                before: 200,
                                after: 300,
                            },
                            children: [new TextRun({
                                text: `(*) La cobertura debe estar de acuerdo a lo dispuesto por el artículo 318° de la Ley General. De lo contrario esta solicitud se tendra por no válida.`,
                                style: 'content',
                                bold: false,
                                size: 20
                            }), new TextRun({
                                text: `(*) Esta solicitud forma parte integrante de las condiciones particulares de la póliza. Se debe adjuntar copia del contrato a garantizar.`,
                                style: 'content',
                                bold: false,
                                size: 20,
                                break: 1,
                            }),],
                        }),
                        new Table({
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            borders: {
                                top: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                },
                                bottom: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                },
                                left: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                },
                                right: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                },
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            verticalAlign: VerticalAlign.CENTER,
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        after: 100,
                                                        before: 100,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: `Insur S.A. Compañía de Seguros tiene la obligación de entregar la póliza de seguro al contratante y/o asegurado dentro del plazo de quince (15) días calendario de haber solicitado el seguro, si no media rechazo previo de la solicitud.`,
                                                            style: 'content',
                                                            bold: false,
                                                            size: 22,
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
                        lineBlank,
                        new Table({
                            width: { size: 100, type: WidthType.PERCENTAGE },
                            borders: {
                                top: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                },
                                bottom: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                },
                                left: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                },
                                right: {
                                    style: BorderStyle.SINGLE,
                                    size: 20,
                                },
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            verticalAlign: VerticalAlign.CENTER,
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        after: 100,
                                                        before: 100,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: `La Solicitud de Seguro debe estar firmada por el solicitante y el corredor cuando corresponda, quienes asumen la responsabilidad en cuanto a la veracidad y exactitud de la información proporcionada en este documento. Declaración Jurada de acuerdo a lo dispuesto en el Artículo 179º de la Ley General. `,
                                                            style: 'content',
                                                            bold: false,
                                                            size: 22,
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
        });
    }
}
