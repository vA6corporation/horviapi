import { AlignmentType, BorderStyle, convertMillimetersToTwip, Document, HeadingLevel, ImageRun, Paragraph, TextRun, UnderlineType } from 'docx';
import { styles } from "./styles";
import { formatDate } from "../formatDate";
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class AffidavitOfOriginOfFunds {

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
                                new TextRun({
                                    text: "DECLARACION JURADA DE ORIGEN DE FONDOS",
                                    break: 1,
                                    italics: true
                                }),
                                new TextRun({
                                    text: "Sistema de PREVENCIÓN DE LAVADO DE ACTIVOS Y",
                                    break: 1,
                                    italics: true
                                }),
                                new TextRun({
                                    text: "FINANCIAMIENTO DEL TERRORISMO",
                                    break: 1,
                                    italics: true
                                }),
                                new TextRun({
                                    text: "Resolución SBS Nº 838-2008",
                                    break: 1,
                                    underline: {},
                                    italics: true
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                            heading: HeadingLevel.TITLE
                        }),
                        new Paragraph({}),
                        new Paragraph({
                            text: `Yo, ${this.business.representativeName.toUpperCase()}, Identificado con DNI N° ${this.business.representativeDocument}, en representación de ${this.business.name} declaro, en forma voluntaria, que los fondos utilizados para realizar operaciones en SECREX Compañía de Seguros de Crédito y Garantías, así como los que utilicen para operaciones futuras, provienen de las siguientes fuentes (indicar el origen de los fondos):`,
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Giro del Negocio  ",
                                    break: 1
                                }),
                                new TextRun({
                                    size: 14,
                                    text: ' X ',
                                    border: {
                                        style: BorderStyle.SINGLE,
                                        size: 2,
                                    },
                                }),
                                new TextRun({
                                    text: "   Venta de inmuebles   ",
                                }),
                                new TextRun({
                                    size: 14,
                                    text: '    ',
                                    border: {
                                        style: BorderStyle.SINGLE,
                                        size: 2,
                                    },
                                }),
                                new TextRun({
                                    text: "   Otros (especifique)",
                                }),
                                new TextRun({
                                    text: "_____________________"
                                })
                            ],
                        }),
                        new Paragraph({
                            spacing: {
                                before: 120
                            },
                            children: [
                                new TextRun({
                                    text: "Dividendos           ",
                                    break: 0
                                }),
                                new TextRun({
                                    size: 14,
                                    text: '    ',
                                    border: {
                                        style: BorderStyle.SINGLE,
                                        size: 2,
                                    },
                                }),
                                new TextRun({
                                    text: "   Arrendamientos         ",
                                }),
                                new TextRun({
                                    size: 14,
                                    text: '    ',
                                    border: {
                                        style: BorderStyle.SINGLE,
                                        size: 2,
                                    },
                                }),
                                new TextRun({
                                    text: "  _____________________________________",
                                }),
                                // new TextRun({
                                //   text: "_____________________"
                                // })
                            ],
                        }),
                        new Paragraph({
                            spacing: {
                                before: 120
                            },
                            children: [
                                new TextRun({
                                    text: "Inversiones          ",
                                }),
                                new TextRun({
                                    size: 14,
                                    text: '    ',
                                    border: {
                                        style: BorderStyle.SINGLE,
                                        size: 2,
                                    },
                                }),
                                new TextRun({
                                    text: "   Venta de acciones     ",
                                }),
                                new TextRun({
                                    size: 14,
                                    text: '    ',
                                    border: {
                                        style: BorderStyle.SINGLE,
                                        size: 2,
                                    },
                                }),
                                new TextRun({
                                    text: "  _____________________________________",
                                }),
                                // new TextRun({
                                //   text: "_____________________"
                                // })
                            ]
                        }),
                        new Paragraph({}),
                        new Paragraph({
                            text: "Por lo expuesto, que tiene carácter de Declaración Jurada de Origen de Fondos, asumo total responsabilidad y eximo a SECREX Compañía de Seguros de Crédito y Garantías de toda responsabilidad derivada de información errónea o inexacta que yo hubiera consignado en este documento.",
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({}),
                        new Paragraph({
                            text: formatDate(new Date()),
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Cláusula de Protección",
                                    underline: {
                                        type: UnderlineType.SINGLE,
                                        color: '000000'
                                    },
                                    break: 3
                                }),
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `“En caso EL CLIENTE/Representante Legal hubiera accedido al presente formato de contrato a través de la web o cualquier otro medio electrónico que SECREX Compañía de Seguros de Crédito y Garantías hubiera puesto a su disposición, desde ya manifiesta que en  el  supuesto  que  existiera  alguna  discrepancia  entre  el  presente  documento  y  el impreso y el archivo electrónico del cual se tomó, prevalecerá la versión registrada en los medio electrónicos de la Compañía.”`,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED
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
                                            offset: 1500000,
                                        },
                                        verticalPosition: {
                                            offset: 6300000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "_____________________________________",
                                    break: 7,
                                }),
                                new TextRun({
                                    text: "FIRMA Y NOMBRE del Cliente/Representante Legal",
                                    break: 1,
                                    font: 'Calibri',
                                }),
                                new TextRun({
                                    text: "V°B° del Suscriptor _________________________",
                                    break: 2,
                                    font: 'Calibri',
                                }),
                                new TextRun({
                                    text: "Nombre del Ejecutivo de Negocios: ____________",
                                    break: 2,
                                    font: 'Calibri',
                                }),
                            ]
                        }),
                    ]
                }
            ]
        });
    }
}