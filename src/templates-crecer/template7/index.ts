import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ImageRun, Header, TableBorders, LineRuleType, HeightRule } from 'docx';
import { Table1, Table2, Table3, Table4 } from './tables';
import * as fs from 'fs';
import { styles } from './styles';
import { numbering } from './numbering';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';

export class IssueRequest {

    constructor(
        private readonly template: ReadTemplateDto
    ) { }

    create(): Document {
        let date = new Date()
        let day = ('0' + date.getDate()).slice(-2)
        let month = date.toLocaleString('default', { month: 'long' })
        let year = date.getFullYear()
        const table1 = new Table1(this.template)
        const table2 = new Table2(this.template)
        const table3 = new Table3(this.template)
        const table4 = new Table4(this.template)
        
        return new Document({
            styles: styles,
            numbering,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(0),
                                right: convertMillimetersToTwip(26),
                                bottom: convertMillimetersToTwip(16),
                                left: convertMillimetersToTwip(19),
                                header: 1100,
                            },
                        },
                    },
                    headers: {
                        default: new Header({
                            children: [
                                new Paragraph({
                                    children: [
                                        new ImageRun({
                                            floating: {
                                                zIndex: 1,
                                                horizontalPosition: {
                                                    offset: 5740000,
                                                },
                                                verticalPosition: {
                                                    offset: 150000,
                                                },
                                            },
                                            data: fs.readFileSync('./src/templates-crecer/logo.png'),
                                            transformation: {
                                                width: 170,
                                                height: 65,
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    },
                    children: [
                        new Paragraph({
                            spacing: {
                                after: 320,
                                line: 340,
                                lineRule: LineRuleType.EXACTLY,
                            },
                            children: [
                                new TextRun({
                                    text: 'Solicitud de Emisión 1',
                                    style: 'subtitle',
                                }),
                                new TextRun({
                                    text: 'Seguro de Cauciones o Cartas Fianza',
                                    style: 'subtitle',
                                    break: 1,
                                }),
                                new TextRun({
                                    text: '(Contratos de Obras, Servicios y Suministros)',
                                    style: 'subtitle',
                                    break: 1,
                                }),
                            ],
                            alignment: AlignmentType.CENTER,
                        }),
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    height: {
                                        value: 330,
                                        rule: HeightRule.EXACT,
                                    },
                                    children: [
                                        new TableCell({
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: 'Datos del Tomador o Contratante',
                                                            style: 'title',
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
                        new Paragraph({
                            spacing: {
                                line: 370,
                                lineRule: LineRuleType.EXACTLY,
                            },
                        }),
                        table1.create(),
                        new Paragraph({
                            spacing: {
                                line: 370,
                                lineRule: LineRuleType.EXACTLY,
                            },
                        }),
                        new Table({
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            alignment: AlignmentType.RIGHT,
                            rows: [
                                new TableRow({
                                    height: {
                                        value: 330,
                                        rule: HeightRule.EXACT,
                                    },
                                    children: [
                                        new TableCell({
                                            children: [
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: 'Datos del Beneficiario o Asegurado',
                                                            style: 'title',
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
                        new Paragraph({
                            spacing: {
                                line: 370,
                                lineRule: LineRuleType.EXACTLY,
                            },
                        }),
                        table2.create(),
                        new Paragraph({
                            spacing: {
                                before: 400,
                                after: 400,
                            },
                            children: [
                                new TextRun({
                                    text: 'Sírvanse emitir un Seguro de Caución o Carta Fianza solidaría, incondicional, irrevocable, de realización inmediata y sin beneficio de excusión, bajo las siguientes condiciones:',
                                    style: 'subtitle',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        table3.create(),
                        new Paragraph({
                            spacing: {
                                line: 370,
                                lineRule: LineRuleType.EXACTLY,
                            },
                        }),
                        table4.create(),
                        new Paragraph({
                            spacing: {
                                line: 370,
                                lineRule: LineRuleType.EXACTLY,
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
                                            width: {
                                                size: 30,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        after: 70,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: 'Póliza nueva ( )',
                                                            style: 'subtitle',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 35,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        after: 70,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: 'Renovación (	)',
                                                            style: 'subtitle',
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                        new TableCell({
                                            width: {
                                                size: 35,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        after: 70,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: 'N° de póliza /Fianza',
                                                            style: 'subtitle',
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
                                before: 350,
                                after: 170,
                            },
                            children: [
                                new TextRun({
                                    text: '   El solicitante deberá presentar los siguiente Documentos para evaluación:',
                                    style: 'contentTable',
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Copia de la buena pro adjudicada, si el concurso fuera con una entidad pública.',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Copia del contrato firmado o de la proforma a firmarse.',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Memoria descriptiva de la obra o especificaciones técnicas del servicio o suministro.',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Resumen del presupuesto ofertado.',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Declaración de experiencia en contratos similares, contratos generales en ejecución o Vigentes.',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Copia del contrato de asociación, si el tomador o contratante fuera un consorcio, y copia del RUC del consorcio si lo tuviera.',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Paragraph({
                            spacing: {
                                before: 360,
                                after: 170,
                            },
                            children: [
                                new TextRun({
                                    text: '   El solicitante deberá presentar los siguiente Documentos posterior a la emisión de la Póliza de Caución:',
                                    style: 'contentTable',
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'La remisión periódica de información sobre cualquier circunstancia que pudiera agravar el riesgo garantizado y que pueda impedir el cumplimiento de la obligación garantizada.',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Envío de información que sustente avance de obra mensual que resulte oportuna para un adecuado monitoreo del riesgo garantizado.',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Para la emisión del Adelanto de Materiales, es requisito enviar información que sustente avance de obra. ',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                                new TextRun({
                                    text: 'Nota: Información requerida: Curva S y última valorización de Avance de Obra firmado por Supervisor. ',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                    break: 1,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Paragraph({
                            spacing: {
                                before: 400,
                                after: 170,
                            },
                            children: [
                                new TextRun({
                                    text: '   Nota',
                                    style: 'subtitle',
                                    break: 3,
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Es importante informarles que las pólizas se renovarán con una anticipación de 7 días antes de su vencimiento, por lo que tienen plazo hasta antes de dicha fecha para solicitar alguna modificación para su evaluación',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Si luego de emitida la póliza, requieren una modificación, la misma tendrá un costo de $ 20.00.',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Se aplicará una penalidad por el no pago de la prima de renovación, contando desde el 16vo día de la fecha de emisión de la póliza renovada. Se aplicará la TIM vigente para el año en curso. ',
                                    font: 'Arial',
                                    size: 22,
                                    bold: true,
                                }),
                            ],
                            numbering: {
                                reference: 'notes1',
                                level: 0,
                            },
                            style: 'pointerBig',
                        }),
                        new Table({
                            borders: TableBorders.NONE,
                            width: {
                                size: 94,
                                type: WidthType.PERCENTAGE,
                            },
                            alignment: AlignmentType.CENTER,
                            rows: [
                                new TableRow({
                                    children: [
                                        new TableCell({
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        after: 110,
                                                        before: 150,
                                                    },
                                                    children: [
                                                        new TextRun({
                                                            text: 'Tratamiento de datos personales:',
                                                            style: 'subtitle',
                                                            break: 1,
                                                        }),
                                                    ],
                                                }),
                                                new Paragraph({
                                                    children: [
                                                        new TextRun({
                                                            text: 'El Contratante o Tomador autorizan de forma expresa a Crecer Seguros, el tratamiento de los datos personales proporcionados en la contratación del presente seguro (LOS DATOS), así como el uso de los mismos para fines comerciales, tales como el envío de publicidad y promociones de diferentes productos y/o servicios de seguros, financieros y demás que puedan resultar afines, inclusive a través de terceros nacionales y/o extranjeros, lo que podría significar el traslado de LOS DATOS fuera del país (flujo transfronterizo), pudiendo enviarle publicidad, comunicaciones e información relacionada a los asuntos antes mencionados, a través de sus diferentes canales; compartir, entregar, trasladar y/o transferir LOS DATOS a las empresas que conforman su grupo económico, proveedores y aliados estratégicos cuya relación se encuentra a su disposición en la página web www.crecerseguros.pe, así como, con sus socios comerciales, con la finalidad de que te ofrezcan sus productos y/o servicios, y adicionalmente puedan realizar campañas comerciales, trabajos estadísticos, análisis de mercado, servicios de recaudación, de custodia y/o almacenamiento, entre otros.',
                                                            style: 'contentTable',
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
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Crecer Seguros se obliga ante EL TOMADOR y/o Contratante a la emisión de la póliza solicitada dentro del plazo de quince (15) días calendario de haber presentado su solicitud (de forma completa, incluyendo adjuntos) si no media rechazo previo en el plazo indicado, y siempre que se haya cumplido con las condiciones de instrumentación de contragarantías y el pago de la prima, según lo informado por Crecer Seguros.',
                                    style: 'contentTable',
                                    break: 2,
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: `Emitido el ${day} de ${month} de ${year}`,
                                    style: 'contentTable',
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.RIGHT,
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: '       Firma del Representante de Crecer Seguros         Firma del Solicitante (Asegurado Titular)',
                                    style: 'subtitle',
                                    break: 4,
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [
                                new TextRun({
                                    text: 'Las condiciones de la presente póliza se encuentran sujetas a una revisión posterior por parte de la SBS, por lo que, en caso se identifiquen cláusulas abusivas en el marco de la Ley del Contrato de Seguro - Ley No. 29946 y normas reglamentarias, y éstas no sean subsanadas por Crecer Seguros, la SBS podrá revocar el código de ',
                                    style: 'contentTable',
                                    size: 20,
                                    break: 2,
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                    ],
                },
            ],
        });
    }
}
