import { HeightRule, Paragraph, Table, TableCell, TableRow, WidthType } from "docx";
import { ReadPartnershipDto } from "src/partnerships/dto/read-partnership.dto";

export class TableTwo {

    constructor(
        private readonly partnership: ReadPartnershipDto,
    ) { }

    create(): Table {
        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE
            },
            rows: [
                new TableRow({
                    height: {
                        rule: HeightRule.EXACT,
                        value: 330,
                    },
                    children: [
                        new TableCell({
                            children: [new Paragraph({
                                text: `Representante Legal: ${this.partnership.representativeName}`,
                                style: "header",
                            })],
                        }),
                    ],
                }),
            ],
        })
    }

}