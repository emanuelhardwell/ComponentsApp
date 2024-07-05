import {FC, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import {useAnimation} from '../../hooks/useAnimation';

interface FadeInImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage: FC<FadeInImageProps> = ({uri, style}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {animatedOpacity, fadeIn} = useAnimation();

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading && (
        <ActivityIndicator
          size={100}
          color={'orange'}
          style={{
            position: 'absolute',
          }}
        />
      )}

      <Animated.Image
        source={{uri}}
        style={[style, {opacity: animatedOpacity}]}
        onLoadEnd={() => {
          fadeIn({});
          setIsLoading(false);
        }}
      />
    </View>
  );
};
