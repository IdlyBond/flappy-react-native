import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image, Dimensions} from 'react-native';
export default function App() {


    const [characterPosition, setCharacterPosition] =  useState(0)
    
    useEffect(() => {
        let pos = 0
        setCharacterPosition(0)
        const interval =  setInterval(() => {
            pos += 1;
            if (pos >= Dimensions.get('window').height / 2) {
                pos = 0;
            }
            setCharacterPosition(pos);
            console.log("New Iteration " + pos)
        }, 30)
        return () => clearInterval(interval);
    }, [])
    return (
        <ImageBackground
            source={require('./assets/background.png')}
            style={styles.backgroundImage}>
            <Image
                source={require('./assets/character.png')}
                style={[styles.character, {top: characterPosition}]}
            ></Image>
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
