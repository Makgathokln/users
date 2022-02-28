import React from "react";
import Splash from "./splash";
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LottieView from "lottie-react-native";
import { StatusBar } from 'expo-status-bar';

const Splash = ({navigation}) =>{

    setTimeout(()=>{
        navigation.replace('reviewform');
    },4000);

return (
<SafeAreaView>
<StatusBar backgroundColor="#0225A1" barStyle="light-content"/>
<View style={{flex:1, justifyContent:'center'}}>

    <LottieView style={{width:40, height:40}}>

        
    </LottieView>

</View>
</SafeAreaView>
)

}

export default Splash