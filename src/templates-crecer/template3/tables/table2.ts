import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, ShadingType, AlignmentType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table2 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): [Table, Paragraph, Table] {
        const marginsCellsTitles = {
            top: 50,
            bottom: 20,
            left: 200,
        };
        const marginsCells = {
            left: 70,
            right: 100,
        };
        const backgroundCells = {
            fill: 'd9d9d9',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#d9d9d9',
        };
        let totalPropertiesDebtPrice = 0,
            totalPropertiesCommercialPrice = 0,
            totalMovableEncumbrance = 0,
            totalMovableCommercialPrice = 0,
            totalInvestmentsEncumbrance = 0,
            totalInvestmentsCommercialPrice = 0,
            totalIncomesAmount = 0;

        let row1: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        margins: marginsCellsTitles,
                        shading: {
                            fill: '1f3864',
                            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                            color: '#1f3864',
                        },
                        columnSpan: 6,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Bienes Inmuebles (expresado en US$)',
                                        style: 'subtitle',
                                        color: 'ffffff',
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
                        margins: marginsCellsTitles,
                        columnSpan: 6,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: '(*) Indicar si es casa, departamento, oficina, almacén, terreno, etc.',
                                        style: 'subtitle',
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
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'N°',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Descripción (*)',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 13,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Área',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Valor Comercial',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Valor Hipoteca',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Deuda Asociada',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            }),
        ];
        let row2: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `1`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 13,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `2`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 13,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `3`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 13,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
        ];
    /* if (this.shareholder.properties) {
      this.shareholder.properties.forEach((element, index) => {
        totalPropertiesDebtPrice = totalPropertiesDebtPrice + element.debt;
        totalPropertiesCommercialPrice =
          totalPropertiesCommercialPrice + element.commercialPrice;
        if (index == 0) {
          row2[0] = new TableRow({
            children: [
              new TableCell({
                margins: {
                  right: 180,
                },
                shading: backgroundCells,
                width: {
                  size: 6,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${index + 1}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.RIGHT,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 24,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.description?.toUpperCase()}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 13,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.landArea}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.commercialPrice}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 15,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.mortgagePrice}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.debt}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
            ],
          });
        } else if (index == 1) {
          row2[1] = new TableRow({
            children: [
              new TableCell({
                margins: {
                  right: 180,
                },
                shading: backgroundCells,
                width: {
                  size: 6,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${index + 1}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.RIGHT,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 24,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.description?.toUpperCase()}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 13,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.landArea}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.commercialPrice}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 15,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.mortgagePrice}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.debt}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
            ],
          });
        } else if (index == 2) {
          row2[2] = new TableRow({
            children: [
              new TableCell({
                margins: {
                  right: 180,
                },
                shading: backgroundCells,
                width: {
                  size: 6,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${index + 1}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.RIGHT,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 24,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.description?.toUpperCase()}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 13,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.landArea}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.commercialPrice}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 15,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.mortgagePrice}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.debt}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
            ],
          });
        } else {
          row2.push(
            new TableRow({
              children: [
                new TableCell({
                  margins: {
                    right: 180,
                  },
                  shading: backgroundCells,
                  width: {
                    size: 6,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${index + 1}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.RIGHT,
                    }),
                  ],
                }),
                new TableCell({
                  margins: marginsCells,
                  width: {
                    size: 24,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${element.description?.toUpperCase()}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    }),
                  ],
                }),
                new TableCell({
                  margins: marginsCells,
                  width: {
                    size: 13,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${element.landArea}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    }),
                  ],
                }),
                new TableCell({
                  margins: marginsCells,
                  width: {
                    size: 21,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${element.commercialPrice}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    }),
                  ],
                }),
                new TableCell({
                  margins: marginsCells,
                  width: {
                    size: 15,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${element.mortgagePrice}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    }),
                  ],
                }),
                new TableCell({
                  margins: marginsCells,
                  width: {
                    size: 21,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${element.debt}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    }),
                  ],
                }),
              ],
            }),
          );
        }
      });
    } else  */if (this.business.properties) {
            this.business.properties.forEach((element, index) => {
                totalPropertiesDebtPrice = totalPropertiesDebtPrice + element.debt;
                totalPropertiesCommercialPrice =
                    totalPropertiesCommercialPrice + element.commercialPrice;
                if (index == 0) {
                    row2[0] = new TableRow({
                        children: [
                            new TableCell({
                                margins: {
                                    right: 180,
                                },
                                shading: backgroundCells,
                                width: {
                                    size: 6,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.RIGHT,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 24,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.description?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 13,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.landArea}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.commercialPrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.mortgagePrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.debt}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 1) {
                    row2[1] = new TableRow({
                        children: [
                            new TableCell({
                                margins: {
                                    right: 180,
                                },
                                shading: backgroundCells,
                                width: {
                                    size: 6,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.RIGHT,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 24,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.description?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 13,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.landArea}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.commercialPrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.mortgagePrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.debt}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 2) {
                    row2[2] = new TableRow({
                        children: [
                            new TableCell({
                                margins: {
                                    right: 180,
                                },
                                shading: backgroundCells,
                                width: {
                                    size: 6,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.RIGHT,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 24,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.description?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 13,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.landArea}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.commercialPrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.mortgagePrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.debt}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else {
                    row2.push(
                        new TableRow({
                            children: [
                                new TableCell({
                                    margins: {
                                        right: 180,
                                    },
                                    shading: backgroundCells,
                                    width: {
                                        size: 6,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${index + 1}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.RIGHT,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 24,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.description?.toUpperCase()}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 13,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.landArea}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 21,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.commercialPrice}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 15,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.mortgagePrice}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 21,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.debt}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    );
                }
            });
        }
        let row3: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        margins: marginsCellsTitles,
                        shading: {
                            fill: '1f3864',
                            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                            color: '#1f3864',
                        },
                        columnSpan: 6,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Vehículos (expresado en US$)',
                                        style: 'subtitle',
                                        color: 'ffffff',
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
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'N°',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Marca',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 13,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Año',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Placa',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Gravamen',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Valor Comercial',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            }),
        ];
        let row4: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `1`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 13,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `2`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 13,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `3`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 13,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
        ];
    /* if (this.shareholder.movableProperties) {
      this.shareholder.movableProperties.forEach((element, index) => {
        totalMovableEncumbrance = totalMovableEncumbrance + element.encumbrance;
        totalMovableCommercialPrice =
          totalMovableCommercialPrice + element.commercialPrice;
        if (index == 0) {
          row4[0] = new TableRow({
            children: [
              new TableCell({
                margins: {
                  right: 180,
                },
                shading: backgroundCells,
                width: {
                  size: 6,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${index + 1}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.RIGHT,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 24,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.modelo?.toUpperCase()}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 13,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.year}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.placa?.toUpperCase()}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 15,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.encumbrance}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.debtPrice}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
            ],
          });
        } else if (index == 1) {
          row4[1] = new TableRow({
            children: [
              new TableCell({
                margins: {
                  right: 180,
                },
                shading: backgroundCells,
                width: {
                  size: 6,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${index + 1}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.RIGHT,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 24,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.modelo?.toUpperCase()}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 13,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.year}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.placa?.toUpperCase()}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 15,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.encumbrance}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.debtPrice}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
            ],
          });
        } else if (index == 2) {
          row4[2] = new TableRow({
            children: [
              new TableCell({
                margins: {
                  right: 180,
                },
                shading: backgroundCells,
                width: {
                  size: 6,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${index + 1}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.RIGHT,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 24,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.modelo?.toUpperCase()}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 13,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.year}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.placa?.toUpperCase()}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 15,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.encumbrance}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
              new TableCell({
                margins: marginsCells,
                width: {
                  size: 21,
                  type: WidthType.PERCENTAGE,
                },
                children: [
                  new Paragraph({
                    children: [
                      new TextRun({
                        text: `${element.debtPrice}`,
                        style: 'subtitle',
                      }),
                    ],
                    alignment: AlignmentType.CENTER,
                  }),
                ],
              }),
            ],
          });
        } else {
          row4.push(
            new TableRow({
              children: [
                new TableCell({
                  margins: {
                    right: 180,
                  },
                  shading: backgroundCells,
                  width: {
                    size: 6,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${index + 1}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.RIGHT,
                    }),
                  ],
                }),
                new TableCell({
                  margins: marginsCells,
                  width: {
                    size: 24,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${element.modelo?.toUpperCase()}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    }),
                  ],
                }),
                new TableCell({
                  margins: marginsCells,
                  width: {
                    size: 13,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${element.year}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    }),
                  ],
                }),
                new TableCell({
                  margins: marginsCells,
                  width: {
                    size: 21,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${element.placa?.toUpperCase()}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    }),
                  ],
                }),
                new TableCell({
                  margins: marginsCells,
                  width: {
                    size: 15,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${element.encumbrance}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    }),
                  ],
                }),
                new TableCell({
                  margins: marginsCells,
                  width: {
                    size: 21,
                    type: WidthType.PERCENTAGE,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: `${element.debtPrice}`,
                          style: 'subtitle',
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    }),
                  ],
                }),
              ],
            }),
          );
        }
      });
    } else  */if (this.business.movableProperties) {
            this.business.movableProperties.forEach((element, index) => {
                totalMovableEncumbrance = totalMovableEncumbrance + element.encumbrance;
                totalMovableCommercialPrice =
                    totalMovableCommercialPrice + element.commercialPrice;
                if (index == 0) {
                    row4[0] = new TableRow({
                        children: [
                            new TableCell({
                                margins: {
                                    right: 180,
                                },
                                shading: backgroundCells,
                                width: {
                                    size: 6,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.RIGHT,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 24,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.modelo?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 13,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.year}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.placa?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.encumbrance}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.debtPrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 1) {
                    row4[1] = new TableRow({
                        children: [
                            new TableCell({
                                margins: {
                                    right: 180,
                                },
                                shading: backgroundCells,
                                width: {
                                    size: 6,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.RIGHT,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 24,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.modelo?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 13,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.year}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.placa?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.encumbrance}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.debtPrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 2) {
                    row4[2] = new TableRow({
                        children: [
                            new TableCell({
                                margins: {
                                    right: 180,
                                },
                                shading: backgroundCells,
                                width: {
                                    size: 6,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.RIGHT,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 24,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.modelo?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 13,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.year}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.placa?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.encumbrance}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.debtPrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else {
                    row4.push(
                        new TableRow({
                            children: [
                                new TableCell({
                                    margins: {
                                        right: 180,
                                    },
                                    shading: backgroundCells,
                                    width: {
                                        size: 6,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${index + 1}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.RIGHT,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 24,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.modelo?.toUpperCase()}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 13,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.year}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 21,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.placa?.toUpperCase()}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 15,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.encumbrance}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 21,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.debtPrice}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    );
                }
            });
        }
        let row5: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        margins: marginsCellsTitles,
                        shading: {
                            fill: '1f3864',
                            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                            color: '#1f3864',
                        },
                        columnSpan: 6,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Cuentas bancarias, inversiones y/o valores (expresado en US$)',
                                        style: 'subtitle',
                                        color: 'ffffff',
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
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'N°',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Tipo de cuenta',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        columnSpan: 2,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Banco / Detalle',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Gravamen',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Valor Comercial',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            }),
        ];
        let row6: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `1`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        columnSpan: 2,
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `2`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        columnSpan: 2,
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `3`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        columnSpan: 2,
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 15,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 21,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                ],
            }),
        ];
        if (this.business.investments) {
            this.business.investments.forEach((element, index) => {
                totalInvestmentsEncumbrance = element.encumbrance > 0 ?
                    totalInvestmentsEncumbrance + element.encumbrance : totalInvestmentsEncumbrance;
                totalInvestmentsCommercialPrice =
                    totalInvestmentsCommercialPrice + element.comercialPrice;
                if (index == 0) {
                    row6[0] = new TableRow({
                        children: [
                            new TableCell({
                                margins: {
                                    right: 180,
                                },
                                shading: backgroundCells,
                                width: {
                                    size: 6,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.RIGHT,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 24,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.typeAccount?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                columnSpan: 2,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.bankDetail?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.gravamen}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.comercialPrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 1) {
                    row6[1] = new TableRow({
                        children: [
                            new TableCell({
                                margins: {
                                    right: 180,
                                },
                                shading: backgroundCells,
                                width: {
                                    size: 6,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.RIGHT,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 24,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.typeAccount?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                columnSpan: 2,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.bankDetail?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.gravamen}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.comercialPrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else if (index == 2) {
                    row6[2] = new TableRow({
                        children: [
                            new TableCell({
                                margins: {
                                    right: 180,
                                },
                                shading: backgroundCells,
                                width: {
                                    size: 6,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${index + 1}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.RIGHT,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 24,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.typeAccount?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                columnSpan: 2,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.bankDetail?.toUpperCase()}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.gravamen}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 21,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.comercialPrice}`,
                                                style: 'subtitle',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    });
                } else {
                    row6.push(
                        new TableRow({
                            children: [
                                new TableCell({
                                    margins: {
                                        right: 180,
                                    },
                                    shading: backgroundCells,
                                    width: {
                                        size: 6,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${index + 1}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.RIGHT,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 24,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.typeAccount?.toUpperCase()}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    columnSpan: 2,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.bankDetail?.toUpperCase()}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 15,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.gravamen}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 21,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: `${element.comercialPrice}`,
                                                    style: 'subtitle',
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    );
                }
            });
        }
        let row7: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        margins: marginsCellsTitles,
                        shading: {
                            fill: '1f3864',
                            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                            color: '#1f3864',
                        },
                        columnSpan: 6,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Ingresos Anuales',
                                        style: 'subtitle',
                                        color: 'ffffff',
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
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'N°',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Tipo',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        columnSpan: 2,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Origen',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        shading: backgroundCells,
                        columnSpan: 2,
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: 'Monto',
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.CENTER,
                            }),
                        ],
                    }),
                ],
            }),
        ];
        let row8: TableRow[] = [
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `1`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        columnSpan: 2,
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        columnSpan: 2,
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `2`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        columnSpan: 2,
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        columnSpan: 2,
                        children: [],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        margins: {
                            right: 180,
                        },
                        shading: backgroundCells,
                        width: {
                            size: 6,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [
                            new Paragraph({
                                children: [
                                    new TextRun({
                                        text: `3`,
                                        style: 'subtitle',
                                    }),
                                ],
                                alignment: AlignmentType.RIGHT,
                            }),
                        ],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        width: {
                            size: 24,
                            type: WidthType.PERCENTAGE,
                        },
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        columnSpan: 2,
                        children: [],
                    }),
                    new TableCell({
                        margins: marginsCells,
                        columnSpan: 2,
                        children: [],
                    }),
                ],
            }),
        ];
        /* if (this.shareholder.incomes) {
          this.shareholder.incomes.forEach((element, index) => {
            totalIncomesAmount = totalIncomesAmount + element.amount;
            if (index == 0) {
              row8[0] = new TableRow({
                children: [
                  new TableCell({
                    margins: {
                      right: 180,
                    },
                    shading: backgroundCells,
                    width: {
                      size: 6,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${index + 1}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.RIGHT,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    width: {
                      size: 24,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.typeIncome}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.origin}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.amount}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                ],
              });
            } else if (index == 1) {
              row8[1] = new TableRow({
                children: [
                  new TableCell({
                    margins: {
                      right: 180,
                    },
                    shading: backgroundCells,
                    width: {
                      size: 6,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${index + 1}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.RIGHT,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    width: {
                      size: 24,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.typeIncome}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.origin}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.amount}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                ],
              });
            } else if (index == 2) {
              row8[2] = new TableRow({
                children: [
                  new TableCell({
                    margins: {
                      right: 180,
                    },
                    shading: backgroundCells,
                    width: {
                      size: 6,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${index + 1}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.RIGHT,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    width: {
                      size: 24,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.typeIncome}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.origin}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.amount}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                ],
              });
            } else {
              row8.push(
                new TableRow({
                  children: [
                    new TableCell({
                      margins: {
                        right: 180,
                      },
                      shading: backgroundCells,
                      width: {
                        size: 6,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `${index + 1}`,
                              style: 'subtitle',
                            }),
                          ],
                          alignment: AlignmentType.RIGHT,
                        }),
                      ],
                    }),
                    new TableCell({
                      margins: marginsCells,
                      width: {
                        size: 24,
                        type: WidthType.PERCENTAGE,
                      },
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `${element.typeIncome}`,
                              style: 'subtitle',
                            }),
                          ],
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                    }),
                    new TableCell({
                      margins: marginsCells,
                      columnSpan: 2,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `${element.origin}`,
                              style: 'subtitle',
                            }),
                          ],
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                    }),
                    new TableCell({
                      margins: marginsCells,
                      columnSpan: 2,
                      children: [
                        new Paragraph({
                          children: [
                            new TextRun({
                              text: `${element.amount}`,
                              style: 'subtitle',
                            }),
                          ],
                          alignment: AlignmentType.CENTER,
                        }),
                      ],
                    }),
                  ],
                }),
              );
            }
          });
        } else if (this.business.incomes) {
          this.business.incomes.forEach((element, index) => {
            totalIncomesAmount = totalIncomesAmount + element.amount;
            row8.push(
              new TableRow({
                children: [
                  new TableCell({
                    margins: {
                      right: 180,
                    },
                    shading: backgroundCells,
                    width: {
                      size: 6,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${index + 1}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.RIGHT,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    width: {
                      size: 24,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.typeIncome}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.origin}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                  new TableCell({
                    margins: marginsCells,
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: `${element.amount}`,
                            style: 'subtitle',
                          }),
                        ],
                        alignment: AlignmentType.CENTER,
                      }),
                    ],
                  }),
                ],
              }),
            );
          });
        } */
        const total1 = totalMovableEncumbrance + totalInvestmentsEncumbrance
        const total2 = totalPropertiesCommercialPrice + totalMovableCommercialPrice + totalInvestmentsCommercialPrice
        Array.prototype.push.apply(row1, row2)
        Array.prototype.push.apply(row1, row3)
        Array.prototype.push.apply(row1, row4)
        Array.prototype.push.apply(row1, row5)
        Array.prototype.push.apply(row1, row6)
        Array.prototype.push.apply(row1, row7)
        Array.prototype.push.apply(row1, row8)
        const table1 = new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: row1,
        })
        const paragraph1 = new Paragraph({
            spacing: {
                line: 340,
            },
        })
        const table2 = new Table({
            width: {
                size: 81,
                type: WidthType.PERCENTAGE,
            },
            alignment: AlignmentType.CENTER,
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCellsTitles,
                            shading: {
                                fill: '1f4679',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#1f4679',
                            },
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Resumen Patrimonial',
                                            style: 'subtitle',
                                            color: 'ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            shading: {
                                fill: '1f4679',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#1f4679',
                            },
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Total gravamen',
                                            style: 'subtitle',
                                            color: 'ffffff',
                                        }),
                                    ],
                                    alignment: AlignmentType.CENTER,
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            shading: {
                                fill: '1f4679',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#1f4679',
                            },
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Total valor comercial',
                                            style: 'subtitle',
                                            color: 'ffffff',
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
                            margins: marginsCellsTitles,
                            shading: {
                                fill: 'd9d9d9',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#d9d9d9',
                            },
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Bienes Inmuebles',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '',
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${totalPropertiesCommercialPrice > 0 ? totalPropertiesCommercialPrice : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCellsTitles,
                            shading: {
                                fill: 'd9d9d9',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#d9d9d9',
                            },
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Vehículos',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${totalMovableEncumbrance > 0 ? totalMovableEncumbrance : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${totalMovableCommercialPrice > 0 ? totalMovableCommercialPrice : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCellsTitles,
                            shading: {
                                fill: 'd9d9d9',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#d9d9d9',
                            },
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Cuentas Bancarias, Inversiones y/o valores',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${totalInvestmentsEncumbrance > 0 ? totalInvestmentsEncumbrance : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${totalInvestmentsCommercialPrice > 0 ? totalInvestmentsCommercialPrice : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCellsTitles,
                            shading: {
                                fill: 'd9d9d9',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#d9d9d9',
                            },
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Ingresos Anuales',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: ``,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${totalIncomesAmount > 0 ? totalIncomesAmount : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCellsTitles,
                            shading: {
                                fill: 'd9d9d9',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#d9d9d9',
                            },
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Total',
                                            style: 'subtitle',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(total1) > 0 ? total1 : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        new TableCell({
                            margins: marginsCellsTitles,
                            width: {
                                size: 27,
                                type: WidthType.PERCENTAGE,
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `${(total2) > 0 ? total2 : ''}`,
                                            style: 'content',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
        return [table1, paragraph1, table2]
    }
}
