import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, ShadingType, VerticalAlign, TextRun, BorderStyle } from "docx";
export class Table4 {
  constructor(
    private readonly title: boolean,
    private readonly index: number,
    private readonly names: string,
    private readonly typedocument: string,
    private readonly document: string,
    private readonly position: string,
    private readonly address: string,
    private readonly city: string,
    private readonly country: string,
    private readonly email: string,
    private readonly numberPhone: string,
    private readonly mobilePhone: string,
  ) { }

  create(): Table {
    const heightRowcontent = {
      value: 650,
      rule: HeightRule.EXACT,
    };
    const shading1 = {
      fill: 'c00000',
      type: ShadingType.REVERSE_DIAGONAL_STRIPE,
      color: '#c00000',
    };

    let row1: TableRow[] = [
      new TableRow({
        tableHeader: true,
        children: [
          new TableCell({
            shading: shading1,
            verticalAlign: VerticalAlign.CENTER,
            columnSpan: 8,
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'II. REPRESENTANTES LEGALES / ADMINISTRADORES',
                    style: 'subtitle',
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    ];
    let row2: TableRow[] = [
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
                    text: this.index+'. Nombres y Apellidos:',
                    style: 'small',
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            verticalAlign: VerticalAlign.CENTER,
            width: {
              size: 43,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${this.names != null ? this.names?.toUpperCase() : ''}`,
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
              size: 7,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'Tipo de Documento:',
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
                    text: `${this.typedocument?.toUpperCase()}`,
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'Número de Documento:',
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${this.document != null ? this.document : ''}`,
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'Cargo:',
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${this.position?.toUpperCase()}`,
                    style: 'small',
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
            ],
          }),
        ],
      }),
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
                    text: 'Domicilio Legal:',
                    style: 'small',
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            verticalAlign: VerticalAlign.CENTER,
            columnSpan: 3,
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${this.address?.toUpperCase()}`,
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'Ciudad:',
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${this.city?.toUpperCase()}`,
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'País',
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${this.country?.toUpperCase()}`,
                    style: 'small',
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
            ],
          }),
        ],
      }),
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
                    text: 'E-mail:',
                    style: 'small',
                  }),
                ],
              }),
            ],
          }),
          new TableCell({
            verticalAlign: VerticalAlign.CENTER,
            columnSpan: 3,
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${this.email?.toUpperCase()}`,
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'Teléfono:',
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${this.numberPhone}`,
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: 'Celular:',
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
              size: 9,
              type: WidthType.PERCENTAGE,
            },
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${this.mobilePhone}`,
                    style: 'small',
                  }),
                ],
                alignment: AlignmentType.CENTER,
              }),
            ],
          }),
        ],
      })
    ];
    if(this.title){
      Array.prototype.push.apply(row1, row2);
    }else{
      row1 = row2;
    }
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
          size: 1, 
          color: "ffffff"
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
      rows: row1,
    });
  }

} 