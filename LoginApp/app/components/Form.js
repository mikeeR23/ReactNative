import React, {Component} from 'react';
import {StyleSheet, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Text} from 'react-native';

    // TouchableOpacity = button
    // TextInput = input field

export default class Form extends Component{
    render()
    {
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox} placeholder='Email' 
                    placeholderTextColor="#ffffff"/> 
                <TextInput style={styles.inputBoxPassword} placeholder='Password' 
                    placeholderTextColor="#ffffff"/> 

                <TouchableOpacity style={styles.loginButton}> 
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1, // Sets the container to fill the whole screen
      alignItems: 'center', 
      justifyContent :'center', 
    } , 
    inputBox: { // Email input field
        width:250,
        height:35,
        backgroundColor: 'rgba(255 , 255 , 255 , 0.3)',
        paddingHorizontal: 15,
        borderRadius: 25,
        marginBottom: 25, 
        marginTop:300,  
    }, 
    inputBoxPassword: {
        width:250,
        height:35,
        backgroundColor: 'rgba(255 , 255 , 255 , 0.3)',
        paddingHorizontal: 15,
        borderRadius: 25, 
        marginBottom: 25, 
    }, 
    loginButtonText: {
        fontSize: 16, 
        fontWeight: '500', 
        color: '#ffffff',
        textAlign: 'center',  
    },
    loginButton: {
        width:250, 
        height:30,
        backgroundColor: '#1c313a', 
        borderRadius: 25,  
        marginBottom: 300,
        paddingVertical: 3, 
    }, 
    
   });