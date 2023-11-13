import { colors } from '@theme/colors';
import { useState } from 'react';
import { View, Pressable, StyleSheet, TextInput } from 'react-native';

import FilterIcon from '../../assets/icons/FilterIcon';
import SearchIcon from '../../assets/icons/SearchIcon';

export const Search = () => {
  const [inputText, onChangeInputText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchIcon}>
          <SearchIcon />
        </View>
        <TextInput
          style={styles.searchBarTextInput}
          onChangeText={onChangeInputText}
          value={inputText}
          placeholderTextColor={colors.neutral.coolGrey}
          placeholder="Name, amount, category or date"
        />
      </View>

      <Pressable style={styles.filterIconContainer}>
        <FilterIcon />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  searchBarContainer: {
    flex: 1,
    marginRight: 12,
    flexDirection: 'row',
    backgroundColor: '#C5D0DB30',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomColor: colors.neutral.coolGrey,
    borderBottomWidth: 1,
  },
  filterIconContainer: {
    minHeight: 56,
    minWidth: 56,
    padding: 10,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: colors.primary.green,
  },
  searchBarTextInput: {
    paddingVertical: 18,
    marginLeft: 10,
  },
  searchIcon: {
    paddingLeft: 10,

    paddingVertical: 18,
  },
});
