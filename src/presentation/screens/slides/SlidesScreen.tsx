import {FlatList, View} from 'react-native';
import {colors} from '../../../config/theme/theme';
import {items} from './data';
import {SlideItem} from './SlideItem';

export const SlidesScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        data={items}
        renderItem={({item}) => <SlideItem imageInfo={item} />}
        keyExtractor={key => key.title}
        horizontal
        pagingEnabled
        decelerationRate="fast"
        scrollEnabled={false}
      />
    </View>
  );
};
