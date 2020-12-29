import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListItem = (props) => {
  const stockFruit = props.stockFruit.map((fruit) => {
    return (
      <Text style={styles.stockFruit} key={fruit.nom + fruit.stock}>
        {fruit.nom} x {fruit.stock}{" "}
      </Text>
    );
  });

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{props.ville}</Text>
      <Text style={styles.stockTotal}>Stock total : {props.stockTotal}</Text>
      <View
        style={{
          borderBottomColor: "#841584",
          borderBottomWidth: 1,
          marginVertical: 8,
        }}
      />
      {stockFruit}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    alignSelf: "stretch",
  },
  title: {
    fontSize: 18,
    fontWeight : "bold",
    color: "#841584",
  },
  stockTotal: {
    fontSize: 18,
    color: "#841584",
  },
  stockFruit: {
    fontSize: 15,
    color: "black",
  },
});

export default ListItem;
