import { Paragraph, BorderStyle, Table, TableCell, TableRow, WidthType, TextRun, VerticalAlign, AlignmentType, ShadingType, HeightRule } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { formatDateShort } from 'src/format-date';

export class Table1 {
    
    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
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
                            columnSpan: 14,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `ANTECEDENTES PERSONALES`,
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
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 5,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Apellido Paterno y Materno`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 7,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Nombres`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Documento de Identidad y N° `,
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
                    height: { value: 500, rule: HeightRule.ATLEAST },
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 5,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.business.representativeName != null ?
                                                `${this.business.representativeName.split(' ')[0] != null ?
                                                    this.business.representativeName.toUpperCase().split(' ')[0] : ' '} 
                      ${this.business.representativeName.split(' ')[1] != null ?
                                                    this.business.representativeName?.toUpperCase().split(' ')[1] : ''}` : ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 7,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.business.representativeName != null ?
                                                `${this.business.representativeName.split(' ')[2] != null ?
                                                    this.business.representativeName?.toUpperCase().split(' ')[2] : ' '} 
                      ${this.business.representativeName.split(' ')[3] != null ?
                                                    this.business.representativeName?.toUpperCase().split(' ')[3] : ''}` : ``,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeDocument != null ? this.business.representativeDocument : ''}`,
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
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 5,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Nacionalidad`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Sexo`,
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
                                            text: `F`,
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
                                            text: `M`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Fecha Nacimiento`,
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
                                            text: `Dia`,
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
                                            text: `Mes`,
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
                                            text: `Año`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Nº de cargas (incl. Cónyuge)`,
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
                    height: { value: 500, rule: HeightRule.ATLEAST },
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 5,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeNationality}`,
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
                                            text: `${this.business.representativeGender == 'FEMENINO' ? 'X' : ''}`,
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
                                            text: `${this.business.representativeGender == 'MASCULINO' ? 'X' : ''}`,
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
                                            text: `${this.business.representativeBirthDate ? formatDateShort(this.business.representativeBirthDate).split('/')[0] : ''}`,
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
                                            text: `${this.business.representativeBirthDate ? formatDateShort(this.business.representativeBirthDate).split('/')[1] : ''}`,
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
                                            text: `${this.business.representativeBirthDate ? formatDateShort(this.business.representativeBirthDate).split('/')[2] : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 2,
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
                                            text: `Estado Civil`,
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
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Soltero`,
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
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Viudo`,
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
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Separado`,
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
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Casado`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Separado de bienes`,
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
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Si`,
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
                                size: 4,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `No`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Estudios`,
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
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Primaria`,
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
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Secundaria`,
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
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Técnico`,
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
                                            text: `Universitaria`,
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
                                            text: `Profesión`,
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
                    height: { value: 500, rule: HeightRule.ATLEAST },
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeMaritalStatus.toUpperCase() == 'SOLTERO' ? 'X' : ''}`,
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
                                            text: `${this.business.representativeMaritalStatus.toUpperCase() == 'VIUDO' ? 'X' : ''}`,
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
                                            text: `${this.business.representativeMaritalStatus.toUpperCase() == 'SEPARADO' ? 'X' : ''}`,
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
                                            text: `${this.business.representativeMaritalStatus.toUpperCase() == 'CASADO' ? 'X' : ''}`,
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
                                            text: `${this.business.representativePropertyRegime != '' ? 'X' : ''}`,
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
                                            text: `${this.business.representativePropertyRegime == '' ? 'X' : ''}`,
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
                                            text: `${this.business.representativeStudies == 'PRIMARIA' ? 'X' : ''}`,
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
                                            text: `${this.business.representativeStudies == 'SECUNDARIA' ? 'X' : ''}`,
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
                                            text: `${this.business.representativeStudies == 'TÉCNICO' ? 'X' : ''}`,
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
                                            text: `${this.business.representativeStudies == 'UNIVERSITARIA' ? 'X' : ''}`,
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
                                            text: `${this.business.representativeProfessionOccupation !== null ? this.business.representativeProfessionOccupation.toUpperCase() : ''}`,
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
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Domicilio Actual`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 4,
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
                            columnSpan: 2,
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
                            columnSpan: 2,
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
                            columnSpan: 3,
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
                        value: 500,
                        rule: HeightRule.AUTO,
                    },
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeAddressResidence.toUpperCase()}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
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
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeDepartmentResidence?.toUpperCase()}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeDistrictResidence?.toUpperCase()}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeProvinceResidence?.toUpperCase()}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativePhoneNumber != null ? this.business.representativePhoneNumber : ''}   ${this.business.representativeMobileNumber != null ? this.business.representativeMobileNumber : ''}`,
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
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `La casa en que vive actualmente es:`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Propia`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Totalmente Pagada`,
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
                                            text: `Si`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `No`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Alquilada`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Canon de Alquiler S/.`,
                                            style: 'content',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            rowSpan: 2,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeLivingPlace == 'ALQUILADA' ? this.business.representativeLivingPlacePrice : ''}`,
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
                                            text: `Otro`,
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
                    height: { value: 500, rule: HeightRule.ATLEAST },
                    children: [
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeLivingPlace == 'PROPIA' ? 'X' : ''}`,
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
                                            text: `${(this.business.representativeLivingPlace == 'PROPIA' && this.business.representativeLivingPlacePay == 'SI') ? 'X' : ''}`,
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
                                            text: `${(this.business.representativeLivingPlace == 'PROPIA' && this.business.representativeLivingPlacePay != 'SI') ? 'X' : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeLivingPlace == 'ALQUILADA' ? 'X' : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${this.business.representativeLivingPlace == 'OTRO' ? 'X' : ''}`,
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
