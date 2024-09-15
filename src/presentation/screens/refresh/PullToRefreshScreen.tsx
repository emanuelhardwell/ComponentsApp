import {Platform, RefreshControl, ScrollView} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {globalStyles} from '../../../config/theme/theme';
import {Title} from '../../components/ui/Title';
import {useContext, useState} from 'react';
import {ThemeContext} from '../../context/ThemeContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const {top} = useSafeAreaInsets();
  const {colors} = useContext(ThemeContext);

  const onRefresh = (): void => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
    }, 5000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, 'red', 'orange', 'green', 'yellow']}
          onRefresh={onRefresh}
          progressBackgroundColor={colors.cardBackground}
          tintColor={colors.primary} // solo funciona en ios
        />
      }
      style={[
        Platform.OS === 'ios'
          ? {
              ...globalStyles.mainContainer,
              ...globalStyles.globalMargin,
              backgroundColor: colors.background,
            }
          : {
              backgroundColor: colors.background,
            },
      ]}>
      {Platform.OS === 'ios' ? (
        <Title text="PullToRefreshScreen" safe />
      ) : (
        <CustomView style={globalStyles.globalMargin}>
          <Title text="PullToRefreshScreen" safe />
        </CustomView>
      )}
    </ScrollView>
  );
};
