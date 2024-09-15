import {FC, PropsWithChildren, useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

// Forma 2 de pedir el Children por Props
interface CardProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card: FC<CardProps> = ({style, children}) => {
  const {colors} = useContext(ThemeContext);

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
