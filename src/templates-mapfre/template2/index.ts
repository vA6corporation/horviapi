import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, Header, Table, TableRow, TableCell, ImageRun, Footer, WidthType, TableBorders } from 'docx';
import { styles } from './styles';
import { numbering } from './numbering';
import * as fs from 'fs';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class AddendumGeneralConditions {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Document {
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()

        return new Document({
            styles,
            numbering,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(24.5),
                                right: convertMillimetersToTwip(34),
                                bottom: convertMillimetersToTwip(25),
                                left: convertMillimetersToTwip(32),
                            },
                        },
                    },
                    headers: {
                        default: new Header({
                            // The standard default header on every page or header on odd pages when the 'Different Odd & Even Pages' option is activated
                            children: [
                                new Table({
                                    borders: TableBorders.NONE,
                                    rows: [
                                        new TableRow({
                                            children: [
                                                new TableCell({
                                                    children: [
                                                        new Paragraph({
                                                            children: [
                                                                new TextRun({
                                                                    text: 'Avenida 28 de Julio, 873 Miraflores ',
                                                                    style: 'headerText',
                                                                }),
                                                                new TextRun({
                                                                    text: 'Lima ',
                                                                    bold: true,
                                                                    style: 'headerText',
                                                                }),
                                                                new TextRun({
                                                                    text: 'Perú ',
                                                                    style: 'headerText',
                                                                }),
                                                                new TextRun({
                                                                    text: 'T ',
                                                                    break: 1,
                                                                    color: 'E80000',
                                                                    bold: true,
                                                                    size: 18,
                                                                }),
                                                                new TextRun({
                                                                    text: '+511.213.73.73 ',
                                                                    style: 'headerText',
                                                                }),
                                                                new TextRun({
                                                                    text: 'F ',
                                                                    color: 'E80000',
                                                                    bold: true,
                                                                    size: 18,
                                                                }),
                                                                new TextRun({
                                                                    text: '+511.213.91.53 www.mapfreperu.com',
                                                                    style: 'headerText',
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                    float: {
                                        absoluteHorizontalPosition: -700,
                                        absoluteVerticalPosition: -550,
                                    },
                                    width: {
                                        size: 100,
                                        type: WidthType.PERCENTAGE,
                                    },
                                }),
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            floating: {
                                                zIndex: 1,
                                                horizontalPosition: {
                                                    offset: 4500000,
                                                },
                                                verticalPosition: {
                                                    offset: 900000,
                                                },
                                            },
                                            data: fs.readFileSync('./src/templates-mapfre/template2/logo.png'),
                                            transformation: {
                                                width: 240,
                                                height: 44,
                                            },
                                        }),
                                    ],
                                    alignment: AlignmentType.RIGHT,
                                }),
                            ],
                        }),
                    },
                    children: [
                        new Paragraph({
                            spacing: {
                                before: 860,
                            },
                            children: [
                                new TextRun({
                                    text: 'ADDENDUM A LAS CONDICIONES GENERALES',
                                    style: 'title',
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Conste por el presente documento el Addendum a las condiciones generales suscritas entre EL SOLICITANTE y MAPFRE, para la emisión de títulos valores incompletos, en los términos y condiciones de las disposiciones siguientes:',
                                    break: 1,
                                    style: 'body',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 50,
                            },
                        }),
                        new Paragraph({
                            style: 'bodyParagraph',
                            children: [
                                new TextRun({
                                    text: 'Con el fin de representar sus obligaciones frente a MAPFRE, EL SOLICITANTE ha entregado a esta última un pagaré emitido en forma incompleta, declarando EL SOLICITANTE, con sus firmas puestas en el presente documento, que ha obtenido de MAPFRE una copia del mencionado título valor.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            spacing: {
                                after: 10,
                            },
                        }),
                        new Paragraph({
                            style: 'bodyParagraph',
                            children: [
                                new TextRun({
                                    text: 'Las partes convienen expresamente que, en caso que MAPFRE se viera obligada a honrar las garantías otorgadas a solicitud de EL SOLICITANTE, MAPFRE podrá completar el pagaré antes indicado,  por el monto que resulte de la liquidación de los importes efectivamente pagados por MAPFRE a el (los) beneficiario (s) de las garantías, incluidos intereses, comisiones y gastos generados, cualquiera sea la moneda en que aquellas hubieran sido otorgadas, en la fecha en que opte por esta facultad, descontando las sumas entregadas en garantía por EL SOLICITANTE.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            spacing: {
                                after: 10,
                            },
                        }),
                        new Paragraph({
                            style: 'bodyParagraph',
                            children: [
                                new TextRun({
                                    text: 'Para la liquidación de las obligaciones de EL SOLICITANTE referidas en el párrafo precedente, EL SOLICITANTE autoriza a MAPFRE a efectuar los cambios de moneda que considere convenientes al tipo de cambio que rija MAPFRE en la fecha en que se efectúe la conversión.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            spacing: {
                                after: 10,
                            },
                        }),
                        new Paragraph({
                            style: 'bodyParagraph',
                            children: [
                                new TextRun({
                                    text: 'Con la suscripción del presente documento EL SOLICITANTE renuncia expresamente a su derecho a incluir en el mencionado pagaré una cláusula que limite su transferencia, reconociendo el derecho de MAPFRE a negociar libremente el referido título valor.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            spacing: {
                                after: 10,
                            },
                        }),
                        new Paragraph({
                            style: 'bodyParagraph',
                            children: [
                                new TextRun({
                                    text: 'EL SOLICITANTE declara que MAPFRE ha puesto en su conocimiento los mecanismos de protección que la ley permite para la emisión o aceptación de títulos valores incompletos.',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            spacing: {
                                after: 10,
                            },
                        }),
                        new Paragraph({
                            style: 'bodyParagraph',
                            children: [
                                new TextRun({
                                    text: 'Las partes declaran que el presente addendum forma parte integrante del documento denominado “Condiciones Generales” que EL SOLICITANTE tiene suscrito con MAPFRE, y que los términos aquí estipulados son de plena aplicación a todo título valor que en forma incompleta EL SOLICITANTE hubiera emitido o en adelante pudiera emitir o aceptar a favor de MAPFRE ',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                            numbering: {
                                reference: 'notes',
                                level: 0,
                            },
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Lima, ${day} de ${month} del año ${year}`,
                                    break: 2,
                                    style: 'body',
                                }),
                                new TextRun({
                                    text: '.',
                                    color: 'ffffff',
                                }),
                            ],
                            alignment: AlignmentType.RIGHT,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 10,
                            },
                        }),
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            margins: {
                                                top: 90,
                                                right: 110,
                                                left: 110,
                                                bottom: 500,
                                            },
                                            width: {
                                                size: 43,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        line: 300,
                                                        before: 160,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: '…………………………………………………',
                                                            style: 'body',
                                                        }),
                                                        new TextRun({
                                                            text: 'MAPFRE',
                                                            style: 'title',
                                                            break: 1,
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            margins: {
                                                top: 90,
                                                right: 110,
                                                left: 110,
                                            },
                                            width: {
                                                size: 58,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        line: 300,
                                                        before: 160,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: '………………………………………………………………………',
                                                            style: 'body',
                                                        }),
                                                        new TextRun({
                                                            text: 'EL SOLICITANTE',
                                                            style: 'title',
                                                            bold: true,
                                                            break: 1,
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                                new Paragraph({
                                                    spacing: {
                                                        line: 300,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: `Documento de Identidad (RUC / DNI): ${this.business.document}`,
                                                            style: 'body',
                                                        }),
                                                        new TextRun({
                                                            text: 'Representante: ',
                                                            style: 'body',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: `${this.business.representativeName}`,
                                                            style: 'body',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: `Documento Nacional de Identidad: ${this.business.representativeDocument != null ? this.business.representativeDocument : ''}`,
                                                            style: 'body',
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
                        new Paragraph({
                            spacing: {
                                before: 1000,
                                after: 300,
                            },
                            children: [
                                new TextRun({
                                    text: '.',
                                    color: 'ffffff',
                                    break: 1,
                                }),
                            ],
                        }),
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            margins: {
                                                top: 200,
                                                right: 100,
                                                left: 100,
                                                bottom: 50,
                                            },
                                            width: {
                                                size: 42,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        line: 300,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: '…………………………………………………………',
                                                            style: 'body',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: 'EL SOLICITANTE',
                                                            style: 'title',
                                                            bold: true,
                                                            break: 1,
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                                new Paragraph({
                                                    spacing: {
                                                        line: 300,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: `Documento de Identidad (RUC / DNI): …………………………`,
                                                            style: 'body',
                                                        }),
                                                        new TextRun({
                                                            text: 'Representante: ',
                                                            style: 'body',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: `…………………………………………………………………`,
                                                            style: 'body',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: `            Documento         Nacional           de `,
                                                            style: 'body',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: `            Identidad: …………………………`,
                                                            style: 'body',
                                                            break: 1,
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            margins: {
                                                top: 150,
                                                right: 110,
                                                left: 110,
                                            },
                                            width: {
                                                size: 58,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        line: 300,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: '………………………………………………………………………',
                                                            style: 'body',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: 'EL SOLICITANTE',
                                                            style: 'title',
                                                            bold: true,
                                                            break: 1,
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.CENTER,
                                                }),
                                                new Paragraph({
                                                    spacing: {
                                                        line: 300,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: `Documento de Identidad (RUC / DNI): ……………………`,
                                                            style: 'body',
                                                        }),
                                                        new TextRun({
                                                            text: 'Representante: ',
                                                            style: 'body',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: `…………………………………………………………………`,
                                                            style: 'body',
                                                            break: 1,
                                                        }),
                                                        new TextRun({
                                                            text: `Documento Nacional de Identidad: ……………………………………`,
                                                            style: 'body',
                                                            break: 1,
                                                        }),
                                                    ],
                                                    alignment: AlignmentType.JUSTIFIED,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                    footers: {
                        default: new Footer({
                            children: [
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            floating: {
                                                zIndex: 1,
                                                horizontalPosition: {
                                                    offset: 100000,
                                                },
                                                verticalPosition: {
                                                    offset: 5300000,
                                                },
                                            },
                                            data: fs.readFileSync('./src/templates-mapfre/template2/logo2.png'),
                                            transformation: {
                                                width: 65,
                                                height: 90,
                                            },
                                        }),
                                    ],
                                    indent: {
                                        left: -1300,
                                    },
                                }),
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            floating: {
                                                zIndex: 1,
                                                horizontalPosition: {
                                                    offset: 110000,
                                                },
                                                verticalPosition: {
                                                    offset: 6500000,
                                                },
                                            },
                                            data: fs.readFileSync('./src/templates-mapfre/template2/pie.png'),
                                            transformation: {
                                                width: 80,
                                                height: 380,
                                                rotation: 360,
                                            },
                                        }),
                                    ],
                                    indent: {
                                        left: -1200,
                                    },
                                }),
                            ],
                        }),
                    },
                },
            ],
        })
    }
}
