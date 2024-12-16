export const styles = {
  default: {
    heading1: {
      run: {
        font: "Calibri",
        size: 18,
        bold: true,
      },
      paragraph: {
        spacing: {
          after: 120,
        },
      },
    },
  },
  paragraphStyles: [
    {
      id: '',
      name: 'Normal',
      run: {
        font: "Calibri",
        size: 18
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
        size: 18
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
        size: 18
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