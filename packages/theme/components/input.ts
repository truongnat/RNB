import { TextStyle, ViewStyle } from 'react-native';
import { ITheme, StyledProps } from '../system';

export type IInputVariant = {
  leadingVisual: Partial<StyledProps>;
  trailingVisual: Partial<StyledProps>;
  input: Partial<StyledProps>;
  label: Partial<StyledProps>;
  labelText: Partial<StyledProps>;
  hint: Partial<StyledProps>;
  hintText: Partial<StyledProps>;
  message: Partial<StyledProps>;
  messageText: Partial<StyledProps>;
  container: Partial<StyledProps>;
};

export type IInputVariantStyle = {
  leadingVisual: ViewStyle;
  trailingVisual: ViewStyle;
  input: ViewStyle;
  label: ViewStyle;
  labelText: TextStyle;
  hint: ViewStyle;
  hintText: TextStyle;
  message: ViewStyle;
  messageText: TextStyle;
  container: ViewStyle;
};

export const input: ITheme['components']['input'] = {
  default: {
    container: {
      rounded: 'xl',
      borderWidth: 2,
      borderColor: 'transparent',
    },
    hint: {},
    hintText: {},
    input: {
      h: 'full',
      font: 'default',
      fs: 'xs',
      flex: 1,
      px: '8',
    },
    label: {
      pb: '8',
    },
    labelText: {
      fs: 'sm',
      fw: 'medium',
    },
    leadingVisual: {},
    message: {},
    messageText: {},
    trailingVisual: {},
  },
  filled: {
    container: {
      bg: 'white',
      rounded: 'xl',
      borderWidth: 2,
      borderColor: 'transparent',
    },
    hint: {},
    hintText: {},
    input: { h: 'full', font: 'default', fs: 'xs', flex: 1, px: '8' },
    label: {
      pb: '8',
    },
    labelText: {
      fs: 'sm',
      fw: 'medium',
    },
    leadingVisual: {},
    message: {},
    messageText: {},
    trailingVisual: {},
  },
  flushed: {
    container: {
      rounded: 'xl',
      borderBottomWidth: 1.5,
      borderColor: 'gray.300',
    },
    hint: {},
    hintText: {},
    input: {
      h: 'full',
      font: 'default',
      fs: 'xs',
      flex: 1,
      px: '8',
    },
    label: {
      pb: '8',
    },
    labelText: {
      fs: 'sm',
      fw: 'medium',
    },
    leadingVisual: {},
    message: {},
    messageText: {},
    trailingVisual: {},
  },
  outline: {
    container: {
      borderWidth: 1.5,
      borderColor: 'gray.300',
      px: '16',
      rounded: 'xl',
    },
    hint: {},
    hintText: {},
    input: {
      h: 'full',
      font: 'default',
      fs: 'xs',
      flex: 1,
      px: '8',
    },
    label: {
      pb: '8',
    },
    labelText: {
      fs: 'sm',
      fw: 'medium',
    },
    leadingVisual: {},
    message: {},
    messageText: {},
    trailingVisual: {},
  },
};
