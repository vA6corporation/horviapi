import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, AlignmentType, VerticalAlign, HeightRule } from 'docx';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';

export class Table2 {
  constructor(private readonly template: ReadTemplateDto) { }

  create(): Table {
    const partnership = this.template.partnership;
    return new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          height: { value: 500, rule: HeightRule.ATLEAST },
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 26,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `NOMBRE / RAZÓN SOCIAL`,
                      style: 'content',
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: 5,
              width: {
                size: 74,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${partnership ? partnership.name?.toUpperCase() : this.template.business.name?.toUpperCase()}`,
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
          height: { value: 500, rule: HeightRule.ATLEAST },
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 26,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `DNI / RUC `,
                      style: 'content',
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              columnSpan: 5,
              width: {
                size: 74,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${partnership ? partnership.document : this.template.business.document}`,
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
          height: { value: 500, rule: HeightRule.ATLEAST },
          children: [
            new TableCell({
              verticalAlign: VerticalAlign.CENTER,
              margins: {
                left: 80,
              },
              width: {
                size: 26,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `PERSONA DE CONTACTO`,
                      style: 'content',
                    }),
                  ],
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
                      text: `${partnership ? partnership.representativeName?.toUpperCase() : this.template.business.representativeName?.toUpperCase()}`,
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
                size: 11,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `TELÉFONO`,
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
                size: 10,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${partnership ? partnership.phoneNumber : this.template.business.phoneNumber}  ${partnership ? '' : this.template.business.mobileNumber}`,
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
                size: 10,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `E-MAIL`,
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
                size: 22,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: `${partnership ? partnership.email?.toUpperCase() : this.template.business.representativeEmail?.toUpperCase()}`,
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
