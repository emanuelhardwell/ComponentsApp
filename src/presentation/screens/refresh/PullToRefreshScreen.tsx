import {Platform, RefreshControl, ScrollView} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {colors, globalStyles} from '../../../config/theme/theme';
import {Title} from '../../components/ui/Title';
import {useState} from 'react';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const onRefresh = (): void => {
    setTimeout(() => {
      setIsRefreshing(true);
    }, 3000);
    setIsRefreshing(false);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={10}
          colors={[colors.primary, 'red', 'orange', 'green', 'yellow']}
          onRefresh={onRefresh}
        />
      }
      style={[
        Platform.OS === 'ios' && {
          ...globalStyles.mainContainer,
          ...globalStyles.globalMargin,
        },
      ]}>
      {Platform.OS === 'ios' ? (
        <Title text="PullToRefreshScreen" safe />
      ) : (
        <CustomView style={globalStyles.globalMargin}>
          <Title text="PullToRefreshScreen" safe style={{color: 'orange'}} />
        </CustomView>
      )}
    </ScrollView>
  );
};
