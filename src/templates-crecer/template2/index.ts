import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, ImageRun, Header, BorderStyle, Table, TableRow, TableCell, WidthType, TableBorders } from 'docx';
import * as fs from 'fs';
import { styles } from './styles';
import { numbering } from './numbering';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class SwornDeclarationOfOriginOfFunds {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    async create(): Promise<Document> {
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = date.toLocaleString('default', { month: 'long' })
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
            numbering,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(23),
                                right: convertMillimetersToTwip(26),
                                bottom: convertMillimetersToTwip(16),
                                left: convertMillimetersToTwip(26),
                                header: 550,
                            },
                        },
                    },
                    headers: {
                        default: new Header({
                            children: [
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync(`./src/templates-crecer/logo2.png`),
                                            transformation: {
                                                width: 125,
                                                height: 38,
                                            },
                                        }),
                                    ],
                                    alignment: AlignmentType.LEFT,
                                }),
                            ],
                        }),
                    },
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 310,
                                after: 280,
                            },
                            children: [
                                new TextRun({
                                    text: `DECLARACION JURADA DE ORIGEN DE FONDOS`,
                                    style: 'title',
                                }),
                                new TextRun({
                                    text: `PERSONA JURIDICA`,
                                    style: 'title',
                                    break: 1,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            spacing: {
                                before: 500,
                                line: 350,
                                after: 260,
                            },
                            children: [
                                new TextRun({
                                    text: `Yo, ${this.business.representativeName.toUpperCase()} con documento de Identidad: Tipo: ${this.business.representativeDocumentType} Nro.${this.business.representativeDocument}, con nacionalidad ${this.business.representativeNationality.toUpperCase()}, en representación de ${this.business.name.toUpperCase()}, identificada con RUC / Otro: N° ${this.business.document} con domicilio legal en ${this.business.addressOrigin.toUpperCase()} Departamento: ${this.business.departmentOrigin?.toUpperCase()} __________________________ con Actividad económica o giro de negocio ${this.business.turnOfBusiness}`,
                                    style: 'content',
                                }),
                                new TextRun({
                                    text: `Efectúo la presente DECLARACIÓN JURADA DE ORIGEN DE FONDOS con el propósito de dar cumplimiento a las normas legales y reglamentarías relativas a la prevención del lavado de activos, leyes Nros. 26702, 27693, DL. 1106, 1313 y demás normas complementarías, ampliatorias y conexas.`,
                                    style: 'content',
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 310,
                            },
                            children: [
                                new TextRun({
                                    text: `Declaro que los fondos que he entregado / entregaré a `,
                                }),
                                new TextRun({
                                    text: `Crecer Seguro `,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: `con ocasión de la relación comercial provienen de la(s) fuente(s) siguiente(s):`,
                                }),
                                new TextRun({
                                    text: `${this.business.sourcesOfIncome}`,
                                    break: 2,
                                }),
                                new TextRun({
                                    text: `Pais de origen de los fondos: ${this.business.countrySource.toUpperCase()}`,
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: `notes2`,
                                level: 0,
                            },
                            style: `contentParagraph`,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 310,
                            },
                            children: [
                                new TextRun({
                                    text: `Los fondos antes mencionados no provienen de ninguna actividad ilícita. No facilitaré que terceros efectúen depósitos en mis cuentas abiertas en `,
                                }),
                                new TextRun({
                                    text: `Crecer Seguro `,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: `con fondos provenientes de actividades ilícitas contempladas en el Código Penal Peruano y/o en leyes específicas, ni efectuaré transacciones destinadas a tales actividades o a favor de personas relacionadas o vinculadas con las mismas.`,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: `notes2`,
                                level: 0,
                            },
                            style: `contentParagraph`,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 310,
                            },
                            children: [
                                new TextRun({
                                    text: `Declaro que deposito los fondos antes mencionados por mi propia voluntad y/o por orden expresa de la(s) persona(s) líneas arriba indicada(s), sin coacción, intimidación o amenaza alguna.`,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: `notes2`,
                                level: 0,
                            },
                            style: `contentParagraph`,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 70,
                            },
                            children: [
                                new TextRun({
                                    text: `En el caso de infracción de cualquiera de los numerales contenidos en el presente documento, eximo al `,
                                }),
                                new TextRun({
                                    text: `Crecer Seguro `,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: `de toda responsabilidad civil, penal o administrativa que se derive de información errónea, falsa o inexacta que yo hubiere proporcionado en este documento o de la violación del mismo.`,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: `notes2`,
                                level: 0,
                            },
                            style: `contentParagraph`,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `       ${day} de ${month} del ${year}`,
                                    style: 'content',
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
                                            offset: 1000000,
                                        },
                                        verticalPosition: {
                                            offset: 7800000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Table({
                            borders: TableBorders.NONE,
                            width: {
                                size: 68,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            width: {
                                                size: 42,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `--------------------------------------------------`,
                                                            style: 'content',
                                                            break: 5,
                                                        }),
                                                        new TextRun({
                                                            text: `Firma del Cliente /Representante Legal`,
                                                            style: 'content',
                                                            break: 1,
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 5,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 21,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        line: 255,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: `  _`,
                                                            size: 120,
                                                            color: `ffffff`,
                                                            border: {
                                                                space: 1,
                                                                style: BorderStyle.SINGLE,
                                                                size: 1,
                                                            },
                                                        }),
                                                        new TextRun({
                                                            text: `Huella Digital`,
                                                            style: 'content',
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
