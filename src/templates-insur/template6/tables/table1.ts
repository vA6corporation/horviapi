import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, VerticalAlign, AlignmentType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { formatDateShort } from 'src/format-date';

export class Table1 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        // let d = new Date()
        // let year = d.getFullYear()
        let marginsCells = { left: 100, right: 100 }
        let row2: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                    new TableCell({ children: [] }),
                ],
            }),
        ];
        let count = 0;
        if (this.business.experiences.length > 0) {
            this.business.experiences.forEach((element, index) => {
                if (element.isCompleted) {
                    let nameConsortium = ' '
                    let participationConsortium = ' '
                    let dataConsortium = ' '
                    for (const itemConsortium of element.experiencePartnerships) {
                        dataConsortium = dataConsortium + ' ' + itemConsortium.name + ' ' + itemConsortium.participation + '% , '
                    }
                    for (const itemConsortium of element.experiencePartnerships) {
                        nameConsortium = nameConsortium + ' ' + itemConsortium.name + ',    '
                        participationConsortium = participationConsortium + itemConsortium.participation + '% ,    '
                    }
                    const dataRow = new TableRow({
                        children: [
                            new TableCell({
                                margins: marginsCells,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.convener.toUpperCase()}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.objectContract}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${formatDateShort(element.startAt)}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.location?.toUpperCase()}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `S/.${element.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.daysLimit} DÍAS`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.advancedPercent}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${nameConsortium} ${dataConsortium}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${dataConsortium}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'No',
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                    if (count < 5) {
                        row2[count] = dataRow;
                        count++;
                    } else {
                        row2.push(dataRow);
                    }
                }
            });
        }

        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 13,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Entidad`,
                                            style: 'subtitle',
                                        }),
                                        new TextRun({
                                            text: `Pública / Privada`,
                                            style: 'subtitle',
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 15,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Síntesis de la obra o servicio`,
                                            style: 'subtitle',
                                        }),
                                        new TextRun({
                                            text: `N° de Licitación`,
                                            style: 'subtitle',
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Fecha de`,
                                            style: 'subtitle',
                                        }),
                                        new TextRun({
                                            text: `Contrato`,
                                            style: 'subtitle',
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Ubicación`,
                                            style: 'subtitle',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Monto de`,
                                            style: 'subtitle',
                                        }),
                                        new TextRun({
                                            text: `Contrato`,
                                            style: 'subtitle',
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Plazo de`,
                                            style: 'subtitle',
                                        }),
                                        new TextRun({
                                            text: `Obra / Serv`,
                                            style: 'subtitle',
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Ampliac.`,
                                            style: 'subtitle',
                                        }),
                                        new TextRun({
                                            text: `de plazo`,
                                            style: 'subtitle',
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 10,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Consorcio`,
                                            style: 'subtitle',
                                        }),
                                        new TextRun({
                                            text: `% Participación`,
                                            style: 'subtitle',
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 9,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Nombre del`,
                                            style: 'subtitle',
                                        }),
                                        new TextRun({
                                            text: `Consorciado`,
                                            style: 'subtitle',
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 8,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Entidades`,
                                            style: 'subtitle',
                                        }),
                                        new TextRun({
                                            text: `Afianzadoras`,
                                            style: 'subtitle',
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            verticalAlign: VerticalAlign.CENTER,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `Arbitraje`,
                                            style: 'subtitle',
                                        }),
                                        new TextRun({
                                            text: `Si / No`,
                                            style: 'subtitle',
                                            break: 1,
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                ...row2,
            ],
        });
    }
}
