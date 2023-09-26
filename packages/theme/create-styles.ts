import { RNStyles, ReturnExtendTheme } from './system';
import { customTheme } from './extend-theme';

type Styles = Record<string, RNStyles>;

export function createStyles<T extends Styles = Styles>(
  callback: (theme: ReturnExtendTheme) => T,
): T {
  return callback(customTheme);
}
