import { GetComponentVariantToken, getVariantTheme } from '@packages/theme';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import isEqual from 'react-fast-compare';
import React, { forwardRef, memo, Ref } from 'react';
import { Images } from '@packages/assets';
import { Button, ButtonProps } from '../button';
import { ImagesName } from '@packages/assets/images';

export type AvatarProps = Omit<ButtonProps, 'style' | 'variant'> & {
  variant?: GetComponentVariantToken<'avatar'>;
  size?: number;
  square?: boolean;
  imageProps?: ImageProps;
  imageName?: ImagesName;
  source?: ImageSourcePropType;
};

export const Avatar = memo(
  forwardRef(function Avatar(props: AvatarProps, ref: Ref<View>) {
    const {
      variant,
      size,
      square = true,
      imageName,
      source,
      imageProps = {},
      ...rest
    } = props;

    const { sx = {}, ...other } = rest;

    const variantStyles = getVariantTheme('avatar', variant);

    const imageStyles = {
      width: size ?? variantStyles.width ?? 24,
      height: size ?? variantStyles.height ?? 24,
      objectFit: 'contain',
    } as StyleProp<ImageStyle>;

    const getSource = () => {
      if (imageName) {
        return Images[imageName];
      } else if (source) {
        return source;
      }
      return Images.avatar;
    };

    return (
      <Button
        sx={sx}
        ref={ref}
        px={'none'}
        py="none"
        bg="transparent"
        overflow="hidden"
        rounded={square ? 'sm' : 'full'}
        {...variantStyles}
        {...other}
      >
        <Image source={getSource()} style={imageStyles} {...imageProps} />
      </Button>
    );
  }),
  isEqual,
);
