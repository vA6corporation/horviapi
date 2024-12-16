import { AlignmentType, convertMillimetersToTwip, Document, HeadingLevel, ImageRun, Paragraph } from 'docx';
import * as fs from 'fs';
import { numbering } from './numbering';
import { styles } from './styles';
import { Table1, Table2, Table3, Table4, Table5, Table6, Table7, Table8, Table9 } from './tables';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { formatDateShort } from 'src/format-date';
import { calculateAspectRatio } from 'src/calculate-aspect-ratio';
const sizeOf = require("image-size")

export class dueDiligenceFormTwo {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    async create(): Promise<Document> {
        const table1 = new Table1(this.business)
        const table2 = new Table2(this.business)
        const table3 = new Table3(this.business)
        const table4 = new Table4(this.business)
        const table5 = new Table5(this.business)
        const table6 = new Table6(this.business)
        const table7 = new Table7(this.business)
        const table8 = new Table8(this.business)
        const table9 = new Table9(this.business)

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

        return new Document({
            styles,
            numbering,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(0),
                                right: convertMillimetersToTwip(0),
                                bottom: convertMillimetersToTwip(0),
                                left: convertMillimetersToTwip(0),
                                header: 380,
                                footer: 250,
                            },
                        },
                    },
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.LEFT,
                            children: [
                                new ImageRun({
                                    data: fs.readFileSync("./src/templates-crecer/logo2.png"),
                                    transformation: {
                                        width: 150,
                                        height: 45,
                                    },
                                    floating: {
                                        horizontalPosition: {
                                            offset: 0, // relative: HorizontalPositionRelativeFrom.PAGE by default
                                        },
                                        verticalPosition: {
                                            offset: 0, // relative: VerticalPositionRelativeFrom.PAGE by default
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            text: "FORMULARIO DE INFORMACIÓN BÁSICA Y DEBIDA DILIGENCIA PERSONA JURÍDICA",
                            heading: HeadingLevel.TITLE,
                            alignment: AlignmentType.CENTER
                        }),
                        table1.create(),
                        new Paragraph({}),
                        table2.create(),
                        new Paragraph({}),
                        table3.create(),
                        new Paragraph({}),
                        table4.create(),
                        new Paragraph({}),
                        table5.create(),
                        new Paragraph({}),
                        table6.create(),
                        new Paragraph({}),
                        table7.create(),
                        new Paragraph({}),
                        table8.create(),
                        new Paragraph({}),
                        table9.create(),
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
                                            offset: 4000000,
                                        },
                                        verticalPosition: {
                                            offset: 7500000,
                                        },
                                    },
                                })
                            ],
                        }),
                        new Paragraph({
                            spacing: {
                                before: 400
                            },
                            text: `\t\tFecha___${formatDateShort(new Date().toDateString())}___________\t\t\t______________________________________________________________________________________`
                        }),
                        new Paragraph({
                            text: `\t\t\t\t\t\t\t\tFIRMAS AUTORIZADAS DE LOS REPRESENTANTES LEGALES DE`
                        }),
                        new Paragraph({
                            text: `\t\t\t\t\t\t\t\tLA EMPRESA QUE PROPORCIONA LA INFORMACION`
                        }),
                    ],
                },
            ],
        });
    }
}
