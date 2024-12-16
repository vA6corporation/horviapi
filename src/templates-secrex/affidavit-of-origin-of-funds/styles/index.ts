import { AlignmentType } from "docx";

export const styles = {
  default: {
    title: {
      run: {
        font: 'Arial',
        size: 28,
        bold: true,
        color: '000000',
      },
      paragraph: {
        alignment: AlignmentType.CENTER,
        // spacing: {
        //   line: 273.8,
        // },
      },
    },
    heading1: {
      run: {
        font: 'Arial',
        size: 26,
        bold: true,
      },
      paragraph: {
        spacing: {
          after: 120,
        },
      },
    },
    // heading2: {
    //   run: {
    //     font: "Tahoma",
    //     size: 18,
    //     bold: true,
    //   },
    //   paragraph: {
    //     spacing: {
    //       after: 0
    //     }
    //   }
    // }
  },
  paragraphStyles: [
    {
      id: '',
      name: 'Normal',
      run: {
        font: 'Arial',
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
        font: 'Arial',
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
        font: 'Arial',
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
        font: 'Arial',
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