import { ColorValue, View } from 'react-native';
import isEqual from 'react-fast-compare';
import React, { forwardRef, memo, type Ref } from 'react';
import { Button, ButtonProps } from '../button';
import { IconsName, Icons } from '@packages/assets';
import { SvgProps } from 'react-native-svg';

export type IconButtonProps = {
  name: IconsName;
  size?: number;
  fill?: ColorValue;
  filled?: boolean;
  iconProps?: Omit<SvgProps, 'width' | 'height'>;
} & ButtonProps;

export const IconButton = memo(
  forwardRef(function IconButton(props: IconButtonProps, ref: Ref<View>) {
    const { name, size = 24, fill, filled, iconProps, ...rest } = props;
    const { sx = {}, ...other } = rest;
    const SvgIcon = Icons[name];

    return (
      <Button
        sx={sx}
        ref={ref}
        px={'6'}
        rounded={filled ? 'full' : 'sm'}
        variant="invisible"
        {...other}
      >
        <SvgIcon width={size} height={size} fill={fill} {...iconProps} />
      </Button>
    );
  }),
  isEqual,
);
