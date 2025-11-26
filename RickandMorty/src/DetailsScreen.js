import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.div}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <Text style={styles.name}>{character.name}</Text>
      <Text style={styles.text}>Status: {character.status}</Text>
      <Text style={styles.text}>Espécie: {character.species}</Text>
      <Text style={styles.text}>Gênero: {character.gender}</Text>
      <Text style={styles.text}>Origem: {character.origin.name}</Text>
      <Text style={styles.text}>Local atual: {character.location.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    padding: 20, 
    backgroundColor: '#c9d487ff'
  },
  div: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#37703fff'
  },
  image: { 
    width: 200, 
    height: 200, 
    borderRadius: 100, 
    marginBottom: 20 
  },
  name: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 10, 
    fontFamily: 'monospace'
  },
  text: {
    fontFamily: 'monospace',
    fontSize: 16,
    marginBottom: 5
  }
});

export default DetailsScreen;