import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container1}>
      <Text>Visão Inicial</Text>
        <View style={styles.container2}>
          <Text>Primeiro</Text>
            <View style={styles.container3}>
              <Text>Segundo</Text>
            </View>
        </View>
        <Image source={require('./assets/saturno.png')}/>
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#962',
    height: 120,
    width:100,
    margin: 5,
  },
  container2: {
    backgroundColor: 'red',
    margin: 5,
  },
  container3: {
    backgroundColor: 'green',
    margin: 5, 
  },
  
});
