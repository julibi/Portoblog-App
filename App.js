import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native';
import Header from './src/components/Header';
import EntryList from './src/components/EntryList';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header headerText={'ENTRIES'} />
        <EntryList />
      </View>
    );
  }
}
