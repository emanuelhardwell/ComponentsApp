import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {StackNavigator} from './presentation/navigators/StackNavigator';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
