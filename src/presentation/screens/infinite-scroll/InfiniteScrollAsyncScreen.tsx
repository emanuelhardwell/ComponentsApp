import {ActivityIndicator, FlatList, View} from 'react-native';
import {Title} from '../../components/ui/Title';
import {FC, useState} from 'react';
import {FadeInImage} from '../../components/ui/FadeInImage';
import { CustomView } from '../../components/ui/CustomView';

export const InfiniteScrollAsyncScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const loadMoreNumbers = (): void => {
    const newArray = Array.from(
      {length: 5},
      (_, index) => numbers.length + index,
    );

    setNumbers([...numbers, ...newArray]);
  };

  return (
    <CustomView>
      <Title style={{textAlign: 'center'}} text="InfiniteScrollAsyncScreen" />

      <FlatList
        data={numbers}
        renderItem={({item}) => <RenderItem number={item} />}
        keyExtractor={key => key.toString()}
        onEndReached={loadMoreNumbers}
        onEndReachedThreshold={0.6}
        ListFooterComponent={<FooterComponent />}
      />
    </CustomView>
  );
};

interface RenderItemProps {
  number: number;
}

const RenderItem: FC<RenderItemProps> = ({number}) => {
  return (
    <View>
      {/* <Image
        source={{uri: `https://picsum.photos/id/${number}/200/300`}}
        style={{height: 400, width: '100%'}}
      /> */}
      <FadeInImage
        uri={`https://picsum.photos/id/${number}/200/300`}
        style={{height: 400, width: '100%'}}
      />
    </View>
  );
};

export const FooterComponent = () => {
  return (
    <View style={{height: 200, justifyContent: 'center'}}>
      <ActivityIndicator size={100} color={'green'} />
    </View>
  );
};
