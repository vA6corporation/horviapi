import { AlignmentType, BorderStyle, convertMillimetersToTwip, Document, HeadingLevel, ImageRun, Paragraph, TextRun } from "docx";
import * as fs from 'fs';
import { formatDate } from "../formatDate";
import { numbering } from "./numbering";
import { styles } from "./styles";
import { TableFive, TableFour, TableOne, TableThree, TableTwo } from "./tables";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { calculateAspectRatio } from "src/calculate-aspect-ratio";
const sizeOf = require("image-size")

export class BasicConfidentialInformation {

    constructor(
        private readonly business: ReadBusinessDto,
    ) { }

    async create(): Promise<Document> {
        const tableOne = new TableOne(this.business)
        const tableTwo = new TableTwo(this.business)
        const tableThree = new TableThree(this.business.shareholders)
        const tableFour = new TableFour(this.business)
        const tableFive = new TableFive(this.business.facilityCredits)

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
                                    text: "INFORMACION CONFIDENCIAL BASICA",
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
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({}),
                        tableFour.create(),
                        new Paragraph({}),
                        tableFive.create(),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({
                            text: "NOTAS",
                            style: 'header',
                            // pageBreakBefore: true,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Estados Financieros Auditados del último ejercicio concluído o Estados Financieros no Auditados del último ejercicio concluído con copia del  Formulario de Declaración de Impuesto a la Renta  Anual y Comparativo con el ejercicio anterior.",
                                }),
                            ],
                            numbering: {
                                reference: "notes",
                                level: 0,
                            },
                            style: 'body',
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "             Entre Enero y Abril es factible aceptar balances no Auditados.",
                                    break: 1,
                                })
                            ],
                            style: 'body',
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Estados Financieros de Situación con no mas de tres  meses de antigüedad a la fecha de presentación a la compañía con anexos:",
                                }),
                            ],
                            numbering: {
                                reference: "notes",
                                level: 0,
                            },
                            style: 'body',
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "             a)  Cuentas por cobrar (detalle de clientes, montos y antigüedad del documento, alcance no menor al 60% del",
                                    break: 1,
                                }),
                                new TextRun({
                                    text: "             total de la cuenta)",
                                    break: 1,
                                }),
                            ],
                            style: 'body',
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "             b)  Inventarios detallados.",
                                    break: 1,
                                }),
                            ],
                            style: 'body',
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "             c)  Inmuebles, maquinaria y equipo, con detalle de maquinaria.",
                                    break: 1,
                                }),
                            ],
                            style: 'body',
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "             d)  Cuentas por pagar (bancaria y comercial con detalle por acreedores, montos y tipo de operación u obligación",
                                    break: 1,
                                }),
                                new TextRun({
                                    text: "             con el siguiente alcance: bancarias al 100% y demás al 60%)",
                                    break: 1,
                                }),
                            ],
                            style: 'body',
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            text: "Memoria descriptiva de la actividad de la empresa, desarrollo comercial y/o industrial.",
                            numbering: {
                                reference: "notes",
                                level: 0,
                            },
                            style: 'body',
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            text: "Copia certificada y/o legalizada del documento en el cual conste la última modificación en el régimen de los poderes de la sociedad; tal como Escritura Pública de Constitución Social, Modificación de Estatutos, Acta de Junta General de Accionistas o Sesión de Directorio, en la cual se otorguen las facultades expresas a su(s) representante(s) para firmar, suscribir, emitir o aceptar pagarés y/o títulos valores, con la debida constancia de inscripción en los Registros Públicos.",
                            numbering: {
                                reference: "notes",
                                level: 0,
                            },
                            style: 'body',
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            text: "Copia literal de la ficha del Registro de Sociedades en la que conste inscrita la sociedad, la cual deberá tener una fecha de expedición no mayor a los treinta días, pues se requiere acreditar que las facultades del (de los) representante(s) respectivo(s) se encuentren vigentes.",
                            numbering: {
                                reference: "notes",
                                level: 0,
                            },
                            style: 'body',
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            text: "Fotocopia(s) del D.N.I. del (de los) representantes autorizados para la firma del pagaré (las copias expedidas deberán ser de fecha posterior a las últimas elecciones).",
                            numbering: {
                                reference: "notes",
                                level: 0,
                            },
                            style: 'body',
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({
                            text: "LOS ABAJO SUSCRITOS GARANTIZAN QUE LOS DATOS PROPORCIONADOS SON EXACTOS, A LOS CUALES ASIGNAN CARACTER DE DECLARACION JURADA, Y SOMOS CONOCEDORES DEL DELITO DE FRAUDE EN LA ADMINISTRACION DE PERSONAS JURIDICAS (ART. 198, INCISO 1 Y 2 DEL CODIGO PENAL) Y DE SUS EFECTOS LEGALES.",
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({
                            text: formatDate(new Date()),
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
                                            offset: 4000000,
                                        },
                                        verticalPosition: {
                                            offset: 8500000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({
                            text: "\t\t\t\t____________________________________________________________",
                            children: [
                                new TextRun({
                                    text: "\t\t\t\tFIRMAS AUTORIZADAS DE LOS REPRESENTANTES LEGALES DE",
                                    break: 1
                                }),
                                new TextRun({
                                    text: "\t\t\t\tLA EMPRESA QUE PROPORCIONA LA INFORMACION",
                                    break: 1
                                })
                            ],
                            alignment: AlignmentType.CENTER,
                            style: "small"
                        }),
                        new Paragraph({
                            spacing: {
                                before: 50,
                            },
                            children: [
                                new TextRun({
                                    text: 'FORMULA 1',
                                    font: 'Times New Roman',
                                    size: 20,
                                    bold: true,
                                    border: {
                                        space: 5,
                                        style: BorderStyle.SINGLE,
                                        size: 1,
                                    }
                                }),
                            ],
                            alignment: AlignmentType.RIGHT,
                        }),
                    ],
                },
            ],
        })
    }

}
