import { AlignmentType, convertMillimetersToTwip, Document, HeadingLevel, ImageRun, PageOrientation, Paragraph, Table, TableBorders, TableCell, TableRow, TextRun, WidthType } from "docx";
import { styles } from "./styles";
import { TableOne } from "./tableOne";
import * as fs from 'fs';
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { calculateAspectRatio } from "src/calculate-aspect-ratio";
const sizeOf = require("image-size")

export class SpecificExperienceOfEachConsorciateCompleted {

    constructor(
        private readonly business: ReadBusinessDto,
    ) { }

    async create(): Promise<Document> {
        const tableOne = new TableOne(this.business)
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
        
        return new Document({
            styles,
            sections: [
                {
                    properties: {
                        page: {
                            size: {
                                orientation: PageOrientation.LANDSCAPE,
                            },
                            margin: {
                                top: convertMillimetersToTwip(5),
                                right: convertMillimetersToTwip(3),
                                bottom: convertMillimetersToTwip(5),
                                left: convertMillimetersToTwip(3),
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
                                            offset: 8200000,
                                        },
                                        verticalPosition: {
                                            offset: 350000,
                                        },
                                    },
                                    data: fs.readFileSync("./src/templates-secrex/specific-experience-of-each-consorciate/images/logo.png"),
                                    transformation: {
                                        width: 210,
                                        height: 60,
                                    },
                                })
                            ],
                            // alignment: AlignmentType.RIGHT,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "EXPERIENCIA  ESPECÍFICA  DE  CADA CONSORCIADO EN OBRAS",
                                    underline: {},
                                    break: 4,
                                })
                            ],
                            heading: HeadingLevel.TITLE,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "(SON  VÁLIDAS  LAS  OBRAS  EJECUTADAS  EN  LOS  ÚLTIMOS  CINCO  (5)  AÑOS)",
                                    size: 22
                                })
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Reporte N° 1                ",
                                    size: 18,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ".",
                                    color: 'ffffff'
                                }),
                            ],
                            alignment: AlignmentType.RIGHT,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "                      CONTRATISTA: ",
                                    size: 24,
                                    bold: true,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: this.business.name,
                                    size: 24
                                })
                            ]
                        }),
                        new Paragraph({}),
                        new Paragraph({}),
                        tableOne.create(),
                        new Paragraph({}),
                        new Table({
                            borders: TableBorders.NONE,
                            width: {
                                size: 85,
                                type: WidthType.PERCENTAGE
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
                                                            text: "(*)   ",
                                                            bold: true,
                                                            break: 1
                                                        }),
                                                        new TextRun({
                                                            text: "En caso de que el avance de la obra sea del 100%, adjuntar: Acta de Recepción y/o Resolución de Liquidación Final."
                                                        }),
                                                    ],
                                                }),
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: "(**)  ",
                                                            bold: true,
                                                        }),
                                                        new TextRun({
                                                            text: "Aplica para el Reporte Nº 2 de Obras Vigentes (FC=Fiel Cumplimiento, AD=Adelanto Directo, AM=Adelanto para Materiales)."
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
                                                                    offset: 200000,
                                                                },
                                                                verticalPosition: {
                                                                    offset: 800000,
                                                                },
                                                            },
                                                        })
                                                    ],
                                                }),
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: "_____________________________________",
                                                            break: 9
                                                        }),
                                                        new TextRun({
                                                            text: "Firma y sello del Representante Legal",
                                                            break: 1,
                                                            bold: true
                                                        }),
                                                        new TextRun({
                                                            text: `Fecha: ${day} de ${month} de ${year}`,
                                                            break: 1,
                                                            bold: true
                                                        })
                                                    ],
                                                }),
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: "Los abajo suscritos declaramos que la información y documentación que proporcionamos es veraz y fiel reflejo de la realidad, a los cuales asignamos carácter de declaración jurada en los términos consignados en el artículo 179 de la Ley General del sistema financiero y del sistema de seguros y orgánica de la Superintendencia de Banca y Seguros, y declaramos que somos conocedores del delito de fraude en la administración de personas jurídicas (art. 198, incisos 1 y 2 del código penal) y de sus efectos legales.",
                                                            break: 1
                                                        })
                                                    ],
                                                    alignment: AlignmentType.JUSTIFIED,
                                                })
                                            ],
                                        })
                                    ]
                                })
                            ],
                        })
                    ]
                }
            ]
        })
    }
}