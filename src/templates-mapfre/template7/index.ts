import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, BorderStyle, LineRuleType, PageOrientation } from 'docx';
import { Table1, Table2, Table3, Table4, Table5, Table6, Table7, Table8, Table9, Table10, Table11, Table12, Table13, Table14 } from './tables';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class LegalEntityClientFile {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Document {
        const emptyLine = new Paragraph({ spacing: { line: 0 } })
        const table1 = new Table1()
        const table2 = new Table2(this.business)
        const table3 = new Table3(this.business)
        const table4 = new Table4(this.business)
        const table5 = new Table5(this.business)
        const table6 = new Table6(this.business)
        const table7 = new Table7(this.business)
        const table8 = new Table8(this.business)
        const table9 = new Table9(this.business)
        const table10 = new Table10(this.business)
        const table11 = new Table11(this.business)
        const table12 = new Table12(this.business)
        const table13 = new Table13()
        const table14 = new Table14()

        return new Document({
            styles: {
                characterStyles: [
                    {
                        id: 'content',
                        name: 'Content table',
                        basedOn: 'Normal',
                        run: {
                            font: 'Arial',
                            size: 28,
                        },
                    },
                    {
                        id: 'contenttable',
                        name: 'Content table',
                        basedOn: 'Normal',
                        run: {
                            font: 'Arial',
                            size: 24,
                            bold: true,
                        },
                    },
                ],
            },
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(10),
                                right: convertMillimetersToTwip(5),
                                left: convertMillimetersToTwip(5),
                                bottom: convertMillimetersToTwip(10),
                            },
                            size: {
                                orientation: PageOrientation.LANDSCAPE,
                                height: 88500
                            },
                        },
                    },
                    children: [
                        table1.create(),
                        new Paragraph({
                            spacing: {
                                before: 122,
                            },
                            border: {
                                top: {
                                    color: 'auto',
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 6,
                                },
                                bottom: {
                                    color: 'auto',
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 6,
                                },
                            },
                            children: [
                                new TextRun({
                                    text: 'Al llenar la presente solicitud se debe tomar en cuenta el Artículo 376 del Código de Comercio que establece que será nulo todo Contrato de Seguro: 1) Por mala fe probada de alguna de las partes al tiempo de celebrar el contrato: 2) Por la inexacta declaración de "El Contratista", aún hecha de buena fe, siempre que pueda influir en la valuación de los riesgos, de hechos o circunstancias que hubieran podido influir en la celebración del contrato; 3) Por la omisión u ocultación, por "El Contratista", de hechos o circunstancias que hubieran podido influir en la celebración del contrato.',
                                    style: 'content',
                                }),
                                new TextRun({
                                    text: 'Nota Importante: ',
                                    bold: true,
                                    break: 1,
                                    style: 'content',
                                }),
                                new TextRun({
                                    text: 'Si en este formulario no hubiese espacio suficiente para las explicaciones y respuestas requeridas, adjúntense hojas adicionales haciendo referencia al número de la pregunta correspondiente.',
                                    style: 'content',
                                }),
                            ],
                            alignment: AlignmentType.JUSTIFIED,
                        }),
                        new Paragraph({
                            spacing: {
                                after: 280,
                                before: 280,
                            },
                            children: [
                                new TextRun({
                                    text: 'I. INFORMACIÓN BÁSICA',
                                    size: 44,
                                    font: 'Arial',
                                    bold: true,
                                }),
                            ],
                        }),
                        table2.create(),
                        emptyLine,
                        table3.create(),
                        emptyLine,
                        new Paragraph({
                            spacing: {
                                after: 200,
                                before: 200,
                            },
                            children: [
                                new TextRun({
                                    text: 'II. INFORMACIÓN DE ACCIONISTAS Y PLANA GERENCIAL',
                                    size: 30,
                                    style: 'contenttable',
                                }),
                            ],
                        }),
                        table4.create(),
                        emptyLine,
                        table5.create(),
                        emptyLine,
                        new Paragraph({
                            spacing: {
                                after: 200,
                                before: 200,
                            },
                            pageBreakBefore: true,
                            children: [
                                new TextRun({
                                    text: 'III. INFORMACIÓN COMERCIAL',
                                    size: 30,
                                    style: 'contenttable',
                                }),
                            ],
                        }),
                        table6.create(),
                        emptyLine,
                        table7.create(),
                        emptyLine,
                        table8.create(),
                        emptyLine,
                        table9.create(),
                        emptyLine,
                        table10.create(),
                        emptyLine,
                        table11.create(),
                        emptyLine,
                        table12.create(),
                        emptyLine,
                        table13.create(),
                        emptyLine,
                        table14.create(),
                        new Paragraph({
                            spacing: {
                                line: 2000,
                                lineRule: LineRuleType.AUTO,
                            },
                        }),
                        new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [
                                new TextRun({
                                    text: '______________________________________________________________________                ',
                                }),
                                new TextRun({
                                    text: '.',
                                    color: '#ffffff',
                                }),
                                new TextRun({
                                    text: 'Firma y Sello del Representante Legal                        ',
                                    font: 'Arial',
                                    size: 28,
                                    break: 1,
                                }),
                                new TextRun({
                                    text: '.',
                                    color: '#ffffff',
                                }),
                            ],
                        }),
                    ],
                },
            ],
        });
    }
}
