import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, TextRun, ShadingType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { formatDateShort } from 'src/format-date';

export class Table1 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const b: ReadBusinessDto = Object.keys(this.business).length === 0 ? {} as ReadBusinessDto : this.business

        const marginsCells = {
            left: 70,
        }
        const backgroundCells = {
            fill: 'e5dfec',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#e5dfec',
        }
        const heightTitles = {
            value: 240,
            rule: HeightRule.EXACT
        }
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    height: heightTitles,
                    children: [
                        new TableCell({
                            shading: {
                                fill: '1f3864',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#1f3864',
                            },
                            columnSpan: 6,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Nombres y apellidos`,
                                            style: 'subtitle',
                                            color: 'ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: heightTitles,
                    children: [
                        new TableCell({
                            columnSpan: 6,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: b.representativeName != undefined ? b.representativeName.toUpperCase() : '',
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
                    height: heightTitles,
                    children: [
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Fecha nacimiento`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `C.E./ DNI`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
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
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Estado civil`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Régimen de bienes (sólo casados)`,
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
                    height: {
                        value: 340,
                        rule: HeightRule.EXACT
                    },
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${b.representativeBirthDate != '' ? formatDateShort(b.representativeBirthDate) : ''}`,
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
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${b.representativeDocument != undefined ? b.representativeDocument : ''}`,
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
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${b.representativeNationality != undefined ? b.representativeNationality.toUpperCase() : ''}`,
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
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${b.representativeMaritalStatus != undefined ? b.representativeMaritalStatus.toUpperCase() : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${b.representativeMaritalStatus != undefined && b.representativeMaritalStatus == 'CASADO' ? b.representativePropertyRegime : ''}`,
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
                    height: heightTitles,
                    children: [
                        new TableCell({
                            shading: {
                                fill: '1f3864',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#1f3864',
                            },
                            columnSpan: 6,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Nombres y apellidos del conyugue`,
                                            style: 'subtitle',
                                            color: 'ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    height: heightTitles,
                    children: [
                        new TableCell({
                            columnSpan: 6,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${b.representativeSpouseName != undefined ? b.representativeSpouseName : ''}`,
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
                    height: heightTitles,
                    children: [
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Fecha nacimiento`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `C.E./ DNI`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
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
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Estado civil`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Régimen de bienes (sólo casados)`,
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
                    height: {
                        value: 310,
                        rule: HeightRule.EXACT
                    },
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${b.representativeSpouseBirthDate != undefined ? formatDateShort(b.representativeSpouseBirthDate) : ''}`,
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
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${b.representativeSpouseDocument != undefined ? b.representativeSpouseDocument : ''}`,
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
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${b.representativeSpouseNationality != undefined ? b.representativeSpouseNationality : ''}`,
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
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${b.representativeSpouseMaritalStatus != undefined ? b.representativeSpouseMaritalStatus : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${b.representativeSpouseMaritalStatus != undefined && b.representativeSpouseMaritalStatus == 'CASADO' ? b.representativeSpousePropertyRegime : ''}`,
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
                    height: heightTitles,
                    children: [
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Dirección`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            width: {
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Teléfono Fijo`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            shading: backgroundCells,
                            margins: marginsCells,
                            width: {
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Celular`,
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
                            margins: marginsCells,
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: b.representativeAddressResidence != undefined ? b.representativeAddressResidence : '',
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
                                size: 17,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: b.representativePhoneNumber != undefined ? b.representativePhoneNumber : '',
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
                                size: 16,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: b.representativeMobileNumber != undefined ? b.representativeMobileNumber : '',
                                            style: 'subtitle',
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
