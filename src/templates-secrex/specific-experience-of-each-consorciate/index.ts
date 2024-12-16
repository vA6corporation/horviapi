import { AlignmentType, convertMillimetersToTwip, Document, HeadingLevel, ImageRun, PageOrientation, Paragraph, Table, TableBorders, TableCell, TableRow, TextRun, WidthType } from "docx";
import * as fs from 'fs';
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { styles } from "./styles";
import { TableOne } from "./tableOne";
import { calculateAspectRatio } from "src/calculate-aspect-ratio";
const sizeOf = require("image-size")

export class SpecificExperienceOfEachConsorciate {

    constructor(
        private readonly business: ReadBusinessDto,
    ) { }

    async create(): Promise<Document> {

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

        const tableOne = new TableOne(this.business)
        const date = new Date()
        const day = ('0' + date.getDate()).slice(-2)
        const month = ('0' + (date.getMonth() + 1)).slice(-2)
        const year = date.getFullYear()

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
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "RELACION DE OBRAS EN EJECUCIÓN A LA FECHA",
                                    underline: {},
                                    break: 4,
                                })
                            ],
                            heading: HeadingLevel.TITLE,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Reporte N° 3                     ",
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
                                    size: 16,
                                    bold: true
                                }),
                                new TextRun({
                                    text: this.business.name,
                                    size: 16
                                })
                            ]
                        }),
                        new Paragraph({}),
                        new Paragraph({}),
                        tableOne.create(),
                        new Paragraph({}),
                        new Table({
                            width: {
                                size: 87,
                                type: WidthType.PERCENTAGE
                            },
                            borders: TableBorders.NONE,
                            alignment: AlignmentType.CENTER,
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: "IMPORTANTE:  Consignar el detalle de TODAS las obras que el contratista esté actualmente ejecutando, ya sea directamente o bajo la modalidad de",
                                                            bold: true,
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: "                           Consorcio, y sea que hayan sido afianzadas por nuestra compañía  o por cualquier otra aseguradora o banco.",
                                                            bold: true,
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
                                                                    offset: 400000,
                                                                },
                                                            },
                                                        })
                                                    ],
                                                }),
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: "_____________________________________",
                                                            break: 5
                                                        }),
                                                        new TextRun({
                                                            text: "Firma y sello del Representante Legal",
                                                            break: 1,
                                                            bold: true
                                                        }),
                                                        new TextRun({
                                                            text: `Fecha: ${day} de ${month} de ${year}`,
                                                            break: 2,
                                                            bold: true
                                                        })
                                                    ],
                                                }),
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: "Los abajo suscritos declaramos que la información y documentación que proporcionamos es veraz y fiel reflejo de la realidad, a los cuales asignamos carácter de declaración jurada en los términos consignados en el artículo 179 de la Ley General del sistema financiero y del sistema de seguros y orgánica de la Superintendencia de Banca y Seguros, y declaramos que somos conocedores del delito de fraude en la administración de personas jurídicas (art. 198, incisos 1 y 2 del código penal) y de sus efectos legales.",
                                                            break: 2,
                                                            size: 14,
                                                        })
                                                    ],
                                                    alignment: AlignmentType.JUSTIFIED,
                                                })
                                            ],
                                        }),
                                    ]
                                }),
                            ],
                        })
                    ]
                }
            ]
        })
    }
}