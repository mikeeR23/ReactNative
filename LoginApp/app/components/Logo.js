import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends Component{
    render()
    {
        return(
            <View style={styles.container}>
                <Image style={{width: 40, height: 70}} source={require('../images/bird1.jpg')} />
                <Text style={styles.logoText}>Welcome to my App</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1, // Sets the container to fill the whole screen
      alignItems: 'center', 
      justifyContent: 'center',
    } , 
    logoText: {
        marginVertical: 15, // Same as margin-top in css
        fontSize: 18, 
        color: 'rgba(255,255,255,0.7)',
        fontWeight: '500' 
    }
   });