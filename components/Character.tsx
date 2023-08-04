import {Image} from "react-native";
import React from "react";
import {styles} from "../styles";


export const Character = (position) => {
    return (<Image
        source={require('../assets/character.png')}
        style={[styles.character, {top: position}]}
    ></Image>)
}