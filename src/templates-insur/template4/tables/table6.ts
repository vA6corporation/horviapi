import { Paragraph, Table, TableCell, TableRow, WidthType, BorderStyle, TextRun, AlignmentType, VerticalAlign } from 'docx';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';

export class Table6 {
  constructor(private readonly template: ReadTemplateDto) { }

  create(): Table {
    let row: TableRow[] = [];
    if (this.template.business.accessCredit?.length > 0) {
      this.template.business.accessCredit.forEach(element => {
        row.push(new TableRow({
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 40,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: element.insuranceCarrier,
                      style: 'content',
                    }),
                  ],
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
                      text: element.typeGuarantee,
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
                size: 21,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${element.creditLine}`,
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
                size: 17,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${element.amountGuarantee}`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          ],
        }));
      });
    }
    return new Table({
      borders: {
        insideHorizontal: {
          space: 1,
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        insideVertical: {
          space: 1,
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        top: {
          space: 1,
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        bottom: {
          space: 1,
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        left: {
          space: 1,
          style: BorderStyle.SINGLE,
          size: 1,
          color: '333399',
        },
        right: {
          space: 1,
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
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 40,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Entidad Financiera / Asegurador`,
                      style: 'content',
                    }),
                  ],
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
                      text: `Crédito Nº / Modalidad`,
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
                size: 21,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Línea de Crédito US$ / S/.`,
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
                size: 17,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `Garantía otorgada`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
          ],
        }),
        ...row,
      ],
    });
  }
}
