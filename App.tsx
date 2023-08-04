import React, {useEffect, useRef, useState} from 'react'
import {
    View,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
import {styles} from "./styles";
import {Character} from "./components/Character";
import {GameBackground} from "./components/GameBackground";

export default function App() 
{
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
            <GameBackground>
                <View pointerEvents={'none'}>
                    <Character 
                        position={characterPosition} 
                    />
                </View>
            </GameBackground>
        </TouchableWithoutFeedback>
    );
}