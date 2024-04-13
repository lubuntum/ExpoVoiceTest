import { Button, StyleSheet, TextInput, TouchableOpacity, View, Text, Image } from "react-native"
import {SvgUri} from "react-native-svg"
import { VolumeUp } from "../assets"
import { useState } from "react"
import * as Speech from 'expo-speech'
export default function TTSComponent (){
    const [speechState, setSpeechState] = useState(true)
    const [inputValue, setInputValue] = useState("")
    const onPress = (text)=>{
        setSpeechState(!speechState)
        Speech.speak(inputValue, {language: 'en-US',
                                pitch: 0.9, rate: 1.1})
        Speech.speak(inputValue, {language: 'en-US',
                                 onDone: handleSpeechDone,
                                pitch: 2, rate: 0.8})
        
    }
    const handleSpeechDone = () => {
        setSpeechState(true)
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}
                placeholder="Введите текст и я скажу его!"
                multiline numberOfLines={2} 
                onChangeText={text=>setInputValue(text)}/>
            <TouchableOpacity style={[styles.speechBtn, {backgroundColor: speechState ? "#007bff" : "#28a745"}]} onPress={onPress}>
                <VolumeUp/>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10, 
        justifyContent:'center',
        alignItems:"center"
    },
    speechBtn:{
        width:64,
        height:64,
        backgroundColor: '#2196F3',
        justifyContent:"center",
        alignItems:"center",
        padding:22,
        borderRadius:180,

    },
    speechBtnText:{
        color:"white"
    },
    textInput:{
        marginBottom:25,
        fontSize:18,
        borderWidth:2,
        borderColor:"#007bff",
        borderRadius:5,
        padding:7
    }
})
