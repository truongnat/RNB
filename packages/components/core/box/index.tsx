import {
  StyledProps,
  SxProps,
  getPropsTheme,
  getStylesTheme,
} from '@packages/theme';
import _ from 'lodash';
import { View, ViewProps } from 'react-native';
import isEqual from 'react-fast-compare';
import { PropsWithChildren, memo } from 'react';

export type BoxProps = SxProps & StyledProps & ViewProps;

export const Box = memo(function Box({
  sx,
  children,
  ...rest
}: PropsWithChildren<BoxProps>) {
  const getStyleBySx = getStylesTheme(sx ?? {});
  const [otherStyles, otherProps] = getPropsTheme(rest);
  const styles = _.merge(getStyleBySx, otherStyles);

  return (
    <View style={styles} {...otherProps}>
      {children}
    </View>
  );
}, isEqual);
