import { AlignmentType, BorderStyle, Paragraph, Table, TableCell, TableRow, TextRun, VerticalAlign, WidthType } from "docx";
import { ReadShareholderDto } from "src/shareholders/dto/read-shareholder.dto";

export class TableThree {

  constructor(
    private readonly shareholder: ReadShareholderDto,
  ) { }

  create(): Table {
    const rows = [
      new TableRow({
        children: [
          new TableCell({
            borders: {
              top: {
                style: BorderStyle.SINGLE,
                size: 13,
              },
              bottom: {
                style: BorderStyle.SINGLE,
                size: 13,
              },
              left: {
                style: BorderStyle.SINGLE,
                size: 13,
              },
              right: {
                style: BorderStyle.SINGLE,
                size: 13,
              },
            },
            columnSpan: 6,
            children: [new Paragraph({
              text: "BIENES MUEBLES Y OTROS (2)",
              style: "header",
              alignment: AlignmentType.CENTER
            })],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 6,
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "Indicar si es vehículos, acciones, obras de arte, etc. (en el caso de vehículos mencionar marca y año de fabricación)",
                  size: 14
                })
              ],
              // style: "header",
              alignment: AlignmentType.CENTER
            })],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 34,
              type: WidthType.PERCENTAGE
            },
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "Descripcion",
                  size: 12
                })
              ],
              alignment: AlignmentType.CENTER
            })],
          }),
          new TableCell({
            width: {
              size: 13,
              type: WidthType.PERCENTAGE
            },
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "Valor (US$)",
                  size: 12
                }),
                new TextRun({
                  text: "Comercial",
                  size: 12, break: 1,
                })
              ],
              alignment: AlignmentType.CENTER
            })],
          }),
          new TableCell({
            width: {
              size: 6,
              type: WidthType.PERCENTAGE
            },
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "Prenda",
                  size: 12
                }),
                new TextRun({
                  text: "(Si o No)",
                  size: 12,
                  break: 1,
                })
              ],
              alignment: AlignmentType.CENTER,
            })],
          }),
          new TableCell({
            width: {
              size: 13,
              type: WidthType.PERCENTAGE
            },
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "Valor (US$) Prenda",
                  size: 12
                })
              ],
              alignment: AlignmentType.CENTER
            })],
          }),
          new TableCell({
            width: {
              size: 10,
              type: WidthType.PERCENTAGE
            },
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "Deuda (US$) Relacionada",
                  size: 12
                })
              ],
              alignment: AlignmentType.CENTER
            })],
          }),
          new TableCell({
            width: {
              size: 30,
              type: WidthType.PERCENTAGE
            },
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "Banco o",
                  size: 12
                }),
                new TextRun({
                  text: "Institución",
                  size: 12, break: 1,
                })
              ],
              alignment: AlignmentType.CENTER
            })],
          }),

        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
          new TableCell({
            children: [],
          }),
        ],
      })
    ];
    let total1 = 0, total2 = 0;
    this.shareholder.movableProperties?.forEach((movablePropety, index) => {
      const row = new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: movablePropety.description,
                  size: 12
                })
              ],
              alignment: AlignmentType.CENTER
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: movablePropety.commercialPrice.toFixed(2),
                  size: 12
                })
              ],
              alignment: AlignmentType.CENTER
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: movablePropety.isWarranty ? 'SI' : 'NO',
                  size: 12
                })
              ],
              alignment: AlignmentType.CENTER,
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: movablePropety.warrantyPrice ? movablePropety.warrantyPrice.toFixed(2) : '',
                  size: 12
                })
              ],
              alignment: AlignmentType.CENTER
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: movablePropety.debtPrice ? movablePropety.debtPrice.toFixed(2) : '',
                  size: 12
                })
              ],
              alignment: AlignmentType.CENTER
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: movablePropety.financier,
                  size: 12
                })
              ],
              alignment: AlignmentType.CENTER
            })],
          }),
        ],
      });
      total1 = movablePropety.commercialPrice + total1;
      total2 = movablePropety.warrantyPrice ? movablePropety.warrantyPrice + total2 : total2;
      if (index < 6) {
        rows[index + 3] = row;
      } else {
        rows.push(row);
      }
    });

    const row = new TableRow({
      children: [
        new TableCell({
          verticalAlign: VerticalAlign.BOTTOM,
          children: [new Paragraph({
            children: [
              new TextRun({
                text: "TOTAL",
                size: 12,
                bold: true
              })
            ],
            alignment: AlignmentType.CENTER
          })],
        }),
        new TableCell({
          borders: {
            top: {
              style: BorderStyle.SINGLE,
              size: 13,
            },
            bottom: {
              style: BorderStyle.SINGLE,
              size: 15,
            },
            left: {
              style: BorderStyle.SINGLE,
              size: 13,
            },
            right: {
              style: BorderStyle.SINGLE,
              size: 13,
            },
          },
          children: [new Paragraph({
            children: [
              new TextRun({
                text: `${total1.toFixed(2)}`,
              })
            ],
            alignment: AlignmentType.CENTER
          })],
        }),
        new TableCell({
          children: [new Paragraph({
            children: [
              new TextRun({
                // text: "Area Terreno",
                size: 12
              })
            ],
            alignment: AlignmentType.CENTER,
          })],
        }),
        new TableCell({
          borders: {
            top: {
              style: BorderStyle.SINGLE,
              size: 13,
            },
            bottom: {
              style: BorderStyle.SINGLE,
              size: 15,
            },
            left: {
              style: BorderStyle.SINGLE,
              size: 13,
            },
            right: {
              style: BorderStyle.SINGLE,
              size: 13,
            },
          },
          children: [new Paragraph({
            children: [
              new TextRun({
                text: `${total2.toFixed(2)}`,
              })
            ],
            alignment: AlignmentType.CENTER
          })],
        }),
        new TableCell({
          columnSpan: 2,
          children: [new Paragraph({
            children: [
              new TextRun({
                // text: "Valor Comercial US$",
                size: 12
              })
            ],
            alignment: AlignmentType.CENTER
          })],
        }),
      ],
    });

    rows.push(row);

    return new Table({
      width: {
        size: 100,
        type: WidthType.PERCENTAGE
      },
      rows,
    });
  }

} 