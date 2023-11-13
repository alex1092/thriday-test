import { colors } from '@theme/colors';
import { useState, useCallback, memo } from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

import ExpenseIcon from '../../assets/icons/ExpensesIcon';
import IncomeIcon from '../../assets/icons/IncomeIcon';

const tagValues = [
  {
    label: 'All',
    icon: null,
  },
  {
    label: 'Income',
    icon: <IncomeIcon />,
  },
  {
    label: 'Expense',
    icon: <ExpenseIcon />,
  },
];

export const Tag = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePress = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <View style={styles.container}>
      {tagValues.map((tag, index) => (
        <Pressable
          key={index}
          onPress={() => handlePress(index)}
          style={[
            index === activeIndex ? styles.activeButtonStyle : styles.inactiveButtonStyles,
            styles.buttonStyle,
          ]}>
          <Text
            style={[
              tag.icon ? { marginRight: 6 } : { marginRight: 0 },
              index === activeIndex ? styles.activeTextStyle : styles.inactiveTextStyle,
            ]}>
            {tag.label}
          </Text>
          {tag.icon ?? <View>{tag.icon}</View>}
        </Pressable>
      ))}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    gap: 12,
  },
  buttonStyle: {
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  activeButtonStyle: {
    backgroundColor: colors.primary.green,
    borderColor: colors.primary.green,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  inactiveButtonStyles: {
    borderWidth: 1,
    borderColor: colors.neutral.borderColorWhite,
  },
  activeTextStyle: {
    color: colors.neutral.white,
    fontSize: 13,
  },
  inactiveTextStyle: {
    fontSize: 13,
  },
});
