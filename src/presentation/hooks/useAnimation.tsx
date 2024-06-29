import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
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

  return {
    animatedOpacity,
    animatedTop,

    fadeIn,
    fadeOut,
  };
};
