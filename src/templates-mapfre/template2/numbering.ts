import { AlignmentType, convertInchesToTwip, LevelFormat } from "docx";

export const numbering = {
  config: [
      {
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: "%1.-",
            alignment: AlignmentType.START,
            style: {
              paragraph: {
                indent: { left: convertInchesToTwip(0.20), hanging: convertInchesToTwip(0.20) },
              },
            },
          },
        ],
        reference: "notes",
      },
  ]
}