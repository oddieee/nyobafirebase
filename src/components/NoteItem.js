import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NoteItem = ({ note, onDelete }) => {
    return (
        <TouchableOpacity onPress={() => onDelete(note.id)}>
            <View style={styles.container}>
                <Text style={styles.text}>{note.text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
    },
});

export default NoteItem;