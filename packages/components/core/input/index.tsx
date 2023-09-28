import {
  type GetComponentVariantToken,
  getVariantTheme,
  getPropsTheme,
} from '@packages/theme';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import isEqual from 'react-fast-compare';
import React, { forwardRef, memo, useState, type Ref } from 'react';
import { Box, BoxProps } from '../box';

export type InputProps = {
  variant?: GetComponentVariantToken<'input'>;
  containerProps?: BoxProps;
} & TextInputProps;

export const Input = memo(
  forwardRef(function Input(props: InputProps, ref: Ref<TextInput>) {
    const [isFocus, setIsFocus] = useState(false);
    const { variant, containerProps = {}, ...rest } = props;
    const variantStyles = getVariantTheme('input', variant);

    const { onFocus, onBlur, style } = rest ?? {};

    const getStyleInput = () => {
      const styleFocus: Dict = {};
      if (isFocus) {
        styleFocus.borderColor = 'blue.500';
      }

      return StyleSheet.flatten([
        variantStyles,
        getPropsTheme(styleFocus),
      ]) as Dict;
    };

    const handleFocus = (event: any) => {
      setIsFocus(true);
      onFocus?.(event);
    };

    const handleBlur = (event: any) => {
      setIsFocus(false);
      onBlur?.(event);
    };

    return (
      <Box height={40} w="full" style={getStyleInput()} {...containerProps}>
        <TextInput
          ref={ref}
          style={StyleSheet.flatten([style, { height: '100%' }])}
          placeholder={variant}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
        />
      </Box>
    );
  }),
  isEqual,
);
