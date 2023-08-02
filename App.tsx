import React, {useEffect} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import Character from './components/Character'

export default function App() {
    
    
    return (

        <ImageBackground
            source={require('./assets/background.png')}
            style={styles.backgroundImage}>
            <Character/>
        </ImageBackground>
        
    
    );
}

const styles = StyleSheet.create(
{
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        alignContent: "center",
        justifyContent: "center"
    },
    character: {
        width: 100,
        height: 100,
        alignSelf: "center"
    }
});
