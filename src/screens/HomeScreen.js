import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, FlatList} from 'react-native';
import firebase from "../config/firebaseConfig";

const db = firebase.firestore()
const Homescreen = () =>{
    const [note, setNote] = useState('');
    const [notes,setNotes]= useState([]);
    
    useEffect(()=>{
        const unsubscribe = db.collection('notes').onSnapshot(snapshot=>{
            const fetchedNotes = snapshot.docs.map(doc=>({
                id:doc.id,
                ...doc.data()
            }));
            setNotes(fetchedNotes);
        });

        return () => unsubscribe();
    }, []);

    const addNote=()=>{
        db.collection('notes').add({text:note});
        setNote('');
    };

    const deleteNote = id =>{
        db.collection('notes').doc(id).delete();
    };

    const getNote = async () => {
        const snapshot = await firebase.firestore().collection('users').get()
        return snapshot.docs.map(doc => console.log(doc.data()));
      }

    return(
        <View>
            <TextInput
            placeholder='Enter note'
            value={note}
            onChangeText={setNote}
            />
            <Button title="Add Note" onPress={addNote} />
            <FlatList
            data={notes}
            renderItem={({item})=>(
                <Text onPress={() => deleteNote(item.id)}> {item.text}</Text>
            )}
            keyExtractor={item=>item.id}
            />
        </View>
    );
};

export default Homescreen;
