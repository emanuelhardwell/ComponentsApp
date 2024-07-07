import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {useState} from 'react';
import {Separator} from '../../components/ui/Separator';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isOnHappy: false,
    isOnHungry: false,
    isOnAngry: false,
  });

  const {isOnAngry, isOnHappy, isOnHungry} = state;

  return (
    <CustomView style={{paddingTop: 20, paddingHorizontal: 20}}>
      <Card>
        <CustomSwitch
          isOn={isOnHappy}
          onValueChange={value => setState({...state, isOnHappy: value})}
          text="Is Happy ?"
        />
        <Separator />

        <CustomSwitch
          isOn={isOnHungry}
          onValueChange={value => setState({...state, isOnHungry: value})}
          text="Is Hungry ?"
        />
        <Separator />

        <CustomSwitch
          isOn={isOnAngry}
          onValueChange={value => setState({...state, isOnAngry: value})}
          text="Is Angry ?"
        />
        <Separator />
      </Card>
    </CustomView>
  );
};
