import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground, ScrollView } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import CarItem from './assets/components/CarItem';
import CarList from './assets/components/CarList/CarList';
import image from './assets/images/ModelY.jpeg';

export default function App() {
  const tagline = ' A new Innovation in Bangladesh! sell-price: 3500000 Tk';
  const name = 'Bagla Car';
  return (
 
    <View style={styles.container}>

      <Header></Header>
     {/* <CarItem name={name} tagline={tagline} image={image}></CarItem> */}
     <CarList></CarList>

      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
