import { AlignmentType, convertInchesToTwip, LevelFormat } from "docx";

export const numbering = {
  config: [
      {
        levels: [
          {
            level: 0,
            format: LevelFormat.LOWER_LETTER,
            text: "%1.",
            alignment: AlignmentType.START,
            style: {
              paragraph: {
                indent: { left: convertInchesToTwip(0.3), hanging: convertInchesToTwip(0.3) },
              },
            },
          },
        ],
        reference: "notes",
      },
  ]
}