import {
  type GetComponentVariantToken,
  getPropsTheme,
  getStylesTheme,
  getVariantTheme,
  type StyledProps,
  type SxProps,
} from '@packages/theme';
import _ from 'lodash';
import type {
  PressableProps,
  PressableStateCallbackType,
  View,
  ViewStyle,
} from 'react-native';
import { Pressable, StyleSheet } from 'react-native';
import isEqual from 'react-fast-compare';
import React, {
  forwardRef,
  memo,
  type PropsWithChildren,
  type Ref,
  useCallback,
} from 'react';
import { adjustColorAlpha } from '@packages/utils';

export type ButtonProps = SxProps &
  StyledProps &
  PressableProps & {
    variant?: GetComponentVariantToken<'button'>;
    text?: string;
    isPressedStyle?: boolean;
  };

export const Button = memo(
  forwardRef(function Button(
    props: PropsWithChildren<ButtonProps>,
    ref: Ref<View>,
  ) {
    const { sx, variant, children, isPressedStyle = true, ...rest } = props;

    const variantStyles = getVariantTheme('button', variant);
    const getStyleBySx = getStylesTheme(sx);
    const [otherStyles, otherProps] = getPropsTheme(rest);

    const getStyles = useCallback(
      ({ pressed }: PressableStateCallbackType) => {
        const styles = _.merge(variantStyles, getStyleBySx, otherStyles);

        return StyleSheet.flatten<ViewStyle>([
          styles,
          {
            backgroundColor:
              isPressedStyle && pressed
                ? adjustColorAlpha(
                    (styles.backgroundColor as string) ?? 'white',
                    0.8,
                  )
                : styles.backgroundColor,
          },
        ]);
      },
      [getStyleBySx, isPressedStyle, otherStyles, variantStyles],
    );

    return (
      <Pressable style={getStyles} ref={ref} {...otherProps}>
        {children}
      </Pressable>
    );
  }),
  isEqual,
);
