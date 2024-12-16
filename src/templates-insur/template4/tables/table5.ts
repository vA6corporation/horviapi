import { Paragraph, Table, TableCell, TableRow, WidthType, BorderStyle, TextRun, AlignmentType, VerticalAlign, HeightRule, TableBorders } from 'docx';
import { ReadGuaranteeDto } from 'src/templates/dto/read-guarantee.dto';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';

export class Table5 {
  constructor(private readonly guarantiesItem: ReadGuaranteeDto, private readonly template: ReadTemplateDto) { }

  public borders = {
    top: {
      style: BorderStyle.SINGLE,
      size: 1,
    },
    bottom: {
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
  };
  height = {
    value: 500,
    rule: HeightRule.EXACT,
  };

  create1(): Table {
    return new Table({
      borders: TableBorders.NONE,
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 21,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `MONEDA`,
                      style: 'content',
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              borders: this.borders,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 5,
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
            new TableCell({
              borders: this.borders,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 6,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${this.guarantiesItem.currencyCode== 'Soles' ? 'X' : ''}`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              width: {
                size: 13,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              borders: this.borders,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 5,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `US$`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              borders: this.borders,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 6,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${this.guarantiesItem.currencyCode== 'Dolar' ? 'X' : ''}`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              width: {
                size: 44,
                type: WidthType.PERCENTAGE,
              },
              children: [],
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
          height: this.height,
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 21,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `SUMA ASEGURADA`,
                      style: 'content',
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              borders: this.borders,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 22,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ` `,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              width: {
                size: 57,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
          ],
        }),
      ],
    });
  }

  create3(): Table {
    return new Table({
      borders: TableBorders.NONE,
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          height: this.height,
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 21,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Costo del Seguro`,
                      style: 'content',
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              borders: this.borders,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 22,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ` `,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              width: {
                size: 57,
                type: WidthType.PERCENTAGE,
              },
              children: [],
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
          height: this.height,
          children: [
            new TableCell({
              width: {
                size: 64,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 14,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `TASA (%)`,
                      style: 'content',
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              borders: this.borders,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 22,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ` `,
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
  create5(): Table {
    return new Table({
      borders: TableBorders.NONE,
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          height: this.height,
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 21,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Derecho de Emisión 3%`,
                      style: 'content',
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              borders: this.borders,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 22,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ` `,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              width: {
                size: 57,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
          ],
        }),
      ],
    });
  }
  create6(): Table {
    return new Table({
      borders: TableBorders.NONE,
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          height: this.height,
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 21,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Costo por Pagaré`,
                      style: 'content',
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              borders: this.borders,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 22,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ` `,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                right: 80,
              },
              width: {
                size: 6,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `IGV`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.RIGHT,
                }),
              ],
            }),
            new TableCell({
              borders: this.borders,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 15,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ` `,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 14,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `TOTAL VENTA`,
                      style: 'content',
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              borders: this.borders,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 22,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: ` `,
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
