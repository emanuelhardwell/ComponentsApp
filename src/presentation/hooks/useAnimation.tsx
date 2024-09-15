import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

interface Fade {
  toValue?: number;
  duration?: number;
  callback?: () => void;
}

export const useAnimation = () => {
  const animatedOpacity = useRef<Animated.Value>(new Animated.Value(0)).current;
  const animatedTop = useRef<Animated.Value>(new Animated.Value(0)).current;

  const fadeIn = ({toValue = 1, duration = 300, callback = () => {}}: Fade) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
  };

  const fadeOut = ({toValue = 0, duration = 300, callback = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
    // animatedTop.resetAnimation()
  };

  const startMovingTopAtBottomPosition = ({
    toValue = 0,
    duration = 700,
    easing = Easing.bounce,
    initialPosition = -150,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callback);
  };

  return {
    animatedOpacity,
    animatedTop,

    fadeIn,
    fadeOut,
    startMovingTopAtBottomPosition,
  };
};
