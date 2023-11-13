import { colors } from '@theme/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CameraIcon from '../../assets/icons/CameraIcon';
import PayIcon from '../../assets/icons/PayIcon';
import PlusSquareIcon from '../../assets/icons/PlusSquareIcon';
import PowerIcon from '../../assets/icons/PowerIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';

type IconContainerProps = {
  children: React.ReactNode;
};

const IconContainer = ({ children }: IconContainerProps) => (
  <View style={styles.iconContainer}>{children}</View>
);

type ToolbarItemProps = {
  icon: React.ReactNode;
  label: string;
};

const ToolbarItem = ({ icon, label }: ToolbarItemProps) => (
  <View style={styles.toolbarItem}>
    <View style={styles.toolbarRowIcon}>{icon}</View>
    <Text style={styles.toolbarRowText}>{label}</Text>
  </View>
);

export const Billboard = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.textRow}>
        <View style={styles.textSection}>
          <Text style={styles.text}>Thrive Select</Text>
          <Text style={[styles.text, styles.textAmount]}>$66,720.00</Text>
        </View>
        <IconContainer>
          <SettingsIcon />
        </IconContainer>
      </View>

      {/* Account Details */}
      <View style={styles.accountDetailsRow}>
        <View style={styles.accountDetailsContainer}>
          <Text style={styles.accountDetailsText}>BSB: 123456</Text>
        </View>
        <View style={styles.accountDetailsContainer}>
          <Text style={styles.accountDetailsText}>Account Number: 123456789</Text>
        </View>
      </View>

      {/* Toolbar */}
      <View style={styles.toolbarRowContainer}>
        {toolbarItems.map((item, index) => (
          <ToolbarItem key={index} {...item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    paddingTop: 20,
    paddingBottom: 24,
    paddingHorizontal: 24,
    borderRadius: 16,
    backgroundColor: colors.primary.darkGreen,
  },
  text: {
    color: colors.neutral.white,
    fontSize: 13,
  },
  textAmount: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 2,
  },
  textSection: {
    flexDirection: 'column',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    backgroundColor: colors.neutral.white + 10,
    fontSize: 24,
    borderRadius: 64,
    width: 32,
    height: 32,
  },
  accountDetailsRow: {
    width: '100%',
    paddingTop: 11,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    paddingBottom: 8,
  },
  accountDetailsText: {
    fontSize: 11,
    color: colors.neutral.white,
  },
  accountDetailsContainer: {
    backgroundColor: colors.neutral.white + 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 11,
    paddingTop: 8,
    paddingBottom: 7,
  },
  toolbarRowContainer: {
    paddingTop: 16,
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  toolbarItem: {
    width: 64,
    paddingTop: 13,
    paddingBottom: 11,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.neutral.white + 10,
    borderRadius: 8,
  },
  toolbarRowText: {
    textAlign: 'center',
    color: colors.neutral.white,
    fontWeight: '400',
    fontSize: 11,
  },
  toolbarRowIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 7,
  },
});

const toolbarItems = [
  { icon: <CameraIcon />, label: 'Add\nReceipts' },
  { icon: <PayIcon />, label: 'Make\nPayment' },
  { icon: <PlusSquareIcon />, label: 'Add\nFunds' },
  { icon: <PowerIcon />, label: 'Activate\nCard' },
];
