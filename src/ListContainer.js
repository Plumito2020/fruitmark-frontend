import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import axios from "axios";

import ListItem from "./ListItem";

const ListContainer = (props) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/stock").then((resp) => {
      console.log("hhhhhhh");
      const stocks = resp.data.data;
      const data = stocks.map((s) => {
        let total = 0;
        s.stock.forEach((element) => {
          total += element.stock;
        });

       
        return {
          id: s._id,
          ville: s.ville,
          stockFruit: s.stock,
          stockTotal: total,
        };
      });
      setState(data);
    });
  }, []);

  const item = ({ item }) => (
    <ListItem
      ville={item.ville}
      stockTotal={item.stockTotal}
      stockFruit={item.stockFruit}
    />
  );

  return (
    <FlatList data={state} renderItem={item} keyExtractor={(item) => item.id} />
  );
};

export default ListContainer;
