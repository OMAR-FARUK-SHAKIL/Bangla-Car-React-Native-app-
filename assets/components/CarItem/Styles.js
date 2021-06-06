import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({ 
    
    carContainer:{
        width: '100%',
        height: '100%',
      },
      titles:{
        marginTop:'10%',
        width:'100%',
        alignItems: 'center',
      },
      title:{
        fontSize:'40px',
        fontWeight:'bold',
      },
      subTitle:{
        font:'16',
        color:'#5c5e62',
        fontWeight:'bold',
      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      }

});

export default styles;