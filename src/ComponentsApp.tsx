import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StackNavigator} from './presentation/navigators/StackNavigator';
import {PropsWithChildren} from 'react';
import {ThemeProvider} from './presentation/context/ThemeContext';

const AppState = ({children}: PropsWithChildren) => {
  return (
    <NavigationContainer>
      <ThemeProvider>{children}</ThemeProvider>
    </NavigationContainer>
  );
};

export const ComponentsApp = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};
