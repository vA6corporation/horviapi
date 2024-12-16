import { AlignmentType, BorderStyle, convertMillimetersToTwip, Document, HeadingLevel, ImageRun, Paragraph, Table, TableBorders, TableCell, TableRow, TextRun, WidthType } from "docx";
import * as fs from 'fs';
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { formatDate } from "../formatDate";
import { numbering } from "./numbering";
import { styles } from "./styles";
import { TableFour, TableOne, TableThree, TableTwo } from "./tables";
import { calculateAspectRatio } from "src/calculate-aspect-ratio";
const sizeOf = require("image-size")

export class BasicConfidentialInformationBusiness {

    constructor(
        private readonly business: ReadBusinessDto,
    ) { }

    async create(): Promise<Document> {
        const tableOne = new TableOne(this.business)
        const tableTwo = new TableTwo(this.business)
        const tableThree = new TableThree(this.business.shareholders)
        const tableFour = new TableFour(this.business)

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
                                top: convertMillimetersToTwip(5),
                                right: convertMillimetersToTwip(20),
                                bottom: convertMillimetersToTwip(10),
                                left: convertMillimetersToTwip(20),
                            },
                        },
                    },
                    children: [
                        new Paragraph({
                            // alignment: AlignmentType.CENTER,
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync("./src/templates-secrex/basic-confidential-information/images/logo.png"),
                                    transformation: {
                                        width: 10,
                                        height: 70,
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Av. Victor A. Belaúnde 147 - Of. 601 – Torre Real Diez – San Isidro - Perú',
                                    font: 'Tahoma',
                                    size: 16,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Central: (0511) 399-3500',
                                    font: 'Tahoma',
                                    size: 16,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "INFORMACIÓN CONSOL IDADA – EMPRESA CONSORCIADA",
                                    break: 1
                                })
                            ],
                            alignment: AlignmentType.CENTER,
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({}),
                        tableOne.create(),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({}),
                        tableTwo.create(),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({}),
                        tableThree.create(),
                        new Paragraph({
                            pageBreakBefore: true,
                            alignment: AlignmentType.CENTER,
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync("./src/templates-secrex/basic-confidential-information/images/logo.png"),
                                    transformation: {
                                        width: 250,
                                        height: 70,
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Av. Victor A. Belaúnde 147 - Of. 601 – Torre Real Diez – San Isidro - Perú',
                                    font: 'Tahoma',
                                    size: 16,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Central: (0511) 399-3500',
                                    font: 'Tahoma',
                                    size: 16,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "INFORMACIÓN CONSOL IDADA – EMPRESA CONSORCIADA",
                                    break: 1
                                })
                            ],
                            alignment: AlignmentType.CENTER,
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({}),
                        tableFour.create(),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Los abajo suscritos declaramos que la información y documentación que proporcionamos es veraz y fiel reflejo de la realidad, a los cuales asignamos carácter de declaración jurada en los términos consignados en el artículo 179 de la Ley General del sistema financiero y del sistema de seguros y orgánica de la Superintendencia de Banca y Seguros, y declaramos que somos conocedores del delito de fraude en la administración de personas jurídicas (Art. 198, incisos 1 y 2 del código penal) y de sus efectos legales.",
                                }),
                            ],
                            style: 'body',
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({
                            spacing: { after: 800 },
                            text: formatDate(new Date()),
                        }),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({}),
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
                                            offset: 4500000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Table({
                            width: {
                                size: 60,
                                type: WidthType.PERCENTAGE,
                            },
                            alignment: AlignmentType.RIGHT,
                            borders: TableBorders.NONE,
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            margins: { left: 100, right: 100 },
                                            children: [
                                                new Paragraph({
                                                    border: {
                                                        top: {
                                                            style: BorderStyle.SINGLE,
                                                            size: 10,
                                                        },
                                                        left: {
                                                            style: BorderStyle.SINGLE,
                                                            size: 1,
                                                        },
                                                        right: {
                                                            style: BorderStyle.SINGLE,
                                                            size: 1,
                                                        },
                                                        bottom: {
                                                            style: BorderStyle.SINGLE,
                                                            size: 1,
                                                        },
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: "FIRMAS Y SELLOS DE LOS REPRESENTANTES LEGALES",
                                                        }),
                                                        new TextRun({
                                                            text: "AUTORIZADOS DE LA EMPRESA QUE PROPORCIONA LA",
                                                            break: 1
                                                        }),
                                                        new TextRun({
                                                            text: "INFORMACION",
                                                            break: 1
                                                        })
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                    style: "header"
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        })

                    ],
                },
            ],
        })
    }

}
