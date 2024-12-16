import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, TextRun } from 'docx';
import { formatDateShort } from 'src/format-date';
import { NumberALetters } from 'src/templates-secrex/numberALetters';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';

export class Table3 {

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

        const amount1 = this.template.guaranties[0] ? this.template.guaranties[0].amount : 0
        const amount2 = this.template.guaranties[1] ? this.template.guaranties[1].amount : 0
        const amount3 = this.template.guaranties[2] ? this.template.guaranties[2].amount : 0
        const amount4 = this.template.guaranties[3] ? this.template.guaranties[3].amount : 0

        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            alignment: AlignmentType.RIGHT,
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Datos de la Obra, Servicios o Suministro',
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
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Denominación	de	la obra/Servicio/suministro/proceso/Contrato',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 65,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: this.template.objectDescription.toUpperCase(),
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
                            margins: marginsCells,
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Plazo de ejecución de la obra (Días calendarios)',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 65,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${this.template.daysLimit}`,
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
                            margins: marginsCells,
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Lugar de Ejecución',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 65,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: this.template.executionPlace.toUpperCase(),
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
                            margins: marginsCells,
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Monto referencial o Presupuesto base',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 65,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: this.template.baseBudget.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
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
                            margins: marginsCells,
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Monto del Contrato o Valor adjudicado',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 65,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: this.template.contractAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
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
                            margins: marginsCells,
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Suma Asegurada ( Importe en números)',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 65,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `${amount1 + amount2 + amount3 + amount4}`,
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
                            margins: marginsCells,
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Suma Asegurada (Importe en Letras)',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 65,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: NumberALetters(amount1 + amount2 + amount3 + amount4),
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
                            margins: marginsCells,
                            width: {
                                size: 35,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Vigencia de la fianza/póliza (número de días). Inicio y fin de Vigencia.',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCells,
                            width: {
                                size: 65,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: `Inicio ${formatDateShort(this.template.startAt)}        Hasta ${formatDateShort(this.template.startAt) + ' ' + this.template.daysLimit}`,
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
                            columnSpan: 2,
                            margins: marginsCells,
                            children: [
                                new Paragraph({
                                    spacing: spacingPha,
                                    children: [
                                        new TextRun({
                                            text: 'Descripción de la obligación garantizada, indicando expresamente el texto que debe figurar en la carta Fianza/póliza de caución',
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
                            columnSpan: 2,
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
