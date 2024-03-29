import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Login from "./Login";

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('Login');
        },3000)
    },[]);
  return (
    <View style = {styles.container}>
      <Text style= {styles.logo}>TCE FC-APP</Text>
    </View>
  );
};

export default Splash;
 
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        fontSize:20,
        fontWeight: '800',
        color: 'red',
    },
});