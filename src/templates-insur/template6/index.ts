import { convertMillimetersToTwip, Document, Paragraph, ImageRun, LineRuleType, PageOrientation, TextRun, UnderlineType, AlignmentType } from 'docx';
import { styles } from './styles';
import * as fs from 'fs';
import { Table1 } from './tables';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class SimilarServiceSupply {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    async create(): Promise<Document> {
        const table1 = new Table1(this.business)
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
                                orientation: PageOrientation.LANDSCAPE,
                            },
                        },
                    },
                    children: [
                        new Paragraph({
                            spacing: {
                                after: 450,
                            },
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync(
                                        './src/templates-insur/template5/headerINSUR.png',
                                    ),
                                    transformation: {
                                        width: 170,
                                        height: 75,
                                    },
                                }),
                            ],
                        }),
                        new Paragraph({
                            spacing: {
                                after: 300,
                            },
                            children: [
                                new TextRun({
                                    text: `EXPERIENCIA ESPECÍFICA DE LA EMPRESA EN CONTRATOS DE OBRA, SERVICIO O SUMINISTRO SIMILARES`,
                                    style: 'title',
                                    underline: {
                                        type: UnderlineType.SINGLE,
                                    },
                                }),
                                new TextRun({
                                    text: `SON VÁLIDAS LAS OBRAS, SERVICIOS O SUMINISTROS EJECUTADOS EN LOS ÚLTIMOS DIEZ (10) AÑOS`,
                                    style: 'content',
                                    break: 1,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 250,
                            },
                            children: [
                                new TextRun({
                                    text: `Resumen Nº 1               `,
                                    style: 'title',
                                }),
                            ],
                            alignment: AlignmentType.RIGHT,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 500,
                            },
                            children: [
                                new TextRun({
                                    text: `Nombre del Contratante / Afianzado: ${this.business.name?.toUpperCase()}`,
                                    style: 'title',
                                }),
                            ],
                        }),
                        lineBlank,
                        table1.create(),
                        lineBlank,
                        lineBlank,
                        lineBlank,
                        lineBlank,
                        lineBlank,
                        lineBlank,
                        lineBlank,
                        lineBlank,
                        lineBlank,
                        lineBlank,
                        new Paragraph({
                            spacing: {
                                before: 500,
                            },
                            children: [
                                new TextRun({
                                    text: `* Aplica para el Resumen Nº 2 "Cuadro de Cauciones y/o Fianzas vigentes".`,
                                    style: 'content',
                                }),
                                new TextRun({
                                    text: `Los suscritos garantizamos que los datos proporcionados son exactos, a los cuales asignamos carácter de Declaración Jurada.`,
                                    style: 'subtitle',
                                    break: 2,
                                }),
                                new TextRun({
                                    text: `Además, declaramos que somos conocedores del delito de Fraude en la Administración de Personas Jurídicas (Art. 198, inciso 1 y 2 del Código Penal) y sus`,
                                    style: 'subtitle',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `efectos legales.`,
                                    style: 'subtitle',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `_______________________________                                                                                                                      Fecha: ${day}/${month}/${year}`,
                                    style: 'subtitle',
                                    break: 4,
                                }),
                                new TextRun({
                                    text: `Firma y Sello del Representante Legal`,
                                    style: 'subtitle',
                                    break: 1,
                                }),
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
                                            offset: 300000,
                                        },
                                        verticalPosition: {
                                            offset: 200000,
                                        },
                                    },
                                })
                            ],
                        }),
                    ],
                },
            ],
        });
    }
}
