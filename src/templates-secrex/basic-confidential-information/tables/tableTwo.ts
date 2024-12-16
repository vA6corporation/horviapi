import { BorderStyle, HeightRule, Paragraph, Table, TableCell, TableRow, WidthType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class TableTwo {
    
    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        let rows: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                text: `PRESIDENTE DEL DIRECTORIO:`,
                                style: 'body',
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                text: `VICE-PRESIDENTE:`,
                                style: 'body',
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                height: {
                    value: 1000,
                    rule: HeightRule.EXACT,
                },
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                text: `DIRECTORES:`,
                                style: 'body',
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                text: `GERENTE GENERAL: `,
                                style: 'body',
                            }),
                        ],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [
                            new Paragraph({
                                text: `GERENTE FINANCIERO: `,
                                style: 'body',
                            }),
                        ],
                    }),
                ],
            }),
        ];
        this.business.boardMembers.forEach((element) => {
            if (element.position == 'Presidente del directorio') {
                rows[0] = new TableRow({
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    text: `${element.position?.toUpperCase()}: ${element.name?.toUpperCase()}`,
                                    style: 'body',
                                }),
                            ],
                        }),
                    ],
                });
            } else if (element.position == 'Vice-Presidente') {
                rows[1] = new TableRow({
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    text: `${element.position?.toUpperCase()}: ${element.name?.toUpperCase()}`,
                                    style: 'body',
                                }),
                            ],
                        }),
                    ],
                });
            } else if (element.position == 'Directores') {
                rows[2] = new TableRow({
                    height: {
                        value: 1000,
                        rule: HeightRule.EXACT,
                    },
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    text: `${element.position?.toUpperCase()}: ${element.name?.toUpperCase()}`,
                                    style: 'body',
                                }),
                            ],
                        }),
                    ],
                });
            } else if (element.position == 'Gerente General') {
                rows[3] = new TableRow({
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    text: `${element.position?.toUpperCase()}: ${element.name?.toUpperCase()}`,
                                    style: 'body',
                                }),
                            ],
                        }),
                    ],
                });
            } else if (element.position == 'Gerente Financiero') {
                rows[4] = new TableRow({
                    children: [
                        new TableCell({
                            children: [
                                new Paragraph({
                                    text: `${element.position?.toUpperCase()}: ${element.name?.toUpperCase()}`,
                                    style: 'body',
                                }),
                            ],
                        }),
                    ],
                });
            } else {
                rows.push(
                    new TableRow({
                        children: [
                            new TableCell({
                                children: [
                                    new Paragraph({
                                        text: `${element.position?.toUpperCase()}: ${element.name?.toUpperCase()}`,
                                        style: 'body',
                                    }),
                                ],
                            }),
                        ],
                    }),
                );
            }
        });
        return new Table({
            borders: {
                top: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                },
                left: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                },
                right: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                },
                bottom: {
                    style: BorderStyle.SINGLE,
                    size: 1,
                },
                insideHorizontal: {
                    style: BorderStyle.NONE,
                },
                insideVertical: {
                    style: BorderStyle.NONE,
                },
            },
            margins: {
                left: 80,
                right: 80,
            },
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            borders: {
                                top: {
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                },
                                left: {
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                },
                                right: {
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                },
                                bottom: {
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                },
                            },
                            margins: {
                                top: 20,
                                bottom: 20,
                            },
                            children: [
                                new Paragraph({
                                    text: '2. MIEMBROS DEL DIRECTORIO - EJECUTIVO',
                                    style: 'header',
                                }),
                            ],
                        }),
                    ],
                }),
                ...rows,
                new TableRow({
                    height: {
                        rule: HeightRule.EXACT,
                        value: 170,
                    },
                    children: [
                        new TableCell({
                            children: [],
                        }),
                    ],
                }),
            ],
        });
    }
}
