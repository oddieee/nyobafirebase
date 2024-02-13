import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './src/config/firebaseConfig';
import { DocumentSnapshot, QuerySnapshot } from 'firebase/firestore';
import Homescreen from './src/screens/HomeScreen';
import { useEffect } from 'react';

const db = firebase.firestore();

export default function App() {
  const getMarker = async () => {
    const snapshot = await firebase.firestore().collection('users').get()
    return snapshot.docs.map(doc => console.log(doc.data()));
  }
useEffect(() => {
  console.log(getMarker())
  console.log('firebase firestore: ', db)
  
}, [])
  return (
    <View style={styles.container}>
      <Homescreen />
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
});
