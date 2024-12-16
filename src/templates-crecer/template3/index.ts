import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ImageRun, TableBorders } from 'docx';
import { Table1, Table2 } from './tables';
import * as fs from 'fs';
import { styles } from './styles';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class SwornAssetsDeclaration {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Document {
        const table1 = new Table1(this.business)
        const [table2, paragraph1, table3] = new Table2(this.business).create()
        return new Document({
            styles: styles,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(10),
                                right: convertMillimetersToTwip(10),
                                bottom: convertMillimetersToTwip(12),
                                left: convertMillimetersToTwip(12),
                                header: 550,
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
                                            offset: 5600000,
                                        },
                                        verticalPosition: {
                                            offset: 155000,
                                        },
                                    },
                                    data: fs.readFileSync('./src/templates-crecer/logo.png'),
                                    transformation: {
                                        width: 170,
                                        height: 70,
                                    },
                                }),
                            ],
                        }),
                        new Paragraph({
                            spacing: {
                                before: 430,
                                after: 260,
                            },
                            children: [
                                new TextRun({
                                    text: 'DECLARACIÓN JURADA PATRIMONIAL',
                                    style: 'title',
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        table1.create(),
                        new Paragraph({
                            spacing: {
                                line: 280,
                            },
                        }),
                        table2,
                        paragraph1,
                        table3,
                        new Paragraph({
                            spacing: {
                                after: 450,
                            },
                            children: [
                                new TextRun({
                                    text: 'El presente documento expresa la verdad: tiene el valor de declaración jurada, obligándome a informar a Crecer Seguros sobre cualquier cambio en mi patrimonio; así mismo, autorizo a la empresa a verificarla.',
                                    style: 'content',
                                    size: 16,
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Table({
                            borders: TableBorders.NONE,
                            width: {
                                size: 60,
                                type: WidthType.PERCENTAGE,
                            },
                            alignment: AlignmentType.CENTER,
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            width: {
                                                size: 20,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: '…………………..…………… ',
                                                            style: 'content',
                                                            size: 16,
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: 'Lugar y Fecha',
                                                            style: 'content',
                                                            size: 16,
                                                            break: 1,
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 20,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: '..……………….……………….',
                                                            style: 'content',
                                                            size: 16,
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: 'Firma del  Titular',
                                                            style: 'content',
                                                            size: 16,
                                                            break: 1,
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 20,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: '….....….……………………',
                                                            style: 'content',
                                                            size: 16,
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: 'Firma del Cónyuge',
                                                            style: 'content',
                                                            size: 16,
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
