import { Paragraph, ImageRun, TableBorders, Table, TableCell, TableRow, WidthType, UnderlineType, ShadingType, TextRun, VerticalAlign, AlignmentType, BorderStyle } from 'docx';
import * as fs from 'fs';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { formatDateShort } from 'src/format-date';

export class Table1 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }
    
    d = new Date()
    year = this.d.getFullYear()
    table2: TableRow[] = []
    itemsTitleData: string[] = [
        String(this.year - 4),
        String(this.year - 3),
        String(this.year - 2),
        String(this.year - 1),
        String(this.year),
    ]
    itemsBodyData: number[] = []
    total1 = 0
    total2 = 0
    total3 = 0
    total4 = 0
    total5 = 0
    cellData: TableCell[] = []
    bordersCells = {
        top: {
            size: 1,
            style: BorderStyle.SINGLE
        },
        bottom: {
            size: 1,
            style: BorderStyle.SINGLE
        },
        left: {
            size: 1,
            style: BorderStyle.SINGLE
        },
        right: {
            size: 1,
            style: BorderStyle.SINGLE
        },
    }
    tableHeader(): Table {
        return new Table({
            borders: TableBorders.NONE,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 78,
                                type: WidthType.PERCENTAGE,
                            },
                            margins: {
                                left: 80,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'OFICINA PRINCIPAL',
                                            style: 'smallLogo',
                                            bold: true,
                                        }),
                                        new TextRun({
                                            text: 'Av. 28 de Julio 873, Miraflores, Lima, Peru',
                                            style: 'smallLogo',
                                            break: 1,
                                        }),
                                        new TextRun({
                                            text: 'T. (511) 213 7373, F (511) 243 3131',
                                            style: 'smallLogo',
                                            break: 1,
                                        }),
                                        new TextRun({
                                            text: 'www.mapfre.com.pe',
                                            color: 'af1509',
                                            break: 1,
                                            font: 'Calibri',
                                            size: 20,
                                            underline: {
                                                type: UnderlineType.SINGLE,
                                                color: 'af1509',
                                            },
                                        }),
                                        new TextRun({
                                            text: 'BACKLOG DE OBRAS/SERVICIOS EJECUTADOS, EN EJECUCIÓN, POR EJECUTAR  Y PROYECTADOS',
                                            size: 40,
                                            font: 'Arial Black',
                                            bold: true,
                                            break: 2,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            width: {
                                size: 22,
                                type: WidthType.PERCENTAGE,
                            },
                            margins: {
                                left: 300,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            floating: {
                                                zIndex: 1,
                                                horizontalPosition: {
                                                    offset: 430000,
                                                },
                                                verticalPosition: {
                                                    offset: -400,
                                                },
                                            },
                                            data: fs.readFileSync(
                                                'src/templates-mapfre/template7/logo.png',
                                            ),
                                            transformation: {
                                                width: 340,
                                                height: 70,
                                            },
                                        }),
                                    ],
                                }),
                                new Paragraph({
                                    spacing: {
                                        before: 1350,
                                    },
                                    children: [
                                        new TextRun({
                                            text: '|  Unidad de Cauciones y Fianzas',
                                            font: 'Calibri',
                                            bold: true,
                                            color: '595959',
                                            size: 40,
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

    assignCellYears(year: string, amount: number, position: number) {
        if (position > 4) return;
        if (this.itemsTitleData[position] == year) {
            if (position == 0) {
                this.total1 = this.total1 + amount;
            } else if (position == 1) {
                this.total2 = this.total2 + amount;
            } else if (position == 2) {
                this.total3 = this.total3 + amount;
            } else if (position == 3) {
                this.total4 = this.total4 + amount;
            } else {
                this.total5 = this.total5 + amount;
            }
            this.cellData.push(
                new TableCell({
                    borders: this.bordersCells,
                    verticalAlign: VerticalAlign.CENTER,
                    width: {
                        size: 3,
                        type: WidthType.PERCENTAGE,
                    },
                    children: [
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `${amount}`,
                                    style: 'contenttable',
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                    ],
                }),
            );
            this.itemsBodyData.push(amount);
        } else {
            if (!this.itemsBodyData[position]) {
                this.cellData.push(
                    new TableCell({
                        borders: this.bordersCells,
                        verticalAlign: VerticalAlign.CENTER,
                        width: {
                            size: 3,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                );
                this.itemsBodyData.push(amount);
            }
            this.assignCellYears(year, amount, position + 1);
        }
    }

    tableContent(): Table {
        const shading1 = {
            fill: 'daeef3',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#daeef3',
        };
        const shading2 = {
            fill: 'fde9d9',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#fde9d9',
        };
        const shading3 = {
            fill: 'ebf1de',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#ebf1de',
        };
        const shading5 = {
            fill: 'e4dfec',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#e4dfec',
        };
        const cellAux = [
            new TableCell({
                borders: this.bordersCells,
                verticalAlign: VerticalAlign.CENTER,
                width: {
                    size: 3,
                    type: WidthType.PERCENTAGE,
                },
                children: [],
            }),
            new TableCell({
                borders: this.bordersCells,
                verticalAlign: VerticalAlign.CENTER,
                width: {
                    size: 3,
                    type: WidthType.PERCENTAGE,
                },
                children: [],
            }),
            new TableCell({
                borders: this.bordersCells,
                verticalAlign: VerticalAlign.CENTER,
                width: {
                    size: 3,
                    type: WidthType.PERCENTAGE,
                },
                children: [],
            }),
            new TableCell({
                borders: this.bordersCells,
                verticalAlign: VerticalAlign.CENTER,
                width: {
                    size: 3,
                    type: WidthType.PERCENTAGE,
                },
                children: [],
            }),
            new TableCell({
                borders: this.bordersCells,
                verticalAlign: VerticalAlign.CENTER,
                width: {
                    size: 3,
                    type: WidthType.PERCENTAGE,
                },
                children: [],
            }),
        ];
        if (this.business.experiences) {
            this.business.experiences.forEach((element) => {
                var dataConsortium = '';
                // for (const itemConsortium of element.othersConsortium) {
                //     dataConsortium = dataConsortium + ' ' + itemConsortium.name + ' ' + itemConsortium.participation + '% ';
                // }
                if (false) {
                    // if (element.incomes[0]) {
                    //     this.itemsBodyData = [];
                    //     this.assignCellYears(
                    //         element.incomes[0].year,
                    //         element.incomes[0].amount,
                    //         0,
                    //     );
                    // }
                    // if (element.incomes[1]) {
                    //     this.assignCellYears(
                    //         element.incomes[1].year,
                    //         element.incomes[1].amount,
                    //         0,
                    //     );
                    // } else {
                    //     if (!this.itemsBodyData[1]) {
                    //         this.cellData.push(
                    //             new TableCell({
                    //                 borders: this.bordersCells,
                    //                 verticalAlign: VerticalAlign.CENTER,
                    //                 width: {
                    //                     size: 3,
                    //                     type: WidthType.PERCENTAGE,
                    //                 },
                    //                 children: [],
                    //             }),
                    //         );
                    //     }
                    // }
                    // if (element.incomes[2]) {
                    //     this.assignCellYears(
                    //         element.incomes[2].year,
                    //         element.incomes[2].amount,
                    //         0,
                    //     );
                    // } else {
                    //     if (!this.itemsBodyData[2]) {
                    //         this.cellData.push(
                    //             new TableCell({
                    //                 borders: this.bordersCells,
                    //                 verticalAlign: VerticalAlign.CENTER,
                    //                 width: {
                    //                     size: 3,
                    //                     type: WidthType.PERCENTAGE,
                    //                 },
                    //                 children: [],
                    //             }),
                    //         );
                    //     }
                    // }
                    // if (element.incomes[3]) {
                    //     this.assignCellYears(
                    //         element.incomes[3].year,
                    //         element.incomes[3].amount,
                    //         0,
                    //     );
                    // } else {
                    //     if (!this.itemsBodyData[3]) {
                    //         this.cellData.push(
                    //             new TableCell({
                    //                 borders: this.bordersCells,
                    //                 verticalAlign: VerticalAlign.CENTER,
                    //                 width: {
                    //                     size: 3,
                    //                     type: WidthType.PERCENTAGE,
                    //                 },
                    //                 children: [],
                    //             }),
                    //         );
                    //     }
                    // }
                    // if (element.incomes[4]) {
                    //     this.assignCellYears(
                    //         element.incomes[4].year,
                    //         element.incomes[4].amount,
                    //         0,
                    //     );
                    // } else {
                    //     if (!this.itemsBodyData[4]) {
                    //         this.cellData.push(
                    //             new TableCell({
                    //                 borders: this.bordersCells,
                    //                 verticalAlign: VerticalAlign.CENTER,
                    //                 width: {
                    //                     size: 3,
                    //                     type: WidthType.PERCENTAGE,
                    //                 },
                    //                 children: [],
                    //             }),
                    //         );
                    //     }
                    // }
                } else {
                    this.cellData = cellAux;
                }
                this.table2.push(
                    new TableRow({
                        children: [
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 7,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.objectDescription}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 5,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.objectContract}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 6,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: element.convener,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.location}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formatDateShort(element.signaturedAt),
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formatDateShort(element.startAt),
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formatDateShort(element.endAt),
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${dataConsortium}`,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            ...this.cellData,
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 4,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                borders: this.bordersCells,
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contenttable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    }),
                );
                this.cellData = [];
            });
        } else {
            this.cellData = cellAux;
        }
        return new Table({
            borders: TableBorders.NONE,
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading1,
                            verticalAlign: VerticalAlign.TOP,
                            columnSpan: 9,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'OBRA / SERVICIO',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading2,
                            verticalAlign: VerticalAlign.TOP,
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'CONSORCIO',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading3,
                            verticalAlign: VerticalAlign.TOP,
                            columnSpan: 5,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'INGRESOS PASADOS, VIGENTES Y PROYECTADOS (S/.)',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading2,
                            verticalAlign: VerticalAlign.TOP,
                            columnSpan: 4,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Cartas Fianzas',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            verticalAlign: VerticalAlign.TOP,
                            shading: shading5,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'ARBITRAJE',
                                            style: 'contenttable',
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
                            borders: this.bordersCells,
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 7,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Nombre de la obra / Servicio',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 5,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Tipo de obra / servicio',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 6,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Beneficiario',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Ubicación',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Fecha Firma de Contrato',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Fecha de Inicio',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Fecha de Fin',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '% Avance a la fecha',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading1,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Monto del Contrato',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'SI / NO',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Afianzados',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '% Participación',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Operador (Si / No)',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),

                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading3,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.itemsTitleData[0],
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading3,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.itemsTitleData[1],
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading3,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.itemsTitleData[2],
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading3,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.itemsTitleData[3],
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading3,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: this.itemsTitleData[4],
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),

                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Fiel Cumplim.  (S/.)',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Adelanto Directo   (S/.)',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Adelanto  Materiales (S/.)',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading2,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 4,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Entidad Afianzadora',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            shading: shading5,
                            verticalAlign: VerticalAlign.CENTER,
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'SI / NO',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                    ],
                }),
                ...this.table2,
                new TableRow({
                    children: [
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            width: {
                                size: 3,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            verticalAlign: VerticalAlign.TOP,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'TOTAL',
                                            style: 'contenttable',
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            verticalAlign: VerticalAlign.TOP,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'S/. ' + this.total1,
                                            font: 'Arial',
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            verticalAlign: VerticalAlign.TOP,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'S/. ' + this.total2,
                                            font: 'Arial',
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            verticalAlign: VerticalAlign.TOP,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'S/. ' + this.total3,
                                            font: 'Arial',
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            verticalAlign: VerticalAlign.TOP,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'S/. ' + this.total4,
                                            font: 'Arial',
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                        new TableCell({
                            borders: this.bordersCells,
                            verticalAlign: VerticalAlign.TOP,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'S/. ' + this.total5,
                                            font: 'Arial',
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
