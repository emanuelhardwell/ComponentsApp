import {FC} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface SeparatorProps {
  style?: StyleProp<ViewStyle>;
}

export const Separator: FC<SeparatorProps> = ({style}) => {
  return (
    <View style={{backgroundColor: colors.cardBackground}}>
      <View
        style={[
          {
            alignSelf: 'center',
            marginVertical: 8,
            width: '90%',
            height: 1,
            backgroundColor: colors.text,
            opacity: 0.2,
          },
          style,
        ]}
      />
    </View>
  );
};
