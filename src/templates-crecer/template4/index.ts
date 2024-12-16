import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, ImageRun, Header, Footer, Table, TableRow, TableCell, WidthType, TableBorders, PageNumber } from 'docx';
import { Table1, Table2, Table3, Table4, Table5, Table6, Table7 } from './tables';
import * as fs from 'fs';
import { styles } from './styles';
import { numbering } from './numbering';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class DueDiligenceForm {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    async create(): Promise<Document> {
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = ('0' + (date.getMonth() + 1)).slice(-2)
        let year = date.getFullYear()

        let imageBuffer: ArrayBuffer | string = ''
        let width = 0
        let height = 0

        if (this.business.urlSignature) {
            const arrayBuffer = await fetch(this.business.urlSignature).then(res => res.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
            const dimensions = sizeOf(buffer)
            const ratio = calculateAspectRatio(dimensions.width, dimensions.height, 200, 200)
            width = ratio.width
            height = ratio.height
            imageBuffer = arrayBuffer
        }

        const table1 = new Table1(this.business)
        const table2 = new Table2(this.business)
        const table3 = new Table3(this.business)
        const table4 = new Table4(this.business)
        const table5 = new Table5(this.business)
        const table6 = new Table6(this.business)
        const table7 = new Table7(this.business)

        return new Document({
            styles,
            numbering,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(0),
                                right: convertMillimetersToTwip(10),
                                bottom: convertMillimetersToTwip(0),
                                left: convertMillimetersToTwip(8),
                                header: 380,
                                footer: 250,
                            },
                        },
                    },
                    headers: {
                        default: new Header({
                            children: [
                                new Table({
                                    borders: TableBorders.NONE,
                                    width: {
                                        size: 100,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    alignment: AlignmentType.LEFT,
                                    rows: [
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    width: {
                                                        size: 30,
                                                        type: WidthType.PERCENTAGE,
                                                    },
                                                    children: [
                                                        new Paragraph({
                                                            children: [
                                                                new ImageRun({
                                                                    data: fs.readFileSync(
                                                                        './src/templates-crecer/logo2.png',
                                                                    ),
                                                                    transformation: {
                                                                        width: 112,
                                                                        height: 37,
                                                                    },
                                                                }),
                                                            ],
                                                            alignment: AlignmentType.LEFT,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    },
                    footers: {
                        default: new Footer({
                            children: [
                                new Paragraph({
                                    alignment: AlignmentType.RIGHT,
                                    children: [
                                        new TextRun({
                                            children: [
                                                'Página ',
                                                PageNumber.CURRENT,
                                                ' de ',
                                                PageNumber.TOTAL_PAGES,
                                            ],
                                            font: 'Arial',
                                            size: 14,
                                            bold: true,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    },
                    children: [
                        table1.create(),
                        new Paragraph({ spacing: { line: 0 } }),
                        table2.create(),
                        new Paragraph({ spacing: { line: 0 } }),
                        table3.create(),
                        new Paragraph({ spacing: { line: 0 } }),
                        table4.create(),
                        new Paragraph({
                            spacing: {
                                after: 200,
                            },
                            children: [
                                new TextRun({
                                    text: '                                                 1Persona Expuestas Políticamente: ',
                                    font: 'Calibri',
                                    italics: true,
                                    size: 17,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'Solo Personas Naturales, nacionales o extranjeras, que cumplen o que en los últimos 5 años hayan ',
                                    font: 'Calibri',
                                    italics: true,
                                    size: 17,
                                }),
                                new TextRun({
                                    text: 'cumplido funciones públicas destacadas o funciones prominentes en una organización internacional, en territorio nacional o extranjero',
                                    font: 'Calibri',
                                    italics: true,
                                    size: 17,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: '2 Vinculación: ',
                                    font: 'Calibri',
                                    italics: true,
                                    bold: true,
                                    size: 17,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'Se presenta entre 2 empresas, cuando una de ellas participa de manera directa o indirecta en la administración, control o capital de la otra.',
                                    font: 'Calibri',
                                    italics: true,
                                    size: 17,
                                }),
                            ],
                        }),
                        table5.create1(),
                        new Paragraph({ spacing: { line: 0 } }),
                        table5.create2(),
                        new Paragraph({ spacing: { line: 0 } }),
                        table6.create(),
                        new Paragraph({ spacing: { line: 0 } }),
                        table7.create(),
                        new Paragraph({ spacing: { line: 0 } }),
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
                                            offset: 1000,
                                        },
                                        verticalPosition: {
                                            offset: 1000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            margins: {
                                                bottom: 100,
                                            },
                                            width: {
                                                size: 60,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `Fecha:  ${day}/${month}/${year}`,
                                                            style: 'subtitle',
                                                            size: 20,
                                                            break: 4,
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            margins: {
                                                bottom: 100,
                                            },
                                            width: {
                                                size: 40,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: 'Firma del Representante Legal',
                                                            style: 'subtitle',
                                                            size: 20,
                                                            break: 4,
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
