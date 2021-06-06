import React, { Component } from "react";
import { StyleSheet, Text, View,ImageBackground } from "react-native";
import styles from "./Styles";

export default class index extends Component {
  render() {
    return (
      <View style = {styleHere.container}>
        <ImageBackground
          source={require("../../../assets/images/ModelX.jpeg")}
          style={styles.image}
        ></ImageBackground>

        <View style={styles.carContainer}>
          <View style={styles.titles}>
            <Text style={styles.title}>Bangla Car</Text>
            <Text style={styles.subTitle}>
              A new Innovation in Bangladesh! sell-price: 35'000 Tk
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styleHere = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height:'100%',
      width:'100%',
    },
   
  });
  
