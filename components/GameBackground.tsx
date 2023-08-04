import {styles} from "../styles";
import {ImageBackground, View} from "react-native";
import {Character} from "./Character";
import React from "react";


export const GameBackground = (children) => {
    return (
        <ImageBackground
            source={require('../assets/background.png')}
            style={styles.backgroundImage}>
            <View>children</View>
        </ImageBackground>)
}