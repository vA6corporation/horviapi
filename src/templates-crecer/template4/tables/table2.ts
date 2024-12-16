import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, BorderStyle, ShadingType, AlignmentType, LineRuleType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table2 {

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
        };
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
                            columnSpan: 5,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'II. Datos del Representante Legal (firmante del formulario):',
                                            style: 'subtitle',
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
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Nombres y apellidos:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.business.representativeName?.toUpperCase(),
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
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Tipo y número de documento:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 33,
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
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'País Residencia:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeCountryResidence?.toUpperCase()}`,
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
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Nacionalidad:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 33,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeNationality?.toUpperCase()}`,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Cargo:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.business.representativePosition.toUpperCase(),
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
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Profesión / Ocupación:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 33,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.business.representativeProfessionOccupation.toUpperCase(),
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Correo electrónico:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.business.representativeEmail.toUpperCase(),
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
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Años de servicio:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 33,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.business.representativeYearsOfService.toString(),
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            width: {
                                size: 25,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
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
                            margins: {
                                left: 170,
                            },
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'PEP1:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: {
                                left: 150,
                            },
                            width: {
                                size: 13,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: {
                                        before: 60,
                                        line: 250,
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
                            width: {
                                size: 33,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Si es PEP, indicar el nombre de la',
                                            style: 'contentTable',
                                        }),
                                        new TextRun({
                                            text: 'Institución y el cargo',
                                            style: 'contentTable',
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Institución: ${this.business.representativePEPInstitution?.toUpperCase()}`,
                                            style: 'contentTable',
                                        }),
                                        new TextRun({
                                            text: `Cargo: ${this.business.representativePEPPositionn?.toUpperCase()}`,
                                            style: 'contentTable',
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
