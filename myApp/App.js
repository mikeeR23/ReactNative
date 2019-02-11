/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


/*
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome </Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';

import Component1 from './app/components/Component1/Component1'

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue', 
    fontWeight: 'bold', 
    fontSize: 30, 
  }, 
  red: {
    color:'red', 
  }, 
  firstBox: {
    flex: 1,
    width:50, 
  height: 50,
    backgroundColor: 'powderblue'
  }, 
  secondBox: {
    flex: 1,
    width:50, 
    height: 50,
    backgroundColor: 'skyblue'
  }, 
  thirdBox: {
    flex: 1,
    width:50, 
    height: 50,
    backgroundColor: 'red'
  }, 
});
export default class myApp extends Component{
  render()
  {
    var pic = {
      uri: 'https://www.pexels.com/photo/scenic-view-of-beach-248797/'
    };
    return (
      
      <View style={{alignItems: 'center', flex: 1, flexDirection: 'column'}}>
        <Image source={pic} style={{width: 190, height: 110}}/>
        <Blink  text='I love to blinlk'/>
        <Blink  text = 'Blinking is great' />
        <Text style={styles.red}>Hello</Text>
        <Text style={styles.bigBlue}>Hello agin</Text>
        <Text style={[styles.red, styles.bigBlue]}>Combining the two..</Text>
        <Text style={[styles.bigBlue, styles.red]}>Order matters apparently</Text>
        <View style={styles.firstBox}></View>
        <View style={styles.secondBox}></View>
        <View style={styles.thirdBox}></View>
      </View>
    );
  }
}

class Blink extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => (
      this.setState(previousState => (
        {isShowingText: !previousState.isShowingText}
      ))
    ), 1000);
  }
  render()
  {
    if(!this.state.isShowingText)
    {
      return null;
    }
    return (
      <Text>{this.props.text}</Text>
    )
  }
}

AppRegistry.registerComponent('myApp', () => myApp);
