import { AlignmentType, BorderStyle, convertMillimetersToTwip, Document, ImageRun, LineRuleType, Paragraph, TextRun } from 'docx';
import * as fs from 'fs';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';
import { numbering } from './numbering';
import { styles } from './styles';
import { Table1, Table2, Table3, Table4 } from "./tables";
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class WarrantyRequest {

    constructor(
        private readonly business: ReadBusinessDto,
        private readonly template: ReadTemplateDto,
        private readonly itsConsortium: boolean
    ) { }

    async create(): Promise<Document> {
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = ('0' + (date.getMonth() + 1)).slice(-2)
        let year = date.getFullYear()
        let hour = date.toLocaleTimeString('en-US')
        const table1 = new Table1(this.business, this.template, this.itsConsortium)
        const table2 = new Table2(this.template)
        const table3 = new Table3(this.template)
        const table4 = new Table4()

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
            numbering,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(16),
                                right: convertMillimetersToTwip(6),
                                bottom: convertMillimetersToTwip(1),
                                left: convertMillimetersToTwip(6),
                            },
                            size: {
                                height: convertMillimetersToTwip(355.6),
                                width: convertMillimetersToTwip(215.9)
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
                                            offset: 1,
                                        },
                                        verticalPosition: {
                                            offset: 1,
                                        },
                                    },
                                    data: fs.readFileSync('./src/templates-mapfre/template6/bg.png'),
                                    transformation: {
                                        width: 818,
                                        height: 170,
                                    },
                                }),
                            ],
                        }),
                        new Paragraph({
                            spacing: {
                                before: 450,
                            },
                            children: [
                                new TextRun({
                                    text: '                                                                                                                                              FECHA  ',
                                }),
                                new TextRun({
                                    border: {
                                        space: 1,
                                        style: BorderStyle.SINGLE,
                                        size: 1,
                                        color: 'BABABA',
                                    },
                                    text: ` ${day}  /  ${month}  /  ${year} `,
                                }),
                                new TextRun({
                                    text: '  HORA ',
                                }),
                                new TextRun({
                                    border: {
                                        space: 1,
                                        style: BorderStyle.SINGLE,
                                        size: 1,
                                        color: 'BABABA',
                                    },
                                    text: `  ${hour}  `,
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'DATOS',
                                    break: 3,
                                    color: 'e40520',
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        table1.create(),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'DATOS DEL CONTRATO',
                                    break: 2,
                                    color: 'e40520',
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        table2.create(),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'DATOS DE LA(S) PÓLIZA(S) SOLICITADA(S)',
                                    break: 2,
                                    color: 'e40520',
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        table3.create(),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'CONTRAGARANTÍAS',
                                    break: 2,
                                    color: 'e40520',
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        table4.create(),
                        new Paragraph({
                            spacing: {
                                line: 1000,
                                lineRule: LineRuleType.AUTO,
                            },
                        }),
                        new Paragraph({
                            spacing: {
                                line: 1000,
                                lineRule: LineRuleType.AUTO,
                            },
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
                                            offset: 3000000,
                                        },
                                        verticalPosition: {
                                            offset: 400000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: '__________________________________',
                                    color: 'e40520',
                                    size: 25,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'FIRMA Y SELLO DEL REPRESENTANTE LEGAL',
                                    break: 1,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    floating: {
                                        zIndex: 2,
                                        horizontalPosition: {
                                            offset: 1,
                                        },
                                        verticalPosition: {
                                            offset: 11750000,
                                        },
                                    },
                                    data: fs.readFileSync('./src/templates-mapfre/template6/footerbg.png'),
                                    transformation: {
                                        width: 818,
                                        height: 110,
                                    },
                                }),
                            ],
                        }),
                    ],
                },
            ],
        });
    }
}
