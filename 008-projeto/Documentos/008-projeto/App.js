import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

class App extends Component { //"extends Component" esta usando caracteristicas de outra classe, como se a Classe App fosse uma extensão da Classe Component.
  state = {
    count: 0, //state(estado) definido com count(contador) definido como 0(zero)
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1, //pega o estado do click mais 1 incrementadno apos o click
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>You Clicked {this.state.count} times</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
});

export default App;
