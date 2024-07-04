import {SectionList, Text, useWindowDimensions} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {heroes} from './data';
import {Separator} from '../../components/ui/Separator';
import {Card} from '../../components/ui/Card';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const CustomSectionListScreen = () => {
  const {height} = useWindowDimensions();
  const {top} = useSafeAreaInsets();

  return (
    <CustomView style={{...globalStyles.globalMargin, marginBottom: 10}}>
      <Title text="CustomSectionListScreen" safe />
      <Card>
        <SectionList
          sections={heroes}
          renderItem={({item}) => <Text> {item} </Text>}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          // ItemSeparatorComponent={Separator}
          renderSectionHeader={({section: {title}}) => (
            <Title style={{color: 'blue', fontSize: 16}} text={title} />
          )}
          stickySectionHeadersEnabled
          SectionSeparatorComponent={Separator}
          ListHeaderComponent={<Title style={{color: 'green'}} text="Comics" />}
          ListFooterComponent={
            <Title
              style={{color: 'blue', fontSize: 16}}
              text={`N° de secciones ${heroes?.length}`}
            />
          }
          style={{height: height - top - 100}}
        />
      </Card>
    </CustomView>
  );
};
