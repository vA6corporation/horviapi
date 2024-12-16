import { AlignmentType, BorderStyle, Paragraph, Table, TableCell, TableRow, TextRun, VerticalAlign, WidthType } from "docx";
import { ReadShareholderDto } from "src/shareholders/dto/read-shareholder.dto";

export class TableFour {

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
            columnSpan: 2,
            children: [new Paragraph({ 
              text: "INGRESOS ANUALES (3)",
              style: "header",
              alignment: AlignmentType.CENTER
            })],
          }),
        ],
      }),
      new TableRow({
        children: [
          new TableCell({
            columnSpan: 2,
            children: [new Paragraph({ 
              children: [
                new TextRun({
                  text: "Indicar ingresos personales y su origen",
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
              size: 70,
              type: WidthType.PERCENTAGE
            },
            children: [new Paragraph({ 
              children: [
                new TextRun({
                  text: "Fuente",
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
                  text: "Monto Anual (US$)",
                  size: 12
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
        ],
      }),
    ];
    let total1 = 0;
    this.shareholder.incomes?.forEach((income, index) => {
      const row = new TableRow({
        children: [
          new TableCell({
            children: [new Paragraph({ 
              children: [
                new TextRun({
                  text: income.description,
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
                  text: income.amount.toFixed(2),
                  size: 12
                })
              ],
              alignment: AlignmentType.CENTER
            })],
          }),
          
        ],
      });
      total1 = income.amount + total1;
      if (index < 3) {
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
                text: "TOTAL INGRESOS",
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
              size: 15,
            },
            bottom: {
              style: BorderStyle.SINGLE,
              size: 15,
            },
            left: {
              style: BorderStyle.SINGLE,
              size: 15,
            },
            right: {
              style: BorderStyle.SINGLE,
              size: 15,
            },
          },
          children: [new Paragraph({ 
            children: [
              new TextRun({
                text: total1.toFixed(2),
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
      columnWidths: [8, 4],
      rows,
    });
  }

} 