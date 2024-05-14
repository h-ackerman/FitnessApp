import { StyleSheet, Text, View, SectionList } from 'react-native';
import MealItem from './MealItem';
import { sortMealItems } from '../../utils/mealUtils';
import { fetchMealItems } from '../../services/mealService/getMeal';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';

export default MealItemsList = () => {

  const [mealItems, setMealItems] = useState([]);

//getting the data from the server
useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await fetchMealItems(); // Fetch meal items using the service function
      const sortedItems = sortMealItems(data); // Assuming sortMealItems is defined in this file
      setMealItems(sortedItems);
    } catch (error) {
      console.error("Error fetching meal items:", error);
      // Handle error
    }
  };

  fetchData();
}, []);



  return (
    <View style={styles.container}>
      <SectionList
        sections={mealItems}
        renderItem={({item}) => <MealItem item={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        keyExtractor={(item, index) => item.id.toString()}
        contentContainerStyle={{paddingVertical: 10}}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    padding: 5,
  },
});
