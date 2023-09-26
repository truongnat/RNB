import {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ReturnExtendTheme } from './system';
import { defaultTheme } from './theme';
import { useColorScheme } from 'react-native';

type ThemeCtxType = {
  theme: ReturnExtendTheme;
  isDark?: boolean;
  toggleDark?: () => void;
};

const ThemeCtx = createContext<ThemeCtxType>({} as ThemeCtxType);

type ThemeProviderProps = PropsWithChildren<{}>;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [isDark, setIsDark] = useState<boolean>(isDarkMode);

  const memoized = useMemo(() => {
    return {
      theme: defaultTheme,
      isDark,
      toggleDark: () => setIsDark((prev) => !prev),
    } as ThemeCtxType;
  }, [isDark]);

  return <ThemeCtx.Provider value={memoized}>{children}</ThemeCtx.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeCtx);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return ctx;
};
