import { AlignmentType, BorderStyle, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import { ReadInvestmentDto } from "src/investments/dto/read-investment.dto";

export class TableFour {
  constructor(
    private readonly investments: ReadInvestmentDto[],
  ) { }

  create() {
    const rows = [
      new TableRow({
        children: [
          new TableCell({
            shading: {
              fill: 'dfdfdf',
              type: ShadingType.REVERSE_DIAGONAL_STRIPE,
              color: 'dfdfdf',
            },
            columnSpan: 3,
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "3.- DETALLE DE INVERSIONES EN VALORES DE SU PROPIEDAD",
                }),
                new TextRun({
                  text: "     (Bonos, Acciones Cotizadas en Bolsa, Acciones de Empresa sin Cotización en BVL, etc.)",
                  break: 1
                }),
              ],
              style: "header",
            })],
            borders: {
              top: {
                style: BorderStyle.SINGLE,
                size: 1,
                color: "000000"
              },
              bottom: {
                style: BorderStyle.SINGLE,
                size: 1,
                color: "000000"
              },
              left: {
                style: BorderStyle.SINGLE,
                size: 1,
                color: "000000"
              },
              right: {
                style: BorderStyle.SINGLE,
                size: 1,
                color: "000000"
              },
            },
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "TIPO DE VALOR",
                  underline: {},
                  break: 1,
                })
              ],
              alignment: AlignmentType.CENTER,
              style: "header"
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "CANTIDAD",
                  underline: {},
                  break: 1,
                })
              ],
              alignment: AlignmentType.CENTER,
              style: "header"
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "VALOR ESTIMADO",
                  underline: {},
                  break: 1,
                })
              ],
              alignment: AlignmentType.CENTER,
              style: "header"
            })],
          }),
        ],
      }),

      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })]
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })]
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })]
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })]
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })]
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })]
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              text: '',
            })]
          }),
        ],
      }),
    ];
    this.investments.forEach((investment, index) => {
      if (index <= 6) {
        rows[index + 2] = new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                text: investment.type,
              })],
            }),
            new TableCell({
              children: [new Paragraph({
                text: investment.quantity.toString(),
              })],
            }),
            new TableCell({
              children: [new Paragraph({
                text: investment.price.toString(),
              })]
            }),
          ],
        });
      } else {
        rows.push(
          new TableRow({
            children: [
              new TableCell({
                children: [new Paragraph({
                  text: investment.type,
                  // style: "body"
                })],
              }),
              new TableCell({
                children: [new Paragraph({
                  text: investment.quantity.toString(),
                  // style: "body"
                })],
              }),
              new TableCell({
                children: [new Paragraph({
                  text: investment.price.toString(),
                  // style: "body"
                })]
              }),
            ],
          }),
        );
      }
    });

    return new Table({
      borders: {
        insideHorizontal: { style: BorderStyle.NONE },
        insideVertical: { style: BorderStyle.NONE },
      },
      width: {
        size: 100,
        type: WidthType.PERCENTAGE
      },
      margins: {
        left: 70,
      },
      rows,
    });
  }

}