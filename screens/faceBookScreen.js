import React from 'react';
import { TouchableOpacity, View, Image, Linking, StyleSheet, Text } from 'react-native';


export default class faceBookScreen extends React.Component {
    render() {
        return (
            <View style={{backgroundColor:"lightgreen",height:1000}}>
                <Text style={styles.txt}>Want to open FaceBook?</Text>
                <Text style={styles.txt}>Click on the LOGO</Text>
                <TouchableOpacity onPress={() => { Linking.openURL('https://www.facebook.com') }} >
                    <Image style={styles.fb} source={require('../assets/Facebook-logo.png')} />              
                    <Image style={styles.text}source={require('../assets/fb.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fb: {
        alignSelf: "center",
        width: 300,
        height: 200,
        marginTop: 100,
        borderRadius: 30,
        
    },
    text: {
        alignSelf: "center",
        width: 300,
        height: 100
    },
    txt: {
        textAlign: "center",
        marginTop:50,
        fontWeight: "bold",
        fontSize: 25
    }})