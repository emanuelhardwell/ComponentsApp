import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {globalStyles} from '../../../config/theme/theme';
import {Title} from '../../components/ui/Title';
import {Card} from '../../components/ui/Card';
import {useState} from 'react';
import {CustomTextInput} from '../../components/ui/CustomTextInput';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: '',
  });

  /*  Si tenemos un input hasta abajo y necesitamos escribir en el, agregaremos
   un ScrollView para que se vea mientras escribimos con el teclado */

  // En IOS no funciona igual que android, es por eso que necesitamos envolverlo en un KeyboardAvoidingView

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView style={globalStyles.globalMargin}>
          <Title text="TextInputScreen" safe />
          <Card>
            <CustomTextInput
              placeholder="Nombre"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />

            <CustomTextInput
              placeholder="Email"
              autoCapitalize="words"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({...form, email: value})}
            />

            <CustomTextInput
              placeholder="Number phone"
              autoCapitalize="words"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, number: value})}
            />
          </Card>

          <View style={{marginVertical: 10}} />

          <Card>
            <Title
              style={{fontSize: 16, fontWeight: 'ultralight'}}
              text={JSON.stringify(form, null, 2)}
            />
            <Title
              style={{fontSize: 16, fontWeight: 'ultralight'}}
              text={JSON.stringify(form, null, 2)}
            />
            <Title
              style={{fontSize: 16, fontWeight: 'ultralight'}}
              text={JSON.stringify(form, null, 2)}
            />
            <Title
              style={{fontSize: 16, fontWeight: 'ultralight'}}
              text={JSON.stringify(form, null, 2)}
            />
          </Card>

          <View style={{marginVertical: 5}} />

          <Card>
            <CustomTextInput
              placeholder="Number phone"
              autoCapitalize="words"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, number: value})}
            />
          </Card>
        </CustomView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
