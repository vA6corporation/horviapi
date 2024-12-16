import { AlignmentType, BorderStyle, convertMillimetersToTwip, Document, HeadingLevel, ImageRun, Paragraph, Table, TableBorders, TableCell, TableRow, TextRun, WidthType } from "docx";
import * as fs from 'fs';
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";
import { formatDate } from "../formatDate";
import { numbering } from "./numbering";
import { styles } from "./styles";
import { TableOne, TableThree, TableTwo } from "./tables";
import { ReadPartnershipDto } from "src/partnerships/dto/read-partnership.dto";

export class ConsortioConsolidatedInformation {

    constructor(
        private readonly partnership: ReadPartnershipDto,
        private readonly business: ReadBusinessDto,
    ) { }

    create() {
        const tableOne = new TableOne(this.partnership, this.business)
        const tableTwo = new TableTwo(this.partnership)
        const tableThree = new TableThree(this.partnership.partnershipItems)
        
        return new Document({
            styles,
            numbering,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(10),
                                right: convertMillimetersToTwip(20),
                                bottom: convertMillimetersToTwip(5),
                                left: convertMillimetersToTwip(20),
                            },
                        },
                    },
                    children: [
                        new Paragraph({
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync("./src/templates-secrex/consortium-consolidated-information/images/logo.png"),
                                    transformation: {
                                        width: 220,
                                        height: 60,
                                    },
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Av. Victor A. Belaúnde 147 - Of. 601 – Torre Real Diez – San Isidro - Perú",
                                    break: 1,
                                    size: 16,
                                }),
                                new TextRun({
                                    text: "Central: (0511) 399-3500",
                                    break: 1,
                                    size: 16,
                                })
                            ],
                            alignment: AlignmentType.CENTER
                        }),
                        new Paragraph({
                            spacing: {
                                before: 200,
                                after: 200,
                            },
                            children: [
                                new TextRun({
                                    text: "I N F O R M A C I Ó N  C O N S O L I D A D A  C O N S O R C I O",
                                    font: 'Tahoma',
                                    bold: true,
                                    size: 26,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        tableOne.create(),
                        new Paragraph({}),
                        tableTwo.create(),
                        new Paragraph({}),
                        tableThree.create(),
                        new Paragraph({}),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Adjuntar:",
                                    break: 1,
                                    bold: true,
                                    size: 22
                                }),
                                new TextRun({
                                    text: ".- Copia del Contrato de Constitución del Consorcio y/o Promesa de Consorcio",
                                    break: 1
                                }),
                                new TextRun({
                                    text: ".- Reporte N°1 (Obras Similares)",
                                    break: 1
                                }),
                                new TextRun({
                                    text: ".- Reporte N°2 (Fianzas Vigentes)",
                                    break: 1
                                })
                            ]
                        }),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Los abajo suscritos declaramos que la información y documentación que proporcionamos es veraz y fiel reflejo de la realidad, a los cuales asignamos carácter de declaración jurada en los términos consignados en el artículo 179 de la Ley General del sistema financiero y del sistema de seguros y orgánica de la Superintendencia de Banca y Seguros, y declaramos que somos conocedores del delito de fraude en la administración de personas jurídicas (art. 198, incisos 1 y 2 del código penal) y de sus efectos legales."
                                })
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 600,
                            },
                            children: [
                                new TextRun({
                                    text: formatDate(new Date()),
                                    break: 2
                                }),
                            ]
                        }),
                        new Table({
                            borders: TableBorders.NONE,
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            width: {
                                                size: 30,
                                                type: WidthType.PERCENTAGE
                                            },
                                            children: [],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 60,
                                                type: WidthType.PERCENTAGE
                                            },
                                            margins: {
                                                left: 400,
                                                right: 400,
                                            },
                                            children: [
                                                new Paragraph({
                                                    border: {
                                                        top: {
                                                            style: BorderStyle.SINGLE,
                                                            size: 15,
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
                                                    alignment: AlignmentType.CENTER,
                                                    children: [
                                                        new TextRun({
                                                            text: "FIRMAS Y SELLOS DE LOS REPRESENTANTES LEGALES",
                                                            bold: true,
                                                            size: 16,
                                                        }),
                                                        new TextRun({
                                                            text: "AUTORIZADOS DEL CONSORCIO",
                                                            break: 1,
                                                            bold: true,
                                                            size: 16,
                                                        }),
                                                    ]
                                                })
                                            ],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [],
                                        }),
                                        new TableCell({
                                            children: [
                                                new Paragraph({
                                                    alignment: AlignmentType.RIGHT,
                                                    children: [
                                                        new TextRun({
                                                            text: " F O R M A  1 1   ",
                                                            font: 'Times New Roman',
                                                            size: 20,
                                                            bold: true,
                                                            break: 2,
                                                            border: {
                                                                style: BorderStyle.SINGLE,
                                                                size: 1,
                                                                space: 5,
                                                            }
                                                        }),
                                                    ]
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new Paragraph({
                            text: "DOCUMENTACIÓN BÁSICA DE CADA CONSORCIADO",
                            alignment: AlignmentType.CENTER,
                            heading: HeadingLevel.HEADING_1,
                            pageBreakBefore: true,
                        }),
                        new Paragraph({
                            text: "Formato de Información Consolidada – Empresa Consorciada",
                            numbering: {
                                reference: "notes",
                                level: 0,
                            },
                            style: 'body',
                        }),
                        new Paragraph({
                            text: "Estados Financieros Auditados o no Auditados (según corresponda) del último ejercicio concluido con copia del  Formulario de Declaración de Impuesto a la Renta  Anual y Comparativo con el ejercicio anterior y Estados Financieros de Situación con no mas de tres  meses de antigüedad a la fecha de presentación a la compañía con anexos:",
                            numbering: {
                                reference: "notes",
                                level: 0,
                            },
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
                        new Paragraph({
                            text: "Formato de Relación de Bienes de la Empresa.",
                            numbering: {
                                reference: "notes",
                                level: 0,
                            },
                            style: 'body',
                        }),
                        new Paragraph({
                            text: "Formato de Relación Patrimonial de Principal accionista (de cada empresa integrante del consorcio)",
                            numbering: {
                                reference: "notes",
                                level: 0,
                            },
                            style: 'body',
                        }),
                        new Paragraph({}),
                        new Paragraph({}),
                        new Paragraph({
                            alignment: AlignmentType.JUSTIFIED,
                            text: "Los abajo suscritos declaramos que la información y documentación que proporcionamos es veraz y fiel reflejo de la realidad, a los cuales asignamos carácter de declaración jurada en los términos consignados en el artículo 179 de la Ley General del sistema financiero y del sistema de seguros y orgánica de la Superintendencia de Banca y Seguros, y declaramos que somos conocedores del delito de fraude en la administración de personas jurídicas (art. 198, incisos 1 y 2 del código penal) y de sus efectos legales."
                        }),
                        new Paragraph({
                            spacing: {
                                after: 700,
                            },
                            children: [
                                new TextRun({
                                    text: formatDate(new Date()),
                                    break: 2
                                }),
                            ]
                        }),
                        new Table({
                            borders: TableBorders.NONE,
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            width: {
                                                size: 30,
                                                type: WidthType.PERCENTAGE
                                            },
                                            children: [],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 60,
                                                type: WidthType.PERCENTAGE
                                            },
                                            margins: {
                                                left: 400,
                                                right: 400,
                                            },
                                            children: [
                                                new Paragraph({
                                                    border: {
                                                        top: {
                                                            style: BorderStyle.SINGLE,
                                                            size: 15,
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
                                                    alignment: AlignmentType.CENTER,
                                                    children: [
                                                        new TextRun({
                                                            text: "FIRMAS Y SELLOS DE LOS REPRESENTANTES LEGALES",
                                                            bold: true,
                                                            size: 16,
                                                        }),
                                                        new TextRun({
                                                            text: "AUTORIZADOS DEL CONSORCIO",
                                                            break: 1,
                                                            bold: true,
                                                            size: 16,
                                                        }),
                                                    ]
                                                })
                                            ],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [],
                                        }),
                                        new TableCell({
                                            children: [
                                                new Paragraph({
                                                    alignment: AlignmentType.RIGHT,
                                                    children: [
                                                        new TextRun({
                                                            text: " F O R M A  1 1   ",
                                                            font: 'Times New Roman',
                                                            size: 20,
                                                            bold: true,
                                                            break: 2,
                                                            border: {
                                                                style: BorderStyle.SINGLE,
                                                                size: 1,
                                                                space: 5,
                                                            }
                                                        }),
                                                    ]
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
        });
    }
}