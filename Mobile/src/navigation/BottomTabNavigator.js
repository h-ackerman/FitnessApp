import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Ionicons, MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons'; // Corrected import
import Home from '../screens/Home';
import Diet from '../screens/Diet';
import Activities from '../screens/Activities';
import Explore from '../screens/Explore';

const Tab = createMaterialBottomTabNavigator();

export default BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home' || route.name === 'Explore') {
              iconName = route.name === 'Home' ? (focused ? 'home' : 'home-outline') : (focused ? 'compass' : 'compass-outline');
              return <Ionicons name={iconName} size={24} color={color} />;
          
            } else if (route.name === 'Diet') {
              iconName = focused ? 'food-apple' : 'food-apple-outline';
              return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
            } else if (route.name === 'Activities') {
              iconName = focused ? 'sports-martial-arts' : 'sports-martial-arts';              
              return <MaterialIcons name={iconName} size={24} color={color} />; 
             }
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Diet" component={Diet} />
        <Tab.Screen name="Activities" component={Activities} />
        <Tab.Screen name="Explore" component={Explore} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
