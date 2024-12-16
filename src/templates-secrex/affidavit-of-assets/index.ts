import { AlignmentType, BorderStyle, convertMillimetersToTwip, Document, HeadingLevel, ImageRun, Paragraph, TextRun, TextWrappingSide, TextWrappingType } from 'docx';
import { styles } from './styles';
import { TableOne, TableThree, TableTwo } from './tables';
import { TableFour } from './tables';
import { formatDate } from '../formatDate';
import * as fs from 'fs';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class AffidavidOfAssets {

    constructor(
        private readonly business: ReadBusinessDto,
    ) { }

    async create() {
        const tableOne = new TableOne(this.business)
        const tableTwo = new TableTwo(this.business.properties)
        const tableThree = new TableThree(this.business.movableProperties)
        const tableFour = new TableFour(this.business.investments)

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
                                top: convertMillimetersToTwip(10),
                                right: convertMillimetersToTwip(20),
                                bottom: convertMillimetersToTwip(10),
                                left: convertMillimetersToTwip(20),
                            },
                        },
                    },
                    children: [
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
                                            offset: 4500000,
                                        },
                                        verticalPosition: {
                                            offset: 8900000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync("./src/templates-secrex/affidavit-of-assets/images/logo.png"),
                                    transformation: {
                                        width: 250,
                                        height: 70,
                                    },
                                })
                            ],
                            // alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            text: "COMPAÑÍA DE SEGUROS DE CRÉDITO Y GARANTÍAS",
                            heading: HeadingLevel.TITLE,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 300,
                            },
                            border: {
                                bottom: {
                                    style: BorderStyle.SINGLE,
                                    size: 15,
                                }
                            },
                            children: [
                                new TextRun({
                                    text: "Av. Victor A. Belaúnde 147 - Of. 601 – Torre Real Diez – San Isidro - Perú",
                                    size: 16,
                                }),
                                new TextRun({
                                    text: "Central: (0511) 399-3500",
                                    break: 1,
                                    size: 16,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 300,
                            },
                            text: 'D E C L A R A C I Ó N   J U R A D A   D E   B I E N E S',
                            alignment: AlignmentType.CENTER,
                            heading: HeadingLevel.HEADING_2,
                        }),
                        tableOne.create(),
                        new Paragraph({}),
                        tableTwo.create(),
                        new Paragraph({}),
                        tableThree.create(),
                        new Paragraph({}),
                        tableFour.create(),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "_",
                                    color: 'ffffff'
                                }),
                                new TextRun({
                                    text: "NOTA:",
                                    bold: true,
                                    underline: {}
                                }),
                                new TextRun({
                                    text: "  Si el espacio de la presente declaración resultase insuficiente, sírvase adjuntar hojas complementarias, "
                                }),
                                new TextRun({
                                    text: "             que deberán estar rubricadas por quien hace la presente declaración.",
                                    break: 1,
                                }),
                            ]
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "Los abajo suscritos declaramos que la información y documentación que proporcionamos es veraz y fiel reflejo de la realidad, a los cuales asignamos carácter de declaración jurada en los términos consignados en el artículo 179 de la Ley General del sistema financiero y del sistema de seguros y orgánica de la Superintendencia de Banca y Seguros, y declaramos que somos conocedores del delito de fraude en la administración de personas jurídicas (Art. 198, incisos 1 y 2 del código penal) y de sus efectos legales.",
                                    break: 2
                                })
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: formatDate(new Date()),
                                    break: 2
                                }),
                            ]
                        }),
                        new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [
                                new TextRun({
                                    text: "____________________________________     ",
                                    break: 4,
                                }),
                                new TextRun({
                                    text: ".",
                                    color: 'ffffff',
                                }),
                                new TextRun({
                                    text: "FIRMA Y SELLO DEL DECLARANTE         ",
                                    bold: true,
                                    break: 1
                                }),
                                new TextRun({
                                    text: ".",
                                    color: 'ffffff',
                                }),
                                new TextRun({
                                    text: `D.N.I. N° ${this.business.representativeDocument}         `,
                                    bold: true,
                                    break: 1
                                }),
                                new TextRun({
                                    text: ".",
                                    color: 'ffffff',
                                }),
                            ]
                        }),
                    ],
                },
            ],
        });
    }
}
