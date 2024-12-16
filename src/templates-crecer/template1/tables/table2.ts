import { Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import { ReadBusinessDto } from "src/businesses/dto/read-business.dto";

export class Table2 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const marginsCellsTitles = {
            top: 50,
            bottom: 20,
            left: 200,
        };
        let texts: TextRun[] = [
            new TextRun({
                text: 'Presidente del directorio:',
                style: 'content',
                break: 1,
            }),
            new TextRun({
                text: 'Directores: ',
                style: 'content',
                break: 2,
            }),
            new TextRun({
                break: 1,
            }),
            new TextRun({
                text: 'Gerente General:',
                style: 'content',
                break: 2,
            }),
            new TextRun({
                text: 'Gerente Financiero:',
                style: 'content',
                break: 2,
            }),
        ];
        this.business.boardMembers.forEach(element => {
            if (element.position == 'Presidente del directorio') {
                texts[0] = new TextRun({
                    text: `Presidente del directorio: ${element.name?.toUpperCase()}`,
                    style: 'content',
                    break: 1,
                });
            } else if (element.position == 'Directores') {
                texts[1] = new TextRun({
                    text: `Directores: ${element.name?.toUpperCase()}`,
                    style: 'content',
                    break: 2,
                });
                texts[2] = new TextRun({});
            } else if (element.position == 'Gerente General') {
                texts[3] = new TextRun({
                    text: `Gerente General: ${element.name?.toUpperCase()}`,
                    style: 'content',
                    break: 2,
                });
            } else if (element.position == 'Gerente Financiero') {
                texts[4] = new TextRun({
                    text: `Gerente Financiero: ${element.name?.toUpperCase()}`,
                    style: 'content',
                    break: 2,
                });
            }
        });

        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCellsTitles,
                            shading: {
                                fill: '1f3864',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#1f3864',
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `2. Miembros del directorio – ejecutivos`,
                                            style: 'subtitle',
                                            color: 'ffffff',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: {
                                top: 50,
                                bottom: 200,
                                left: 100,
                            },
                            children: [
                                new Paragraph({

                                    children: texts
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }

} 