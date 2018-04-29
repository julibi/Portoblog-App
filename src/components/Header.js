import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ headerText }) =>
  <View style={styles.view}>
    <Text style={styles.text}>{ headerText }</Text>
  </View>;

export default Header;

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  text: {
    fontSize: 20
  }
});
