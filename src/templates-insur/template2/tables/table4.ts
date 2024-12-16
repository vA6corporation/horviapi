import { Paragraph, Table, TableCell, TableRow, WidthType, BorderStyle, TextRun, ShadingType, AlignmentType, VerticalAlign, HeightRule } from "docx";
import { ReadTemplateDto } from "src/templates/dto/read-template.dto";

export class Table4 {
  constructor() {}

  create(): Table {
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
              columnSpan: 4,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `REFERENCIAS BANCARIAS`,
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
          height: {
            value: 400,
            rule: HeightRule.EXACT,
          },
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 25,
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
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 25,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Sucursal`,
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
                size: 25,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Nº Cuenta Corriente`,
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
                size: 25,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Línea de Crédito S/.`,
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
          height: {
            value: 550,
            rule: HeightRule.EXACT,
          },
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 25,
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
                size: 25,
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
                size: 25,
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
                size: 25,
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
          height: {
            value: 550,
            rule: HeightRule.EXACT,
          },
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 25,
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
                size: 25,
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
                size: 25,
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
                size: 25,
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
          height: {
            value: 550,
            rule: HeightRule.EXACT,
          },
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 25,
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
                size: 25,
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
                size: 25,
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
                size: 25,
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

} 