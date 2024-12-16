import { Paragraph, Table, TableCell, TableRow, WidthType, HeightRule, TextRun, AlignmentType, VerticalAlign, BorderStyle, ShadingType, LineRuleType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table3 {

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
            fill: 'd9d9d9',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#d9d9d9',
        }
        const heightRow1 = {
            value: 290,
            rule: HeightRule.EXACT,
        }
        const heightRow2 = {
            value: 690,
            rule: HeightRule.EXACT,
        }
        let row1: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        shading: {
                            fill: 'bfbfbf',
                            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                            color: '#bfbfbf',
                        },
                        margins: {
                            left: 20,
                        },
                        columnSpan: 8,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'III. Datos de las Personas Relacionadas con la Empresa',
                                        style: 'subtitle',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: heightRow1,
                children: [
                    new TableCell({
                        margins: {
                            left: 50,
                        },
                        columnSpan: 8,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: '3.1.  Accionistas, socios o asociados con 10% o más del capital social, aporte o participación:',
                                        style: 'contentTable',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Nombres y apellidos',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Tipo y Número de DOI',
                                        style: 'subtitle',

                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: '% Participación',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Nacionalidad',
                                        style: 'subtitle',
                                        size: 19,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 9,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Residencia',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 14,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Profesión / Ocupación',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'PEP1',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        margins: marginCells,
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Si es PEP, indicar el nombre de la Institución y el cargo',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            }),
        ];
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
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
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
                            size: 14,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
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
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
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
                            size: 14,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
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
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
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
                            size: 14,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
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
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
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
                            size: 14,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
        ];
        if (this.business.shareholders) {
            this.business.shareholders.forEach((element, index) => {
                if (element.percent >= 10) {
                    const dataRows = new TableRow({
                        children: [
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.name}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 12,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.documentType} ${element.document}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 8,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.percent}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 12,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.nationality}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 9,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: element.addressResidence,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 14,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: element.professionOccupation,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                margins: marginCells,
                                width: {
                                    size: 8,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        spacing: {
                                            before: 80,
                                            line: 200,
                                            lineRule: LineRuleType.EXACTLY,
                                        },
                                        children: [
                                            new TextRun({
                                                text: element.PEPInstitution != '' ? '\u2BBD' : '\u2610',
                                                size: 33
                                            }),
                                            new TextRun({
                                                text: ' SI',
                                                size: 22,
                                                style: 'contentTable',
                                            }),
                                            new TextRun({
                                                text: element.PEPInstitution != '' ? '\u2610' : '\u2BBD',
                                                size: 33,
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
                            new TableCell({
                                margins: marginCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 17,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.PEPInstitution != '' ? element.PEPInstitution + ', ' + element.PEPPositionn : ''}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                    if (index < 4) {
                        row2[index] = dataRows;
                    } else {
                        row2.push(dataRows);
                    }
                }
            });
        }
        let row3: TableRow[] = [
            new TableRow({
                height: heightRow1,
                children: [
                    new TableCell({
                        margins: {
                            left: 50,
                        },
                        columnSpan: 8,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: '3.2.  Principales representantes legales (directores / gerentes / personal con poder de disposición):',
                                        style: 'contentTable',
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Nombres y apellidos',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ], alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Tipo y Número de DOI',
                                        style: 'subtitle',

                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Cargo en la empresa',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Nacionalidad',
                                        style: 'subtitle',
                                        size: 19,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 9,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Residencia',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 14,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Profesión / Ocupación',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'PEP1',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        shading: backgroundCells,
                        margins: marginCells,
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Si es PEP, indicar el nombre de la Institución y el cargo',
                                        style: 'subtitle',
                                        size: 18,
                                        italics: true,
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
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `${this.business.representativeName}`,
                                        style: 'contentTable',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `${this.business.representativeDocumentType?.toUpperCase()} ${this.business.representativeDocument}`,
                                        style: 'contentTable',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `REPRESENTANTE`,
                                        style: 'contentTable',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `${this.business.representativeNationality}`,
                                        style: 'contentTable',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 9,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `${this.business.representativeCountryResidence}`,
                                        style: 'contentTable',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 14,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: this.business.representativeProfessionOccupation,
                                        style: 'contentTable',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        verticalAlign: VerticalAlign.CENTER,
                        margins: marginCells,
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                spacing: {
                                    before: 100,
                                    line: 220,
                                    lineRule: LineRuleType.EXACTLY,
                                },
                                children: [
                                    new TextRun({
                                        text: this.business.representativePEPInstitution != '' ? '\u2BBD' : '\u2610',
                                        size: 33
                                    }),
                                    new TextRun({
                                        text: ' SI',
                                        size: 22,
                                        style: 'contentTable',
                                    }),
                                    new TextRun({
                                        text: this.business.representativePEPInstitution != '' ? '\u2610' : '\u2BBD',
                                        size: 33,
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
                    new TableCell({
                        margins: marginCells,
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `${this.business.representativePEPInstitution}, ${this.business.representativePEPPositionn}`,
                                        style: 'contentTable',
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
                            size: 20,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
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
                            size: 14,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
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
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
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
                            size: 14,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
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
                            size: 12,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 12,
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
                            size: 14,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 8,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
        ];
        Array.prototype.push.apply(row1, row2);
        Array.prototype.push.apply(row1, row3);
        return new Table({
            borders: borderCells,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: row1,
        });
    }
}
