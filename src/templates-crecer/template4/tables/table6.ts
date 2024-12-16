import { Paragraph, Table, TableCell, TableRow, WidthType, HeightRule, TextRun, BorderStyle, ShadingType, VerticalAlign, LineRuleType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table6 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const marginCells = {
            left: 50,
        }
        const borderCells = {
            top: {
                size: 1,
                style: BorderStyle.SINGLE,
            },
            bottom: {
                style: BorderStyle.NONE,
            },
            left: {
                size: 1,
                style: BorderStyle.SINGLE,
            },
            right: {
                size: 1,
                style: BorderStyle.SINGLE,
            },
        }
        const backgroundCells = {
            fill: 'bfbfbf',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#bfbfbf',
        }
        return new Table({
            borders: borderCells,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            shading: backgroundCells,
                            margins: {
                                left: 20,
                            },
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'IV. Sistema de Prevención de Lavado de Activos y Financiamiento del Terrorismo:',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: {
                        value: 800,
                        rule: HeightRule.EXACT,
                    },
                    children: [
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 80,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '4.1. Indicar si es un sujeto obligado a informar a la UIF conforme lo establece la Ley N°',
                                            style: 'contentTable',
                                        }),
                                        new TextRun({
                                            text: '       27693, Ley que crea a la Unidad de Inteligencia Financiera – UIF:',
                                            style: 'contentTable',
                                            break: 1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: {
                                left: 120,
                            },
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    spacing: {
                                        line: 180,
                                        lineRule: LineRuleType.EXACTLY,
                                    },
                                    children: [
                                        new TextRun({
                                            text: this.business.UIF ? '\u2BBD' : '\u2610',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' SI',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                        new TextRun({
                                            text: this.business.UIF ? '\u2610' : '\u2BBD',
                                            size: 31,
                                            break: 1,
                                        }),
                                        new TextRun({
                                            text: ' NO',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
