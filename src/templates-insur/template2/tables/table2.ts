import { Paragraph, Table, TableCell, TableRow, WidthType, BorderStyle, TextRun, AlignmentType, VerticalAlign, ShadingType, HeightRule } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table2 {
    
    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create1(): Table {
        return new Table({
            borders: {
                insideHorizontal: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                insideVertical: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                top: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                bottom: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                left: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                right: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
            },
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            shading: { fill: '000080', type: ShadingType.REVERSE_DIAGONAL_STRIPE, color: '#000080' },
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `ANTECEDENTES LABORALES (1)`,
                                            color: 'ffffff',
                                            style: 'title',
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
                        value: 550,
                        rule: HeightRule.EXACT,
                    },
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 13,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Empleador Actual`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 65,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.name?.toUpperCase()}`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `RUC`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.document}`,
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
    create2(): Table {
        return new Table({
            borders: {
                insideHorizontal: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                insideVertical: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                top: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                bottom: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                left: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                right: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
            },
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Domicilio`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 24,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Calle`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
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
                                            text: `N°`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
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
                                            text: `Depto.`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Distrito`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Provincia`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 12,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Teléfono`,
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
                    height: {
                        value: 550,
                        rule: HeightRule.AUTO,
                    },
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 24,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.addressOrigin?.toUpperCase()}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
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
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
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
                                            text: `${this.business.departmentOrigin?.toUpperCase()}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.districtOrigin?.toUpperCase()}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.provinceOrigin?.toUpperCase()}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 12,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.phoneNumber != null ? this.business.phoneNumber : ''}     ${this.business.mobileNumber != null ? this.business.mobileNumber : ''}`,
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
    create3(): Table {
        return new Table({
            borders: {
                insideHorizontal: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                insideVertical: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                top: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                bottom: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                left: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                right: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
            },
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 23,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Cargo que ocupa`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 24,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Antigüedad en Cargo`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Antigüedad en Empresa`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Sueldo Bruto S/.`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 12,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Sueldo Neto S/.`,
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
                    height: {
                        value: 550,
                        rule: HeightRule.EXACT,
                    },
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 23,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativePosition !== null ? this.business.representativePosition.toUpperCase() : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 24,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeYearsOfService}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.inscriptionAt != '' ? (new Date().getFullYear() - new Date(this.business.inscriptionAt).getFullYear()) : this.business.representativeYearsOfService}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            //text: `${this.business.representativeSalary !== null ? this.business.representativeSalary : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 12,
                                type: WidthType.PERCENTAGE,
                            },
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
    create4(): Table {
        return new Table({
            borders: {
                insideHorizontal: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                insideVertical: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                top: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                bottom: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                left: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
                right: {
                    style: BorderStyle.SINGLE,
                    size: 10,
                    color: '333399',
                },
            },
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    height: { value: 500, rule: HeightRule.ATLEAST },
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Empleador Anterior`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `-------------------`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Antigüedad`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
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
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `RUC`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 12,
                                type: WidthType.PERCENTAGE,
                            },
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
                })
            ],
        });
    }
}
