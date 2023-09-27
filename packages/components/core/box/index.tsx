import {
  getPropsTheme,
  getStylesTheme,
  type StyledProps,
  type SxProps,
} from '@packages/theme';
import _ from 'lodash';
import { View, ViewProps } from 'react-native';
import isEqual from 'react-fast-compare';
import React, {
  forwardRef,
  type LegacyRef,
  memo,
  type PropsWithChildren,
} from 'react';

export type BoxProps = SxProps & StyledProps & ViewProps;

export const Box = memo(
  forwardRef(function Box(
    props: PropsWithChildren<BoxProps>,
    ref: LegacyRef<View>,
  ) {
    const { sx, children, ...rest } = props;

    const getStyleBySx = getStylesTheme(sx ?? {});
    const [otherStyles, otherProps] = getPropsTheme(rest);
    const styles = _.merge(getStyleBySx, otherStyles);

    return (
      <View style={styles} ref={ref} {...otherProps}>
        {children}
      </View>
    );
  }),
  isEqual,
);
