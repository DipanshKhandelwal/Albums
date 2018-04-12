import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

export default class App extends React.Component {
  render() {
    return ( 
      <View>
          <Header/>
          <Text>Hello World !!</Text>
      </View>
    );
  }
}
