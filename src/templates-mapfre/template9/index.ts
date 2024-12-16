import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, BorderStyle, PageOrientation, ImageRun } from 'docx';
import { Table1 } from './tables';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class BacklogWorks {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    async create(): Promise<Document> {
        let imageBuffer: ArrayBuffer | string = ''
        let width = 0
        let height = 0

        if (this.business.urlSignature) {
            const arrayBuffer = await fetch(this.business.urlSignature).then(res => res.arrayBuffer())
            const buffer = Buffer.from(arrayBuffer)
            const dimensions = sizeOf(buffer)
            const ratio = calculateAspectRatio(dimensions.width, dimensions.height, 200, 200)
            width = ratio.width
            height = ratio.height
            imageBuffer = arrayBuffer
        }
        
        const table1 = new Table1(this.business)

        return new Document({
            styles: {
                characterStyles: [
                    {
                        id: 'contenttable',
                        name: 'Content table',
                        basedOn: 'Normal',
                        run: {
                            font: 'Calibri',
                            size: 22,
                            bold: true,
                        },
                    },
                    {
                        id: 'contenttable2',
                        name: 'Content table2',
                        basedOn: 'Normal',
                        run: {
                            font: 'Calibri',
                            size: 22,
                            bold: true,
                        },
                    },
                    {
                        id: 'smallLogo',
                        name: 'Small Logo',
                        basedOn: 'Normal',
                        run: {
                            font: 'Calibri',
                            size: 20,
                            color: '878787'
                        },
                    },
                    {
                        id: 'subTitle',
                        name: 'Sub Title',
                        basedOn: 'Normal',
                        run: {
                            font: 'Arial',
                            size: 20,
                        },
                    },
                ],
            },
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(2),
                                right: convertMillimetersToTwip(2),
                                left: convertMillimetersToTwip(2),
                                bottom: convertMillimetersToTwip(2),
                            },
                            size: {
                                orientation: PageOrientation.LANDSCAPE,
                                height: 160000,
                            },
                        },
                    },
                    children: [
                        table1.tableHeader(),
                        new Paragraph({
                            spacing: {
                                before: 300,
                                after: 140,
                            },
                            border: {
                                top: {
                                    color: 'auto',
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                },
                                bottom: {
                                    color: 'auto',
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                },
                                left: {
                                    color: 'auto',
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                },
                                right: {
                                    color: 'auto',
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 1,
                                },
                            },
                            children: [
                                new TextRun({
                                    text: '1. En el presente formato se deberá detallar las obras/servicios de la empresa, tanto pasadas, presentes, futuras y proyectadas.',
                                    style: 'subTitle',
                                }),
                                new TextRun({
                                    text: '2. En caso se trate de un consorcio, de deberá indicar en Ingresos, los correspondientes al % de participación.',
                                    break: 1,
                                    style: 'subTitle',
                                }),
                                new TextRun({
                                    text: '3. Los ingresos anuales, deberán cuadrar con los ingresos anuales registrados en los EEFF.',
                                    break: 1,
                                    style: 'subTitle',
                                }),
                                new TextRun({
                                    text: '4. Se podrá adjuntar información adicional, prinicpalmente si la obra/servicio se encuentra en arbitraje.',
                                    break: 1,
                                    style: 'subTitle',
                                }),
                            ],
                        }),
                        table1.tableContent(),
                        new Paragraph({
                            spacing: {
                                before: 300,
                                after: 750,
                            },
                            children: [
                                new TextRun({
                                    text: 'Declaro que los datos proporcionados son verdaderos, comprometiéndome a poner a disposición de MAPFRE PERU COMPAÑÍA DE SEGUROS Y REASEGUROS S.A., en caso de ser solicitados, los documentos que acrediten la autenticidad de la información proporcionada.',
                                    size: 16,
                                    font: 'Arial',
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
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
                                            offset: 2500000,
                                        },
                                        verticalPosition: {
                                            offset: 5500000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: '                                                                        _________________________________________________                                                                                                                                                                                         ______________________________________________  ',
                                }),
                                new TextRun({
                                    text: '                                                                               Firma y sello del Representante Legal                                                                                                                                                                                                                    Fecha',
                                    break: 1,
                                    font: 'Arial',
                                    size: 20,
                                    bold: true,
                                }),
                            ],
                        }),
                    ],
                },
            ],
        });
    }
}
