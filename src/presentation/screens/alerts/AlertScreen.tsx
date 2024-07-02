import {Alert, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {globalStyles} from '../../../config/theme/theme';
import {Button} from '../../components/ui/Button';
import {Title} from '../../components/ui/Title';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="AlertScreen" safe />

      <View style={{height: 25}} />
      <Button text={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <View style={{height: 15}} />
      <Button text={'3-Button Alert'} onPress={createThreeButtonAlert} />
    </CustomView>
  );
};
