import React from 'react'
import { Text, StyleSheet, View, FlatList,Dimensions } from 'react-native'
import CarItem from '../CarItem'
import cars from '../CarList/cars'
import styles from './Styles';


const CarList = () => {
    
    //const {name,image,tagline,taglineCTA} = cars;
    return (
        <View style={styles.carlist}>
            <FlatList
                data={cars}
                renderItem={(item) => <CarItem car={item}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment = {'start'}
                decelerationRate = {'fast'}
                snapToInterval = {Dimensions.get('window').height}
            /> 
           
        </View>
    );
};

export default CarList;

