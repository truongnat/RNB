import tinycolor from 'tinycolor2';

export const adjustColorAlpha = (color: string, ratio: number) =>
  tinycolor(color).setAlpha(ratio).toRgbString();
