import {FC, PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';

// Forma 2 de pedir el Children por Props
interface CardProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card: FC<CardProps> = ({style, children}) => {
  return (
    <View
      style={[
        {backgroundColor: colors.cardBackground, borderRadius: 10, padding: 10},
        style,
      ]}>
      {children}
    </View>
  );
};
