import { colors } from '@theme/colors';
import { View, Text, StyleSheet } from 'react-native';

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>
        Team Thrive Pty Ltd ABN 15 637 676 496 (Thriday) is an authorised representative of Regional
        Australia Bank ABN 21 087 650 360  AFSL 241167 (Regional Australia Bank).
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    paddingHorizontal: 16,
  },
  textStyles: {
    color: colors.neutral.davysGrey,
    fontSize: 11,
    fontWeight: '400',
    alignSelf: 'stretch',
  },
});
