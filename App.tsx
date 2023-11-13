import { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Billboard } from './src/components/Billboard';
import { Footer } from './src/components/Footer';
import { Search } from './src/components/Search';
import { Stepper } from './src/components/Stepper';
import { Tabs } from './src/components/Tabs';
import { Tag } from './src/components/Tag';

export default function App() {
  return (
    <SafeAreaView>
      <Billboard />
      <View style={styles.stepperStyle}>
        <Stepper />
      </View>

      <Tabs />

      <Search />

      <Tag />

      {/* <Footer /> */}
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
