import { Paragraph, ShadingType, Table, TableCell, TableRow, TextRun, WidthType } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table9 {

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
                                            text: 'Los abajo suscritos garantizan que los datos proporcionados son exactos, a los cuales asignan carácter de declaración jurada, y somos conocedores del delito de fraude en la administración de personas jurídicas (art. 198, inciso 1 y 2 del código penal) y de sus efectos legales.',
                                            bold: false,
                                            size: 8,
                                        })
                                    ],
                                }),
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: 'Declaran tener conocimiento que toda información brindada a una empresa del Sistema de Seguros Nacional constituye una declaración jurada conforme a lo establecido en el artículo 179 de la Ley General del Sistema Financiero y del Sistema de Seguros y Orgánica de la Superintendencia de Banca y Seguros (Ley 26702), por lo que, en caso brinde información falsa o incompleta, quedo sujeto a la sanción establecida en el primer párrafo del artículo 247º del Código Penal, de igual forma, eximo a Crecer Seguros de toda responsabilidad civil, penal o administrativa que pueda derivarse y/o ser consecuencia de la información que alcanzamos en el presente documento.',
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
