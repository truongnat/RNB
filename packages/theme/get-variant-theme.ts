import { customTheme } from './extend-theme';
import { getPropsTheme } from './get-props-theme';
import { ComponentsToken, GetComponentVariantToken } from './token-type';

export const getVariantTheme = <T extends ComponentsToken = ComponentsToken>(
  componentName: T,
  variantName: GetComponentVariantToken<T>,
) => {
  const variant = customTheme.components[componentName][variantName] as Dict;
  return getPropsTheme(variant)[0];
};
