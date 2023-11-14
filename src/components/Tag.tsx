import { colors } from '@theme/colors';
import { useCallback, memo } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

import ExpenseIcon from '../../assets/icons/ExpensesIcon';
import IncomeIcon from '../../assets/icons/IncomeIcon';

const TagButtonValues = [
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
type TagProps = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export const TagButton = memo(({ setActiveIndex, activeIndex }: TagProps) => {
  const handlePress = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  return (
    <View style={styles.container}>
      {TagButtonValues.map((tag, index) => (
        <TouchableOpacity
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
        </TouchableOpacity>
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
    marginBottom: 32,
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
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  inactiveButtonStyles: {
    borderWidth: 2,
    borderColor: colors.neutral.brightGrey,
  },
  activeTextStyle: {
    color: colors.neutral.white,
    fontSize: 13,
  },
  inactiveTextStyle: {
    fontSize: 13,
  },
});
