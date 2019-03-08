import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './components/FetchLocation'

export default class App extends React.Component {
  getUserLocationHandler = () => {
    console.log('Pressed the button');
  }

  render() {
    return (
      <View style={styles.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler}/>
        <Text>hello World</Text>
        <Text>i don't know this language</Text>
        <Text>Git commit test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
