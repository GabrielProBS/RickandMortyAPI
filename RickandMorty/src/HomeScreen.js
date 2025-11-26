import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
    onPress={() => navigation.navigate('Details', { character: item })} 
    style={styles.card}
    >
      <Image source={{ uri: item.image }} 
      style={styles.avatar} 
      />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <FlatList
        data={characters}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

// ESTILIZAÇÕES DA TELA DE HOMESCREEN
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c9d487ff'
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#37703fff'
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10 
  },

  name: {
    fontSize: 18,
    fontFamily: 'monospace'
  }
});

export default HomeScreen;