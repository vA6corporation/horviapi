import { Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table4 {

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

        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            columnWidths: [22, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            margins: marginCells,
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            shading: backgroundCells,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('3. Administradores (Directores / gerentes/personal con poder de disposición):')
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

                new TableRow({
                    children: [
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeName)
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(`${this.business.representativeDocumentType}: ${this.business.representativeDocument}`)
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeNationality)
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeCountryResidence)
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeAddressResidence)
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeMobileNumber)
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeProfessionOccupation)
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeLivingPlace)
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeProfessionOccupation)
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativePEPPositionn)
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativePEPInstitution)
                                    ],
                                }),
                            ],
                        }),
                    ]
                })

            ],
        });
    }
}
