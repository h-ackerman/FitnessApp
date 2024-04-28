import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import Home from '../screens/Home';
import Diet from '../screens/Diet';
import Activities from '../screens/Activities';
import Explore from '../screens/Explore';


const Tab = createMaterialBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Diet" component={Diet} />
          <Tab.Screen name="Activities" component={Activities} />
          <Tab.Screen name="Explore" component={Explore} />
        </Tab.Navigator>
      </NavigationContainer>
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
