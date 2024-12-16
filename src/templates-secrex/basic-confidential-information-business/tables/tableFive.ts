import { Paragraph, Table, TableCell, TableRow, WidthType } from "docx";
import { ReadFacilityCreditDto } from "src/businesses/dto/read-facility-credit.dto";

export class TableFive {

    constructor(
        private readonly facilityCredits: ReadFacilityCreditDto[]
    ) { }

    create() {
        const rows = [
            new TableRow({
                children: [
                    new TableCell({
                        columnSpan: 5,
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
        ]

        if (!this.facilityCredits.length) {
            for (let index = 0; index < 3; index++) {
                // const element = array[index];
                const row = new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                // text: facilityCredit.financier?.toUpperCase(),
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                // text: facilityCredit.creditNumber,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                // text: facilityCredit.modality,
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                // text: facilityCredit.creditLine.toFixed(2),
                            })],
                        }),
                        new TableCell({
                            children: [new Paragraph({
                                // text: facilityCredit.guaranteeGranted,
                            })],
                        }),
                    ],
                })
                rows.push(row)
            }
        }

        for (const facilityCredit of this.facilityCredits) {
            const row = new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph({
                            text: facilityCredit.financier?.toUpperCase(),
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: facilityCredit.creditNumber,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: facilityCredit.modality,
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: facilityCredit.creditLine.toFixed(2),
                        })],
                    }),
                    new TableCell({
                        children: [new Paragraph({
                            text: facilityCredit.guaranteeGranted,
                        })],
                    }),
                ],
            })
            rows.push(row)
        }

        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE
            },
            rows,
        })
    }
}