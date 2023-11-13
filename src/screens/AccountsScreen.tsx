import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import db from '../../db.json';
import { Billboard } from '../components/Billboard';
import { CardHorizontalTransaction } from '../components/CardHorizontalTransaction';
import { Footer } from '../components/Footer';
import { Search } from '../components/Search';
import { Stepper } from '../components/Stepper';
import { Tabs } from '../components/Tabs';
import { Tag } from '../components/Tag';
import { ThridayApi } from '../types';

export const AccountsScreen = () => {
  const [apiData] = useState<ThridayApi>(db);
  const { transactions = [] } = apiData.data;

  const transactionCards = transactions?.map((transaction) => (
    <CardHorizontalTransaction
      merchantName={transaction.merchantName ?? transaction.description}
      suburb={transaction.suburb}
      amount={transaction.amount}
      shortCategory={transaction.shortCategory}
      transactionType={transaction.transactionType}
      key={transaction.id}
      logoUrl={transaction.logoUrl}
    />
  ));

  return (
    <SafeAreaView>
      <ScrollView>
        <Billboard />
        <View style={styles.stepperStyle}>
          <Stepper />
        </View>
        <Tabs />
        <Search />
        <Tag />
        {transactionCards}
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
