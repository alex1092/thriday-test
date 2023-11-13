import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';

import db from './db.json';
import { Billboard } from './src/components/Billboard';
import { CardHorizontalTransaction } from './src/components/CardHorizontalTransaction';
import { Footer } from './src/components/Footer';
import { Search } from './src/components/Search';
import { Stepper } from './src/components/Stepper';
import { Tabs } from './src/components/Tabs';
import { Tag } from './src/components/Tag';
import { ThridayApi } from './src/types';

export default function App() {
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
}

const styles = StyleSheet.create({
  stepperStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 19,
  },
});
