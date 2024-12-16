import { AlignmentType, convertMillimetersToTwip, Document, ImageRun, Paragraph, TextRun, UnderlineType } from 'docx';
import { styles } from './styles';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class WillPay {

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
                                top: convertMillimetersToTwip(15),
                                right: convertMillimetersToTwip(23),
                                bottom: convertMillimetersToTwip(5),
                                left: convertMillimetersToTwip(22),
                            },
                        },
                    },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'No. ...............',
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.RIGHT,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'P A G A R E',
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
                                    text: 'IMPORTE ...............',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'VENCIMIENTO: .. de ........... del . ....',
                                    bold: true,
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.RIGHT,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'DEBO/DEBEMOS y me/nos obligo/amos a pagar solidaria e incondicionalmente, a la orden de ',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: 'MAPFRE PERU COMPAÑÍA DE SEGUROS Y REASEGUROS S.A ',
                                    bold: true,
                                }),
                                new TextRun({
                                    text: '–en adelante MAPFRE- o a quien ésta hubiera transferido este Pagaré, la suma de ......................................, importe que me/nos  obligo/amos a  pagar  en  la  misma moneda antes expresada,  el día indicado como vencimiento, en la oficina principal de MAPFRE, o en el lugar en que se me/nos  presentare a cobro,  con los intereses compensatorios a la tasa efectiva anual de ….. % (……………..por ciento), determinada sobre la base de 360 días calendario, que se generen desde la fecha de emisión de este Pagaré hasta el día de su vencimiento; quedando estipulado que, si no efectuase/mos el pago del capital más los intereses acordados al vencimiento de este Pagaré, abonaré/mos adicionalmente intereses moratorios a la tasa de ….. % (……………..por ciento), hasta la cancelación del monto total liquidado, más los gastos notariales, judiciales, extrajudiciales, tributos y otros si los hubiere.  ',
                                }),
                                new TextRun({
                                    text: 'Me/Nos someto/emos expresamente a la competencia de los Jueces y Tribunales del Distrito Judicial de Lima y señalo/amos como domicilio aquél que aparece indicado en este Pagaré, donde se efectuarán las diligencias notariales, judiciales y demás que fuesen necesarias para los efectos del pago. En caso de variación de domicilio, éste podrá ser opuesto a MAPFRE sólo si le ha sido notificado mediante comunicación notarial en su oficina principal y si el nuevo domicilio está ubicado dentro del radio urbano de esta Ciudad.',
                                    break: 2,
                                }),
                                new TextRun({
                                    text: 'Este Pagaré es de naturaleza mercantil, y por consiguiente está sujeto a las normas de la Ley de Títulos Valores y al proceso de ejecución regulado por el Código Procesal Civil, en su caso. En el supuesto que el presente pagaré haya sido emitido de manera incompleta, de ser el caso, representará la liquidación del importe total que MAPFRE se hubiera visto obligado a pagar como consecuencia del honramiento de garantías que, bajo la forma de pólizas de caución y/o cartas fianza, haya emitido a mi/nuestra solicitud. ',
                                    break: 2,
                                }),
                                new TextRun({
                                    text: 'Quedan desde luego autorizadas todas las prórrogas del  vencimiento de este Pagaré, ya sea por su importe total, cantidad menor o mayor que tuviera a bien concedernos el tenedor, y que sean anotadas por él en este mismo documento, sin que sea necesario que yo/nosotros la/s suscriba/mos nuevamente.',
                                    break: 2,
                                }),
                                new TextRun({
                                    text: 'Autorizo/amos expresa e irrevocablemente a MAPFRE, para que a su vencimiento o en fecha posterior, pueda compensar la suma adeudada y representada por el presente pagaré con cualquier suma de dinero que por cualquier concepto MAPFRE tenga en su poder y que estén destinadas a ser acreditadas a mi/nuestro favor. En tal caso, la aplicación de dichos importes a la suma adeudada se realizará a criterio de MAPFRE.',
                                    break: 2,
                                }),
                                new TextRun({
                                    text: 'El presente Pagaré no requiere ser protestado; sin embargo, el tenedor queda facultado a protestarlo por falta de pago, en cuyo caso asumiré/mos los gastos y comisiones de tal diligencia notarial o de la formalidad sustitutoria correspondiente.',
                                    break: 2,
                                }),
                                new TextRun({
                                    text: 'En los mismos términos y condiciones antes expresados, y declarando haber leído en su integridad, encontrando conforme y aceptado en todos sus extremos, interviene/n en este Pagaré el/la/los cónyuges del/os Emitente/s, asumiendo la misma calidad y  obligaciones que éste/os, conforme a los artículos 292° y 315° del Código Civil, señalando como domicilio el/los mismo/s indicado/s por su/s cónyuges.',
                                    break: 2,
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
                                            offset: 7500000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Lima, ${day} de ${month} del ${year}`,
                                    break: 2,
                                }),
                                new TextRun({
                                    text: '(Ciudad) ',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: '__________________________________________________ ',
                                    break: 8,
                                }),
                                new TextRun({
                                    text: '                                 Firma (s) del (os) Cliente (s)  ',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Nombre/Denominación/Razón Social: ${this.business.name} DNI/RUC No. ${this.business.document}`,
                                    break: 2,
                                }),
                                new TextRun({
                                    text: `Domicilio: ${this.business.addressOrigin} Distrito ${this.business.districtOrigin} Provincia ${this.business.provinceOrigin} Departamento ${this.business.departmentOrigin} Teléfono ${this.business.phoneNumber != null ? this.business.phoneNumber : this.business.mobileNumber != null ? this.business.mobileNumber : ''}`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Representantes: ${this.business.representativeName}`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `DNI del Representante No. ${this.business.representativeDocument != null ? this.business.representativeDocument : ''}`,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: '_________________________________________________________',
                                    break: 3,
                                }),
                                new TextRun({
                                    text: '                    Firma del/a Cónyuge',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: `Nombre: ${this.business.representativeSpouseName != null ? this.business.representativeSpouseName : ''}`,
                                    break: 2,
                                }),
                                new TextRun({
                                    text: `DNI/No. ${this.business.representativeSpouseDocument != null ? this.business.representativeSpouseDocument : ''}`,
                                    break: 1,
                                }),
                            ]
                        }),
                    ],
                },
            ],
        });
    }
}
