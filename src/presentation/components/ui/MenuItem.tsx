import {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../../config/theme/theme';

interface MenuItemProps {
  name: string;
  icon: string;
  component: string;
}

export const MenuItem: FC<MenuItemProps> = ({name, icon, component}) => {
  return (
    <Pressable onPress={() => console.log('Tap !!')}>
      <View
        style={{...styles.container, backgroundColor: colors.cardBackground}}>
        <IonicIcon
          name={icon}
          size={25}
          color={colors.primary}
          style={{marginRight: 10}}
        />
        <Text style={{color: colors.text}}> {name} </Text>
        <IonicIcon
          name="chevron-forward-outline"
          size={25}
          //   color={colors.primary}
          style={{marginLeft: 'auto', color: colors.primary}}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
