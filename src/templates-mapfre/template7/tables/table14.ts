import { Paragraph, Table, TableCell, TableRow, WidthType, HeightRule, ShadingType, VerticalAlign, TextRun } from "docx";

export class Table14 {

  constructor() { }

  create(): Table {
    const heightRow1 = {
      value: 550,
      rule: HeightRule.EXACT,
    };
    const heightRow2 = {
      value: 650,
      rule: HeightRule.EXACT,
    };
    const shading1 = {
      fill: 'c00000',
      type: ShadingType.REVERSE_DIAGONAL_STRIPE,
      color: '#c00000',
    };
    const shading2 = {
      fill: '1f4e78',
      type: ShadingType.REVERSE_DIAGONAL_STRIPE,
      color: '#1f4e78',
    };
    return new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          height: heightRow1,
          children: [
            new TableCell({
              shading: shading1,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'RELACIÓN DE LAS PRINCIPALES OBRAS / SERVICIOS EJECUTADOS EN LOS ÚLTIMOS 05 AÑOS',
                      size: 20,
                      style: 'contenttable',
                      color: '#ffffff',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        // *************************
        new TableRow({
          height: heightRow1,
          children: [
            new TableCell({
              shading: shading1,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'BUENA PRO ADJUDICADOS PENDIENTES DE EJECUCIÓN',
                      size: 20,
                      style: 'contenttable',
                      color: '#ffffff',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        // *************************
        new TableRow({
          height: heightRow1,
          children: [
            new TableCell({
              shading: shading1,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'LICITACIONES A LAS QUE SE HAN PRESENTADO Y LAS QUE ESTÁN POR ADJUDICARSE LA BUENA PRO',
                      size: 20,
                      style: 'contenttable',
                      color: '#ffffff',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        // *************************
        new TableRow({
          height: heightRow1,
          children: [
            new TableCell({
              shading: shading1,
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'OBRAS / SERVICIOS EN EJECUCIÓN',
                      size: 20,
                      style: 'contenttable',
                      color: '#ffffff',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 100,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }

} 