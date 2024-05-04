import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, SafeAreaView, Image, Pressable } from 'react-native';
import { Data } from './Data';
import { StackNavigationProp } from '@react-navigation/stack';
import { Stack } from 'expo-router';
type PalsScreenProps = {
  navigation: StackNavigationProp<any>;
};

const pals = () => {
  const PalsScreen = ({ navigation }: PalsScreenProps) => {
   
    };
  const [searchQuery, setSearchQuery] = useState('');//search state
  const [filteredPals, setFilteredPals] = useState(Data);//filtered pals state
  const [sortingOrder, setSortingOrder] = useState('random'); //default sorting order

  //handles Search
  const handleSearch = (text: string) => {
    const filtered = Data.filter((pal) =>
      pal.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPals(filtered); //updates filtered pal state
    setSearchQuery(text);
  };
//sorts once called on
  const sortPals = () => {
    switch (sortingOrder) {
      case 'alphabetical':
        return Data.slice().sort((a, b) => a.name.localeCompare(b.name));
      case 'deckNumber':
        return Data.slice().sort((a, b) => a.DeckNumber - b.DeckNumber);
      case 'element':
        return Data.slice().sort((a, b) => a.element.localeCompare(b.element));
      case 'role':
        return Data.slice().sort((a, b) => a.role.localeCompare(b.role));
      default:
        // Random order
        return Data.slice().sort(() => Math.random() - 0.5);
    }
  };

  const handleFilter = (order: string) => {
    setSortingOrder(order);
    const sorted = sortPals();
    setFilteredPals(sorted);
  };

  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ header: () => null}}/>
        <TextInput 
            style={styles.text}
            placeholder="Search Pals By Name"
            placeholderTextColor = 'white'
            onChangeText={handleSearch}
            value={searchQuery}
        />
        <View style={styles.filterButtons}>
            <Pressable style={styles.filterButton} onPress={() => handleFilter('alphabetical')}>
            <Text style={styles.sortText}>Sort by Name</Text>
            </Pressable>
            <Pressable style={styles.filterButton} onPress={() => handleFilter('deckNumber')}>
            <Text style={styles.sortText}>Sort by Deck Number</Text>
            </Pressable>
            <Pressable style={styles.filterButton} onPress={() => handleFilter('element')}>
            <Text style={styles.sortText}>Sort by Element</Text>
            </Pressable>
            <Pressable style={styles.filterButton} onPress={() => handleFilter('role')}>
            <Text style={styles.sortText}>Sort by Role</Text>
            </Pressable>
        </View>
        <FlatList
            data={filteredPals}
            keyExtractor={(item) => item.DeckNumber.toString()}
            renderItem={({ item }) => (
            <View style={styles.palContainer}> 
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                <Text style={styles.text}> {`${item.name}, ${item.DeckNumber}, ${item.element}, ${item.role}`}</Text>
            </View>
            )}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#272525', //background of pal page
  },
  searchBar: {
    height: 40,
    borderColor: 'white',
    backgroundColor: '##272525',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: { //handles pal's picture
    width: 50, 
    height: 50,
    marginRight: 10, 
    borderRadius: 25, 
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginBottom: 16,
    marginTop: 30,
  },
  filterButtons: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: '#3A3B3C',
    padding: 10,
    borderRadius: 5,
  },
  palContainer: { //each pal has it's own container shown in the filters
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  sortText: 
  {
    color: 'white',
  },
});

export default pals;