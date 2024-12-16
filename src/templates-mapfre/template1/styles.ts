export const styles = {
  default: {
    heading1: {
      run: {
        font: "Calibri",
        size: 26,
        bold: true,
      },
    },
  },
  paragraphStyles: [
    {
      id: '',
      name: 'Normal',
      run: {
        font: "Calibri",
        size: 22
      }
    },
    {
      id: "header",
      name: "Header",
      basedOn: "Normal",
      next: "Normal",
      run: {
        bold: true,
        font: "Calibri",
        size: 22
      },
      paragraph: {
        spacing: {
          before: 30,
          after: 30
        },
      },
    },
    {
      id: "body",
      name: "Body",
      basedOn: "Normal",
      next: "Normal",
      run: {
        font: "Calibri",
        size: 22
      },
      paragraph: {
        spacing: {
          before: 200,
        },
      },
    },
    {
      id: "small",
      name: "Small",
      basedOn: "Normal",
      next: "Normal",
      run: {
        bold: true,
        font: "Calibri",
        size: 14
      },
      paragraph: {
        spacing: {
          before: 30,
          after: 30
        },
      },
    },
  ]
};