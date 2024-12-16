import { AlignmentType, BorderStyle, convertMillimetersToTwip, Document, Header, HeightRule, ImageRun, PageOrientation, Paragraph, Table, TableBorders, TableCell, TableRow, TextRun, UnderlineType, VerticalAlign, WidthType } from 'docx';
import * as fs from 'fs';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';
import { styles } from './styles';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class TableOfCurrentDepositsOfEachConsortiate {

    constructor(
        private readonly template: ReadTemplateDto
    ) { }

    async create(): Promise<Document> {
        let borders = {
            top: {
                style: BorderStyle.DOTTED,
                size: 1,
            },
            bottom: {
                style: BorderStyle.DOTTED,
                size: 1,
            },
            left: {
                style: BorderStyle.DOTTED,
                size: 1,
            },
            right: {
                style: BorderStyle.DOTTED,
                size: 1,
            },
            insideHorizontal: {
                style: BorderStyle.DOTTED,
                size: 1,
            },
            insideVertical: {
                style: BorderStyle.DOTTED,
                size: 1,
            },
        }
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = ('0' + (date.getMonth() + 1)).slice(-2)
        let year = date.getFullYear()
        const marginsCells = {
            left: 100,
            right: 100,
        }
        const heightRow1 = {
            value: 550,
            rule: HeightRule.EXACT,
        }

        let dataGeneral: Table[] = []

        const { business, partnership } = this.template
        const businesses = partnership ? partnership.partnershipItems.map(e => e.business) : [business]

        for (const business of businesses) {

            let imageBuffer: ArrayBuffer | string = ''
            let width = 0
            let height = 0

            if (business.urlSignature) {
                const arrayBuffer = await fetch(business.urlSignature).then(res => res.arrayBuffer())
                const buffer = Buffer.from(arrayBuffer)
                const dimensions = sizeOf(buffer)
                const ratio = calculateAspectRatio(dimensions.width, dimensions.height, 200, 200)
                width = ratio.width
                height = ratio.height
                imageBuffer = arrayBuffer
            }

            let row1: TableRow[] = [
                new TableRow({
                    height: heightRow1,
                    children: [
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                    ],
                }),
                new TableRow({
                    height: heightRow1,
                    children: [
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                        new TableCell({
                            children: [],
                        }),
                    ],
                }),
            ]
            dataGeneral.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: 'CUADRO DE FIANZAS VIGENTES DE CADA CONSORCIADO',
                            style: 'title',
                            break: 3,
                            underline: {
                                type: UnderlineType.SINGLE,
                            },
                        }),
                        new TextRun({
                            text: '(FIANZAS VIGENTES DE OBRAS SIN LIQUIDACION FINANCIERA)',
                            style: 'subtitle',
                            break: 1,
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    pageBreakBefore: true,
                }),
                new Paragraph({
                    spacing: {
                        after: 450,
                    },
                    children: [
                        new TextRun({
                            text: '     CONTRATISTA: ',
                            style: 'subtitle',
                            bold: true,
                            break: 2,
                        }),
                        new TextRun({
                            text: business.name.toUpperCase(),
                            style: 'subtitle',
                        }),
                    ],
                }),
            )
            dataGeneral.push(
                new Table({
                    borders: borders,
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 17,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    rowSpan: 2,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'N° de Licitación y Objeto del Contrato',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 5,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    rowSpan: 2,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '% Avance a la fecha ',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    verticalAlign: VerticalAlign.CENTER,
                                    columnSpan: 3,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Monto de Fianza Original',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    verticalAlign: VerticalAlign.CENTER,
                                    columnSpan: 3,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Monto de Fianza Vigente a la Fecha',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 17,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    rowSpan: 2,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Nombre de Entidades Afianzadoras',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                                new TextRun({
                                                    text: 'A)FC; B) AD; C) AM',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    break: 2,
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
                                    margins: marginsCells,
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Fiel Cumplimiento',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Adelanto Directo',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Adelanto Materiales',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 11,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Fiel Cumplimiento',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Adelanto Directo',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Adelanto Materiales',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        ...row1
                    ],
                }),
                new Paragraph({
                    children: [
                        new ImageRun({
                            data: imageBuffer,
                            transformation: {
                                width,
                                height,
                            },
                            floating: {
                                zIndex: 1,
                                behindDocument: true,
                                horizontalPosition: {
                                    offset: 400000,
                                },
                                verticalPosition: {
                                    offset: 3500000,
                                },
                            },
                        })
                    ],
                }),
                new Paragraph({
                    spacing: {
                        after: 100,
                    },
                    children: [
                        new TextRun({
                            text: '             ___________________________________	',
                            style: 'subtitle',
                            bold: true,
                            break: 4,
                        }),
                        new TextRun({
                            text: '             Firma y sello del Representante Legal',
                            style: 'subtitle',
                            bold: true,
                            break: 1,
                        }),
                        new TextRun({
                            text: `             FECHA:  ${day} / ${month} / ${year}`,
                            style: 'subtitle',
                            bold: true,
                            break: 2,
                        }),
                    ],
                }),
                new Table({
                    borders: TableBorders.NONE,
                    width: {
                        size: 90,
                        type: WidthType.PERCENTAGE,
                    },
                    alignment: AlignmentType.CENTER,
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Los abajo suscritos declaramos que la información y documentación que proporcionamos es veraz y fiel reflejo de la realidad, a los cuales asignamos carácter de declaración jurada en los términos consignados en el artículo 179 de la Ley General del sistema financiero y del sistema de seguros y orgánica de la Superintendencia de Banca y Seguros, y declaramos que somos conocedores del delito de fraude en la administración de personas jurídicas (art. 198, incisos 1 y 2 del código penal) y de sus efectos legales.',
                                                    style: 'contentTable',
                                                    break: 1,
                                                }),
                                            ],
                                            alignment: AlignmentType.JUSTIFIED,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            );
        }
        return new Document({
            styles: styles,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(0),
                                right: convertMillimetersToTwip(5),
                                bottom: convertMillimetersToTwip(50),
                                left: convertMillimetersToTwip(5),
                                header: 250,
                            },
                            size: {
                                orientation: PageOrientation.LANDSCAPE,
                            },
                        },
                    },
                    headers: {
                        default: new Header({
                            children: [
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            floating: {
                                                zIndex: 1,
                                                horizontalPosition: {
                                                    offset: 8700000,
                                                },
                                                verticalPosition: {
                                                    offset: 280000,
                                                },
                                            },
                                            data: fs.readFileSync('./src/templates-crecer/logo2.png'),
                                            transformation: {
                                                width: 165,
                                                height: 55,
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    },
                    children: [
                        ...dataGeneral,
                    ],
                },
            ],
        })
    }
}
