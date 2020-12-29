import axios from "axios";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import RNPickerSelect from "react-native-picker-select";

const TransferScreen = () => {
  const [state, setState] = useState({
    src: "",
    dest: "",
    fruit: "",
    qte: "",
  });

  const [error , setError] =useState("");

  const validateForm = ()=>{
    for (const key in state) {
      if (state[key] === "") {
        setError("Veuillez remplir tout les champs !");
        return false;
      }
    }
    if (state.src === state.dest) {
      setError("Veuillez sélectionner 2 villes différentes !");
        return false;
    }
    // let patt = new RegExp('^[0-9]');
    // let res = patt.test(val);
    // if (res === false) {
    //   setError("Le champs quantité est invalide !");
    //   return false;
    // }
    
    setError("");
    setState({
      qte: "",
    })
    return true ;
  }
  const transferer = ()=>{
    if (validateForm()) {
      axios.post("http://localhost:5000/transfer" , state).then((resp)=>console.log(resp));
    }
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.span}>Ville source</Text>
      <RNPickerSelect
        value ={state.src}
        onValueChange={(value) => {
          setState({ ...state, src: value });
        }}
        items={[
          { label: "Marseille", value: "Marseille" },
          { label: "Paris", value: "Paris" },
          { label: "Dijon", value: "Dijon" },
          { label: "Nice", value: "Nice" },
          { label: "Lille", value: "Lille" },
        ]}
      />
      <Text style={styles.span}>Ville destination</Text>
      <RNPickerSelect
        value ={state.dest}
        onValueChange={(value) => {
          setState({ ...state, dest: value });
        }}
        items={[
          { label: "Marseille", value: "Marseille" },
          { label: "Paris", value: "Paris" },
          { label: "Dijon", value: "Dijon" },
          { label: "Nice", value: "Nice" },
          { label: "Lille", value: "Lille" },
        ]}
      />
      <Text style={styles.span}>Fruit à transférer</Text>
      <RNPickerSelect
        value ={state.fruit}
        onValueChange={(value) => {
          setState({ ...state, fruit: value });
        }}
        items={[
          { label: "Orange", value: "Orange" },
          { label: "Banane", value: "Banane" },
          { label: "Pomme", value: "Pomme" },
          { label: "Fraise", value: "Fraise" },
          { label: "Cerise", value: "Cerise" },
        ]}
      />
      <Text style={styles.span}>Quantité</Text>
      <TextInput
      style={{ height : 20 ,borderColor: 'black', borderWidth: 1 , marginVertical: 5}}
       
        keyboardType="numeric"
        onChangeText={(value) => {
          setState({ ...state, qte: parseInt(value) });
        }}
        value={state.qte}
      />
      <Button
        
        onPress={transferer}
        title="Transferer"
        color="#841584"
      />
      <Text style={{color : "red" , textAlign : "center" , marginVertical : 8}}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  span: {
    fontSize: 15,
    marginVertical: 8,
  },

  picker: {
    height: 40,
  },
});

export default TransferScreen;
