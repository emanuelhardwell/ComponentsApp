import {StyleProp, TextInput, TextStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {FC, useContext} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

interface CustomTextInputProps {
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  autoCapitalize?: 'none' | 'words' | 'sentences' | 'characters';
  autoCorrect?: boolean;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'ascii-capable'
    | 'numbers-and-punctuation'
    | 'url'
    | 'number-pad'
    | 'phone-pad'
    | 'name-phone-pad'
    | 'decimal-pad'
    | 'twitter'
    | 'web-search'
    | 'visible-password';
  onChangeText?: (value: string) => void;
}

export const CustomTextInput: FC<CustomTextInputProps> = ({
  style,
  placeholder,
  autoCapitalize,
  autoCorrect,
  keyboardType,
  onChangeText,
}) => {
  const {currentTheme} = useContext(ThemeContext);

  return (
    <>
      {/* TextInput por defecto no trae ningun estilo */}
      <TextInput
        style={[
          globalStyles.input,
          style,
          {borderColor: currentTheme === 'dark' ? '#f8f3f3' : undefined},
          {color: currentTheme === 'dark' ? '#f8f3f3' : undefined},
        ]}
        placeholder={placeholder}
        placeholderTextColor={currentTheme === 'dark' ? '#f8f3f3' : undefined}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </>
  );
};
