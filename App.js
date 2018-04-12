import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';

export default class App extends React.Component {
  render() {
    return ( 
      <View style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center'}}>
          <Header/>
          <Text>Hello World !!</Text>
      </View>
    );
  }
}
