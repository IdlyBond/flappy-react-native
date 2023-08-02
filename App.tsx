import React, {useEffect} from 'react'
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

export default function App() {
    return (

        <ImageBackground
            source={require('./assets/background.png')}
            style={styles.backgroundImage}>
            <Image
                source={require('../assets/character.png')}
                style={styles.character}
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
