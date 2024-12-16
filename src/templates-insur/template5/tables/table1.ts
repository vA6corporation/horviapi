import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, VerticalAlign, AlignmentType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table1 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            rowSpan: 2,
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `N° de Licitación y Síntesis del Contrato`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Fecha contrato`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `% Avance`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 21,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Monto de Fianza Original`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 21,
                                type: WidthType.PERCENTAGE,
                            },
                            columnSpan: 3,
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Monto Fianza Vigente`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 11,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Consorcio % Participación`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Entidad Afianzadora`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Arbitraje Si/No`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `F. C`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `A. Directo`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `A. Materiales`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `F. C`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `A. Directo`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `A. Materiales`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 11,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 11,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 11,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 11,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 11,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
