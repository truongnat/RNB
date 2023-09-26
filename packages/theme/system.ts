import { customTheme } from './extend-theme';
import { TThemeTokens } from './token-type';
import { systemConfigs } from './styled-config';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type IRangeValue<T = string> = {
  50: T;
  100: T;
  200: T;
  300: T;
  400: T;
  500: T;
  600: T;
  700: T;
  800: T;
  900: T;
};

export type IThemeColors<T = Dict> = {
  primary: string;
  black: string;
  white: string;
  transparent: string;
  alpha: IRangeValue;
  gray: IRangeValue;
  red: IRangeValue;
  orange: IRangeValue;
  yellow: IRangeValue;
  green: IRangeValue;
  teal: IRangeValue;
  blue: IRangeValue;
  cyan: IRangeValue;
  purple: IRangeValue;
  pink: IRangeValue;
} & T;

export type IThemeTypography<T = Dict> = {
  fonts: {
    body: string;
    heading: string;
    mono: string;
  } & Dict['fonts'];
  fontSizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    '2xl': number;
    '3xl': number;
    '4xl': number;
    '5xl': number;
    '6xl': number;
    '7xl': number;
    '8xl': number;
    '9xl': number;
  } & Dict['fontSizes'];
  fontWeights: {
    hairline: number;
    thin: number;
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
    extrabold: number;
    black: number;
  } & Dict['fontWeights'];
  lineHeights: {
    normal: string;
    none: number;
    shorter: number;
    short: number;
    base: number;
    tall: number;
    taller: number;
    '3': number;
    '4': number;
    '5': number;
    '6': number;
    '7': number;
    '8': number;
    '9': number;
    '10': number;
  } & Dict['lineHeights'];
  letterSpacings: {
    tighter: number;
    tight: number;
    normal: number;
    wide: number;
    wider: number;
    widest: number;
  } & Dict['letterSpacings'];
} & T;

export type IThemeSpacing<T = Dict> = {
  '0.5': number;
  '1': number;
  '1.5': number;
  '2': number;
  '2.5': number;
  '3': number;
  '3.5': number;
  '4': number;
  '5': number;
  '6': number;
  '7': number;
  '8': number;
  '9': number;
  '10': number;
  '12': number;
  '14': number;
  '16': number;
  '20': number;
  '24': number;
  '28': number;
  '32': number;
  '36': number;
  '40': number;
  '44': number;
  '48': number;
  '52': number;
  '56': number;
  '60': number;
  '64': number;
  '72': number;
  '80': number;
  '96': number;
} & T;

export type IThemeSizes<T = Dict> = {
  full: `${number}%`;
  '3xs': number;
  '2xs': number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
  '3xl': number;
  '4xl': number;
  '5xl': number;
  '6xl': number;
  '7xl': number;
  '8xl': number;
  container: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
} & T;

export type IThemeRadii<T = Dict> = {
  none: number;
  sm: number;
  base: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
  '3xl': number;
  full: number;
} & T;

export type IThemeIndices<T = Dict> = {
  hide: number;
  base: number;
  dropdown: number;
  sticky: number;
  banner: number;
  overlay: number;
  modal: number;
  popover: number;
  toast: number;
  tooltip: number;
} & T;

type RNShadow = {
  shadowColor: string;
  shadowOffset: {
    width: number;
    height: number;
  };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
};

export type IThemeShadows<T = Dict> = {
  xs: RNShadow;
  sm: RNShadow;
  base: RNShadow;
  md: RNShadow;
  lg: RNShadow;
  xl: RNShadow;
  none: RNShadow;
  '2xl': RNShadow;
  '3xl': RNShadow;
} & T;

export type IThemeComponent<T = Dict> = {
  button: {
    default: Partial<StyledProps>;
  };
} & T;

export type ITheme<T extends Dict = Dict> = {
  colors: IThemeColors<T['colors']>;
  typography: IThemeTypography<T['typography']>;
  spacing: IThemeSpacing<T['spacing']>;
  sizes: IThemeSizes<T['sizes']>;
  radii: IThemeRadii<T['radii']>;
  indices: IThemeIndices<T['indices']>;
  shadows: IThemeShadows<T['shadows']>;
  components: IThemeComponent<T['components']>;
};

export type CustomThemeDict = Partial<Record<keyof ITheme, unknown>>;

export type ReturnExtendTheme = typeof customTheme;

type TSystemConfigs = typeof systemConfigs;

export type GetThemeValue<scale = null> = scale extends keyof TThemeTokens
  ? TThemeTokens[scale]
  : unknown;

export type RNStyles = ViewStyle | TextStyle | ImageStyle;

export type TMapThemeProps<
  T extends RNStyles & TSystemConfigs = RNStyles & TSystemConfigs,
> = {
  [key in Extract<keyof T, string>]?: T[key] extends
    | {
        property: unknown;
        scale: unknown;
      }
    | { properties: unknown; scale: unknown }
    ? GetThemeValue<T[key]['scale']>
    : key extends keyof RNStyles
    ? RNStyles[key]
    : unknown;
};

export type StyledProps = TMapThemeProps;
