import { AlignmentType, BorderStyle, convertMillimetersToTwip, Document, ImageRun, LineRuleType, Paragraph, TextRun } from 'docx';
import { styles } from './styles';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class SwornDeclaration {

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
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(23),
                                right: convertMillimetersToTwip(33),
                                bottom: convertMillimetersToTwip(5),
                                left: convertMillimetersToTwip(33),
                            },
                            size: {
                                height: convertMillimetersToTwip(279.4),
                                width: convertMillimetersToTwip(215.9),
                            },
                        },
                    },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'DECLARACION JURADA',
                                    style: 'title',
                                }),
                                new TextRun({
                                    text: 'DE CONTAR CON OFICIAL DE CUMPLIMIENTO COMO ',
                                    style: 'title',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'SUJETO OBLIGADO A INFORMAR A LA UIF-PERUF',
                                    style: 'title',
                                    break: 1,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            spacing: {
                                line: 490,
                                lineRule: LineRuleType.EXACTLY,
                            },
                            children: [
                                new TextRun({
                                    text: `Nombre/Denominación Social: ${this.business.name}`,
                                    style: 'content',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `RUC: ${this.business.document}`,
                                    style: 'content',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Dirección: ${this.business.addressOrigin} ${this.business.districtOrigin} ${this.business.provinceOrigin} ${this.business.departmentOrigin} ${this.business.countryOrigin} `,
                                    style: 'content',
                                    break: 1,
                                }),
                            ],
                        }),
                        new Paragraph({
                            border: {
                                top: {
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                }
                            },
                            spacing: {
                                before: 330,
                            },
                            children: [
                                new TextRun({
                                    text: `Actividad Económica: ${this.business.turnOfBusiness}`,
                                    style: 'content',
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `En aplicación a los dispuesto por el art. 3 de la Ley Nº 29038 y sus modificatorias, y por el literal m) del art. 8 de la Res. SBS Nº 838-2008 introducida por el Artículo Quinto de la Res. SBS Nº 2108-2011, publicada el 17 de febrero de 2011, el abajo firmante, en la condición de representante legal bajo la que actúa como:`,
                                    style: 'content',
                                    break: 1,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${this.business.representativePosition}`,
                                    style: 'content',
                                    break: 3,
                                }),
                                new TextRun({
                                    text: '__________________________________________',
                                    style: 'content',
                                    size: 14,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: '(Puesto laboral)',
                                    style: 'content',
                                    size: 14,
                                    break: 1,
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'DECLARA BAJO JURAMENTO',
                                    style: 'title',
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Que su representada tiene la calidad de “Sujeto Obligado” a informar a la Unidad de
                  Inteligencia Financiera (UIF-Perú), conforme al art. 3 de la Ley Nº 29038, y que, 
                  además, `,
                                    style: 'content',
                                    break: 2,
                                }),
                                new TextRun({
                                    text: `         NO CUENTA                   `,
                                    style: 'content',
                                    underline: {}
                                }),
                                new TextRun({
                                    text: `  (cuenta / no cuenta)    `,
                                    style: 'content',
                                    size: 14,
                                }),
                                new TextRun({
                                    text: `con un Oficial de `,
                                    style: 'content',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Cumplimiento que se encuentra Registrado ante la Superintendencia de Banca, Seguros y AFP, cuya identidad es de conocimiento de este órgano supervisor.`,
                                    style: 'content',
                                    break: 2,
                                }),
                                new TextRun({
                                    text: `En Lima, el ${day} de ${month} de ${year}`,
                                    style: 'content',
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            spacing: {
                                line: 600,
                                lineRule: LineRuleType.EXACTLY,
                            },
                            children: [
                                new TextRun({
                                    text: `Firmante:`,
                                    style: 'title',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Nombre completo ${this.business.representativeName}`,
                                    style: 'content',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `D.N.I. / C.E.          ${this.business.representativeDocument}`,
                                    style: 'content',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Cargo:                  ${this.business.representativePosition}`,
                                    style: 'content',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Domicilio               ${this.business.representativeAddressResidence}`,
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
                                            offset: 1500000,
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
                                    text: `_______________________________________`,
                                    style: 'content',
                                    break: 3,
                                }),
                                new TextRun({
                                    text: `Firma y sello`,
                                    style: 'content',
                                    size: 18,
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
