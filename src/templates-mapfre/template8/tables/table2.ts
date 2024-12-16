import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, VerticalAlign, TextRun, BorderStyle } from 'docx';

export class Table2 {
  constructor(private readonly countryOrigin: string, private readonly countryResidence: string,) { }

  create(): Table {
    const heightRowcontent = {
      value: 650,
      rule: HeightRule.EXACT,
    };
    return new Table({
      borders: {
        insideHorizontal: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: "000000"
        },
        insideVertical: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: "000000"
        },
        top: {
          style: BorderStyle.SINGLE,
          size: 1,
          color: "000000"
        },
        bottom: {
          style: BorderStyle.SINGLE,
          size: 2,
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
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          height: heightRowcontent,
          tableHeader: true,
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 8,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'País de Origen:',
                      style: 'small',
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 34,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${this.countryOrigin?.toUpperCase() == 'PERU' || this.countryOrigin?.toUpperCase() == 'PERÚ' ? '' : this.countryOrigin?.toUpperCase() == '' ? '' : this.countryOrigin?.toUpperCase()}`,
                      style: 'small',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 16,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Residente en Perú:',
                      style: 'small',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 4,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${this.countryOrigin?.toUpperCase() == 'PERU' || this.countryOrigin?.toUpperCase() == 'PERÚ' ? 'Sí X' : this.countryOrigin?.toUpperCase() == '' ? 'Sí' : 'Sí'}`,
                      style: 'small',
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
                      text: `${this.countryOrigin?.toUpperCase() == 'PERU' || this.countryOrigin?.toUpperCase() == 'PERÚ' ? 'No' : this.countryOrigin?.toUpperCase() == '' ? 'No' : 'No X'}`,
                      style: 'small',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 14,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'País de Residencia:',
                      style: 'small',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              width: {
                size: 18,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${this.countryOrigin?.toUpperCase() == 'PERU' || this.countryOrigin?.toUpperCase() == 'PERÚ' ? '' : this.countryOrigin?.toUpperCase() == '' ? '' : this.countryResidence?.toUpperCase()}`,
                      style: 'small',
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
