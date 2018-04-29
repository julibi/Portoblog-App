import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { data } from './data';
import EntryDetail from './EntryDetail';

export default class EntryList extends Component {
  state = {
    data
  };

  renderEntries() {
    return this.state.data.map(entry => <EntryDetail key={entry.id} entry={entry} /> );
  }

  render() {
    return (
      <ScrollView>{this.renderEntries()}</ScrollView>
    );
  }
}
