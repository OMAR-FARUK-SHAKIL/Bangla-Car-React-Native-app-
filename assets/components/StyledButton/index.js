import React from 'react'
import { Text, StyleSheet, View ,Pressable} from 'react-native'
import styles from './styles';


const StyledButton = (props) => {
    const {type,content,onPress} = props;
    const backgroundColor = type === 'primary'?'black' : 'white';
    const textColor = type === 'primary'?'white' : 'black';


    return (
        <View style = {styles.container}>
        <Pressable
         style={[styles.button , {backgroundColor:backgroundColor}]}
         onPress={()=>{
             console.warn('Ki somossa?');
         }}
        >
            <Text style={[styles.buttonText,{color:textColor}]}>Custom Order</Text>
        </Pressable>
     </View>
    );
};

export default StyledButton;
