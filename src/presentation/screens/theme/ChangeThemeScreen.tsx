import {View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';

export const ChangeThemeScreen = () => {
  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="ChangeThemeScreen" safe />
      <View style={{height: 20}} />

      <Button text="Light" onPress={() => {}} />
      <View style={{height: 20}} />
      <Button text="Dark" onPress={() => {}} />
    </CustomView>
  );
};
