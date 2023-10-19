import {
  type GetComponentVariantToken,
  getPropsTheme,
  getStylesTheme,
  getVariantTheme,
  type StyledProps,
  type SxProps,
} from '@packages/theme';
import _ from 'lodash';
import { Text, type TextProps } from 'react-native';
import isEqual from 'react-fast-compare';
import React, {
  forwardRef,
  type LegacyRef,
  memo,
  type PropsWithChildren,
} from 'react';
import { ITypoVariantStyle } from '@packages/theme/components';

export type TypoProps = SxProps &
  StyledProps &
  TextProps & {
    variant?: GetComponentVariantToken<'typo'>;
  };

const injectFonts = {
  fontFamily: 'Roboto Mono',
};

export const Typo = memo(
  forwardRef(function Typo(
    { sx, variant, children, ...rest }: PropsWithChildren<TypoProps>,
    ref: LegacyRef<Text>,
  ) {
    const variantStyles = getVariantTheme('typo', variant) as ITypoVariantStyle;
    const getStyleBySx = getStylesTheme(sx ?? {});
    const [otherStyles, otherProps] = getPropsTheme(rest);
    const styles = _.merge(
      variantStyles.container,
      getStyleBySx,
      otherStyles,
      injectFonts,
    );

    return (
      <Text style={styles} ref={ref} {...otherProps}>
        {children}
      </Text>
    );
  }),
  isEqual,
);
