import { Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table8 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {

        const headerMarginCells = {
            left: 10,
            top: 50,
            bottom: 50
        };

        const marginCells = {
            left: 10,
            top: 40,
            bottom: 10
        };

        const backgroundCells = {
            // fill: 'bfbfbf',
            type: ShadingType.SOLID,
            color: '#000080',
        };

        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            margins: marginCells,
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            // shading: backgroundCells,
                            columnSpan: 1,
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '1. Persona Expuestas Políticamente: Solo Personas Naturales, nacionales o extranjeras, que cumplen o que en los últimos 5 años hayan cumplido funciones públicas destacadas o funciones prominentes en una organización internacional, en territorio nacional o extranjero',
                                            bold: false,
                                            size: 8,
                                        })
                                    ],
                                }),
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: '2. Vinculación: Se presenta entre 2 empresas, cuando una de ellas participa de manera directa o indirecta en la administración, control o capital de la otra.',
                                            bold: false,
                                            size: 8
                                        })
                                    ],
                                }),
                            ],
                        }),
                    ]
                }),
            ],
        });
    }
}
