import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ListContainer from "./ListContainer";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Fruitmark</Text>
      <Button
        onPress={() => navigation.navigate("Transferer")}
        title="Transferer"
        color="#841584"
        
      />
      <ListContainer />

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appTitle: {
    fontSize: 35,
    textAlign: "center",
    marginVertical: 8,
  },
});

export default HomeScreen;
