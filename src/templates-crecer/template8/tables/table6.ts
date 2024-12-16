import { AlignmentType, BorderStyle, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table6 {

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
                ],
            });

            emptyRows.push(tableRow);
        }

        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            // columnWidths: [ 15, 10, 10, 10, 10, 10, 10, 10 ],
            margins: marginCells,
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            shading: backgroundCells,
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('IV. Juicios iviles, comerciales, laborales, arbitrales y contenciosos admistrativos vigentes')
                                    ],
                                }),
                            ],
                        }),
                    ]
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    spacing: {
                                        after: 200
                                    },
                                    children: [
                                        new TextRun({
                                            bold: false,
                                            text: 'Indicar si alguna de las personas antes indicadas (accionistas, directores, gerentes o vinculados) han sido sentenciadas o se encuentran investigadas por actividades criminales como los delitos de minería ilegal, tráfico ilícito de drogas, terrorismo, financiamiento del terrorismo, delitos contra la administración pública, corrupción, peculado, secuestro, proxenetismo, trata de personas, tráfico ilícito de armas, tráfico ilícito de migrantes, delitos tributarios, contrabando, estafa, fraude, extorsión, robo, delitos aduaneros o cualquier otro con capacidad de generar ganancias ilegales:'
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    alignment: AlignmentType.CENTER,
                                    children: [
                                        new TextRun({
                                            bold: false,
                                            text: 'SI '
                                        }),
                                        new TextRun({
                                            border: {
                                                style: BorderStyle.SINGLE,
                                                size: 2,
                                            },
                                            text: '\t'
                                        }),
                                        new TextRun({
                                            bold: false,
                                            text: '\t\t\t'
                                        }),
                                        new TextRun({
                                            bold: false,
                                            text: 'NO '
                                        }),
                                        new TextRun({
                                            border: {
                                                style: BorderStyle.SINGLE,
                                                size: 2,
                                            },
                                            text: '\t'
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            bold: false,
                                            text: 'En caso de ser afirmativa su respuesta, especficar:'
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ]
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Nombre /Denomincación Social')
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Estatus (sentenciado / investigado)')
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Delito'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Año'),
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
