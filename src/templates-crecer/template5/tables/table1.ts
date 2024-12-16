import { Paragraph, Table, TableCell, TableRow, WidthType, AlignmentType, VerticalAlign, TextRun, BorderStyle, UnderlineType, HeightRule, ImageRun, Tab } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
import { formatDateShort } from 'src/format-date';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';
const sizeOf = require("image-size")

export class Table1 {

    constructor(
        private readonly template: ReadTemplateDto
    ) { }

    async create(): Promise<Table[]> {
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = ('0' + (date.getMonth() + 1)).slice(-2)
        let year = date.getFullYear()
        
        const marginsCells = {
            left: 100,
            right: 100,
        }
        
        let dataGeneral: Table[] = []
        let row2: TableRow[] = []
        const heightRow1 = {
            value: 550,
            rule: HeightRule.EXACT,
        }

        let imageBuffer: ArrayBuffer | string = ''
        let width = 0
        let height = 0

        if (this.template.business.urlSignature) {
            const arrayBuffer = await fetch(this.template.business.urlSignature).then(res => res.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
            const dimensions = sizeOf(buffer)
            const ratio = calculateAspectRatio(dimensions.width, dimensions.height, 200, 200)
            width = ratio.width
            height = ratio.height
            imageBuffer = arrayBuffer
        }

        const { business, partnership } = this.template
        const businesses: ReadBusinessDto[] = partnership ? partnership.partnershipItems.map(e => e.business) : [business]
        
        businesses.forEach(business => {
            dataGeneral.push(
                new Paragraph({
                    spacing: {
                        after: 450,
                    },
                    children: [
                        new TextRun({
                            text: '                                   .',
                            color: 'ffffff'
                        }),
                        new TextRun({
                            text: 'EXPERIENCIA DE CADA CONSORCIADO EN OBRAS',
                            style: 'title',
                            underline: {
                                type: UnderlineType.SINGLE,
                            },
                        }),
                        new TextRun({
                            text: '                                             (COLOCAR OBRAS EJECUTADAS EN LOS ÚLTIMOS CINCO (5) AÑOS)',
                            style: 'subtitle',
                            break: 1,
                        }),
                    ],
                    pageBreakBefore: true,
                }),
                new Paragraph({
                    spacing: {
                        after: 450,
                    },
                    children: [
                        new TextRun({
                            text: '     CONTRATISTA: ',
                            style: 'subtitle',
                            bold: true,
                            break: 2,
                        }),
                        new TextRun({
                            text: business.name.toUpperCase(),
                            style: 'subtitle',
                        }),
                    ],
                }),
            )
            row2 = [
                new TableRow({
                    height: heightRow1,
                    children: [
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                    ],
                }),
                new TableRow({
                    height: heightRow1,
                    children: [
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                    ],
                }),
                new TableRow({
                    height: heightRow1,
                    children: [
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                        new TableCell({ children: [] }),
                    ],
                }),
            ]
            business.experiences.forEach((element, index) => {
                if (element.advancedPercent >= 100) {
                    var dataConsortium = ' '
                    const itemRow = new TableRow({
                        children: [
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 12,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: element.convener.toUpperCase(),
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: element.objectDescription,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 7,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: formatDateShort(element.startAt),
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 7,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: element.location.toUpperCase(),
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 8,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `S/.${element.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 7,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.daysLimit} DÍAS`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 7,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${element.advancedPercent}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 10,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: ``,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 12,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: `${dataConsortium}`,
                                                style: 'contentTable',
                                            }),
                                        ],
                                        alignment: AlignmentType.CENTER,
                                    }),
                                ],
                            }),
                            new TableCell({
                                margins: marginsCells,
                                width: {
                                    size: 15,
                                    type: WidthType.PERCENTAGE,
                                },
                                verticalAlign: VerticalAlign.CENTER,
                                children: [
                                    new Paragraph({
                                        children: [
                                            new TextRun({
                                                text: '',
                                                style: 'contentTable',
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    })
                    if (index < 3) {
                        row2[index] = itemRow
                    } else {
                        row2.push(itemRow)
                    }
                }
            });
            dataGeneral.push(
                new Table({
                    borders: {
                        top: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                        bottom: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                        left: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                        right: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                        insideHorizontal: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                        insideVertical: {
                            style: BorderStyle.DOTTED,
                            size: 1,
                        },
                    },
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 12,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Entidad Pública Contratante ',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 15,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'N° de Licitación y Objeto del Contrato',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 7,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Fecha de Inicio de Obra ',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 7,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Ubicación Geográfica de la obra ',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 8,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Monto de Contrato (Monto Adjudicado)',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 7,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Plazo Original de la Obra (en días)',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 7,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: '% Avance a la fecha (*)',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 10,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Nombre del Consorcio y % de su  participación',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 12,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Nombre de los otros consorciados y respectivo % de participación',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                            ],
                                            alignment: AlignmentType.CENTER,
                                        }),
                                    ],
                                }),
                                new TableCell({
                                    margins: marginsCells,
                                    width: {
                                        size: 15,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    verticalAlign: VerticalAlign.CENTER,
                                    children: [
                                        new Paragraph({
                                            children: [
                                                new TextRun({
                                                    text: 'Nombre de Entidades Afianzadoras (**)',
                                                    style: 'contentTable',
                                                    bold: true,
                                                }),
                                                new TextRun({
                                                    text: 'A)FC; B) AD; C) AM',
                                                    style: 'contentTable',
                                                    bold: true,
                                                    break: 2,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        ...row2,
                    ],
                }),
                new Paragraph({
                    children: [
                        new ImageRun({
                            data: imageBuffer,
                            transformation: {
                                width,
                                height,
                            },
                            floating: {
                                zIndex: 1,
                                behindDocument: true,
                                horizontalPosition: {
                                    offset: 400000,
                                },
                                verticalPosition: {
                                    offset: 5000000,
                                },
                            },
                        })
                    ],
                }),
                new Paragraph({
                    spacing: {
                        after: 550,
                    },
                    children: [
                        new TextRun({
                            text: '      (*)   En caso de que el avance de la obra sea del 100%, adjuntar: Acta de Recepción y/o Resolución de Liquidación Final. ',
                            style: 'subtitle',
                            bold: true,
                            break: 2,
                        }),
                        new TextRun({
                            text: '      (**) Aplica para el Reporte Nº 2 de Obras Vigentes (FC=Fiel Cumplimiento, AD=Adelanto Directo, AM=Adelanto para Materiales).',
                            style: 'subtitle',
                            bold: true,
                            break: 2,
                        }),
                        new TextRun({
                            text: '       ___________________________________	',
                            style: 'subtitle',
                            bold: true,
                            size: 18,
                            break: 5,
                        }),
                        new TextRun({
                            text: '       Firma y sello del Representante Legal',
                            style: 'subtitle',
                            bold: true,
                            size: 18,
                            break: 1,
                        }),
                        new TextRun({
                            text: `       FECHA:  ${day} / ${month} / ${year}`,
                            style: 'subtitle',
                            bold: true,
                            size: 18,
                            break: 1,
                        }),
                    ],
                }),
                new Paragraph({
                    spacing: {
                        after: 50,
                    },
                    children: [
                        new TextRun({
                            text: 'Los abajo suscritos declaramos que la información y documentación que proporcionamos es veraz y fiel reflejo de la realidad, a los cuales asignamos carácter de declaración jurada en los términos consignados en el artículo 179 de la Ley General del sistema financiero y del sistema de seguros y orgánica de la Superintendencia de Banca y Seguros, y declaramos que somos conocedores del delito de fraude en la administración de personas jurídicas (art. 198, incisos 1 y 2 del código penal) y de sus efectos legales.',
                            style: 'contentTable',
                            break: 1,
                        }),
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                }),
            )
        })
        return dataGeneral
    }
}
