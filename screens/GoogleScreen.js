import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Linking, Text } from 'react-native';

export default class GoogleScreen extends React.Component {
    render() {
        return (
            <View style={{backgroundColor:"lightgreen",height:1000}}>
                <Text style={styles.txt}>Want to open Google?</Text>
                
                <Text style={styles.txt}>Click on the LOGO</Text>
                
                <TouchableOpacity onPress={()=>{Linking.openURL('https://www.google.com')}}>
                    <Image style={styles.img} source={require('../assets/glogo.png')} />
                    <Image style={styles.text }source={require('../assets/google.png')}/>
                </TouchableOpacity>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    img: {
        alignSelf: "center",
        width: 250,
        height: 250,
        marginTop: 100,
        borderRadius: 30
    },
    text: {
        width: 305,
        height: 100,
        marginTop: 50,
        alignSelf: "center"
    },
    txt: {
        textAlign: "center",
        marginTop:50,
        fontWeight: "bold",
        fontSize: 25
    }
})