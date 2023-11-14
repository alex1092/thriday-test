import { useMemo, useState } from 'react';
import { Text, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import db from '../../db.json';
import { Billboard } from '../components/Billboard';
import { CardHorizontalTransaction } from '../components/CardHorizontalTransaction';
import { Footer } from '../components/Footer';
import { Search } from '../components/Search';
import { Stepper } from '../components/Stepper';
import { Tabs } from '../components/Tabs';
import { TagButton } from '../components/Tag';
import { ThridayApi, TransactionTypeEnum, TransactionsEntity } from '../types';

type GroupedTransactions = {
  [date: string]: TransactionsEntity[] | undefined;
};

export const AccountsScreen = () => {
  const [apiData] = useState<ThridayApi>(db);
  const { transactions = [] } = apiData.data;

  const [activeIndex, setActiveIndex] = useState(0);

  /**
   * Returns the correct transactions to display based on the active index.
   * If the active index is 0, returns all transactions.
   * If the active index is 1, returns only incoming transfer transactions.
   * Otherwise, returns only payment and outgoing transfer transactions.
   * @returns An array of transactions to display.
   */
  const getCorrectTransactionsToDisplay = useMemo(() => {
    if (activeIndex === 0) {
      return transactions;
    } else if (activeIndex === 1) {
      return transactions?.filter(
        (transaction) => transaction.transactionType === TransactionTypeEnum.TransferIncoming,
      );
    }
    return transactions?.filter(
      (transaction) =>
        transaction.transactionType === TransactionTypeEnum.Payment ||
        transaction.transactionType === TransactionTypeEnum.TransferOutgoing,
    );
  }, [transactions, activeIndex]);

  /**
   * Groups transactions by date
   * @returns {Object} An object containing transactions grouped by date
   */
  const groupTransactionsByDate = useMemo(() => {
    const groupedByDateTransactions = getCorrectTransactionsToDisplay?.reduce(
      (acc: GroupedTransactions, transaction: TransactionsEntity) => {
        const date = transaction.date;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date]?.push(transaction);
        return acc;
      },
      {},
    );
    return groupedByDateTransactions;
  }, [transactions, activeIndex]);

  const TransactionList = useMemo(() => {
    if (!groupTransactionsByDate) {
      return <Text>No Transaction Found</Text>;
    } else {
      return (
        <>
          {Object.keys(groupTransactionsByDate)?.map((date, index) => (
            <View
              key={index}
              style={{
                marginBottom: 32,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  paddingLeft: 16,
                  paddingBottom: 12,
                }}>
                {date}
              </Text>

              {groupTransactionsByDate[date]?.map((transaction: TransactionsEntity) => (
                <CardHorizontalTransaction
                  merchantName={transaction.merchantName ?? transaction.description}
                  suburb={transaction.suburb}
                  amount={transaction.amount}
                  shortCategory={transaction.shortCategory}
                  transactionType={transaction.transactionType}
                  logoUrl={transaction.logoUrl}
                  key={transaction.id}
                />
              ))}
            </View>
          ))}
        </>
      );
    }
  }, [groupTransactionsByDate, activeIndex]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Billboard />
        <View style={styles.stepperStyle}>
          <Stepper />
        </View>
        <Tabs />
        <Search />
        <TagButton activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        {TransactionList}

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stepperStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 19,
  },
});
