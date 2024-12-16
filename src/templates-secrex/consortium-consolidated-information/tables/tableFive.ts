import { Paragraph, Table, TableCell, TableRow, WidthType } from "docx";

export const tableFive = new Table({
  width: {
    size: 100,
    type: WidthType.PERCENTAGE
  },
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [
            new Paragraph({ 
              text: "5. FACILIDADES CREDITICIAS APROBADAS POR EL SISTEMA FINANCIERO",
              style: "header",
            }),
            new Paragraph({
              text: "(Mencione los prestamos vigentes, las líneas de crédito y demás facilidades Crediticias con sus respectivas Garantías)"
            })
          ],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph({ 
            text: "ENTIDAD FINANCIERA",
          })],
        }),
        new TableCell({
          children: [new Paragraph({ 
            text: "CRÉDITO No.",
          })],
        }),
        new TableCell({
          children: [new Paragraph({ 
            text: "MODALIDAD",
          })],
        }),
        new TableCell({
          children: [new Paragraph({ 
            text: "LÍNEA DE CRÉDITO US$",
          })],
        }),
        new TableCell({
          children: [new Paragraph({ 
            text: "GARANTÍA OTORGADA",
          })],
        }),
      ],
    }),
    // new TableRow({
    //   children: [
    //     new TableCell({
    //       children: [new Paragraph({ 
    //         text: "DOMICILIO LEGAL: AV LOS BUITRES LIMA LIMA LIMA",
    //       })],
    //     }),
    //   ],
    // }),
  ],
});