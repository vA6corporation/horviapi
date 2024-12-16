import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, HeightRule, ShadingType, VerticalAlign, TextRun, BorderStyle } from 'docx';
import { Table2 } from './table2';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class Table6 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): (Paragraph | Table)[] {
        const emptyLine = new Paragraph({ spacing: { line: 0 } });
        const heightRowcontent = {
            value: 650,
            rule: HeightRule.EXACT,
        };
        const shading1 = {
            fill: 'c00000',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#c00000',
        };
        const shading2 = {
            fill: 'bfbfbf',
            type: ShadingType.REVERSE_DIAGONAL_STRIPE,
            color: '#bfbfbf',
        };
        let table1: (Paragraph | Table)[] = [
            new Table({
                width: {
                    size: 100,
                    type: WidthType.PERCENTAGE,
                },
                rows: [
                    new TableRow({
                        tableHeader: true,
                        children: [
                            new TableCell({
                                shading: shading1,
                                verticalAlign: VerticalAlign.CENTER,
                                columnSpan: 10,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'III. ACCIONISTAS (con participación  mayor al 25% del Capital social) *',
                                                style: 'subtitle',
                                            }),
                                            new TextRun({
                                                text: '(*) De ser identificado el accionista/socio/asociado como un PEP se debe llenar la hoja de perfil del cliente Persona Natural por cada uno de los PEP identificados',
                                                color: '#ffffff',
                                                style: 'small',
                                                bold: false,
                                                break: 1,
                                            }),
                                            new TextRun({
                                                text: '(    ) Declaro no contar con accionistas/socios/asociados con participación mayor a 25%.',
                                                color: '#ffffff',
                                                font: 'Arial',
                                                size: 32,
                                                bold: true,
                                                break: 1,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ];
        let table2: (Paragraph | Table)[] = [
            emptyLine,
            new Table({
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
                width: {
                    size: 100,
                    type: WidthType.PERCENTAGE,
                },
                rows: [
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
                                                text: '% de Participación',
                                                style: 'small',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                    size: 31,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
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
                                columnSpan: 5,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
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
                                columnSpan: 5,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
                                                style: 'small',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            emptyLine,
            new Table2('', '').create(),
            emptyLine,
            new Table({
                borders: {
                    insideHorizontal: {
                        style: BorderStyle.SINGLE,
                        size: 1,
                        color: "ffffff"
                    },
                    insideVertical: {
                        style: BorderStyle.SINGLE,
                        size: 1,
                        color: "ffffff"
                    },
                    top: {
                        style: BorderStyle.SINGLE,
                        size: 1,
                        color: "000000"
                    },
                    bottom: {
                        style: BorderStyle.SINGLE,
                        size: 2,
                        color: "000000"
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
                width: {
                    size: 100,
                    type: WidthType.PERCENTAGE,
                },
                rows: [
                    new TableRow({
                        height: heightRowcontent,
                        tableHeader: true,
                        children: [
                            new TableCell({
                                borders: {
                                    top: {
                                        style: BorderStyle.SINGLE,
                                        size: 1,
                                        color: "000000"
                                    },
                                    bottom: {
                                        style: BorderStyle.SINGLE,
                                        size: 2,
                                        color: "000000"
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
                                shading: shading2,
                                verticalAlign: VerticalAlign.CENTER,
                                columnSpan: 2,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Llenar sólo en el caso de trabajar o haber trabajado en Empresas del Sector Público:',
                                                style: 'subtitle2',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableRow({
                        tableHeader: true,
                        children: [
                            new TableCell({
                                width: {
                                    size: 80,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Desempeña alguna Función Pública actualmente :                                                                                                                                                                                                                                                 ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: 'Ha desempeñado alguna Función Pública en los últimos cinco años :                                                                                                                                                                                                                   ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: 'Empresa en la que ejerce o ejerció la función Pública : ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: '',
                                                style: 'small',
                                                bold: true,
                                            }),
                                            new TextRun({
                                                text: 'Cargo que ejerce o ejerció : ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: '',
                                                style: 'small',
                                                bold: true,
                                            }),
                                            new TextRun({
                                                text: 'Tiempo de Servicios : ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: '',
                                                style: 'small',
                                                bold: true,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        spacing: {
                                            before: 30,
                                        },
                                        children: [
                                            new TextRun({
                                                text: '      si  ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),
                                            new TextRun({
                                                text: '      No ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),

                                            new TextRun({
                                                text: '      si  ',
                                                style: 'small',
                                                bold: false,
                                                break: 1,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),
                                            new TextRun({
                                                text: '      No ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            emptyLine,
        ];
        let table3: (Paragraph | Table)[] = [
            emptyLine,
            new Table({
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
                width: {
                    size: 100,
                    type: WidthType.PERCENTAGE,
                },
                rows: [
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
                                                text: '% de Participación',
                                                style: 'small',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                    size: 31,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
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
                                columnSpan: 5,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
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
                                columnSpan: 5,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
                                                style: 'small',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            emptyLine,
            new Table2('', '').create(),
            emptyLine,
            new Table({
                borders: {
                    insideHorizontal: {
                        style: BorderStyle.SINGLE,
                        size: 1,
                        color: "ffffff"
                    },
                    insideVertical: {
                        style: BorderStyle.SINGLE,
                        size: 1,
                        color: "ffffff"
                    },
                    top: {
                        style: BorderStyle.SINGLE,
                        size: 1,
                        color: "000000"
                    },
                    bottom: {
                        style: BorderStyle.SINGLE,
                        size: 2,
                        color: "000000"
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
                width: {
                    size: 100,
                    type: WidthType.PERCENTAGE,
                },
                rows: [
                    new TableRow({
                        height: heightRowcontent,
                        tableHeader: true,
                        children: [
                            new TableCell({
                                borders: {
                                    top: {
                                        style: BorderStyle.SINGLE,
                                        size: 1,
                                        color: "000000"
                                    },
                                    bottom: {
                                        style: BorderStyle.SINGLE,
                                        size: 2,
                                        color: "000000"
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
                                shading: shading2,
                                verticalAlign: VerticalAlign.CENTER,
                                columnSpan: 2,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Llenar sólo en el caso de trabajar o haber trabajado en Empresas del Sector Público:',
                                                style: 'subtitle2',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableRow({
                        tableHeader: true,
                        children: [
                            new TableCell({
                                width: {
                                    size: 80,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Desempeña alguna Función Pública actualmente :                                                                                                                                                                                                                                                 ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: 'Ha desempeñado alguna Función Pública en los últimos cinco años :                                                                                                                                                                                                                   ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: 'Empresa en la que ejerce o ejerció la función Pública : ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: '',
                                                style: 'small',
                                                bold: true,
                                            }),
                                            new TextRun({
                                                text: 'Cargo que ejerce o ejerció : ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: '',
                                                style: 'small',
                                                bold: true,
                                            }),
                                            new TextRun({
                                                text: 'Tiempo de Servicios : ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: '',
                                                style: 'small',
                                                bold: true,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        spacing: {
                                            before: 30,
                                        },
                                        children: [
                                            new TextRun({
                                                text: '      si  ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),
                                            new TextRun({
                                                text: '      No ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),

                                            new TextRun({
                                                text: '      si  ',
                                                style: 'small',
                                                bold: false,
                                                break: 1,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),
                                            new TextRun({
                                                text: '      No ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            emptyLine,
        ];
        let table4: (Paragraph | Table)[] = [
            emptyLine,
            new Table({
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
                width: {
                    size: 100,
                    type: WidthType.PERCENTAGE,
                },
                rows: [
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
                                                text: '% de Participación',
                                                style: 'small',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                verticalAlign: VerticalAlign.CENTER,
                                width: {
                                    size: 3,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                    size: 31,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
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
                                columnSpan: 5,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
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
                                columnSpan: 5,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
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
                                                text: ``,
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
                                                text: ``,
                                                style: 'small',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            emptyLine,
            new Table2('', '').create(),
            emptyLine,
            new Table({
                borders: {
                    insideHorizontal: {
                        style: BorderStyle.SINGLE,
                        size: 1,
                        color: "ffffff"
                    },
                    insideVertical: {
                        style: BorderStyle.SINGLE,
                        size: 1,
                        color: "ffffff"
                    },
                    top: {
                        style: BorderStyle.SINGLE,
                        size: 1,
                        color: "000000"
                    },
                    bottom: {
                        style: BorderStyle.SINGLE,
                        size: 2,
                        color: "000000"
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
                width: {
                    size: 100,
                    type: WidthType.PERCENTAGE,
                },
                rows: [
                    new TableRow({
                        height: heightRowcontent,
                        tableHeader: true,
                        children: [
                            new TableCell({
                                borders: {
                                    top: {
                                        style: BorderStyle.SINGLE,
                                        size: 1,
                                        color: "000000"
                                    },
                                    bottom: {
                                        style: BorderStyle.SINGLE,
                                        size: 2,
                                        color: "000000"
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
                                shading: shading2,
                                verticalAlign: VerticalAlign.CENTER,
                                columnSpan: 2,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Llenar sólo en el caso de trabajar o haber trabajado en Empresas del Sector Público:',
                                                style: 'subtitle2',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    new TableRow({
                        tableHeader: true,
                        children: [
                            new TableCell({
                                width: {
                                    size: 80,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: 'Desempeña alguna Función Pública actualmente :                                                                                                                                                                                                                                                 ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: 'Ha desempeñado alguna Función Pública en los últimos cinco años :                                                                                                                                                                                                                   ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: 'Empresa en la que ejerce o ejerció la función Pública : ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: '',
                                                style: 'small',
                                                bold: true,
                                            }),
                                            new TextRun({
                                                text: 'Cargo que ejerce o ejerció : ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: '',
                                                style: 'small',
                                                bold: true,
                                            }),
                                            new TextRun({
                                                text: 'Tiempo de Servicios : ',
                                                break: 1,
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: '',
                                                style: 'small',
                                                bold: true,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            new TableCell({
                                width: {
                                    size: 20,
                                    type: WidthType.PERCENTAGE,
                                },
                                children: [
                                    new Paragraph({
                                        spacing: {
                                            before: 30,
                                        },
                                        children: [
                                            new TextRun({
                                                text: '      si  ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),
                                            new TextRun({
                                                text: '      No ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),

                                            new TextRun({
                                                text: '      si  ',
                                                style: 'small',
                                                bold: false,
                                                break: 1,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),
                                            new TextRun({
                                                text: '      No ',
                                                style: 'small',
                                                bold: false,
                                            }),
                                            new TextRun({
                                                text: ' _ ',
                                                border: {
                                                    space: 1,
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: '000000',
                                                },
                                                color: 'ffffff',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            emptyLine,
        ];
        if (this.business.shareholders?.length > 0) {
            this.business.shareholders.forEach((element, index) => {
                if (element.percent >= 10) {
                    const table21 = new Table2(element.countryOrigin, element.countryResidence).create();
                    const dataRows = [
                        emptyLine,
                        new Table({
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
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
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
                                                            text: '% de Participación',
                                                            style: 'small',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            verticalAlign: VerticalAlign.CENTER,
                                            width: {
                                                size: 3,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `${element.percent}`,
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
                                                            text: `${index + 1}.Nombres y Apellidos:`,
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
                                                size: 31,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `${element.name ? element.name?.toUpperCase() : ''}`,
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
                                                            text: `${element.documentType ? element.documentType?.toUpperCase() : ''}`,
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
                                                            text: `${element.document}`,
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
                                                            text: `${element.position ? element.position?.toUpperCase() : ''}`,
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
                                            columnSpan: 5,
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `${element.addressResidence ? element.addressResidence?.toUpperCase() : ''}`,
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
                                                            text: `${element.provinceResidence ? element.provinceResidence?.toUpperCase() : ''}`,
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
                                                            text: `${element.countryOrigin ? element.countryOrigin?.toUpperCase() : ''}`,
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
                                            columnSpan: 5,
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: `${element.email ? element.email?.toUpperCase() : ''}`,
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
                                                            text: `${element.phoneNumber ? element.phoneNumber : ''}`,
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
                                                            text: `${element.mobileNumber ? element.mobileNumber : ''}`,
                                                            style: 'small',
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        emptyLine,
                        table21,
                        emptyLine,
                        new Table({
                            borders: {
                                insideHorizontal: {
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                    color: "ffffff"
                                },
                                insideVertical: {
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                    color: "ffffff"
                                },
                                top: {
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                    color: "000000"
                                },
                                bottom: {
                                    style: BorderStyle.SINGLE,
                                    size: 2,
                                    color: "000000"
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
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    height: heightRowcontent,
                                    tableHeader: true,
                                    children: [
                                        new TableCell({
                                            borders: {
                                                top: {
                                                    style: BorderStyle.SINGLE,
                                                    size: 1,
                                                    color: "000000"
                                                },
                                                bottom: {
                                                    style: BorderStyle.SINGLE,
                                                    size: 2,
                                                    color: "000000"
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
                                            shading: shading2,
                                            verticalAlign: VerticalAlign.CENTER,
                                            columnSpan: 2,
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: 'Llenar sólo en el caso de trabajar o haber trabajado en Empresas del Sector Público:',
                                                            style: 'subtitle2',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                new TableRow({
                                    tableHeader: true,
                                    children: [
                                        new TableCell({
                                            width: {
                                                size: 80,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            verticalAlign: VerticalAlign.CENTER,
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: 'Desempeña alguna Función Pública actualmente :                                                                                                                                                                                                                                                 ',
                                                            style: 'small',
                                                            bold: false,
                                                        }),
                                                        new TextRun({
                                                            text: 'Ha desempeñado alguna Función Pública en los últimos cinco años :                                                                                                                                                                                                                   ',
                                                            break: 1,
                                                            style: 'small',
                                                            bold: false,
                                                        }),
                                                        new TextRun({
                                                            text: 'Empresa en la que ejerce o ejerció la función Pública : ',
                                                            break: 1,
                                                            style: 'small',
                                                            bold: false,
                                                        }),
                                                        new TextRun({
                                                            text: element.publicCompaniesInstitute?.toUpperCase(),
                                                            style: 'small',
                                                            bold: true,
                                                        }),
                                                        new TextRun({
                                                            text: 'Cargo que ejerce o ejerció : ',
                                                            break: 1,
                                                            style: 'small',
                                                            bold: false,
                                                        }),
                                                        new TextRun({
                                                            text: element.publicCompaniesPosition?.toUpperCase(),
                                                            style: 'small',
                                                            bold: true,
                                                        }),
                                                        new TextRun({
                                                            text: 'Tiempo de Servicios : ',
                                                            break: 1,
                                                            style: 'small',
                                                            bold: false,
                                                        }),
                                                        new TextRun({
                                                            text: element.publicCompaniesTime,
                                                            style: 'small',
                                                            bold: true,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 20,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        before: 30,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: '      si  ',
                                                            style: 'small',
                                                            bold: false,
                                                        }),
                                                        new TextRun({
                                                            text: element.publicCompaniesCurrently ? ' X ' : ' _ ',
                                                            border: {
                                                                space: 1,
                                                                style: BorderStyle.SINGLE,
                                                                size: 1,
                                                                color: '000000',
                                                            },
                                                            font: 'Arial',
                                                            color: element.publicCompaniesCurrently ? '000000' : 'ffffff',
                                                        }),
                                                        new TextRun({
                                                            text: '      No ',
                                                            style: 'small',
                                                            bold: false,
                                                        }),
                                                        new TextRun({
                                                            text: element.publicCompaniesCurrently ? ' _ ' : ' X ',
                                                            border: {
                                                                space: 1,
                                                                style: BorderStyle.SINGLE,
                                                                size: 1,
                                                                color: '000000',
                                                            },
                                                            font: 'Arial',
                                                            color: element.publicCompaniesCurrently ? 'ffffff' : '000000',
                                                        }),

                                                        new TextRun({
                                                            text: '      si  ',
                                                            style: 'small',
                                                            bold: false,
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: element.publicCompaniesLast5year ? ' X ' : ' _ ',
                                                            border: {
                                                                space: 1,
                                                                style: BorderStyle.SINGLE,
                                                                size: 1,
                                                                color: '000000',
                                                            },
                                                            color: element.publicCompaniesLast5year ? '000000' : 'ffffff',
                                                        }),
                                                        new TextRun({
                                                            text: '      No ',
                                                            style: 'small',
                                                            bold: false,
                                                        }),
                                                        new TextRun({
                                                            text: element.publicCompaniesLast5year ? ' _ ' : ' X ',
                                                            border: {
                                                                space: 1,
                                                                style: BorderStyle.SINGLE,
                                                                size: 1,
                                                                color: '000000',
                                                            },
                                                            font: 'Arial',
                                                            color: element.publicCompaniesLast5year ? 'ffffff' : '000000',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        emptyLine,
                    ]
                    if (index == 0) {
                        table2 = dataRows
                    } else if (index == 1) {
                        table3 = dataRows
                    } else if (index == 2) {
                        table4 = dataRows
                    } else {
                        table1.push(...dataRows)
                    }
                }
            })
        }
        table1.push(...table2, ...table3, ...table4);
        return table1;
    }
}
