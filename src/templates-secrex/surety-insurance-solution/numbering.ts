import { AlignmentType, convertInchesToTwip, LevelFormat, LineRuleType } from 'docx';

export const numbering = {
  config: [
    {
      levels: [
        {
          level: 0,
          format: LevelFormat.DECIMAL,
          text: '%1.',
          alignment: AlignmentType.START,
          // style: {
          //   paragraph: {
          //     indent: { left: convertInchesToTwip(0.5), hanging: convertInchesToTwip(0.5) },
          //   },
          // },
          style: {
            paragraph: {
              indent: {
                left: convertInchesToTwip(0.3),
                hanging: convertInchesToTwip(0.3),
              },
              spacing: {
                lineRule: LineRuleType.AT_LEAST,
              },
            },
          },
        },
      ],
      reference: 'ordered',
    },
  ],
};
