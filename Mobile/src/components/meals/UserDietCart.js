import React, { useContext, useEffect } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import { MealContext } from '../../context/mealContext';
import UserDietItem from './UserDietItem';

export default function UserDietCart() {
  const { userDiet, loadUserMeals, sortedUserDiet, setSortedUserDiet } = useContext(MealContext);

  useEffect(() => {
    loadUserMeals; // Call loadUserMeals when UserDietCart mounts
  }, []); // Add loadUserMeals to the dependency array

  useEffect(() => {
    sortUserDietByType(); // Call sortUserDietByType when userDiet changes
  }, [userDiet]); // Add userDiet and sortUserDietByType to the dependency array

  const sortUserDietByType = () => {
    const sortedDiet = userDiet.reduce((acc, item) => {
      const type = item.meal.type;
      acc[type] = acc[type] || [];
      acc[type].push(item);
      return acc;
    }, {});

    // Convert the object back to an array of objects
    const sortedDietArray = Object.keys(sortedDiet).map(type => ({
      title: type,
      data: sortedDiet[type].sort((a, b) => a.meal.name.localeCompare(b.meal.name))
    }));

    setSortedUserDiet(sortedDietArray); // Update sortedUserDiet
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedUserDiet}
        renderItem={({ item }) => (
          <>
            <Text style={styles.sectionHeader}>{item.title}</Text>
            <FlatList
              data={item.data}
              renderItem={({ item }) => <UserDietItem item={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
