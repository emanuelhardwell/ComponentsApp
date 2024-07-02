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
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
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
      ],
      {cancelable: true, onDismiss: () => console.log('onDismiss')},
    );

  // No funciona en Android
  const showPrompt = () =>
    Alert.prompt(
      'title prompt',
      'message prompt',
      (value: string) => console.log('Prompt' + value),
      'secure-text',
      'default',
      'number-pad',
    );

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="AlertScreen" safe />

      <View style={{height: 25}} />
      <Button text={'2-Button Alert'} onPress={createTwoButtonAlert} />
      <View style={{height: 15}} />
      <Button text={'3-Button Alert'} onPress={createThreeButtonAlert} />
      <View style={{height: 15}} />
      <Button text={'Show Prompt'} onPress={showPrompt} />
    </CustomView>
  );
};
