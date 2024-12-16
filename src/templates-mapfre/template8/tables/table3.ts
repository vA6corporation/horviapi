import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, VerticalAlign, TextRun } from "docx";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";

export class Table3 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const heightRowcontent = {
            value: 650,
            rule: HeightRule.EXACT,
        };
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    height: heightRowcontent,
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Dirección:',
                                            style: 'small',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 56,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.countryOrigin?.toUpperCase() != 'PERU' || this.business.countryOrigin?.toUpperCase() != 'PERÚ' ? this.business.addressResidence?.toUpperCase() : ''}`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 18,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Ciudad:',
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 18,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.countryOrigin?.toUpperCase() != 'PERU' || this.business.countryOrigin?.toUpperCase() != 'PERÚ' ? this.business.provinceResidence?.toUpperCase() : ''}`,
                                            style: 'small',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    }

} 