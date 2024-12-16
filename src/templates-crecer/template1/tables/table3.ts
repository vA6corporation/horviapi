import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, TextRun, ShadingType, ParagraphChild } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table3 {
    
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
        let shareholders1: ParagraphChild[] = []
        let shareholders2: ParagraphChild[] = []
        let shareholders3: ParagraphChild[] = []
        let shareholders4: ParagraphChild[] = []
        this.business.shareholders.forEach(element => {
            shareholders1.push(new TextRun({
                text: `${element.name?.toUpperCase()}`,
                style: 'content',
                break: 1,
            }))
            shareholders2.push(new TextRun({
                text: `${element.percent}`,
                style: 'content',
                break: 1,
            }))
            shareholders3.push(new TextRun({
                text: `${element.document}`,
                style: 'content',
                break: 1,
            }))
            shareholders4.push(new TextRun({
                text: `${element.nationality?.toUpperCase()}`,
                style: 'content',
                break: 1,
            }))
        })
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCellsTitles,
                            shading: {
                                fill: '1f3864',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#1f3864',
                            },
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `3. Accionistas`,
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
                                            text: `Nombres`,
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
                                            text: `%`,
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
                                            text: `ruc /dni`,
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
                                            text: `Nacionalidad`,
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
                            margins: {
                                bottom: 100,
                                left: 100,
                            },
                            width: {
                                size: 45,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: shareholders1,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: {
                                bottom: 100,
                                left: 100,
                            },
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: shareholders2,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: {
                                bottom: 100,
                                left: 100,
                            },
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: shareholders3,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: {
                                bottom: 100,
                                left: 100,
                            },
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: shareholders4,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    }
}
