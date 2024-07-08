import {useColorScheme} from 'react-native';
import {darkColors, lightColors, ThemeColors} from '../../config/theme/theme';
import {createContext, PropsWithChildren, useEffect, useState} from 'react';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  colors: ThemeColors;
  currentTheme: ThemeColor;
  isDark?: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');
  // aveces este HOOK no funciona bien cuando la app esta en segundo plano
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (colorScheme === 'light') {
      setCurrentTheme('light');
    } else {
      setCurrentTheme('dark');
    }
  }, [colorScheme]);

  const setTheme = (theme: ThemeColor): void => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark: currentTheme !== 'light',
        colors: currentTheme === 'light' ? lightColors : darkColors,
        currentTheme: currentTheme,
        setTheme: theme => setTheme(theme),
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
