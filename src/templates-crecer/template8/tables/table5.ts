import { Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table5 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {

        const headerMarginCells = {
            left: 10,
            top: 50,
            bottom: 50
        };

        const marginCells = {
            left: 10,
            top: 40,
            bottom: 10
        };

        const backgroundCells = {
            // fill: 'bfbfbf',
            type: ShadingType.SOLID,
            color: '#DAEEF3',
        };

        const emptyRows: TableRow[] = [];

        for (let index = 0; index < 4; index++) {
            const tableRow = new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun('')
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun('')
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun('')
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun('')
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun('')
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun('')
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun('')
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun('')
                                ],
                            }),
                        ],
                    }),
                ],
            });

            emptyRows.push(tableRow);
        }

        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            columnWidths: [15, 10, 10, 10, 10, 10, 10, 10],
            margins: marginCells,
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            shading: backgroundCells,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('3. Personas jurídicas vinculadas al cliente y/o a su grupo económico (2) (de ser el caso):')
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                new TableRow({
                    children: [
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Denominación o Razón Social:')
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('R.U.C. o similiar para no domiciliados:')
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Fecha de constitución:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('País de constitución:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Actividad económica:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('CIIU:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Dirección:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Tipo de local:'),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                ...emptyRows,
            ],
        });
    }
}
