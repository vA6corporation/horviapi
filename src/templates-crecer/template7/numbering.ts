import { AlignmentType, convertInchesToTwip, LevelFormat } from 'docx';

export const numbering = {
  config: [
    {
      levels: [
        {
          level: 0,
          format: LevelFormat.BULLET,
          text: '\u2022',
          alignment: AlignmentType.START,
          style: {
            paragraph: {
              indent: {
                left: convertInchesToTwip(0.55),
                hanging: convertInchesToTwip(0.25),
              },
            },
          },
        },
      ],
      reference: 'notes1',
    },
  ],
};
