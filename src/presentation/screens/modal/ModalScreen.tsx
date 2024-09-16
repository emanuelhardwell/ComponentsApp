import {Modal, Text, View, Platform} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {globalStyles} from '../../../config/theme/theme';
import {Title} from '../../components/ui/Title';
import {Button} from '../../components/ui/Button';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {bottom} = useSafeAreaInsets();

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title style={{textAlign: 'center'}} text="ModalScreen" safe />

      <Button text="Show Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}}>
          <Title
            style={{textAlign: 'center', color: 'green'}}
            text="Title modal"
          />
          <Text style={{marginVertical: 10, marginHorizontal: 15}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            voluptatibus tempora iusto, cupiditate sunt omnis eum laborum
            doloribus, quos fugit ipsum, nemo ab? Suscipit repellendus nostrum
            hic minus adipisci aperiam quas unde atque esse magni laudantium
            aliquid doloribus est illum earum tempora perferendis, harum
            similique beatae necessitatibus facere et accusantium. Aliquam
            voluptates expedita aut quod illo architecto quo saepe minus
            deleniti omnis fugit, debitis vero odio? Hic officiis aspernatur
            facilis aperiam earum ratione. Sunt odit provident et corporis
            corrupti. Assumenda qui aut explicabo rem amet odit? Consequatur
            pariatur tenetur nostrum nulla dolores dolorum similique iure, illum
            neque. Laboriosam, perferendis minima?
          </Text>

          <View style={{flex: 1}} />

          <Button
            style={{
              borderRadius: 0,
              bottom: Platform.OS === 'ios' ? bottom : 0,
            }}
            text="Hide Modal"
            onPress={() => setIsVisible(false)}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
