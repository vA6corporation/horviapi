import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, ImageRun, LineRuleType } from 'docx';
import { styles } from './styles';
import * as fs from 'fs';
import { Table1, Table2, Table3, Table4, Table5, Table6 } from './tables';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class StatePatrimonialSituation {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    async create(): Promise<Document> {
        const table1 = new Table1(this.business)
        const table2 = new Table2(this.business)
        const table3 = new Table3(this.business)
        const table4 = new Table4()
        const table5 = new Table5()
        const table6 = new Table6()
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()
        const lineBlank = new Paragraph({ spacing: { line: 0 } })

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
                                height: convertMillimetersToTwip(279.4),
                                width: convertMillimetersToTwip(263.7),
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
                                        './src/templates-insur/template2/headerINSUR.png',
                                    ),
                                    transformation: {
                                        width: 995,
                                        height: 170,
                                    },
                                }),
                            ],
                        }),
                        table1.create(),
                        new Paragraph({}),
                        new Paragraph({}),
                        table2.create1(),
                        lineBlank,
                        table2.create2(),
                        lineBlank,
                        table2.create3(),
                        lineBlank,
                        table2.create4(),
                        new Paragraph({
                            spacing: {
                                before: 100,
                                after: 100,
                            },
                            children: [
                                new TextRun({
                                    text: `(1) Adjuntar documentación sustentatoria de los ingresos personales y su origen.`,
                                    style: 'content',
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        table3.create1(),
                        lineBlank,
                        table3.create2(),
                        lineBlank,
                        table3.create3(),
                        lineBlank,
                        table3.create4(),
                        new Paragraph({
                            spacing: {
                                line: 120,
                                lineRule: LineRuleType.EXACTLY,
                            },
                        }),
                        table4.create(),
                        new Paragraph({
                            spacing: {
                                line: 120,
                                lineRule: LineRuleType.EXACTLY,
                            },
                        }),
                        table5.create1(),
                        lineBlank,
                        table5.create2(),
                        lineBlank,
                        table5.create3(),
                        lineBlank,
                        table5.create4(),
                        new Paragraph({
                            spacing: {
                                before: 100,
                                after: 50,
                            },
                            children: [
                                new TextRun({
                                    text: `(2) Adjuntar el último Autovalúo de las propiedades y la documentación sustentatoria de los bienes muebles.`,
                                    style: 'content',
                                    size: 22,
                                }),
                            ],
                        }),
                        table6.create1(),
                        lineBlank,
                        table6.create2(),
                        new Paragraph({
                            spacing: {
                                line: 220,
                                lineRule: LineRuleType.EXACTLY,
                            },
                        }),
                        table6.create3(),
                        new Paragraph({
                            spacing: {
                                line: 220,
                                lineRule: LineRuleType.EXACTLY,
                            },
                        }),
                        table6.create4(),
                        new Paragraph({
                            spacing: {
                                before: 1100,
                            },
                            children: [
                                new TextRun({
                                    text: `Declaro bajo juramento que todos y cada uno de los datos e informaciones contenidas en el presente formulario Estado de Situación y cada uno de los documentos que se acompañan con el mismo son expresión fiel de la verdad, y, conforme lo establecido en el Art. 179° de la Ley General del Sistema Financiero y Sistema de Seguros y Orgánica de la Superintendencia de Banca y Seguros, de resultar falsa cualquiera de las declaraciones efectuadas por la presente, me encontraré sujeto a las responsabilidades penales correspondientes. La Compañía se reserva el derecho de reclamar las sanciones civiles y penales que pudieren corresponder por infracción al artículo citado.`,
                                    style: 'content',
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
                                            offset: 7000000,
                                        },
                                        verticalPosition: {
                                            offset: 4000000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            spacing: {
                                before: 1100,
                            },
                            children: [
                                new TextRun({
                                    text: `                En LIMA a ${day} de ${month} de ${year}                                                                         ___________________________________`,
                                    style: 'content',
                                    break: 4,
                                }),
                                new TextRun({
                                    text: `                                                                                                                                                                            Firma`,
                                    style: 'content',
                                    break: 1,
                                }),
                            ],
                        }),
                    ],
                },
            ],
        });
    }
}
