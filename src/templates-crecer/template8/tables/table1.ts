import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, BorderStyle, ShadingType, AlignmentType, TableLayoutType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { formatDateShort } from 'src/format-date';

export class Table1 {

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
                                        new TextRun('I. Identificación del Contratante / Asegurado / Beneficiario: ')
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
                                        new TextRun('Denominación o Razón Social:')
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 7,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.name)
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
                                        new TextRun('R.U.C. o similiar para no domiciliados:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.document),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('País de constitución'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.countrySource),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Fecha de constitucion'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(formatDateShort(this.business.inscriptionAt || new Date().toLocaleDateString())),
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
                                        new TextRun('Actividad Económica :'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 3,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.turnOfBusiness),
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
                                        new TextRun('---'),
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
                                        new TextRun(this.business.mobileNumber),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                new TableRow({
                    children: [
                        new TableCell({
                            shading: backgroundCellsTwo,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Datos de la oficina o local principal, donde desarrolla las actividades propias al giro del negocio:'),
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
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.addressOrigin),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Departamento:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.departmentOrigin),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Provincia:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.provinceOrigin),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Distrito:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.districtOrigin),
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
                                        new TextRun('Persona de contacto empresa:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeName),
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
                        new TableCell({
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('Correo electronico:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 2,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun(this.business.representativeEmail),
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
                                        new TextRun('Finalidad de relación comercial:'),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            columnSpan: 7,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun('TRAMITE DE CARTAS FIANZAS'),
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
