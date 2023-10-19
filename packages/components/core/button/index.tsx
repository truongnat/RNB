import {
  type GetComponentVariantToken,
  getPropsTheme,
  getStylesTheme,
  getVariantTheme,
  type StyledProps,
  type SxProps,
} from '@packages/theme';
import _ from 'lodash';
import type { GestureResponderEvent, PressableProps, View } from 'react-native';
import { Pressable } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

import isEqual from 'react-fast-compare';
import React, {
  forwardRef,
  memo,
  type PropsWithChildren,
  type Ref,
  useCallback,
  ReactNode,
} from 'react';
import { IButtonVariantStyle } from '@packages/theme/components';
import { Typo } from '../typo';
import { adjustColorAlpha } from '@packages/utils';
import { useTextLoading } from '@packages/hooks';
import { Box } from '../box';

export const scales = {
  small: 0.8,
  large: 0.9,
  none: 1,
};

export type ScaleType = keyof typeof scales;

export type ButtonProps = SxProps &
  StyledProps &
  PressableProps & {
    variant?: GetComponentVariantToken<'button'>;
    text?: string;
    scale?: ScaleType;
    isLoading?: boolean;
    loadingText?: string;
    leadingVisual?: ReactNode;
    trailingVisual?: ReactNode;
  };

export const Button = memo(
  forwardRef(function Button(
    props: PropsWithChildren<ButtonProps>,
    ref: Ref<View>,
  ) {
    const {
      sx,
      variant,
      children,
      scale,
      onPressIn,
      onPressOut,
      disabled,
      isLoading,
      loadingText,
      leadingVisual,
      trailingVisual,
      ...rest
    } = props;

    const _textLoading = useTextLoading(loadingText);
    const scaleValue = useSharedValue(1);

    // styles
    const variantStyles = getVariantTheme(
      'button',
      variant,
    ) as IButtonVariantStyle;
    const getStyleBySx = getStylesTheme(sx);
    const [otherStyles, otherProps] = getPropsTheme(rest);

    const getStyles = useCallback(() => {
      const _styles = _.merge(
        variantStyles.container,
        getStyleBySx,
        otherStyles,
      );

      return _.merge(_styles, {
        backgroundColor: isLoading
          ? adjustColorAlpha(_styles.backgroundColor as string, 0.8)
          : _styles.backgroundColor,
      });
    }, [getStyleBySx, isLoading, otherStyles, variantStyles.container]);

    const _onPressIn = (ev: GestureResponderEvent) => {
      onPressIn?.(ev);
      scaleValue.value = withSpring(scales[scale ?? 'large']);
    };

    const _onPressOut = (ev: GestureResponderEvent) => {
      onPressOut?.(ev);
      scaleValue.value = withSpring(scales.none);
    };

    return (
      <Animated.View
        style={{
          transform: [
            {
              scale: scaleValue,
            },
          ],
        }}
      >
        <Pressable
          style={getStyles}
          ref={ref}
          onPressIn={_onPressIn}
          onPressOut={_onPressOut}
          disabled={disabled || isLoading}
          {...otherProps}
        >
          {leadingVisual && !isLoading && (
            <Box style={variantStyles.leadingVisual}>{leadingVisual}</Box>
          )}
          <Typo style={variantStyles.label}>
            {isLoading ? _textLoading : children}
          </Typo>
          {trailingVisual && !isLoading && (
            <Box style={variantStyles.trailingVisual}>{trailingVisual}</Box>
          )}
        </Pressable>
      </Animated.View>
    );
  }),
  isEqual,
);
