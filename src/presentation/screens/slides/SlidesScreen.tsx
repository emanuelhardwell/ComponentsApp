import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';

import {items} from './data';
import {SlideItem} from './SlideItem';
import {Button} from '../../components/ui/Button';
import {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {CustomView} from '../../components/ui/CustomView';

export const SlidesScreen = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);

  const navigation = useNavigation();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    setSlideIndex(currentIndex > 0 ? currentIndex : 0);
  };

  const scrollAtNextSlide = (indexSlide: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({animated: true, index: indexSlide});
  };

  return (
    <CustomView style={{flex: 1}}>
      <FlatList
        data={items}
        renderItem={({item}) => <SlideItem imageInfo={item} />}
        keyExtractor={key => key.title}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        scrollEnabled={false}
        onScroll={event => onScroll(event)}
        ref={flatListRef}
      />

      {items.length - 1 === slideIndex ? (
        <Button
          text="Finalizar"
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', bottom: 60, right: 20}}
        />
      ) : (
        <Button
          text="Siguiente"
          onPress={() => scrollAtNextSlide(slideIndex + 1)}
          style={{position: 'absolute', bottom: 60, right: 20}}
        />
      )}
    </CustomView>
  );
};
