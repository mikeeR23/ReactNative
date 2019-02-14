/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */



import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, StatusBar} from 'react-native';
import Login from './app/pages/Login'

const styles = StyleSheet.create({
 container: {
   backgroundColor : '#455a64', 
   flex: 1, // Sets the container to fill the whole screen
   alignItems: 'center', // aligns the items in the center of the page (width)
   justifyContent: 'center', // Sets items in center (height)
 } , 
});

export default class myApp extends Component
{
  
  render()
  {
    return(
    
      <View style={styles.container}>
        <StatusBar // Status bar goes at the very top of the app
          backgroundColor="#1c313a"
          barStyle="light-content" // Make it so where text in the status bar is white. dark-content will turn it black
        />
        <Login />
      </View>
    );
  }
}
 