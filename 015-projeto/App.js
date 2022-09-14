import { StatusBar } from 'expo-status-bar';
import  React, {useEffect, useState, Component} from "react";
import { StyleSheet, Text, View, Button, Modal, Pressable, Icon } from 'react-native';
import { Provider, Appbar, Avatar, TextInput} from 'react-native-paper';

export default function App(){
  const [firstName, setFirstNameText] = React.useState(null);
  const [lastName, setLastNameText] = React.useState(null);
  const [email, setEmailText] = React.useState(null);
  const [password, setPasswordText] = React.useState(null);
  const [count,setCount] = useState(0)
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.labelText} placeholder="nome" onChangeText={value=>setFirstNameText(value)}></TextInput>
      <TextInput style={styles.labelText} placeholder="ultimo nome" onChangeText={value=>setLastNameText(value)}></TextInput>
      <TextInput style={styles.labelText} placeholder="email" onChangeText={value=>setEmailText(value)}></TextInput>
      <TextInput style={styles.labelText} placeholder="senha" onChangeText={value=>setPasswordText(value)}></TextInput>
     <Button title="clique" onPress={()=>setCount(count+1)}>
      Clique
     </Button>
     <Text>{count}
      {firstName}
      {lastName}
      {email}
      {}
     </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText:{
    margintop:10,
    marginBotton:5,
   
  },
});
