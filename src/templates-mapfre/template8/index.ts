import { AlignmentType, convertMillimetersToTwip, Document, Paragraph, TextRun, ImageRun, Table, WidthType, TableBorders, TableRow, TableCell, VerticalAlign, PageOrientation } from 'docx';
import * as fs from 'fs';
import { Table1, Table2, Table3, Table4, Table6 } from './tables';
import { ReadBusinessDto } from 'src/businesses/dto/read-business.dto';

export class LegalClientProfile {

    constructor(
        private readonly business: ReadBusinessDto
    ) { }

    create(): Document {
        const emptyLine = new Paragraph({ spacing: { line: 0 } })
        const table1 = new Table1(this.business)
        const table2 = new Table2(this.business.countryOrigin, this.business.countryResidence).create()
        const table21 = new Table2(this.business.representativeCountryOrigin, this.business.representativeCountryResidence).create()
        const table22 = this.business.representativeDocument != '' ? new Table2('', '').create() : emptyLine
        const table23 = this.business.representativeDocument != '' ? new Table2('', '').create() : emptyLine
        const table3 = new Table3(this.business)
        const table4 = this.business.representativeDocument != '' ? new Table4(true, 1, this.business.representativeName, this.business.representativeDocumentType, this.business.representativeDocument, this.business.representativePosition, this.business.representativeAddressResidence, this.business.representativeProvinceResidence, this.business.representativeCountryOrigin, this.business.representativeEmail, this.business.representativePhoneNumber, this.business.representativeMobileNumber).create() : emptyLine
        const table5 = this.business.representativeDocument != '' ? new Table4(false, 2, '', '', '', '', '', '', '', '', '', '').create() : emptyLine
        const table51 = this.business.representativeDocument != '' ? new Table4(false, 3, '', '', '', '', '', '', '', '', '', '').create() : emptyLine
        const table6 = new Table6(this.business).create()

        return new Document({
            styles: {
                characterStyles: [
                    {
                        id: 'smallLogo',
                        name: 'Small Logo',
                        basedOn: 'Normal',
                        run: {
                            font: 'Calibri',
                            size: 21,
                        },
                    },
                    {
                        id: 'small',
                        name: 'Small',
                        basedOn: 'Normal',
                        run: {
                            font: 'Arial',
                            size: 24,
                            bold: true,
                        },
                    },
                    {
                        id: 'contentTable',
                        name: 'Content Table',
                        basedOn: 'Normal',
                        run: {
                            font: 'Arial',
                            size: 24,
                            bold: true,
                        },
                    },
                    {
                        id: 'title',
                        name: 'Titles',
                        basedOn: 'Normal',
                        run: {
                            font: 'Arial',
                            size: 52,
                            bold: true,
                            color: '#ffffff',
                        },
                    },
                    {
                        id: 'subtitle',
                        name: 'Sub Titles',
                        basedOn: 'Normal',
                        run: {
                            font: 'Arial',
                            size: 44,
                            bold: true,
                            color: '#ffffff',
                        },
                    },
                    {
                        id: 'subtitle2',
                        name: 'Sub Titles2',
                        basedOn: 'Normal',
                        run: {
                            font: 'Arial',
                            size: 28,
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
                                top: convertMillimetersToTwip(6),
                                right: convertMillimetersToTwip(5),
                                left: convertMillimetersToTwip(5),
                                bottom: convertMillimetersToTwip(1),
                            },
                            size: {
                                orientation: PageOrientation.LANDSCAPE,
                                height: 92000,
                            },
                        },
                    },
                    children: [
                        new Table({
                            borders: TableBorders.NONE,
                            width: {
                                size: 100,
                                type: WidthType.PERCENTAGE,
                            },
                            rows: [
                                new TableRow({
                                    tableHeader: true,
                                    children: [
                                        new TableCell({
                                            width: {
                                                size: 84,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [],
                                        }),
                                        new TableCell({
                                            verticalAlign: VerticalAlign.CENTER,
                                            width: {
                                                size: 16,
                                                type: WidthType.PERCENTAGE,
                                            },
                                            children: [
                                                new Paragraph({
                                                    spacing: {
                                                        after: 100,
                                                    },
                                                    children: [
                                                        new ImageRun({
                                                            floating: {
                                                                zIndex: 1,
                                                                horizontalPosition: {
                                                                    offset: 15000,
                                                                },
                                                                verticalPosition: {
                                                                    offset: -2000,
                                                                },
                                                            },
                                                            data: fs.readFileSync(
                                                                'src/templates-mapfre/template7/logo.png',
                                                            ),
                                                            transformation: {
                                                                width: 242,
                                                                height: 45,
                                                            },
                                                        }),
                                                        new TextRun({
                                                            text: 'OFICINA PRINCIPAL',
                                                            break: 2,
                                                            style: 'smallLogo',
                                                            bold: true,
                                                        }),
                                                        new TextRun({
                                                            text: 'Av. 28 de Julio 873, Miraflores, Lima, Peru',
                                                            break: 1,
                                                            style: 'smallLogo',
                                                            bold: true,
                                                        }),
                                                        new TextRun({
                                                            text: 'T. (511) 213 7373, F (511) 243 3131',
                                                            break: 1,
                                                            style: 'smallLogo',
                                                            bold: true,
                                                        }),
                                                        new TextRun({
                                                            text: 'www.mapfre.com.pe',
                                                            break: 1,
                                                            style: 'smallLogo',
                                                            bold: true,
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
                        table1.create(),
                        emptyLine,
                        table2,
                        emptyLine,
                        table3.create(),
                        emptyLine,
                        table4,
                        emptyLine,
                        table21,
                        emptyLine,
                        table5,
                        emptyLine,
                        table22,
                        emptyLine,
                        table51,
                        emptyLine,
                        table23,
                        emptyLine,
                        ...table6,
                        emptyLine,
                        new Paragraph({
                            alignment: AlignmentType.RIGHT,
                            children: [
                                new TextRun({
                                    text: '___________________________________________                ',
                                    break: 2,
                                }),
                                new TextRun({
                                    text: '.',
                                    color: '#ffffff',
                                }),
                                new TextRun({
                                    text: 'Firma y Sello del Representante Legal                            ',
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
