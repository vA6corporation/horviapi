export const styles = {
  default: {
    // heading1: {
    //   run: {
    //     font: 'Arial Narrow',
    //   },
    //   paragraph: {
    //     spacing: {
    //       after: 120,
    //     },
    //   },
    // },
    title: {
      run: {
        font: 'Arial',
        size: 16,
        bold: true,
      },
      paragraph: {
        spacing: {
          after: 270,
        },
      },
    },
    document: {
      run: {
        size: 10,
        font: "Arial",
        bold: true
      },
      // paragraph: {
      //     alignment: AlignmentType.RIGHT,
      // },
  },
  },
  characterStyles: [
    {
      id: 'simple',
      name: 'Content Table',
      basedOn: 'Normal',
      run: {
        font: 'Arial Narrow',
        size: 20,
      },
    },
    {
      id: 'title',
      name: 'Titles',
      basedOn: 'Normal',
      run: {
        font: 'Arial Narrow',
        size: 22,
        bold: true,
      },
    },
    {
      id: 'subtitle',
      name: 'Sub Titles',
      basedOn: 'Normal',
      run: {
        font: 'Arial Narrow',
        size: 18,
        bold: true,
      },
    },
  ],
  paragraphStyles: [
    {
      id: 'contentTableLast',
      name: 'Content Table',
      basedOn: 'Normal',
      run: {
        font: 'Century Gothic',
        size: 14,
      },
    },
    {
      id: 'contentTable',
      name: 'Content Table',
      basedOn: 'Normal',
      run: {
        font: 'Arial Narrow',
        size: 16,
      },
    },
    {
      id: 'title',
      name: 'Titles',
      basedOn: 'Normal',
      run: {
        font: 'Arial Narrow',
        size: 21,
        bold: true,
      },
    },
    {
      id: 'subtitle',
      name: 'Sub Titles',
      basedOn: 'Normal',
      run: {
        font: 'Arial Narrow',
        size: 16,
        bold: true,
      },
    },
  ],
};
