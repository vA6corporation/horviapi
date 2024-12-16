import { Paragraph, Table, TableCell, TableRow, WidthType, HeightRule, TextRun, AlignmentType, VerticalAlign, BorderStyle } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table5 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create1(): Table {
        const borderCells = {
            insideHorizontal: {
                style: BorderStyle.NONE,
            },
            insideVertical: {
                style: BorderStyle.NONE,
            },
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
        };
        return new Table({
            borders: borderCells,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            margins: {
                                left: 50,
                            },
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '3.4. ',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: {
                                right: 40, left: 20,
                            },
                            width: {
                                size: 97,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Indicar si alguna de las personas antes indicadas (accionistas, directores, gerentes o vinculados) han sido sentenciadas o se encuentran investigadas por actividades criminales como los delitos de minería ilegal, tráfico ilícito de drogas, terrorismo, financiamiento del terrorismo, delitos contra la administración pública, corrupción, peculado, secuestro, proxenetismo, trata de personas, tráfico ilícito de armas, tráfico ilícito de migrantes, delitos tributarios, contrabando, estafa, fraude, extorsión, robo, delitos aduaneros o cualquier otro con capacidad de generar ganancias ilegales:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                    alignment: AlignmentType.JUSTIFIED
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.business.representativeCrime != '' ? '\u2BBD' : '\u2610',
                                            size: 31,
                                            break: 1,
                                        }),
                                        new TextRun({
                                            text: ' SI                  ',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                        new TextRun({
                                            text: this.business.representativeCrime != '' ? '\u2610' : '\u2BBD',
                                            size: 31
                                        }),
                                        new TextRun({
                                            text: ' NO',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                                new Paragraph({
                                    spacing: {
                                        after: 20,
                                    },
                                    children: [
                                        new TextRun({
                                            text: 'En caso de ser afirmativa su respuesta, especificar:',
                                            style: 'contentTable',
                                            break: 3,
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

    create2(): Table {
        return new Table({
            borders: {
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
            },
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
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
                                            text: 'Nombre / Denominación social',
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
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Estatus',
                                            style: 'subtitle',
                                            size: 18,
                                            italics: true,
                                        }),
                                        new TextRun({
                                            text: '(sentenciado / investigado)',
                                            style: 'subtitle',
                                            size: 18,
                                            italics: true,
                                            break: 1,
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
                                            text: 'Delito',
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
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Año',
                                            style: 'subtitle',
                                            size: 19,
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
                    height: {
                        value: 700,
                        rule: HeightRule.EXACT,
                    },
                    children: [
                        new TableCell({
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeCrime ? this.business.representativeName?.toUpperCase() : ''}`,
                                            style: 'contentTable',
                                            size: 18,
                                            italics: true,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeCrimeStatus ? this.business.representativeCrimeStatus?.toUpperCase() : ''}`,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeCrime ? this.business.representativeCrime?.toUpperCase() : ''}`,
                                            style: 'contentTable',
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
                                            text: `${this.business.representativeCrimeYear ? this.business.representativeCrimeYear : ''}`,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: {
                        value: 650,
                        rule: HeightRule.EXACT,
                    },
                    children: [
                        new TableCell({
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                    ],
                }),
                new TableRow({
                    height: {
                        value: 650,
                        rule: HeightRule.EXACT,
                    },
                    children: [
                        new TableCell({
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                    ],
                }),
            ],
        });
    }
}
