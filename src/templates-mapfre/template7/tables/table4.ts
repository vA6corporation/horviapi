import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, ShadingType, VerticalAlign, TextRun } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { formatDateShort } from 'src/format-date';

export class Table4 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const heightRow1 = {
            value: 550,
            rule: HeightRule.EXACT,
        }
        const heightRow2 = {
            value: 650,
            rule: HeightRule.EXACT,
        }
        const shading1 = {
            fill: 'c00000',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#c00000',
        }
        const shading2 = {
            fill: '1f4e78',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#1f4e78',
        }
        let row1: TableRow[] = [
            new TableRow({
                height: heightRow1,
                children: [
                    new TableCell({
                        shading: shading1,
                        verticalAlign: VerticalAlign.CENTER,
                        columnSpan: 7,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'DIRECTORES, ACCIONISTAS Y/O EMPRESAS CONSORCIADAS',
                                        size: 20,
                                        style: 'contenttable',
                                        color: '#ffffff',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        shading: shading2,
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Nombre / Razón Social',
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
                            size: 13,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'DNI/ RUC/ C. Ext',
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
                            size: 9,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: '% Participación',
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
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'N° acciones',
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
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Fecha Nacimiento',
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
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'País de Origen',
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
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: VerticalAlign.CENTER,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Profesión',
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
        ]
        let row2: TableRow[] = [
            new TableRow({
                height: heightRow2,
                children: [
                    new TableCell({
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 13,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 9,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 10,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 16,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            })
        ]
        if (this.business.shareholders.length > 0) {
            row2 = []
            this.business.shareholders.forEach((element) => {
                row2.push(
                    new TableRow({
                        height: heightRow2,
                        children: [
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.name}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 13,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.document}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 9,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.percent}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 10,
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
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${formatDateShort(element.birthDate)}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.countryOrigin}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 16,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.professionOccupation != null ? element.professionOccupation : ''}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    }),
                )
            })
        }

        Array.prototype.push.apply(row1, row2)
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: row1,
        })
    }
}
