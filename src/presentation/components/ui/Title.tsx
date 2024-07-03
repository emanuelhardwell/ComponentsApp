import {FC} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface TitleProps {
  text: string;
  safe?: boolean;
  white?: boolean;
  style?: StyleProp<TextStyle>;
}

export const Title: FC<TitleProps> = ({
  text,
  safe = false,
  white = false,
  style,
}) => {
  const {top} = useSafeAreaInsets();

  return (
    <Text
      style={[
        {
          ...globalStyles.title,
          marginTop: safe ? top : 0,
          marginBottom: 10,
          color: white ? 'white' : colors.text,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};
