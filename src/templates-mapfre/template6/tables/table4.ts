import { Paragraph, Table, TableCell, TableRow, WidthType, BorderStyle, TextRun, TableBorders } from "docx";

export class Table4 {

  constructor() { }

  create(): Table {
    return new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              borders: {
                top: {
                  space: 1,
                  style: BorderStyle.SINGLE,
                  size: 18,
                  color: 'e40520',
                },
                bottom: {
                  space: 1,
                  style: BorderStyle.SINGLE,
                  size: 18,
                  color: 'e40520',
                },
                left: {
                  space: 1,
                  style: BorderStyle.SINGLE,
                  size: 18,
                  color: 'e40520',
                },
                right: {
                  space: 1,
                  style: BorderStyle.SINGLE,
                  size: 18,
                  color: 'e40520',
                },
              },
              margins: {
                top: 100,
                right: 140,
                left: 140,
                bottom: 100,
              },
              children: [
                new Table({
                  borders: TableBorders.NONE,
                  width: {
                    size: 100,
                    type: WidthType.PERCENTAGE,
                  },
                  rows: [
                    // Cabecera de la tabla
                    new TableRow({
                      children: [
                        new TableCell({
                          width: {
                            size: 43,
                            type: WidthType.PERCENTAGE,
                          },
                          margins: {
                            bottom: 20,
                          },
                          children: [
                            new Paragraph({
                              children: [],
                            }),
                          ],
                        }),
                        new TableCell({
                          width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: 'PORCENTAJE',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          width: {
                            size: 17,
                            type: WidthType.PERCENTAGE,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: 'MONEDA',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          width: {
                            size: 20,
                            type: WidthType.PERCENTAGE,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: 'MONTO',
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
                          margins: {
                            bottom: 25,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: 'SERIEDAD OFERTA',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                        new TableCell({
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' S/      ',
                                }),
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' $.',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          margins: {
                            bottom: 25,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: 'ADICIONAL DIFIRENCIACIÓN DE PROPUESTA',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                        new TableCell({
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' S/      ',
                                }),
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' $.',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          margins: {
                            bottom: 35,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: 'FIEL CUMPLIMIENTO',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                        new TableCell({
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' S/      ',
                                }),
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' $.',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          margins: {
                            bottom: 25,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: 'ADELANTO DIRECTO',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                        new TableCell({
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' S/      ',
                                }),
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' $.',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          margins: {
                            bottom: 25,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: 'ADELANTO DE MATERIALES',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                        new TableCell({
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' S/      ',
                                }),
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' $.',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          margins: {
                            bottom: 25,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: 'BUEN FUNCIONAMIENTO',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                        new TableCell({
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' S/      ',
                                }),
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' $.',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          margins: {
                            bottom: 25,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: 'OTROS',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                        new TableCell({
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' S/      ',
                                }),
                                new TextRun({
                                  text: '    ',
                                  border: {
                                    space: 1,
                                    style: BorderStyle.SINGLE,
                                    size: 16,
                                    color: 'e40520',
                                  },
                                }),
                                new TextRun({
                                  text: ' $.',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                      ],
                    }),
                    new TableRow({
                      children: [
                        new TableCell({
                          margins: {
                            bottom: 25,
                          },
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({
                                  text: 'DETALLAR',
                                  color: 'e40520',
                                }),
                              ],
                            }),
                          ],
                        }),
                        new TableCell({
                          children: [],
                        }),
                        new TableCell({
                          children: [],
                        }),
                        new TableCell({
                          children: [],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }

} 