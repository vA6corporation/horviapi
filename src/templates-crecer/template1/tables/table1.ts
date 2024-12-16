import { Paragraph, Table, TableCell, TableRow, WidthType, TextRun, ShadingType, ParagraphChild } from 'docx';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';
import { formatDateShort } from 'src/format-date';

export class Table1 {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Table {
        const marginsCellsTitles = {
            top: 50,
            bottom: 20,
            left: 200,
        };
        const marginsCells = {
            left: 70,
        };
        let text1: ParagraphChild[] = [
            new TextRun({
            }),
            new TextRun({
                text: `Razón social:  ${this.business.name?.toUpperCase()}`,
                style: 'content',
            }),
            new TextRun({
                text: `Domicilio legal: ${this.business.addressOrigin?.toUpperCase()}`,
                style: 'content',
                break: 1,
            }),
            new TextRun({
                text: `R.U.C. nº ${this.business.document}`,
                style: 'content',
                break: 1,
            }),
            new TextRun({
                text: `Fecha de constitución: ${formatDateShort(this.business.inscriptionAt)}`,
                style: 'content',
                break: 1,
            }),
            new TextRun({
                text: `Firma(s) autorizada(s): ${this.business.representativeName?.toUpperCase()}`,
                style: 'content',
                break: 1,
            }),
            new TextRun({
                text: `Empresa(s) relacionada(s): `,
                style: 'content',
                break: 1,
            }),
        ];
        let text2: ParagraphChild[] = [];
        if (this.business.linkedBusinesses?.length > 0) {
            this.business.linkedBusinesses.forEach((element) => {
                text2.push(
                    new TextRun({
                        text: `${element.name?.toUpperCase()}, `,
                        style: 'content',
                    }),
                );
            });
        }
        let text3: ParagraphChild[] = [
            new TextRun({
                text: `Mail de contacto: ${this.business.email}`,
                style: 'content',
                break: 1,
            }),
            new TextRun({
                text: `Mail de facturación: ${this.business.email}`,
                style: 'content',
                break: 1,
            }),
        ];
        Array.prototype.push.apply(text1, text2);
        Array.prototype.push.apply(text1, text3);
        return new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCellsTitles,
                            shading: {
                                fill: '1f3864',
                                type: ShadingType.REVERSE_DIAGONAL_STRIPE,
                                color: '#1f3864',
                            },
                            children: [
                                new Paragraph({
                                    children: [
                                        new TextRun({
                                            text: `1. Datos generales de la empresa`,
                                            style: 'subtitle',
                                            color: 'ffffff',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            margins: marginsCells,
                            children: [
                                new Paragraph({
                                    spacing: {
                                        line: 460,
                                        before: 200,
                                    },
                                    children: text1,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    }
}
