import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

export default class myApp extends Component{
    constructor()
    {
        super();
        this.state = {
            name: 'Michael', 
            showName: true
        };
    }

  render()
  {
    var name = this.state.showName ? this.state.name : 'No name';
    return (
    
      <View>
        <Text>{this.state.name}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('myApp', () => myApp);
