import { Paragraph, ImageRun, TableBorders, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, ShadingType, VerticalAlign, TextRun } from "docx";
import * as fs from 'fs';

export class Table1 {

  constructor() { }

  create(): Table {
    let d = new Date();
    let day = ('0' + d.getDate()).slice(-2);
    let month = ('0' + (d.getMonth()+1)).slice(-2);
    let year = d.getFullYear();
    return new Table({
      borders: TableBorders.NONE,
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 60,
                type: WidthType.PERCENTAGE,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'FICHA CLIENTE ',
                      size: 68,
                      bold: true,
                      font: 'Arial',
                      break: 1,
                    }),
                    new TextRun({
                      text: 'PERSONA JURÍDICA',
                      size: 68,
                      bold: true,
                      font: 'Arial',
                      break: 1,
                    }),
                    new TextRun({
                      text: `FECHA: ${day} de ${month} de ${year}`,
                      size: 36,
                      style: 'contenttable',
                      break: 1,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {
                size: 30,
                type: WidthType.PERCENTAGE,
              },
              margins: {
                left: 900,
              },
              children: [
                new Paragraph({
                  children: [
                    new ImageRun({
                      floating: {
                        zIndex: 1,
                        horizontalPosition: {
                          offset: -5000,
                        },
                        verticalPosition: {
                          offset: 60000,
                        },
                      },
                      data: fs.readFileSync('src/templates-mapfre/template7/logo.png'),
                      transformation: {
                        width: 260,
                        height: 50,
                      },
                    }),
                    new TextRun({
                      text: 'Unidad de Cauciones y Créditos',
                      style: 'contenttable',
                      size: 15,
                      break: 4,
                    }),
                    new TextRun({
                      text: 'OFICINA PRINCIPAL',
                      break: 2,
                      size: 15,
                    }),
                    new TextRun({
                      text: 'Av. 28 de Julio 873, Miraflores, Lima, Peru',
                      break: 1,
                      size: 15,
                    }),
                    new TextRun({
                      text: 'T. (511) 213 7373, F (511) 243 3131',
                      break: 1,
                      size: 15,
                    }),
                    new TextRun({
                      text: 'www.mapfre.com.pe',
                      break: 1,
                      size: 15,
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