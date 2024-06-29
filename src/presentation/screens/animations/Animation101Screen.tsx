import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {useAnimation} from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    animatedTop,
    animatedOpacity,
    fadeIn,
    fadeOut,
    startMovingTopAtBottomPosition,
  } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.boxPurple,
          {opacity: animatedOpacity, transform: [{translateY: animatedTop}]},
        ]}
      />
      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopAtBottomPosition({initialPosition: -200});
        }}
        style={{marginTop: 10}}>
        <Text>FadeIn</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut({})} style={{marginTop: 10}}>
        <Text>FadeOut</Text>
      </Pressable>
    </View>
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
