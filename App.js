import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [nro1, setNro1] = useState(0);
  const [nro2, setNro2] = useState(0);

  const [tulos, setTulos] = useState(nro1 + nro2);

  const plussaa = () => {setTulos(nro1 + nro2)};
  const miinusta = () => {setTulos(nro1-nro2)};


  return (
    <View style={styles.container}>

      <Text style={{marginBottom: 20}}>Result: {tulos}</Text>

      <TextInput 
      keyboardType='numeric' 
      style={styles.input}
      onChangeText={arvo1 => setNro1(Number(arvo1))}value={nro1} 
      />

      <TextInput 
      keyboardType='numeric' 
      style={styles.input}
      onChangeText={arvo2 => setNro2(Number(arvo2))}value={nro2}       
      />

      <View style={{flexDirection: 'row', marginTop : 20 }}>

        <Button onPress={plussaa} title=" + "></Button>
        <Button onPress={miinusta} title=" - "></Button>

      </View>

      
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
  input: {
    width : 100,
    borderWidth : 2,
    borderColor : 'black',    
  },
});
