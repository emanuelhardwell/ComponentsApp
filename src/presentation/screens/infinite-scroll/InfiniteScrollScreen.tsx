import {FlatList} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {colors, globalStyles} from '../../../config/theme/theme';
import {Title} from '../../components/ui/Title';
import {useState} from 'react';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const loadMoreNumbers = (): void => {
    const newArray = Array.from(
      {length: 5},
      (_, index) => numbers.length + index,
    );

    setNumbers([...numbers, ...newArray]);
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title style={{textAlign: 'center'}} text="InfiniteScrollScreen" />

      <FlatList
        data={numbers}
        renderItem={({item}) => (
          <Title
            style={{
              height: 300,
              fontSize: 200,
              color: 'white',
              textAlign: 'center',
              backgroundColor: colors.primary,
            }}
            text={item.toString()}
          />
        )}
        keyExtractor={key => key.toString()}
        onEndReached={loadMoreNumbers}
        onEndReachedThreshold={0.6}
      />
    </CustomView>
  );
};
