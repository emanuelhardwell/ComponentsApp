import {Animated, StyleSheet} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {useAnimation} from '../../hooks/useAnimation';
import {CustomView} from '../../components/ui/CustomView';
import {Button} from '../../components/ui/Button';

export const Animation101Screen = () => {
  const {
    animatedTop,
    animatedOpacity,
    fadeIn,
    fadeOut,
    startMovingTopAtBottomPosition,
  } = useAnimation();

  return (
    <CustomView style={{...styles.container}}>
      <Animated.View
        style={[
          styles.boxPurple,
          {opacity: animatedOpacity, transform: [{translateY: animatedTop}]},
        ]}
      />
      <Button
        text="FadeIn"
        onPress={() => {
          fadeIn({});
          startMovingTopAtBottomPosition({initialPosition: -200});
        }}
        style={{marginTop: 10}}
      />
      <Button
        text="FadeOut"
        onPress={() => fadeOut({})}
        style={{marginTop: 10}}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxPurple: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
