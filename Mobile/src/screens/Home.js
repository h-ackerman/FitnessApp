import { StyleSheet, View, Text } from "react-native";


export default Home = () => {
    return(
        <View style={styles.home}>
            <Text>This is home screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });