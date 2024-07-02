import {Platform} from 'react-native';
import prompt from 'react-native-prompt-android';

interface Buttom {
  text?: string;
  onPress?: () => void;
  style?: 'default' | 'cancel' | 'destructive';
}

interface ShowPromptProps {
  title: string;
  message?: string;
  typeCross?: 'default' | 'plain-text' | 'secure-text';
  typeiOS?: 'login-password';
  typeAndroid?: 'numeric' | 'email-address' | 'phone-pad';
  cancelable?: boolean;
  defaultValue?: string;
  placeholder?: string;

  Buttoms?: Buttom[];
}

export const showPrompt = ({
  title,
  message,
  typeCross,
  typeiOS,
  typeAndroid,
  cancelable,
  defaultValue,
  placeholder,

  Buttoms,
}: ShowPromptProps) => {
  prompt(title, message, Buttoms, {
    type:
      Platform.OS === 'android'
        ? typeAndroid
        : Platform.OS === 'ios'
        ? typeiOS
        : typeCross,
    cancelable: cancelable,
    defaultValue: defaultValue,
    placeholder: placeholder,
  });
};
