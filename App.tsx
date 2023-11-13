import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Billboard } from './src/components/Billboard';
import Stepper from './src/components/Stepper';
import { Tabs } from './src/components/Tabs';

export default function App() {
  return (
    <SafeAreaView>
      <Billboard />
      <View style={styles.stepperStyle}>
        <Stepper />
      </View>

      <Tabs />
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
