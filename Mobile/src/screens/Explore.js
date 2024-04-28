import { StyleSheet, View, Text } from "react-native";


export default Explore = () => {
    return(
        <View style={styles.explore}>
            <Text>This is explore screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    explore: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });