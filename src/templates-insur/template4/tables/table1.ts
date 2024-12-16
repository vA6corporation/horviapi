import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, VerticalAlign, AlignmentType, HeightRule } from 'docx';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';

export class Table1 {
  constructor(private readonly template: ReadTemplateDto) { }

  create(): Table {
    return new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          height: { value: 500, rule: HeightRule.ATLEAST },
          children: [
            new TableCell({
              width: {
                size: 17,
                type: WidthType.PERCENTAGE,
              },
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `CORREDOR`,
                      style: 'content',
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {
                size: 39,
                type: WidthType.PERCENTAGE,
              },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `LUIS LIMAYA`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              width: {
                size: 10,
                type: WidthType.PERCENTAGE,
              },
              verticalAlign: VerticalAlign.CENTER,
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `RUC / DNI`,
                      style: 'content',
                    }),
                  ],
                  alignment: AlignmentType.CENTER,
                }),
              ],
            }),
            new TableCell({
              width: {
                size: 34,
                type: WidthType.PERCENTAGE,
              },
              verticalAlign: VerticalAlign.CENTER,
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
