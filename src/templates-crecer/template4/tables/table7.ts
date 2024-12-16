import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, TableBorders, BorderStyle } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table7 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const spacing = {
            after: 330,
        };
        return new Table({
            borders: TableBorders.NONE,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            margins: {
                                left: 50,
                                right: 100,
                            },
                            width: {
                                size: 60,
                                type: WidthType.PERCENTAGE,
                            },
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
                                    style: BorderStyle.NONE,
                                },
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '4.2. En caso de ser afirmativa su respuesta, responder:',
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    spacing: spacing,
                                    children: [
                                        new TextRun({
                                            text: '¿Cuenta con Oficial de Cumplimiento?',
                                            style: 'contentTable',
                                        }),
                                    ],
                                    numbering: {
                                        reference: 'notes2',
                                        level: 0,
                                    },
                                }),
                                new Paragraph({
                                    spacing: spacing,
                                    children: [
                                        new TextRun({
                                            text: '¿Cuenta con Manual de Prevención y Gestión de LAFT?',
                                            style: 'contentTable',
                                        }),
                                    ],
                                    numbering: {
                                        reference: 'notes2',
                                        level: 0,
                                    },
                                }),
                                new Paragraph({
                                    spacing: spacing,
                                    children: [
                                        new TextRun({
                                            text: '¿Cuenta con Código de Ética o Conducta?',
                                            style: 'contentTable',
                                        }),
                                    ],
                                    numbering: {
                                        reference: 'notes2',
                                        level: 0,
                                    },
                                }),
                                new Paragraph({
                                    spacing: spacing,
                                    children: [
                                        new TextRun({
                                            text: '¿Lleva a cabo una revisión de sus Clientes, Proveedores y Contrapartes para verificar si están incluidos en Listas Internacionales de personas vinculas a actividades de LAFT? (OFAC, CSNU, UE)',
                                            style: 'contentTable',
                                        }),
                                    ],
                                    numbering: {
                                        reference: 'notes2',
                                        level: 0,
                                    },
                                }),
                                new Paragraph({
                                    spacing: spacing,
                                    children: [
                                        new TextRun({
                                            text: '¿Ha realizado o tiene pensado realizar inversiones en países que presentan baja regulación frente a delitos de LAFT? (Ejemplo: Irán, North Corea, Siria)',
                                            style: 'contentTable',
                                        }),
                                    ],
                                    numbering: {
                                        reference: 'notes2',
                                        level: 0,
                                    },
                                }),
                                new Paragraph({
                                    spacing: spacing,
                                    children: [
                                        new TextRun({
                                            text: '¿Su empresa ha sido alguna vez investigada, procesada o sancionada por incumplimiento de las regulaciones sobre Prevención de LAFT?',
                                            style: 'contentTable',
                                        }),
                                    ],
                                    numbering: {
                                        reference: 'notes2',
                                        level: 0,
                                    },
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: {
                                left: 20,
                                right: 100,
                            },
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                top: {
                                    size: 1,
                                    style: BorderStyle.SINGLE,
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                },
                                right: {
                                    style: BorderStyle.NONE,
                                },
                            },
                            children: [],
                        }),
                        new TableCell({
                            margins: {
                                left: 100,
                            },
                            width: {
                                size: 20,
                                type: WidthType.PERCENTAGE,
                            },
                            borders: {
                                top: {
                                    size: 1,
                                    style: BorderStyle.SINGLE,
                                },
                                bottom: {
                                    style: BorderStyle.NONE,
                                },
                                left: {
                                    style: BorderStyle.NONE,
                                },
                                right: {
                                    size: 1,
                                    style: BorderStyle.SINGLE,
                                },
                            },
                            children: [
                                new Paragraph({
                                    spacing: {
                                        before: 50,
                                        after: 250,
                                    },
                                    children: [
                                        new TextRun({
                                            text: this.business.hasComplianceOfficer ? '\u2BBD' : '\u2610',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' SI      ',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                        new TextRun({
                                            text: this.business.hasComplianceOfficer ? '\u2610' : '\u2BBD',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' NO',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    spacing: {
                                        after: 160,
                                    },
                                    children: [
                                        new TextRun({
                                            text: this.business.managementManualLAFT ? '\u2BBD' : '\u2610',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' SI      ',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                        new TextRun({
                                            text: this.business.managementManualLAFT ? '\u2610' : '\u2BBD',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' NO',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    spacing: {
                                        after: 380,
                                    },
                                    children: [
                                        new TextRun({
                                            text: this.business.codeEthicsConduct ? '\u2BBD' : '\u2610',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' SI      ',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                        new TextRun({
                                            text: this.business.codeEthicsConduct ? '\u2610' : '\u2BBD',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' NO',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    spacing: {
                                        before: 200,
                                        after: 280,
                                    },
                                    children: [
                                        new TextRun({
                                            text: this.business.carryReviewClients ? '\u2BBD' : '\u2610',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' SI      ',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                        new TextRun({
                                            text: this.business.carryReviewClients ? '\u2610' : '\u2BBD',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' NO',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    spacing: {
                                        before: 390,
                                        after: 280,
                                    },
                                    children: [
                                        new TextRun({
                                            text: this.business.madeMakeInvestments ? '\u2BBD' : '\u2610',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' SI      ',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                        new TextRun({
                                            text: this.business.madeMakeInvestments ? '\u2610' : '\u2BBD',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' NO',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    spacing: {
                                        before: 480,
                                        after: 280,
                                    },
                                    children: [
                                        new TextRun({
                                            text: this.business.companyEverBeenInvestigated ? '\u2BBD' : '\u2610',
                                            size: 31,
                                        }),
                                        new TextRun({
                                            text: ' SI      ',
                                            size: 22,
                                            style: 'contentTable',
                                        }),
                                        new TextRun({
                                            text: this.business.companyEverBeenInvestigated ? '\u2610' : '\u2BBD',
                                            size: 31,
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
                    ],
                }),
            ],
        });
    }
}
