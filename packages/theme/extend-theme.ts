import { merge } from 'merge-anything';
import { defaultTheme } from './theme';
import { CustomThemeDict, ITheme } from './system';

export function extendTheme<T extends CustomThemeDict = CustomThemeDict>(
  theme: T,
) {
  return merge(defaultTheme, theme) as ITheme<T>;
}

export const customTheme = extendTheme({});
