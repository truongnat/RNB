import { ColorValue } from 'react-native';
import isEqual from 'react-fast-compare';
import React, { memo } from 'react';
import { IconsName, Icons } from '@packages/assets';
import { SvgProps } from 'react-native-svg';

export type IconProps = {
  name: IconsName;
  size?: number;
  fill?: ColorValue;
  filled?: boolean;
} & Omit<SvgProps, 'width' | 'height'>;

export const Icon = memo(function Icon(props: IconProps) {
  const { name, size = 24, fill, ...rest } = props;
  const SvgIcon = Icons[name];

  return <SvgIcon width={size} height={size} fill={fill} {...rest} />;
}, isEqual);
