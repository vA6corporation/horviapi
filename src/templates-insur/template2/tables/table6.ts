import { Paragraph, Table, TableCell, TableRow, WidthType, BorderStyle, TextRun, ShadingType, AlignmentType, VerticalAlign, TableBorders } from 'docx';

export class Table6 {
  constructor() { }

  create1(): Table {
    return new Table({
      borders: {
        insideHorizontal: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        insideVertical: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        top: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        bottom: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        left: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        right: {
          style: BorderStyle.SINGLE,
          size: 1,
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
                      text: `PASIVOS`,
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
              width: {
                size: 15,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Deudas Bancarias Corto y Largo Plazo`,
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
                      text: `Banco`,
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
                size: 12,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Vencimiento`,
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
                size: 17,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Pago Mensual S/.`,
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
                      text: `Deuda Total S/.`,
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
              width: {
                size: 3,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `6`,
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
                size: 22,
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
          ],
        }),

        new TableRow({
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 5,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Otras (Casas Com, Proveedores, etc)`,
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
                      text: `Institución`,
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
                size: 12,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Vencimiento`,
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
                size: 17,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Pago Mensual S/.`,
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
                      text: `Deuda Total S/.`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 5,
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
                      text: `7`,
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
              rowSpan: 5,
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
          ],
        }),

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
                      text: `Deudas Hipotecarias`,
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
                      text: `Banco`,
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
                size: 12,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Vencimiento`,
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
                size: 17,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Pago Mensual S/.`,
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
                      text: `Deuda Total S/.`,
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
                      text: `8`,
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
          ],
        }),
      ],
    });
  }

  create2(): Table {
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
                size: 33,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              borders: {
                top: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '333399',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '333399',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '333399',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '333399',
                },
              },
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 45,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `TOTAL DE PASIVOS (SUMA 6+7+8)`,
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
                  color: '333399',
                },
                bottom: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '333399',
                },
                left: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '333399',
                },
                right: {
                  style: BorderStyle.SINGLE,
                  size: 1,
                  color: '333399',
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
                      text: ``,
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

  create3(): Table {
    return new Table({
      borders: {
        insideHorizontal: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        insideVertical: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        top: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        bottom: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        left: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        right: {
          style: BorderStyle.SINGLE,
          size: 1,
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
              columnSpan: 6,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `RESUMEN PATRIMONIAL`,
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
              verticalAlign: VerticalAlign.BOTTOM,
              width: {
                size: 24,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Total Activos`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 2,
              width: {
                size: 5,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `- (menos)`,
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
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Total Pasivos`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 2,
              width: {
                size: 4,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `= (igual)`,
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
                size: 25,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Patrimonio`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              rowSpan: 2,
              width: {
                size: 22,
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
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.RIGHT,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.RIGHT,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.BOTTOM,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ``,
                      style: 'content',
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

  create4(): Table {
    return new Table({
      borders: {
        insideHorizontal: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        insideVertical: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        top: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        bottom: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        left: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        right: {
          style: BorderStyle.SINGLE,
          size: 1,
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
              columnSpan: 6,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `AVALES Y OTRAS DEUDAS INDIRECTAS`,
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
              width: {
                size: 15,
                type: WidthType.PERCENTAGE,
              },
              rowSpan: 2,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Deudor Principal`,
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
                size: 22,
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
              rowSpan: 2,
              width: {
                size: 7,
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
                size: 22,
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
              rowSpan: 2,
              width: {
                size: 12,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Monto Avalado`,
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
              width: {
                size: 22,
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
                size: 22,
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
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
}
