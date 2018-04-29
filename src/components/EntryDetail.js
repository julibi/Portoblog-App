import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import Card from './lib/Card';
import CardSection from './lib/CardSection';

const { width, height } = Dimensions.get('window');

const EntryDetail = ({entry}) => {
  return(
    <Card>
      <CardSection>
        <View>
          <Text style={styles.titleStyle}>{entry.title}</Text>
        </View>
        <View>
          <Text style={{padding: 5}}>{entry.date}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={entry.image} style={styles.imageStyle} />
      </CardSection>
      { entry.text && <CardSection>
        <View style={styles.textWrapper}>
          <Text>{entry.text}</Text>
        </View>
      </CardSection> }
    </Card>
  ); 
};

const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: '600',
    fontSize: 18,
    padding: 2
  },
  imageStyle: {
    flex: 1,
    height: 300
  },
  textWrapper: {
    padding: 10
  }
});

export default EntryDetail;