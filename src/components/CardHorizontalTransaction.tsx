import { colors } from '@theme/colors';
import { memo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ReceiptIcon from '../../assets/icons/ReceiptIcon';
import { Image } from 'expo-image';
import FileIcon from '../../assets/icons/FileIcon';

export type CardHorizontalTransactionProps = {
  merchantName?: string;
  suburb: string;
  amount: string;
  shortCategory: string;
  transactionType: string;
  logoUrl?: string;
};

export enum TransactionTypeEnum {
  Payment = 'PAYMENT',
  TransferIncoming = 'TRANSFER_INCOMING',
  TransferOutgoing = 'TRANSFER_OUTGOING',
}

const amountStyles = (transactionType: string, amount: string) => {
  switch (transactionType) {
    case TransactionTypeEnum.Payment:
      return <Text style={[styles.amountText, { paddingLeft: 12 }]}>-${amount}</Text>;
    case TransactionTypeEnum.TransferIncoming:
      return (
        <Text style={[styles.amountText, { color: colors.primary.green }, { paddingLeft: 12 }]}>
          +${amount}
        </Text>
      );
    case TransactionTypeEnum.TransferOutgoing:
      return <Text style={[styles.amountText, { paddingLeft: 12 }]}>-${amount}</Text>;
    default:
      return null;
  }
};

export const CardHorizontalTransaction = memo(
  ({
    suburb,
    amount,
    merchantName,
    shortCategory,
    transactionType,
    logoUrl,
  }: CardHorizontalTransactionProps) => {
    const [logoError, setLogoError] = useState(false);
    return (
      <View style={styles.container}>
        <View style={styles.logoUrlContainer}>
          {!logoError ? (
            <Image
              contentFit="cover"
              style={{ flex: 1, width: '100%', borderRadius: 6 }}
              source={logoUrl}
              onError={() => setLogoError(true)}
            />
          ) : (
            <View
              style={{
                backgroundColor: colors.primary.green,
                flex: 1,
                width: '100%',
                borderRadius: 6,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FileIcon />
            </View>
          )}
        </View>

        <View style={styles.textContainer}>
          <View style={{ flexDirection: 'row', columnGap: 4 }}>
            <Text numberOfLines={1} style={styles.vendorText}>
              {merchantName}
            </Text>
            <View>
              <ReceiptIcon />
            </View>
          </View>
          <View style={{ flexDirection: 'row', columnGap: 8 }}>
            {suburb ? (
              <>
                <Text>{suburb}</Text>
                <Text>|</Text>
              </>
            ) : null}

            <Text>{shortCategory}</Text>
          </View>
        </View>

        {amountStyles(transactionType, amount)}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: 'row',
    marginHorizontal: 16,
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.neutral.brightGrey,
    borderRadius: 8,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 20,
    columnGap: 12,
  },
  vendorText: {
    fontSize: 13,
    fontWeight: '600',
  },
  amountText: {
    textAlign: 'right',
    fontSize: 13,
    fontWeight: '600',
  },
  logoUrlContainer: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 6,
    borderColor: colors.neutral.brightGrey,
  },
  categoryText: {
    fontSize: 11,
    fontWeight: '400',
    color: colors.neutral.davysGrey,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
});
