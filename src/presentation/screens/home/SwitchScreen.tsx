import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {useState} from 'react';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isOnHappy: false,
    isOnHungry: false,
    isOnAngry: false,
  });

  const {isOnAngry, isOnHappy, isOnHungry} = state;

  return (
    <CustomView style={{marginTop: 20, marginHorizontal: 20}}>
      <Card>
        <CustomSwitch
          isOn={isOnHappy}
          onValueChange={value => setState({...state, isOnHappy: value})}
          text="Is Happy ?"
        />

        <CustomSwitch
          isOn={isOnHungry}
          onValueChange={value => setState({...state, isOnHungry: value})}
          text="Is Hungry ?"
        />

        <CustomSwitch
          isOn={isOnAngry}
          onValueChange={value => setState({...state, isOnAngry: value})}
          text="Is Angry ?"
        />
      </Card>
    </CustomView>
  );
};
