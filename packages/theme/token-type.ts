import { ReturnExtendTheme } from './system';

// declare token
export type ColorsToken = Leaves<ReturnExtendTheme['colors']>;

export type FontsToken = Leaves<ReturnExtendTheme['typography']['fonts']>;
export type FontSizesToken = Leaves<
  ReturnExtendTheme['typography']['fontSizes']
>;
export type FontWeightsToken = Leaves<
  ReturnExtendTheme['typography']['fontWeights']
>;
export type LineHeightsToken = Leaves<
  ReturnExtendTheme['typography']['lineHeights']
>;
export type LetterSpacingsToken = Leaves<
  ReturnExtendTheme['typography']['letterSpacings']
>;

export type SpacingToken = Leaves<ReturnExtendTheme['spacing']>;
export type RadiiToken = Leaves<ReturnExtendTheme['radii']>;
export type SizesToken = Leaves<ReturnExtendTheme['sizes']>;
export type IndicesToken = Leaves<ReturnExtendTheme['indices']>;
export type ShadowsToken = keyof ReturnExtendTheme['shadows'];

export type ComponentsToken = keyof ReturnExtendTheme['components'];

export type GetComponentVariantToken<T extends ComponentsToken> =
  T extends keyof ReturnExtendTheme['components']
    ? keyof ReturnExtendTheme['components'][T]
    : never;

export type TThemeTokens = {
  colors: ColorsToken;
  fonts: FontsToken;
  fontWeights: FontWeightsToken;
  fontSizes: FontSizesToken;
  lineHeights: LineHeightsToken;
  letterSpacings: LetterSpacingsToken;
  spacing: SpacingToken;
  radii: RadiiToken;
  sizes: SizesToken;
  indices: IndicesToken;
  shadows: ShadowsToken;
};
