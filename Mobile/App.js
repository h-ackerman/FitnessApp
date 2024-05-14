import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import MealContextProvider from './src/context/mealContext';


export default function App() {
  return (
    
    <SafeAreaProvider>
      <MealContextProvider>
      <BottomTabNavigator />
      </MealContextProvider>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
