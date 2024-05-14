import { StyleSheet, View, Text, Pressable } from "react-native";
import MealItemsList from "../components/meals/MealItemsList";
import UserDietCart from "../components/meals/UserDietCart";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default Diet = ({ navigation }) => {
    const navigateToUserDietCart = () => {
        navigation.navigate('UserDietCart');
    };

    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Meals List" 
                component={MealItemsList}
                options={{
                    headerRight: () => (
                        <Pressable onPress={navigateToUserDietCart}>
                
                            <Text style={{ marginRight: 10 }}>User Diet Cart</Text>
                        </Pressable>
                         ),
                         headerLeft: () => (
                            <AntDesign name="bells" size={24} color="black" />
                        ),
                    
                    
                    
                }}
            />
            <Stack.Screen name="UserDietCart" component={UserDietCart} />
        </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    diet: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
});
