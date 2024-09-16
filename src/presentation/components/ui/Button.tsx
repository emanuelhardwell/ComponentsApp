import {FC} from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  text: string;
  onPress: () => void;
}

export const Button: FC<ButtonProps> = ({style, text, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {opacity: pressed ? 0.7 : 1, backgroundColor: colors.primary},
        style,
      ]}>
      <Text
        style={[globalStyles.btnPrimaryText, {color: colors.buttonTextColor}]}>
        {text}
      </Text>
    </Pressable>
  );
};
