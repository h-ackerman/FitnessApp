import { StyleSheet, View, Text } from "react-native";


export default Activities = () => {
    return(
        <View style={styles.activities}>
            <Text>This is activities screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    activities: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });