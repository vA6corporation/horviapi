import { Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table2 {

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

        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            columnWidths: [15, 10, 10, 10, 10, 10, 10, 10],
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
                                        new TextRun('II. Datos del Representante Legal (firmante del formulario):')
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
                            columnSpan: 2,
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
                                        new TextRun('Tipo de documento:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeDocumentType),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Numero:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeDocument),
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
                                        new TextRun(this.business.representativeNationality),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('País de residencia:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeCountryResidence),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Profesion:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeProfessionOccupation),
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
                                        new TextRun(this.business.representativeMobileNumber),
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
                                        new TextRun('Direción:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeAddressResidence),
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
                                        new TextRun('-'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Si es PEP, indicar el nombre de la Institucion'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('-'),
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
