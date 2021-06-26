import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import faceBookScreen from './screens/faceBookScreen'
import InstagramScreen from './screens/InstagramScreen'
import GoogleScreen from './screens/GoogleScreen'
export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  FACEBOOK: {screen: faceBookScreen},
  INSTAGRAM: { screen: InstagramScreen },
  GOOGLE: {screen: GoogleScreen}
})

const AppContainer = createAppContainer(TabNavigator)