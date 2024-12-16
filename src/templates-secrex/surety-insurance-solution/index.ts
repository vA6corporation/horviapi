import { AlignmentType, BorderStyle, convertMillimetersToTwip, Document, Header, HeadingLevel, ImageRun, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from 'docx';
import * as fs from 'fs';
import { ReadGuaranteeDto } from 'src/templates/dto/read-guarantee.dto';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';
import { formatDate } from '../formatDate';
import { numbering } from './numbering';
import { styles } from './styles';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class SuretyInsuranceSolution {

    constructor(
        private readonly template: ReadTemplateDto,
        private readonly guarantee: ReadGuaranteeDto
    ) { }

    async create() {
        const { business, beneficiary } = this.template

        let imageBuffer: ArrayBuffer | string = ''
        let width = 0
        let height = 0

        if (business.urlSignature) {
            const arrayBuffer = await fetch(business.urlSignature).then(res => res.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
            const dimensions = sizeOf(buffer)
            const ratio = calculateAspectRatio(dimensions.width, dimensions.height, 200, 200)
            width = ratio.width
            height = ratio.height
            imageBuffer = arrayBuffer
        }


        const document = new Document({
            numbering,
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
                    headers: {
                        default: new Header({
                            children: [
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            data: fs.readFileSync('./src/templates-secrex/surety-insurance-solution/images/logo.png'),
                                            transformation: {
                                                width: 200,
                                                height: 60,
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    },
                    children: [
                        new Paragraph({
                            text: "Av. Victor A. Belaúnde 147 - Of. 601 - Torre Real Diez - San Isidro - Perú",
                            children: [
                                new TextRun({
                                    text: "Central: (0511) 399-3500", break: 1
                                })
                            ],
                            style: "body"
                        }),
                        new Paragraph({
                            spacing: {
                                after: 250,
                            },
                            children: [
                                new TextRun({
                                    text: "SEGURO DE CAUCION - OBRAS, SERVICIOS Y SUMINISTROS SOLICITUD PARA LA EMISION DE LA POLIZA",
                                    break: 1
                                })
                            ],
                            alignment: AlignmentType.CENTER,
                            heading: HeadingLevel.TITLE,
                        }),
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE
                            },
                            margins: {
                                left: 100,
                                right: 100,
                                top: 100,
                                bottom: 100,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: "Por la presente les solicitamos la emisión de una fianza con cargo a la Póliza y demás documentación suscrita con Uds., de conformidad con las condiciones anotadas al dorso de la presente,  la misma que autorizamos renovar hasta que procedamos a la devolución física de la misma,  de acuerdo al siguiente detalle: ",
                                                            break: 1
                                                        })
                                                    ],
                                                    alignment: AlignmentType.JUSTIFIED,
                                                    heading: HeadingLevel.HEADING_1,
                                                }),
                                                new Paragraph({
                                                    text: `Nombre o Razón Social del solicitante: ${business.name.toUpperCase()}`,
                                                    style: "body",
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    text: `Denominación de la obra o contrato según las bases: ${this.template.objectDescription}`,
                                                    style: "body",
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    text: `Lugar de ejecución y plazo contractual: ${this.template.executionPlace}`,
                                                    style: "body",
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    text: `Nombre de Entidad licitante/contratante: ${beneficiary.name}`,
                                                    style: "body",
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    text: `Domicilio y Teléfono de Entidad: ${beneficiary.address} ${beneficiary.mobileNumber}`,
                                                    style: "body",
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    text: `Modalidad de fianza (fiel cumplimiento, adelanto directo, etc): ${this.guarantee.guaranteeLabel}`,
                                                    style: "body",
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    text: `Plazo de la fianza: ${this.guarantee.daysLimit}`,
                                                    style: "body",
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    text: `Monto de la fianza solicitada: ${this.guarantee.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                                                    style: "body",
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    text: `Presupuesto base: ${this.template.baseBudget.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                                                    style: "body",
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    text: `Monto del contrato: ${this.template.contractAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                                                    style: "body",
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    text: `Informe sobre los subcontratos importantes suscritos o por  suscribirse. `,
                                                    style: "body",
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    border: {
                                                        bottom: {
                                                            style: BorderStyle.SINGLE,
                                                            size: 1,
                                                        }
                                                    },
                                                    spacing: {
                                                        before: 200,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: ``,
                                                        })
                                                    ]
                                                }),
                                                new Paragraph({}),
                                                new Paragraph({
                                                    border: {
                                                        bottom: {
                                                            style: BorderStyle.SINGLE,
                                                            size: 1,
                                                        }
                                                    },
                                                    spacing: {
                                                        after: 550,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: ``,
                                                        })
                                                    ]
                                                }),
                                            ]
                                        })
                                    ]
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            borders: {
                                                top: {
                                                    style: BorderStyle.SINGLE,
                                                    size: 15,
                                                }
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `Indicar el nombre del depositante de la prenda sobre dinero (solo si fuese distinto al solicitante): ${'___________________________________________________________________________'}`,
                                                            style: "body",
                                                        }),
                                                    ],
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                                new Paragraph({
                                                    spacing: {
                                                        before: 200,
                                                        after: 350,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: `Adjuntar copia del contrato y memoria descriptiva de la obra/servicio/suministro`,
                                                            style: "body",
                                                        }),
                                                    ],
                                                    numbering: {
                                                        reference: 'ordered',
                                                        level: 0,
                                                    },
                                                }),
                                            ]
                                        })
                                    ]
                                })
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "Notas:",
                                    bold: true,
                                    underline: {},
                                    break: 1
                                }),
                                new TextRun({
                                    text: " Los datos arriba consignados figurarán en la carta de la fianza al asegurado, denominado certificado de garantía emitida por Secrex. Es imprescindible que sean llenados correctamente y en su totalidad.",
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "Si el espacio de la presente declaración resultara insuficiente, se adjuntaran hojas complementarias. Cada hoja de la presente declaración y de sus anexos, deberá estar rubricada por el titular o por el Gerente General de la empresa solicitante.",
                                    break: 1
                                }),
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "Los abajo suscritos declaramos que la información y documentación que proporcionamos es veraz y fiel reflejo de la realidad, a los cuales asignamos carácter de declaración jurada en los términos consignados en el artículo 179 de la Ley General del sistema financiero y del sistema de seguros y orgánica de la Superintendencia de Banca y Seguros, y declaramos que somos conocedores del delito de fraude en la administración de personas jurídicas (art. 198, incisos 1 y 2 del código penal) y de sus efectos legales.",
                                    break: 1
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: formatDate(new Date()),
                                    break: 1
                                }),
                            ]
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
                                            offset: 3000000,
                                        },
                                        verticalPosition: {
                                            offset: 4500000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "REPRESENTANTES LEGALES DEL SOLICITANTE",
                                    bold: true,
                                    break: 8
                                }),
                                new TextRun({
                                    text: "FIRMAS Y SELLOS",
                                    bold: true,
                                    break: 1
                                }),
                            ]
                        }),
                        new Paragraph({
                            pageBreakBefore: true,
                            text: "SEGURO DE CAUCION – OBRAS, SERVICIOS Y SUMINISTROS SOLICITUD PARA LA EMISION DE LA FIANZA ",
                            alignment: AlignmentType.CENTER,
                            heading: HeadingLevel.TITLE,
                        }),
                        new Paragraph({
                            spacing: {
                                before: 300,
                            },
                            text: "A continuación se indican algunas de las obligaciones a cargo del Tomador del Seguro, las mismas que declaro conocer y aceptar:",
                            alignment: AlignmentType.JUSTIFIED,
                            heading: HeadingLevel.HEADING_1,
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "1. El Tomador del Seguro ",
                                    bold: true,
                                    break: 2
                                }),
                                new TextRun({
                                    text: "declara conocer y aceptar los términos de la Póliza de Seguro de Caución. Así mismo, declara conocer y aceptar los demás documentos y contratos suscritos con ",
                                }),
                                new TextRun({
                                    text: "LA COMPAÑIA.",
                                    bold: true,
                                })
                            ]
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "2. ",
                                    bold: true,
                                    break: 1
                                }),
                                new TextRun('La Póliza de Seguro de Caución esta sujeta a la existencia de los Convenios de la Fianza al Asegurado, la vigencia de los cuales es esencial para la efectividad del seguro. En el momento de solicitar una garantía específica, '),
                                new TextRun({
                                    text: "LA COMPAÑIA ",
                                    bold: true,
                                }),
                                new TextRun("emitirá el citado documento y una carta de la fianza al Asegurado, denominado certificado de garantía para ser entregada a "),
                                new TextRun({
                                    text: "EL ASEGURADO. ",
                                    bold: true,
                                }),
                                new TextRun("Sin perjuicio de lo anteriormente anotado, "),
                                new TextRun({
                                    text: "LA COMPAÑÍA ",
                                    bold: true
                                }),
                                new TextRun("se reserva el derecho de otorgar cobertura, luego de la evaluación del riesgo propuesto."),
                            ]
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "3. EL TOMADOR ",
                                    bold: true,
                                    break: 1
                                }),
                                new TextRun("autoriza anticipadamente a "),
                                new TextRun({
                                    text: "LA COMPAÑIA. ",
                                    bold: true,
                                }),
                                new TextRun("quien podrá prorrogar, ampliar, renovar o reducir la cobertura, asumiendo el primero, la prima, gastos e intereses que se generen. "),
                                new TextRun({
                                    text: "LA COMPAÑÍA ",
                                    bold: true,
                                }),
                                new TextRun("emitirá la renovación respectiva, documentos que se pondrán  a disposición de "),
                                new TextRun({
                                    text: "EL TOMADOR y/o ASEGURADO, ",
                                    bold: true
                                }),
                                new TextRun("y que éste declara conocer y aceptar. A solicitud de "),
                                new TextRun({
                                    text: "EL TOMADOR, LA COMPAÑIA ",
                                    bold: true
                                }),
                                new TextRun("entregará copia de la póliza y/o renovaciones.")
                            ]
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "4. LA COMPAÑÍA ",
                                    bold: true,
                                    break: 1
                                }),
                                new TextRun("podrá indemnizar a "),
                                new TextRun({
                                    text: "EL ASEGURADO ",
                                    bold: true
                                }),
                                new TextRun("en caso de siniestro,  por simple mérito del requerimiento notarial o judicial de la obligación garantizada. En este caso, "),
                                new TextRun({
                                    text: "EL TOMADOR ",
                                    bold: true,
                                }),
                                new TextRun("no podrá oponer a "),
                                new TextRun({
                                    text: "LA COMPAÑÍA ",
                                    bold: true,
                                }),
                                new TextRun("ninguna excepción relativa al pago de esta indemnización aunque "),
                                new TextRun({
                                    text: "EL ASEGURADO ",
                                    bold: true
                                }),
                                new TextRun("no cumpla con los procedimientos administrativos que señale el contrato y/o la Ley de Contrataciones del Estado.")
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "5. ",
                                    bold: true,
                                    break: 1
                                }),
                                new TextRun("El pago de la indemnización realizado por "),
                                new TextRun({
                                    text: "LA COMPAÑÍA ",
                                    bold: true,
                                }),
                                new TextRun("será reembolsado en su totalidad por "),
                                new TextRun({
                                    text: "EL TOMADOR ",
                                    bold: true,
                                }),
                                new TextRun("del seguro en un plazo máximo de siete días, a partir de la fecha en que "),
                                new TextRun({
                                    text: "LA COMPAÑÍA ",
                                    bold: true
                                }),
                                new TextRun("hubiera hecho efectiva la indemnización, devengándose a su favor un interés compensatorio equivalente a la tasa Activa en Moneda Nacional (TAMN), pudiendo en estos casos ejecutar las contragarantías otorgados a favor de "),
                                new TextRun({
                                    text: "LA COMPAÑÍA, ",
                                    bold: true
                                }),
                                new TextRun("al vencimiento de dicho plazo.")
                            ]
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "6. ",
                                    bold: true,
                                    break: 1
                                }),
                                new TextRun("Una vez realizado el pago de la indemnización, los derechos y obligaciones que correspondían al "),
                                new TextRun({
                                    text: "TOMADOR ",
                                    bold: true,
                                }),
                                new TextRun("frente al "),
                                new TextRun({
                                    text: "ASEGURADO ",
                                    bold: true,
                                }),
                                new TextRun("no serán oponibles a "),
                                new TextRun({
                                    text: "LA COMPAÑÍA, ",
                                    bold: true
                                }),
                                new TextRun("por lo cual no afectarán la obligación del reembolso.")
                            ]
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "7. ",
                                    bold: true,
                                    break: 1,
                                }),
                                new TextRun("Queda convenido que en caso que la carta de la fianza al Asegurado, denominado certificado de garantía sea solicitada por "),
                                new TextRun({
                                    text: "EL TOMADOR ",
                                    bold: true
                                }),
                                new TextRun("afianzando una empresa o persona distinta del solicitante, se emite por cuenta, costo y riesgo de "),
                                new TextRun({
                                    text: "EL TOMADOR, ",
                                    bold: true
                                }),
                                new TextRun("afectándose en todo caso las garantías reales y personales constituidas en favor de "),
                                new TextRun({
                                    text: "LA COMPAÑIA.",
                                    bold: true
                                })
                            ]
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            pageBreakBefore: true,
                            children: [
                                new TextRun({
                                    text: "8. LA COMPAÑÍA ",
                                    bold: true,
                                    break: 1
                                }),
                                new TextRun("podrá ejecutar cualquiera de las contragarantías constituidas por "),
                                new TextRun({
                                    text: "EL TOMADOR DEL SEGURO ",
                                    bold: true
                                }),
                                new TextRun("a su favor en caso de siniestro. Dichas contragarantías constan en el texto de la Póliza de Caución y/o en el Convenio de la Fianza al Asegurado y/o en documentos independientes, tales como contratos de prenda, contratos de hipotecas, pagarés, etc.")
                            ]
                        }),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            children: [
                                new TextRun({
                                    text: "9. EL TOMADOR DEL SEGURO ",
                                    bold: true,
                                    break: 1
                                }),
                                new TextRun("se obliga a requerimiento de "),
                                new TextRun({
                                    text: "LA COMPAÑÍA ",
                                    bold: true
                                }),
                                new TextRun("a suscribir los contratos y otorgar las escrituras públicas correspondientes, entregando a "),
                                new TextRun({
                                    text: "LA COMPAÑÍA ",
                                    bold: true
                                }),
                                new TextRun("todos los documentos necesarios para la constitución de contragarantías. Los gastos legales, notariales y regístrales u otros que demande su constitución están a cargo del "),
                                new TextRun({
                                    text: "TOMADOR.",
                                    bold: true
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
                                            offset: 3500000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [
                                new TextRun({
                                    text: "___________________________________________",
                                    break: 5,
                                }),
                                new TextRun({
                                    text: "REPRESENTANTES LEGALES DEL SOLICITANTE",
                                    bold: true,
                                    break: 1
                                }),
                                new TextRun({
                                    text: "FIRMAS Y SELLOS",
                                    bold: true,
                                    break: 1
                                }),
                            ]
                        }),
                    ],
                },
            ],
        });
        return document;
    }
}