import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Logo from '../components/Logo'
import Form from '../components/Form'

export default class Login extends Component
{ 
  render()
  {
    return(
    
      <View style={styles.container}>
        <Logo/>
        <Form/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet? Signup</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor : '#455a64', 
      flexGrow: 1, // Sets the container to fill the whole screen
      alignItems: 'center', // aligns the items in the center of the page (width)
      justifyContent: 'center', // Sets items in center (height)
    } , 
    signupTextCont: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center', 
    }, 
    signupText: {
      color: 'rgba(255,255,255,0.7)', 
      fontSize: 18, 
      
    }
   });

