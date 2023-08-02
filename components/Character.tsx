import {Image, StyleSheet} from "react-native";
import {Component} from "react";

export default class Character extends Component{
    render() {
        return <Image
            source={require('../assets/character.png')}
            style={styles.character}
        ></Image>
    }
        
    
}


const styles = StyleSheet.create(
    {
        character: {
            width: 100,
            height: 100,
            alignSelf: "center"
        }
    });
