import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Card } from 'react-native-paper';
import { MealContext } from '../../context/mealContext';
import { Alert } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

const UserDietItem = ({ item }) => {
  const { userDiet, removeFromUserDiet, loadUserMeals } = useContext(MealContext);

  const handleRemoveFromDiet = () => {
    Alert.alert(
      'Confirm',
      `Are you sure you want to remove ${item.meal.name} from your diet?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            removeFromUserDiet(item.id);
            Alert.alert('Success', `${item.meal.name} removed from your diet!`);
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <Card style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.meal.name}</Text>
          <Image source={{ uri: item.meal.image }} style={styles.image} />
          <Text style={styles.macros}>{item.meal.description} </Text>
          <Text style={styles.calories}>{item.meal.calories} cal</Text>
        </View>
        <Pressable onPress={handleRemoveFromDiet} style={styles.button}>
          <FontAwesome name="remove" size={24} color="black" />
        </Pressable>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 7,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items horizontally
  },
  textContainer: {
    flex: 1, // Make the text container flex to take remaining space
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  macros: {
    fontSize: 14,
    color: 'gray',
  },
  calories: {
    fontSize: 15,
    color: 'red',
  },
  image: {
    width: 70,
    height: 70,
  },
  button: {
    padding: 10, // Add padding to the button for better touch area
  },
});

export default UserDietItem;
