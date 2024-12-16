import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, TextRun } from 'docx';
import { formatDateShort } from 'src/format-date';
import { ReadGuaranteeDto } from 'src/templates/dto/read-guarantee.dto';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';

export class Table4 {

    constructor(
        private readonly template: ReadTemplateDto
    ) { }

    create(): Table {
        const marginsCells = {
            left: 100,
            right: 100,
        }

        const spacingPha = {
            after: 70,
        }

        let GAOS: ReadGuaranteeDto | null = null
        let GAMF: ReadGuaranteeDto | null = null
        let GADF: ReadGuaranteeDto | null = null
        let GFCF: ReadGuaranteeDto | null = null
        let GFWE: ReadGuaranteeDto | null = null

        if (this.template.guaranties.some(dat => dat.guaranteeType === 'GAOS')) {
            const index = this.template.guaranties.findIndex(object => {
                return object.guaranteeType === 'GAOS'
            })
            GAOS = this.template.guaranties[index]
        }
        
        if (this.template.guaranties.some(dat => dat.guaranteeType === 'GAMF')) {
            const index = this.template.guaranties.findIndex(object => {
                return object.guaranteeType === 'GAMF'
            })
            GAMF = this.template.guaranties[index]
        }

        if (this.template.guaranties.some(dat => dat.guaranteeType === 'GADF')) {
            const index = this.template.guaranties.findIndex(object => {
                return object.guaranteeType === 'GADF'
            })
            GADF = this.template.guaranties[index]
        }
        
        if (this.template.guaranties.some(dat => dat.guaranteeType === 'GFCF')) {
            const index = this.template.guaranties.findIndex(object => {
                return object.guaranteeType === 'GFCF'
            })
            GFCF = this.template.guaranties[index]
        }

        if (this.template.guaranties.some(dat => dat.guaranteeType === 'GFWE')) {
            const index = this.template.guaranties.findIndex(object => {
                return object.guaranteeType === 'GFWE'
            })
            GFWE = this.template.guaranties[index]
        }
        
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            alignment: AlignmentType.RIGHT,
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            columnSpan: 5,
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Datos de la Cobertura',
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
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Tipo de póliza (Marcar la opción con X)',
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
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Moneda',
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
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Suma Asegurada',
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
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Plazo (días)',
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
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Vigencia (desde/hasta)',
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
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `Seriedad de oferta (${GAOS ? 'X' : ''})`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GAOS ? GAOS.currencyCode : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
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
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GAOS ? GAOS.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GAOS ? GAOS.daysLimit : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GAOS ? formatDateShort(GAOS.startAt) + '' : ''} ${GAOS ? formatDateShort(GAOS.endAt) : ''}`,
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
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `Fiel Cumplimiento (${GFCF ? 'X' : ''})`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GFCF ? GFCF.currencyCode : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
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
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GFCF ? GFCF.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GFCF ? GFCF.daysLimit : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GFCF ? formatDateShort(GFCF.startAt) + ' - ' : ''} ${GFCF ? formatDateShort(GFCF.endAt) : ''}`,
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
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `Buen manejo de Adelanto: Directo (${GADF ? 'X' : ''})`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GADF ? GADF.currencyCode : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
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
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GADF ? GADF.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GADF ? GADF.daysLimit : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GADF ? formatDateShort(GADF.startAt) + ' - ' : ''} ${GADF ? formatDateShort(GADF.endAt) : ''}`,
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
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `Buen manejo de Adelanto: Materiales (${GAMF ? 'X' : ''})`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GAMF ? GAMF.currencyCode : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
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
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GAMF ? GAMF.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GAMF ? GAMF.daysLimit : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GAMF ? formatDateShort(GAMF.startAt) + ' - ' : ''} ${GAMF ? formatDateShort(GAMF.endAt) : ''}`,
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
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `Garantía de buena ejecución de obra (${GFWE ? 'X' : ''})`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GFWE ? GFWE.currencyCode : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
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
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GFWE ? GFWE.amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GFWE ? GFWE.daysLimit : ''}`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${GFWE ? formatDateShort(GFWE.startAt) + ' - ' : ''} ${GFWE ? formatDateShort(GFWE.endAt) : ''}`,
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
                            margins: marginsCells,
                            width: {
                                size: 30,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Otros (	)',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 14,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'subtitle',
                                        }),
                                    ],
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
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'subtitle',
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
