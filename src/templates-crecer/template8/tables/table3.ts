import { Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table3 {

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
            color: '#000080',
        };

        const backgroundCellsTwo = {
            // fill: 'bfbfbf',
            type: ShadingType.SOLID,
            color: '#DAEEF3',
        };

        const shareholderTableRows: TableRow[] = [];

        for (const shareholder of this.business.shareholders) {
            const tableRow = new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun(shareholder.name)
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun(shareholder.document)
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun(shareholder.nationality)
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun(`${shareholder.percent}%`)
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun(shareholder.countryResidence)
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun(shareholder.addressResidence)
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun(shareholder.mobileNumber)
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun(shareholder.professionOccupation)
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun('-')
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun(shareholder.professionOccupation)
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun('-')
                                ],
                            }),
                        ],
                    }),
                    new TableCell({
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun('-')
                                ],
                            }),
                        ],
                    }),
                ],
            });

            shareholderTableRows.push(tableRow);
        }

        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            columnWidths: [24, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            margins: marginCells,
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            margins: headerMarginCells,
                            shading: backgroundCells,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('III. Datos de las Personas naturales y jurídicas relacionadas con la Empresa')
                                    ],
                                    // alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),

                new TableRow({
                    children: [
                        new TableCell({
                            // margins: headerMarginCells,
                            shading: backgroundCellsTwo,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('3.1 Accionistas, socios o asociados con 5% o más del capital social, aporte o participación:')
                                    ],
                                    // alignment: AlignmentType.CENTER,
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
                                        new TextRun('Nombres y Apellidos:')
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Tipo y número de documento:')
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Nacionalidad:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('% participación'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Pais de residencia'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Direccion:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Telefono:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Profesion/Ocupacion:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Centro de labores'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Cargo'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('PEP (1)'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Si es PEP, indicar el nombre de la Institución'),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                ...shareholderTableRows,
            ],
        });
    }
}
