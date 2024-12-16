import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, VerticalAlign, TextRun, ShadingType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table3 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const heightRow2 = {
            value: 650,
            rule: HeightRule.EXACT,
        }

        const shading2 = {
            fill: '1f4e78',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#1f4e78',
        }

        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    height: heightRow2,
                    children: [
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'N° de Registro',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Capacidad de Contratación',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Año de Caducidad',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: shading2,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Fecha Certificada',
                                            style: 'contenttable',
                                            color: '#ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: heightRow2,
                    children: [
                        new TableCell({
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.osceRegister != null ? this.business.osceRegister : ''}`,
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.osceHiring != null ? this.business.osceHiring : ''}`,
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.osceExpiration ? this.business.osceExpiration : ''}`,
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: {
                        value: 2500,
                        rule: HeightRule.EXACT,
                    },
                    children: [
                        new TableCell({
                            columnSpan: 4,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '¿La empresa ha sido objeto de sanciones por parte del OSCE alguna vez? De ser así, indicar el motivo, fecha, y lugar de la sanción.',
                                            style: 'contenttable',
                                        }),
                                        new TextRun({
                                            text: this.business.osceObservation,
                                            style: 'contenttable',
                                            break: 1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    }
}
