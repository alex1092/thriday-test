import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { colors } from '@theme/colors';

import AccountsIcon from './assets/icons/AccountsIcon';
import HomeIcon from './assets/icons/HomeIcon';
import InvoiceIcon from './assets/icons/InvoiceIcon';
import PaymentsIcon from './assets/icons/PaymentsIcon';
import PieIcon from './assets/icons/PieChartIcon';
import SettingsTabIcon from './assets/icons/SettingsTabIcon';
import { AccountsScreen } from './src/screens/AccountsScreen';
import { HomeScreen } from './src/screens/HomeScreen';
import { InvoiceScreen } from './src/screens/InvoiceScreen';
import { PaymentScreen } from './src/screens/PaymentsScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { TaxScreen } from './src/screens/TaxScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarActiveTintColor: colors.primary.green,
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Accounts"
          component={AccountsScreen}
          options={{
            tabBarActiveTintColor: colors.primary.green,
            tabBarIcon: ({ color }) => <AccountsIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Payments"
          component={PaymentScreen}
          options={{
            tabBarActiveTintColor: colors.primary.green,
            tabBarIcon: ({ color }) => <PaymentsIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Invoice"
          component={InvoiceScreen}
          options={{
            tabBarActiveTintColor: colors.primary.green,
            tabBarIcon: ({ color }) => <InvoiceIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Tax"
          component={TaxScreen}
          options={{
            tabBarActiveTintColor: colors.primary.green,
            tabBarIcon: ({ color }) => <PieIcon color={color} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarActiveTintColor: colors.primary.green,
            tabBarIcon: ({ color }) => <SettingsTabIcon color={color} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
