import {useRef} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../../config/theme/theme';

export const Animation101Screen = () => {
  const animatedOpacity = useRef<Animated.Value>(new Animated.Value(0)).current;
  const animatedTop = useRef<Animated.Value>(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start(() => console.log('fadeIn finish'));

    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => console.log('fadeIn finish'));
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => animatedTop.resetAnimation());
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.boxPurple,
          {opacity: animatedOpacity, transform: [{translateY: animatedTop}]},
        ]}
      />
      <Pressable onPress={() => fadeIn()} style={{marginTop: 10}}>
        <Text>FadeIn</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut()} style={{marginTop: 10}}>
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
