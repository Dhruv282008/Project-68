import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Linking, Text } from 'react-native';

export default class InstagramScreen extends React.Component {
    render() {
        return (
            <View style={{backgroundColor:"lightgreen",height:1000}}>
                <Text style={styles.txt}>Want to open Google?</Text>
                
                <Text style={styles.txt}>Click on the LOGO</Text>

                <TouchableOpacity onPress={() => { Linking.openURL('https://www.instagram.com/') }}>
                    <Image source={require("../assets/insta.jpg")} style={styles.img} />
                    <Image source={require("../assets/instatxt.png")} style={styles.text }/>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    img: {
        alignSelf: "center",
        width: 200,
        height: 200,
        marginTop: 100,
        borderRadius: 30
    },
    text: {
        width: 165,
        height: 50,
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