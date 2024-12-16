import { AlignmentType, convertInchesToTwip, LevelFormat } from "docx";

export const numbering = {
  config: [
      {
        levels: [
          {
            level: 0,
            format: LevelFormat.UPPER_ROMAN,
            text: "%1.",
            alignment: AlignmentType.START,
            style: {
              paragraph: {
                indent: { left: convertInchesToTwip(0.5), hanging: convertInchesToTwip(0.5) },
              },
            },
          },
        ],
        reference: "notes",
      },
  ]
}