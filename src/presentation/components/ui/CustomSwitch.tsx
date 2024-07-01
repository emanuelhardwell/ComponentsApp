import {FC} from 'react';
import {Platform, StyleSheet, Switch, Text, View} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface CustomSwitchProps {
  text?: string;
  isOn: boolean;
  onValueChange: (value: boolean) => void;
}

export const CustomSwitch: FC<CustomSwitchProps> = ({
  text,
  isOn,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>
      {text && <Text style={{color: colors.text}}>{text}</Text>}

      <Switch
        // trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={isOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
