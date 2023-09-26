import _ from 'lodash';
import { systemConfigs } from './styled-config';
import { customTheme } from './extend-theme';

export function omitKeyPropsStyleRn<T extends Dict = Dict>(props: T) {
  // remove children prop
  const styleProps = {} as Partial<T>;
  const otherProps = {} as Partial<T>;

  Object.keys(props).forEach((k: keyof T) => {
    if (
      typeof props[k] !== 'function' &&
      !['children', 'style'].includes(k.toString())
    ) {
      styleProps[k] = props[k];
    } else {
      otherProps[k] = props[k];
    }
  });

  return [styleProps, otherProps];
}

const getFirstValueObject = (obj: Dict) => Object.values(obj)[0];

export const TypoNs = [
  'fonts',
  'fontSizes',
  'fontWeights',
  'lineHeights',
  'letterSpacings',
];

export const getStylesTheme = (props: Dict) => {
  const dataSet = {} as Dict;

  Object.entries(props).forEach(([k, v]) => {
    const cf = (systemConfigs as Dict)[k] as {
      property: string;
      scale: string;
      properties: string[];
    };
    if (cf) {
      const { property, scale, properties } = cf;

      const getValue = TypoNs.includes(scale)
        ? _.get(customTheme, `typography.${scale}.${v}`)
        : _.get(customTheme, `${scale}.${v}`);

      const value = _.isObject(getValue)
        ? getFirstValueObject(getValue)
        : getValue;
      if (property) dataSet[property] = value;
      if (properties) {
        properties.forEach((p) => {
          dataSet[p] = value;
        });
      }
    } else {
      dataSet[k] = v;
    }
  });

  return dataSet;
};

export const getPropsTheme = (props: Dict) => {
  const [stylesProps, otherProps] = omitKeyPropsStyleRn(props);
  return [getStylesTheme(stylesProps), otherProps];
};
