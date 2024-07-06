import {FC, ReactNode, useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface CustomViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export const CustomView: FC<CustomViewProps> = ({style, children}) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        {backgroundColor: colors.background},
        style,
      ]}>
      {children}
    </View>
  );
};
