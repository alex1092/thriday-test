import { colors } from '@theme/colors';
import { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TabBarProps = {
  label: string;
};

type TabBarItemsProps = TabBarProps & {
  active: boolean;
};

const tabBarItems: TabBarItemsProps[] = [
  {
    label: 'Transactions',
    active: true,
  },
  {
    label: 'Statements',
    active: false,
  },
  {
    label: 'Receipts',
    active: false,
  },
];

export const Tabs = () => {
  const activeIndex = tabBarItems.findIndex((item) => item.active);
  const renderedItems = useMemo(
    () =>
      tabBarItems.map((item, index) => (
        <View
          style={index === activeIndex ? styles.activeTabBarContainer : undefined}
          key={item.label}>
          <Text
            style={[
              styles.tabBarText,
              index === activeIndex ? styles.activeTabBarText : undefined,
            ]}>
            {item.label.toUpperCase()}
          </Text>
        </View>
      )),
    [activeIndex],
  );

  return <View style={styles.tabBarContainer}>{renderedItems}</View>;
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  tabBarText: {
    paddingVertical: 9,
    paddingHorizontal: 16,
    fontWeight: '700',
    color: colors.neutral.chineseBlack + 60,
  },
  activeTabBarContainer: {
    borderRadius: 8,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomColor: colors.primary.green,
    backgroundColor: colors.primary.lightGreen,
    borderBottomWidth: 2,
  },
  activeTabBarText: {
    color: colors.neutral.chineseBlack,
    fontWeight: '700',
  },
});
