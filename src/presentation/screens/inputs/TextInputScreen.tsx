import {Text, TextInput, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {globalStyles} from '../../../config/theme/theme';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {useState} from 'react';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
  });

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="TextInputScreen" safe />
      <Card>
        {/* TextInput por defecto no trae ningun estilo */}
        <TextInput
          style={globalStyles.input}
          placeholder="Nombre"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={value => setForm({...form, name: value})}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Email"
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={value => setForm({...form, email: value})}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Number phone"
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="phone-pad"
          onChangeText={value => setForm({...form, number: value})}
        />
      </Card>

      <View style={{marginVertical: 10}} />

      <Card>
        <Text>{JSON.stringify(form, null, 2)}</Text>
        <Text>{JSON.stringify(form, null, 2)}</Text>
        <Text>{JSON.stringify(form, null, 2)}</Text>
        <Text>{JSON.stringify(form, null, 2)}</Text>
      </Card>
    </CustomView>
  );
};
