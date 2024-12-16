import { AlignmentType, BorderStyle, Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import { ReadMovablePropertyDto } from "src/movable-properties/dto/read-movable-property.dto";

export class TableThree {

  constructor(
    private readonly movableProperties: ReadMovablePropertyDto[]
  ) { }

  create(): Table {
    const rows = [
      new TableRow({
        children: [
          new TableCell({
            shading: {
              fill: 'dfdfdf',
              type: ShadingType.REVERSE_DIAGONAL_STRIPE,
              color: 'dfdfdf',
            },
            columnSpan: 6,
            children: [new Paragraph({
              text: "2.- DETALLE DE BIENES MUEBLES DE SU PROPIEDAD",
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
                  text: "DESCRIPCION",
                  underline: {},
                  break: 1,
                })
              ],
              style: "header"
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "MODELO",
                  underline: {},
                  break: 1,
                })
              ],
              style: "header"
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "PLACA",
                  underline: {},
                  break: 1,
                })
              ],
              style: "header"
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "SERIE N°",
                  underline: {},
                  break: 1,
                })
              ],
              style: "header"
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "VALOR",
                  underline: {},
                  break: 1,
                })
              ],
              style: "header"
            })],
          }),
          new TableCell({
            children: [new Paragraph({
              children: [
                new TextRun({
                  text: "GRAVAMENES",
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
      }),
    ];
    this.movableProperties.forEach((movableProperty, index) => {
      if (index <= 6) {
        rows[index + 2] = new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph({
                text: movableProperty.description,
              })],
            }),
            new TableCell({
              children: [new Paragraph({
                text: movableProperty.modelo,
              })],
            }),
            new TableCell({
              children: [new Paragraph({
                text: movableProperty.placa,
              })],
            }),
            new TableCell({
              children: [new Paragraph({
                text: movableProperty.serie,
              })],
            }),
            new TableCell({
              children: [new Paragraph({
                text: movableProperty.commercialPrice.toFixed(2),
              })],
            }),
            new TableCell({
              children: [new Paragraph({
                text: movableProperty.encumbrance.toFixed(2),
              })],
            }),
          ],
        });
      } else {
        rows.push(
          new TableRow({
            children: [
              new TableCell({
                children: [new Paragraph({
                  text: movableProperty.description,
                })],
              }),
              new TableCell({
                children: [new Paragraph({
                  text: movableProperty.modelo,
                })],
              }),
              new TableCell({
                children: [new Paragraph({
                  text: movableProperty.placa,
                })],
              }),
              new TableCell({
                children: [new Paragraph({
                  text: movableProperty.serie,
                })],
              }),
              new TableCell({
                children: [new Paragraph({
                  text: movableProperty.commercialPrice.toFixed(2),
                })],
              }),
              new TableCell({
                children: [new Paragraph({
                  text: movableProperty.encumbrance.toFixed(2),
                })],
              }),
            ],
          })
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