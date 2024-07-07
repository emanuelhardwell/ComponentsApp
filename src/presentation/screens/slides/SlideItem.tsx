import {FC} from 'react';
import {useWindowDimensions, View, Image, Text} from 'react-native';
import {globalStyles, colors} from '../../../config/theme/theme';
import {Slide} from './data';

interface SlideItemProps {
  imageInfo: Slide;
}

export const SlideItem: FC<SlideItemProps> = ({imageInfo}) => {
  const {title, desc, img} = imageInfo;
  const {width} = useWindowDimensions();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7d2d2',
        borderRadius: 20,
        marginVertical: 55,
        padding: 40,
        width: width,
      }}>
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          //   alignSelf: 'center',
        }}
      />
      <Text style={[globalStyles.title, {color: colors.primary}]}>{title}</Text>
      <Text style={{color: colors.text, marginTop: 10}}>{desc}</Text>
    </View>
  );
};
