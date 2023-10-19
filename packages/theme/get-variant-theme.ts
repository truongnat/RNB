import { customTheme } from './extend-theme';
import { getPropsTheme } from './get-props-theme';
import { ComponentsToken, GetComponentVariantToken } from './token-type';

export const getVariantTheme = <T extends ComponentsToken = ComponentsToken>(
  componentName: T,
  variantName?: GetComponentVariantToken<T>,
) => {
  const variant = customTheme.components[componentName][
    variantName ?? 'default'
  ] as Dict;

  const keys = Object.keys(variant);

  const output = {} as Dict;

  if (!variant || keys.length === 0) {
    return {};
  }

  keys.forEach(key => {
    output[key] = getPropsTheme(variant[key] as Dict)[0];
  });

  return output;
};
