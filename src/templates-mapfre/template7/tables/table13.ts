import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, VerticalAlign, TextRun, ShadingType } from "docx";

export class Table13 {

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
              columnSpan: 5,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'JUICIOS CIVILES, COMERCIALES, LABORALES, ARBITRALES Y CONTENCIOSOS ADMINISTRATIVOS VIGENTES',
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
              shading: shading2,
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Nombre de las partes del juicio',
                      style: 'contenttable',
                      color: '#ffffff',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              shading: shading2,
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Motivo / Estado del Juicio',
                      style: 'contenttable',
                      color: '#ffffff',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              shading: shading2,
              width: {
                size: 25,
                type: WidthType.PERCENTAGE,
              },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Monto US$ / S/.',
                      style: 'contenttable',
                      color: '#ffffff',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              shading: shading2,
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Tribunal',
                      style: 'contenttable',
                      color: '#ffffff',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              shading: shading2,
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Expediente Nº',
                      style: 'contenttable',
                      color: '#ffffff',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
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
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
          ],
        }),
        new TableRow({
          height: heightRow2,
          children: [
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
            new TableCell({
              width: {
                size: 20,
                type: WidthType.PERCENTAGE,
              },
              children: [],
            }),
          ],
        }),
      ],
    });
  }

} 