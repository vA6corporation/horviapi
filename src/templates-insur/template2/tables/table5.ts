import { Paragraph, Table, TableCell, TableRow, WidthType, BorderStyle, TextRun, ShadingType, AlignmentType, VerticalAlign, TableBorders } from 'docx';

export class Table5 {
  constructor() { }

  create1(): Table {
    return new Table({
      borders: {
        insideHorizontal: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        insideVertical: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        top: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        bottom: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        left: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        right: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
      },
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              shading: { fill: '000080',  type: ShadingType.REVERSE_DIAGONAL_STRIPE, color: '#000080' },
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: 7,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `ACTIVOS (2)`,
                      color: 'ffffff',
                      style: 'title',
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
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 4,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Documentos o Depósitos de Ahorro`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: 3,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Institución`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Valor S/.`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 4,
              shading: {
                fill: '00ccff',
                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                color: '#00ccff',
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `1`,
                      color: '000080',
                      size: 48,
                      font: 'Arial',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 4,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `S/.`,
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
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: 3,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
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
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: 3,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
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
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: 3,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
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
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 3,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Acciones Bonos`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Emisor`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: 2,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Nº`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Valor S/.`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 3,
              shading: {
                fill: '00ccff',
                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                color: '#00ccff',
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `2`,
                      color: '000080',
                      size: 48,
                      font: 'Arial',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 3,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `S/.`,
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
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: 2,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
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
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: 2,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
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
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 4,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Participación en sociedades`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Razón Social`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `RUC`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 7,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `% Part.`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 12,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Valor S/.`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 4,
              width: {
                size: 3,
                type: WidthType.PERCENTAGE,
              },
              shading: {
                fill: '00ccff',
                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                color: '#00ccff',
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `3`,
                      color: '000080',
                      size: 48,
                      font: 'Arial',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 4,
              width: {
                size: 23,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `S/.`,
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
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 20,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 20,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 6,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 13,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 20,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 20,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 6,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 13,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 20,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 20,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 6,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 13,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }

  create2(): Table {
    return new Table({
      borders: {
        insideHorizontal: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        insideVertical: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        top: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        bottom: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        left: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        right: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
      },
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 3,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Propiedades`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 7,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Tipo`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 13,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Dirección`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 9,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Nº de Autovalúo`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 18,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Hipoteca`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 13,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Valor S/.`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 3,
              shading: {
                fill: '00ccff',
                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                color: '#00ccff',
              },
              width: {
                size: 3,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `4`,
                      color: '000080',
                      size: 48,
                      font: 'Arial',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 3,
              width: {
                size: 22,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `S/.`,
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
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
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
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }

  create3(): Table {
    return new Table({
      borders: {
        insideHorizontal: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        insideVertical: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        top: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        bottom: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        left: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
        right: {
          style: BorderStyle.SINGLE,
          size: 10,
          color: '333399',
        },
      },
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              borders: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 10,
                  color: '333399',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 10,
                  color: '333399',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 10,
                  color: '333399',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 10,
                  color: '333399',
                },
              },
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 3,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Vehículos`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 18,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Marca`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 18,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Modelo`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 11,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Año`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 13,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Valor S/.`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 3,
              shading: {
                fill: '00ccff',
                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                color: '#00ccff',
              },
              width: {
                size: 3,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `5`,
                      color: '000080',
                      size: 48,
                      font: 'Arial',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 3,
              width: {
                size: 22,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `S/.`,
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
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 18,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 18,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 11,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 13,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 18,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 18,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 11,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 13,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }

  create4(): Table {
    return new Table({
      borders: TableBorders.NONE,
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              borders: TableBorders.NONE,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              borders: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
              },
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
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              borders: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
              },
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
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              borders: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
              },
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
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              borders: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
              },
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
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              borders: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
              },
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 2,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              borders: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
              },
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 2,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              borders: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
              },
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 2,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              borders: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
              },
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 45,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `TOTAL DE ACTIVOS (SUMA1+2+3+4+5)`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              borders: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '000080',
                },
              },
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 22,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `S/.`,
                      style: 'content',
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
}
