import {FC, ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';

interface CustomViewProps {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

export const CustomView: FC<CustomViewProps> = ({style, children}) => {
  return <View style={[globalStyles.mainContainer, style]}>{children}</View>;
};
