import {FC, useContext} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Separator} from './Separator';
import {ThemeContext} from '../../context/ThemeContext';

interface MenuItemProps {
  name: string;
  icon: string;
  component: string;

  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItem: FC<MenuItemProps> = ({
  name,
  icon,
  component,
  isFirst = false,
  isLast = false,
}) => {
  const navigation = useNavigation<any>();
  const {colors} = useContext(ThemeContext);

  return (
    <>
      <Pressable onPress={() => navigation.navigate(component)}>
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
          }}>
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
      {!isLast && <Separator />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
