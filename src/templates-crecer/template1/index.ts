import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ImageRun, TableBorders } from 'docx';
import { Table1, Table2, Table3, Table4 } from './tables';
import * as fs from 'fs';
import { styles } from './styles';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class BasicInformation {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    async create(): Promise<Document> {
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()
        const table1 = new Table1(this.business)
        const table2 = new Table2(this.business)
        const table3 = new Table3(this.business)
        const table4 = new Table4(this.business)

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


        return new Document({
            styles: styles,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(0),
                                right: convertMillimetersToTwip(20),
                                bottom: convertMillimetersToTwip(16),
                                left: convertMillimetersToTwip(20),
                                header: 550,
                            },
                        },
                    },
                    children: [
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    floating: {
                                        zIndex: 1,
                                        horizontalPosition: {
                                            offset: 5500000,
                                        },
                                        verticalPosition: {
                                            offset: 155000,
                                        },
                                    },
                                    data: fs.readFileSync('./src/templates-crecer/logo.png'),
                                    transformation: {
                                        width: 170,
                                        height: 70,
                                    },
                                }),
                            ],
                        }),
                        new Paragraph({
                            spacing: {
                                before: 800,
                                after: 150,
                            },
                            children: [
                                new TextRun({
                                    text: 'INFORMACION BASICA',
                                    style: 'title',
                                    break: 1,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        table1.create(),
                        new Paragraph({
                            spacing: {
                                line: 280,
                            },
                        }),
                        table2.create(),
                        new Paragraph({
                            spacing: {
                                line: 280,
                            },
                        }),
                        table3.create(),
                        new Paragraph({
                            spacing: {
                                line: 280,
                            },
                        }),
                        table4.create(),
                        new Paragraph({
                            spacing: {
                                after: 400,
                            },
                            children: [
                                new TextRun({
                                    text: 'Los abajo suscritos garantizan que los datos proporcionados son exactos, a los cuales asignan carácter de declaración jurada, y somos conocedores del delito de fraude en la administración de personas jurídicas (art. 198, inciso 1 y 2 del código penal) y de sus efectos legales.',
                                    style: 'content',
                                    size: 14,
                                    break: 2,
                                }),
                                new TextRun({
                                    text: 'Declaran tener conocimiento que toda información brindada a una empresa del Sistema de Seguros Nacional constituye una declaración jurada conforme a lo establecido en el artículo 179 de la Ley General del Sistema Financiero y del Sistema de Seguros y Orgánica de la Superintendencia de Banca y Seguros (Ley 26702), por lo que, en caso brinde información falsa o incompleta, quedo sujeto a la sanción establecida en el primer párrafo del artículo 247º del Código Penal, de igual forma, eximo a Crecer Seguros de toda responsabilidad civil, penal o administrativa que pueda derivarse y/o ser consecuencia de la información que alcanzamos en el presente documento.',
                                    style: 'content',
                                    size: 14,
                                    break: 2,
                                }),
                                new TextRun({
                                    text: `Lima, ${day} de ${month} del ${year}`,
                                    style: 'content',
                                    size: 16,
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
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
                                            offset: 4000000,
                                        },
                                        verticalPosition: {
                                            offset: 8800000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Table({
                            borders: TableBorders.NONE,
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            width: {
                                                size: 30,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 50,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: '_______________________________________________',
                                                            style: 'subtitle',
                                                            size: 18,
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: 'FIRMAS AUTORIZADAS DE LOS REPRESENTANTES LEGALES DE',
                                                            style: 'subtitle',
                                                            size: 14,
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: 'LA EMPRESA QUE PROPORCIONA LA INFORMACION',
                                                            style: 'subtitle',
                                                            size: 14,
                                                            break: 1,
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
