import { AlignmentType, BorderStyle, convertMillimetersToTwip, Document, ImageRun, LineRuleType, Paragraph, Table, TableCell, TableRow, TextRun, UnderlineType, VerticalAlign, WidthType } from "docx";
import { numbering } from "./numbering";
import { styles } from "./styles";
import { TableOne } from "./tables";
import { TableTwo } from "./tables";
import { TableThree } from "./tables";
import { TableFour } from "./tables";
import { ReadShareholderDto } from "src/shareholders/dto/read-shareholder.dto";
import * as fs from 'fs';

export class PatrimonialRelationshipOfNaturalPerson {

    constructor(private readonly shareholder: ReadShareholderDto) { }

    create() {
        const tableOne = new TableOne(this.shareholder)
        const tableTwo = new TableTwo(this.shareholder)
        const tableThree = new TableThree(this.shareholder)
        const tableFour = new TableFour(this.shareholder)
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()
        
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
                            border: {
                                bottom: {
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                },
                            },
                            children: [
                                new TextRun({
                                    text: "COMPAÑIA DE SEGUROS DE CREDITO Y GARANTIAS",
                                    size: 18,
                                    bold: true,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Av. Victor A. Belaúnde 147 - Of. 601 – Torre Real Diez – San Isidro - Perú",
                                    size: 16,
                                }),
                                new TextRun({
                                    text: "Central: (0511) 399-3500",
                                    break: 1,
                                    size: 16,
                                })
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            spacing: {
                                before: 230,
                                after: 230,
                            },
                            text: "R E L A C I O N  P A T R I M O N I A L  DE  P E R S O N A  N A T U R A L",
                            style: 'header',
                            alignment: AlignmentType.CENTER
                        }),
                        tableOne.create(),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "El suscrito declara ser propietario de los siguientes bienes:",
                                    size: 12,
                                    break: 1
                                })
                            ]
                        }),
                        tableTwo.create(),
                        new Paragraph({
                            spacing: {
                                after: 300,
                            },
                            children: [
                                new TextRun({
                                    text: "(1)    Adjuntar el último Autovalúo.",
                                    size: 12,
                                })
                            ]
                        }),
                        tableThree.create(),
                        new Paragraph({
                            spacing: {
                                after: 300,
                            },
                            children: [
                                new TextRun({
                                    text: "(2)    Adjuntar documentacion sustentatoria",
                                    size: 12,
                                })
                            ]
                        }),
                        tableFour.create(),
                        new Paragraph({}),
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE
                            },
                            borders: {
                                top: {
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                },
                                bottom: {
                                    style: BorderStyle.SINGLE,
                                    size: 13,
                                },
                                left: {
                                    style: BorderStyle.SINGLE,
                                    size: 13,
                                },
                                right: {
                                    style: BorderStyle.SINGLE,
                                    size: 13,
                                },
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            verticalAlign: VerticalAlign.BOTTOM,
                                            children: [new Paragraph({
                                                text: "DEUDA TOTAL EN EL SISTEMA (DIRECTA E INDIRECTA)",
                                                style: "header",
                                                alignment: AlignmentType.CENTER
                                            })],
                                        }),
                                    ],
                                }),
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "(3)    Adjuntar documentacion sustentatoria",
                                    size: 12,
                                })
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: "Los suscritos nos comprometemos a no gravar, vender o enajenar los bienes declarados, ni incrementar nuestras deudas, fianzas y/o avales en más de un 15%, sin previa autorización escrita de SECREX. La presente tiene carácter de Declaración Jurada.",
                                    size: 12,
                                })
                            ]
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `LIMA, ${day} de ${month} de ${year}`,
                                    break: 3
                                }),
                                new TextRun({
                                    text: "............................................\t\t  ...........................................\t\t  ............................................",
                                    break: 1
                                }),
                                new TextRun({
                                    text: "                 Lugar y Fecha\t\t\t               Firma del Titular\t\t\t            Firma del Cónyuge",
                                    break: 1,
                                    size: 14
                                })
                            ]
                        })
                    ]
                }
            ]
        })
    }

}