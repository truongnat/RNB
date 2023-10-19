import {
  type GetComponentVariantToken,
  getVariantTheme,
} from '@packages/theme';
import { TextInput, TextInputProps } from 'react-native';
import isEqual from 'react-fast-compare';
import React, { forwardRef, memo, useState, type Ref, ReactNode } from 'react';
import { Box, BoxProps } from '../box';
import { IInputVariantStyle } from '@packages/theme/components';
import _ from 'lodash';
import { Typo } from '../typo';

export type InputProps = {
  variant?: GetComponentVariantToken<'input'>;
  containerProps?: BoxProps;
  leadingVisual?: ReactNode;
  trailingVisual?: ReactNode;
  label?: string | ReactNode;
} & TextInputProps;

export const Input = memo(
  forwardRef(function Input(props: InputProps, ref: Ref<TextInput>) {
    const [isFocus, setIsFocus] = useState(false);
    const {
      variant,
      containerProps = {},
      leadingVisual,
      trailingVisual,
      label,
      ...rest
    } = props;
    const variantStyles = getVariantTheme(
      'input',
      variant,
    ) as IInputVariantStyle;

    const { onFocus, onBlur, style } = rest ?? {};

    const containerStyle = _.merge(
      variantStyles.container,
      isFocus ? { borderColor: 'blue.500' } : {},
    ) as Dict;

    const handleFocus = (event: any) => {
      setIsFocus(true);
      onFocus?.(event);
    };

    const handleBlur = (event: any) => {
      setIsFocus(false);
      onBlur?.(event);
    };

    const getLabel = () => {
      if (typeof label === 'string') {
        return <Typo style={variantStyles.labelText}>{label}</Typo>;
      }

      return label;
    };

    return (
      <Box w="full">
        <Box style={variantStyles.label}>{getLabel()}</Box>
        <Box
          height={40}
          w="full"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          px={'8'}
          {...containerStyle}
          {...containerProps}
        >
          {leadingVisual && (
            <Box style={variantStyles.leadingVisual}>{leadingVisual}</Box>
          )}
          <TextInput
            ref={ref}
            style={[style, variantStyles.input]}
            placeholder={variant}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...rest}
          />
          {trailingVisual && (
            <Box style={variantStyles.trailingVisual}>{trailingVisual}</Box>
          )}
        </Box>
      </Box>
    );
  }),
  isEqual,
);
