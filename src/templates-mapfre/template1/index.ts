import { AlignmentType, convertMillimetersToTwip, Document, ImageRun, Paragraph, TextRun, UnderlineType } from 'docx';
import { styles } from './styles';
import { numbering } from './numbering';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { NumberALetters } from 'src/templates-secrex/numberALetters';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class LetterInstructions {

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
                                top: convertMillimetersToTwip(24.5),
                                right: convertMillimetersToTwip(29),
                                bottom: convertMillimetersToTwip(25),
                                left: convertMillimetersToTwip(30),
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
                                    text: 'CARTA DE INSTRUCCIONES PERSONA JURIDICA',
                                    bold: true,
                                    underline: {
                                        type: UnderlineType.SINGLE,
                                        color: '000000',
                                    },
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `FECHA: ${day} de ${month} de ${year}`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'Señores',
                                    break: 4,
                                }),
                                new TextRun({
                                    text: 'MAPFRE PERU COMPAÑÍA DE SEGUROS Y REASEGUROS',
                                    break: 1,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'Av. 28 de Julio Nº 873 - Miraflores ',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'Presente.-',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'Atn.: 	Unidad de Cauciones',
                                    break: 3,
                                }),
                                new TextRun({
                                    text: 'Ref:	Instrucciones irrevocables',
                                    break: 3,
                                }),
                                new TextRun({
                                    text: 'Estimados Señores:',
                                    break: 3,
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Por medio de la presente, (nombre de la persona jurídica)  ${this.business.name.toUpperCase()}, con Registro Único de Contribuyentes ${this.business.document}, representada por don (doña) ${this.business.representativeName != null ? this.business.representativeName?.toUpperCase() : '___________________________'} identificado con DNI Nº ${this.business.representativeDocument != null ? this.business.representativeDocument : '___________________'}, según poderes cuyo certificado de vigencia emitido por Registros Públicos acompaño, autorizo expresa e irrevocablemente a ustedes a utilizar el monto de S/. ${(this.business.amountUse != null && this.business.amountUse > 0) ? this.business.amountUse + '(' + NumberALetters(this.business.amountUse) + ')' : '__________________ (_________________________________________'} y 00/100 nuevos soles) que hemos depositado en la  cuenta  Nº 580759  del  Banco Scotiabank, a nombre de su representada, para respaldar la emisión de Pólizas de Caución y/o Cartas Fianza (en lo sucesivo denominadas las `,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'Pólizas de Caución y/o Cartas Fianza',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ') que Mapfre Perú Compañía de Seguros y Reaseguros otorgue o haya otorgado en respaldo de obligaciones de la (s) siguiente (s) empresa (s):',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Empresa 1.`,
                                    break: 1,
                                    bold: true,
                                    underline: {
                                        type: UnderlineType.SINGLE,
                                    },
                                }),
                                new TextRun({
                                    text: `Nombre: ${this.business.name}`,
                                    break: 2,
                                }),
                                new TextRun({
                                    text: `Nº de Partida Electrónica y Zona Registral: ${typeof this.business.electronicDeparture !== 'undefined' ? this.business.electronicDeparture : ''} ${typeof this.business.registryArea !== 'undefined' ? this.business.registryArea : ''}`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `RUC: ${this.business.document}`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Dirección: ${this.business.addressOrigin}`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'En lo sucesivo denominada (s) ',
                                    break: 2,
                                }),
                                new TextRun({
                                    text: 'EL CLIENTE.',
                                    bold: true,
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Asimismo, declaro expresamente que los fondos antes indicados, depositados en vuestras cuentas, servirán para respaldar también las obligaciones presentes, pasadas y futuras relacionados con tales ',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'Pólizas de Caución y/o Cartas Fianza',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ', derivadas de los siguientes conceptos',
                                }),
                            ],
                        }),
                        new Paragraph({
                            spacing: {
                                after: 80,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Importes pagados por causa del honramiento y/o ejecución de las ',
                                }),
                                new TextRun({
                                    text: 'Pólizas de Caución y/o Cartas Fianza.',
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Pago de los intereses devengados por causa del honramiento y/o ejecución de las ',
                                }),
                                new TextRun({
                                    text: 'Pólizas de Caución y/o Cartas Fianza.',
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Primas de seguro, tasas y/o comisiones, incluyendo gastos e impuestos.',
                                }),
                            ],
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Gastos, costos y costas derivados de la ejecución de la presente garantía mobiliaria.',
                                }),
                            ],
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Igualmente, declaramos expresamente que el (los) depósito (s) respaldará (n) también toda obligación de los consorcios de los cuales formen parte integrante las empresas anteriormente señaladas, así como toda obligación derivada o relacionada con las ',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'Pólizas de Caución y/o Cartas Fianza ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ' y todas sus renovaciones, emitidas por ',
                                }),
                                new TextRun({
                                    text: 'Mapfre  Perú  Compañía  de  Seguros y Reaseguros S.A. ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ' frente a terceros  beneficiarios, en  respaldo de  obligaciones de ',
                                }),
                                new TextRun({
                                    text: 'EL CLIENTE y/o los consorcios de los cuales forme parte integrante',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ', quedando incluida dentro de este concepto toda obligación relacionada o derivada con el pago de toda prima, tasa o comisión vinculada a tales ',
                                }),
                                new TextRun({
                                    text: 'Pólizas de Caución y/o Cartas Fianza. ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'Finalmente, declaramos expresamente que renunciamos a los intereses que pudiera (n) generar el (los) depósito (s) entregado (s) a favor de ',
                                    break: 2,
                                }),
                                new TextRun({
                                    text: 'MAPFRE PERÚ COMPAÑÍA DE SEGUROS Y REASEGUROS S.A.',
                                    bold: true,
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
                                            offset: 1500000,
                                        },
                                        verticalPosition: {
                                            offset: 6000000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Acompañamos a la presente los siguientes documentos:',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: '1. ',
                                    break: 2,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ' Copia del R.U.C de la empresa.',
                                }),
                                new TextRun({
                                    text: '2. ',
                                    break: 1,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ' Copia del D.N.I. del representante de la empresa.',
                                }),
                                new TextRun({
                                    text: '3. ',
                                    break: 1,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ' Certificado   de  Vigencia  del   poder emitido   por la   Oficina de Registros   Públicos  (con una ',
                                }),
                                new TextRun({
                                    text: '      antigüedad no mayor de 15 días).',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: '4. ',
                                    break: 1,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: ' Original del comprobante del depósito.',
                                }),
                                new TextRun({
                                    text: 'Atentamente, ',
                                    break: 3,
                                }),
                                new TextRun({
                                    text: 'FIRMA DEL REPRESENTANTE DE LA PERSONA JURIDICA ',
                                    bold: true,
                                    break: 9,
                                }),
                            ],
                        }),
                    ],
                },
            ],
        });
    }
}
