type WhotCardType = {
  name: string;
  src: string;
  title: string;
  subtitle: string;
  isDown?: boolean;
};
type WhotCardsType = WhotCardType[];

export type { WhotCardsType, WhotCardType };
