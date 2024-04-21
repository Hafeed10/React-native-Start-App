import React from 'react';
import {Text, StyleSheet, SafeAreaView, Button, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Example of shared style object */}
      <Text style={[styles.text, styles.green]}>Hello World! This is React Native</Text>
      <Text style={[styles.text, styles.orange]}>Hello I am Muhammed Hafeex!</Text>
      <Text style={[styles.text, styles.blue]}>Hello I am Muhammed Hafeex!</Text>
      <Text style={[styles.text, styles.red]}>Hello World! This is React Native</Text>
      <View style={styles.buttonContainer}>
        {/* Button with onPress event */}
        <Button
          onPress={() => console.warn("Hafeex: This button is working successfully")}
          title='Apply Comment'
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2d7d7',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    width: 356,
    height: 70,
    fontFamily: 'monospace',
    flexDirection: 'column',
    fontWeight: '200',
    alignItems: 'center',
    padding: 16,
    marginBottom: 10,
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  green: {
    backgroundColor: 'green',
  },
  orange: {
    backgroundColor: 'orange',
  },
  blue: {
    backgroundColor: 'blue',
  },
  red: {
    backgroundColor: 'red',
  },
  buttonContainer: {
    width: 300,
    marginTop: 10,
    padding: 10,
  },
});
