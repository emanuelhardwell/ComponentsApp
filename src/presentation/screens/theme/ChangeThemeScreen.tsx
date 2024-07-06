import {Text, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text={`ChangeThemeScreen: ${currentTheme}`} safe />
      <View style={{height: 20}} />

      <Button text="Light" onPress={() => setTheme('light')} />
      <View style={{height: 20}} />
      <Button text="Dark" onPress={() => setTheme('dark')} />

      <View style={{height: 20}} />
      <Text>{JSON.stringify(colors, null, 2)}</Text>
    </CustomView>
  );
};
