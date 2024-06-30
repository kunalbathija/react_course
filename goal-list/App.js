import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View><Text>LOL Bruh</Text></View>
      <Text style={styles.text}>
        LOL 2
      </Text>
      <TextInput></TextInput>
      <Button title='HAHAHAHAHA' />
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
  text:{
    padding: 50, backgroundColor: '#a3d', color: '#fff', margin: 20, borderColor: 'blue', borderWidth: 12
  }
});
