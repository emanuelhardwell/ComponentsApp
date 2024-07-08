import {Appearance, useColorScheme} from 'react-native';
import {darkColors, lightColors, ThemeColors} from '../../config/theme/theme';
import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {AppState} from 'react-native';

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
  // const colorScheme = useColorScheme();

  // useEffect(() => {
  //   if (colorScheme === 'light') {
  //     setCurrentTheme('light');
  //   } else {
  //     setCurrentTheme('dark');
  //   }
  // }, [colorScheme]);

  // Este puede ser la segunda opción en caso de que falle el hook anterior
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      const colorScheme = Appearance.getColorScheme();
      setCurrentTheme(colorScheme === 'light' ? 'light' : 'dark');
    });

    return () => {
      subscription.remove();
    };
  }, []);

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
