import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { data } from './src/components/data';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View>{ data.map((picture, idx) => <Image key={idx} style={ styles.image } source={ picture.image } /> ) }</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width,
    height: height / 3,
  }
});