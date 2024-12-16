export const styles = {
  default: {
    heading1: {
      run: {
        font: "Calibri",
        size: 22,
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
      run: {
        bold: true,
        font: "Calibri",
        size: 8
      },
    },
  ]
};