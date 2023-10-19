import { ViewStyle } from 'react-native';
import { ITheme, StyledProps } from '../system';

export type IButtonVariant = {
  leadingVisual: Partial<StyledProps>;
  trailingVisual: Partial<StyledProps>;
  label: Partial<StyledProps>;
  container: Partial<StyledProps>;
};

export type IButtonVariantStyle = {
  leadingVisual: ViewStyle;
  trailingVisual: ViewStyle;
  label: ViewStyle;
  container: ViewStyle;
};

export const button: ITheme['components']['button'] = {
  default: {
    label: {
      color: 'black',
      px: '6',
    },
    leadingVisual: {},
    trailingVisual: {},
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      shadow: 'base',
      py: '12',
      px: '16',
      rounded: '3xl',
      bg: 'primary',
      borderColor: 'gray.200',
      borderWidth: 1,
      minWidth: 80,
    },
  },
  invisible: {
    label: {
      color: 'black',
    },
    leadingVisual: {},
    trailingVisual: {},
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      shadow: 'base',
      py: '12',
      px: '16',
      rounded: '3xl',
      minWidth: 80,
    },
  },
  primary: {
    label: {
      color: 'white',
    },
    leadingVisual: {},
    trailingVisual: {},
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      shadow: 'base',
      py: '12',
      px: '16',
      rounded: '3xl',
      bg: 'green.500',
      borderColor: 'transparent',
      borderWidth: 1,
      minWidth: 80,
    },
  },
  danger: {
    label: {
      color: 'white',
    },
    leadingVisual: {},
    trailingVisual: {},
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      shadow: 'base',
      py: '12',
      px: '16',
      rounded: '3xl',
      bg: 'red.600',
      borderColor: 'transparent',
      borderWidth: 1,
      minWidth: 80,
    },
  },
  outline: {
    label: {
      color: 'black',
    },
    leadingVisual: {},
    trailingVisual: {},
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      shadow: 'base',
      py: '12',
      px: '16',
      rounded: '3xl',
      bg: 'primary',
      borderColor: 'gray.200',
      borderWidth: 1,
      minWidth: 80,
    },
  },
};
