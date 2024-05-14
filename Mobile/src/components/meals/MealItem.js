// Import necessary modules
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Alert, Modal, Image, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MealContext } from '../../context/mealContext';
import { FontAwesome } from '@expo/vector-icons';

const MealItem = ({ item }) => {
  // Destructure the necessary values from MealContext
  const { addToUserDiet } = useContext(MealContext);
  // State to manage the visibility of the modal
  const [modalVisible, setModalVisible] = useState(false);

  // Function to toggle the visibility of the modal
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Function to handle adding the meal to the user's diet
  const handleAddToDiet = () => {
    Alert.alert(
      'Confirm',
      `Are you sure you want to add ${item.name} to your diet?`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            addToUserDiet(item.id);
            Alert.alert('Success', `${item.name} added to your diet!`);
          },
        },
      ],
      { cancelable: false }
    );
  };

  // Return JSX
  return (
    <View style={styles.container}>
      {/* Pressable for displaying the meal description */}
      <Pressable onPress={toggleModal}>
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.macros}>
            {item.protein}g protein | {item.carbs}g carbs | {item.fats}g fat
          </Text>
          <Text style={styles.calories}>{item.calories} cal</Text>
        </View>
      </Pressable>

      {/* Pressable for adding the meal to the user's diet */}
      <Pressable onPress={handleAddToDiet}>
        <AntDesign name="pluscircleo" size={24} color="blue" />
      </Pressable>

      {/* Modal for displaying the meal description */}
<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={toggleModal}
>
  <Pressable style={styles.overlay} onPress={toggleModal}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.name} >{item.name}</Text>
        <Image source={{ uri: item.image }} style={styles.image} />
         <Text>{item.description}</Text>
        <Pressable onPress={toggleModal} style={styles.closeButton}>
        <FontAwesome name="remove" size={24} color="red" />
        </Pressable>
      </View>
    </View>
  </Pressable>
</Modal>

    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  
  container: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 17,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    marginTop: 10,
  },
  textStyle: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MealItem;
