import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import styles from "./Styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
const {name,image,tagline} = props.car.item;
console.warn(props.car.item);

  return (
    <View style={styleHere.container}>
        <ImageBackground
          source={image}
          style={styles.image}
        ></ImageBackground>


        <View style={styles.carContainer}>
          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subTitle}>
             
              {tagline}
            </Text>
          </View>
        </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content="Custom order"
          onPress={() => {
            console.warn("Custom order pressed");
          }}
        ></StyledButton>

        <StyledButton
          type="secondary"
          content="Existing order"
          onPress={() => {
            console.warn("Existing Inventory pressed");
          }}
        ></StyledButton>
        </View>
      </View>
  );
};

export default CarItem;


const styleHere = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
});




