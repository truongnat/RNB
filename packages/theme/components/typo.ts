import { TextStyle } from 'react-native';
import { ITheme, StyledProps } from '../system';

export type ITypoVariant = {
  container: Partial<StyledProps>;
};

export type ITypoVariantStyle = {
  container: TextStyle;
};

export const typo: ITheme['components']['typo'] = {
  default: {
    container: {
      fs: 'sm',
      fw: 'normal',
    },
  },
  display: {
    container: {
      fs: '4xl',
      fw: 'medium',
    },
  },
  large: {
    container: {
      fs: '3xl',
      fw: 'semibold',
    },
  },
  medium: {
    container: {
      fs: 'xl',
      fw: 'semibold',
    },
  },
  small: {
    container: {
      fs: 'md',
      fw: 'semibold',
    },
  },
  subTitle: {
    container: {
      fs: 'xl',
      fw: 'normal',
    },
  },
  bodyL: {
    container: {
      fs: 'md',
    },
  },
  bodyM: {
    container: {
      fs: 'sm',
    },
  },
  bodyS: {
    container: {
      fs: 'xs',
    },
  },
  caption: {
    container: {
      fs: 'xs',
      fw: 'normal',
    },
  },
};
