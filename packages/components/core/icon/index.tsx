import { ColorValue, View } from 'react-native';
import isEqual from 'react-fast-compare';
import React, { forwardRef, memo, type Ref } from 'react';
import { Button, ButtonProps } from '../button';
import { IconsName, Icons } from '@packages/assets';
import { SvgProps } from 'react-native-svg';

export type IconProps = {
  iconName: IconsName;
  size?: number;
  fill?: ColorValue;
  filled?: boolean;
  iconProps?: Omit<SvgProps, 'width' | 'height'>;
} & ButtonProps;

export const Icon = memo(
  forwardRef(function Icon(props: IconProps, ref: Ref<View>) {
    const { iconName, size = 24, fill, filled, iconProps, ...rest } = props;
    const { sx = {}, ...other } = rest;
    const SvgIcon = Icons[iconName];

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
