import React, {useEffect, useRef, useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
export default function App() {
    const backgroundImage = require('./assets/background.png');

    const [characterPosition, setCharacterPosition] =  useState(0);
    
    const onButtonPressRef = useRef(null);
    
    useEffect(() => 
    {
        const isOutOfWindow = function () 
        {
            return pos >= (Dimensions.get('window').height / 2);
        }
        
        const reset = function () 
        {
            pos = 0;
            gravity = 0.45;
            force = 0;
        }

        const jump = function ()
        {
            force = -10;
        }
        
        setCharacterPosition(0)
        onButtonPressRef.current = jump;

        let pos;
        let force;
        let gravity;
        
        reset()
        
        const interval =  setInterval(() => 
        {
            force += gravity;
            pos += force;
            setCharacterPosition(pos);
            
            if (isOutOfWindow())
            {
                reset();
            }
        }, 30)
        
        return () => clearInterval(interval);
    }, [])
    
    
    
    return (
        <TouchableWithoutFeedback
        style={styles.touchBackground}
        onPress={onButtonPressRef.current}>
            <ImageBackground
                source={backgroundImage}
                style={styles.backgroundImage}>
                <View pointerEvents={'none'}>
                    <Image
                        source={require('./assets/character.png')}
                        style={[styles.character, {top: characterPosition}]}
                    ></Image>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
            
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
    },
    touchBackground: {
        flex: 1,
        resizeMode: "cover",
        alignContent: "center",
        justifyContent: "center",
    },
});
