import { StyleSheet, View, Text } from "react-native";


export default Diet = () => {
    return(
        <View style={styles.diet}>
            <Text>This is diet screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    diet: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });