import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, ImageRun, Header, PageOrientation } from 'docx';
import { Table1, Table2 } from './tables';
import * as fs from 'fs';
import { styles } from './styles';
import { ReadTemplateDto } from 'src/templates/dto/read-template.dto';

export class ExperienceOfEachConsortiateInWorks {

    constructor(
        private readonly template: ReadTemplateDto
    ) { }

    async create(): Promise<Document> {
        const table1 = new Table1(this.template)
        const table2 = new Table2(this.template)

        return new Document({
            styles: styles,
            sections: [
                {
                    properties: {
                        page: {
                            margin: {
                                top: convertMillimetersToTwip(0),
                                right: convertMillimetersToTwip(14),
                                bottom: convertMillimetersToTwip(16),
                                left: convertMillimetersToTwip(14),
                                header: 550,
                            },
                            size: {
                                orientation: PageOrientation.LANDSCAPE,
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
                                                    offset: 8700000,
                                                },
                                                verticalPosition: {
                                                    offset: 280000,
                                                },
                                            },
                                            data: fs.readFileSync('./src/templates-crecer/logo2.png'),
                                            transformation: {
                                                width: 165,
                                                height: 55,
                                            },
                                        }),
                                    ],
                                    alignment: AlignmentType.LEFT,
                                }),
                            ],
                        }),
                    },
                    children: [
                        ...(await table1.create()),
                        ...(await table2.create()),
                    ],
                },
            ],
        });
    }
}
