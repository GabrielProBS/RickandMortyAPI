import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {

    const [characters,setCharacters] = React.useState([]);
    useEffect(() => {
        axios
        .get('https://rickandmortyapi.com/api/character')
        .then(response => {
            setCharacters (response.data.results);
        })
        .catch(error => {
            console.error("Erro ao fazer requisição...", error);
        });
    })

    return (
        <View style = {styles.main}>
            <FlatList
                data={characters}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    )
};