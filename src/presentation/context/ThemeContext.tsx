import {lightColors, ThemeColors} from '../../config/theme/theme';
import {createContext, PropsWithChildren} from 'react';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  colors: ThemeColors;
  currentTheme: ThemeColor;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const setTheme = (theme: ThemeColor): void => {
    console.log(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        colors: lightColors,
        currentTheme: 'light',
        setTheme: theme => setTheme(theme),
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
