import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, TextRun, ShadingType, HeightRule, VerticalAlign } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table4 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const marginsCellsTitles = {
            top: 50,
            bottom: 20,
            left: 200,
        }
        const backgroundCells = {
            fill: 'c9c9c9',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#c9c9c9',
        }
        const marginsCells = {
            left: 70,
        }
        let facilityCredits1: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        margins: marginsCellsTitles,
                        shading: {
                            fill: '1f3864',
                            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                            color: '#1f3864',
                        },
                        columnSpan: 5,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `4. Facilidades crediticias aprobadas por el sistema financiero `,
                                        style: 'subtitle',
                                        color: 'ffffff',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: {
                    rule: HeightRule.EXACT,
                    value: 280,
                },
                children: [
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `Entidad financiera`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `Crédito`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.BOTTOM,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `Modalidad`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `Línea crédito us$`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.BOTTOM,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `Garantía otorgada`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            }),
        ]
        let facilityCredits2: TableRow[] = [
            new TableRow({
                height: {
                    rule: HeightRule.EXACT,
                    value: 280,
                },
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: {
                    rule: HeightRule.EXACT,
                    value: 280,
                },
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [],
                            }),
                        ],
                    }),
                ],
            }),
        ]
        if (this.business.facilityCredits.length > 0) {
            facilityCredits2 = [];
            this.business.facilityCredits.forEach(element => {
                facilityCredits2.push(
                    new TableRow({
                        children: [
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.financier?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.creditNumber?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 18,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.modality?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 18,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.creditLine}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 29,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.guaranteeGranted?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    })
                )
            })
        }
        Array.prototype.push.apply(facilityCredits1, facilityCredits2);
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: facilityCredits1
        })
    }
}
