import { 
    View,
    Text, 
    Image,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Linking,
    Button,
    Pressable,
    FlatList,
  } from "react-native";
import React, { useEffect, useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import { Link, Stack, router, } from "expo-router";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign, FontAwesome5, FontAwesome, Ionicons, Feather } from '@expo/vector-icons';
import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

interface Pal {
    label: any;
    value: any;
}

const db = SQLite.openDatabase('PalDeckv2.db');

const PalInfoDropdown = () => {
  const [pals, setPals] = useState<Pal[]>([]);
  const [selectedPal, setSelectedPal] = useState<Pal | null>(null);

  useEffect(() => {
    loadDB();
    loadPalsFromDatabase();
  }, []);

  const loadDB = async () => {
    if (!(await FileSystem.getInfoAsync('file://Palpedia')).exists) {
      await FileSystem.makeDirectoryAsync('file://Palpedia');
    }
    await FileSystem.downloadAsync('file://app/(tabs)/PalDeckv2.db', 'file://Palpedia/app');
  };

  const loadPalsFromDatabase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM data',
        [],
        (_, { rows }) => {
          const palsArray: Pal[] = rows._array.map((row: any) => ({
            label: row.Name,
            value: `Type 1: ${row['Type 1']}, Type 2: ${row['Type 2']}`, // change to display whatever needed
          }));
          setPals(palsArray);
        },
        (_, error) => {
          console.error('Error fetching pals:', error);
          return true;
        }
      );
    });
  };

  const onSelectPal = (label: string) => {
    // Find the selected pal by label
    const selectedPal = pals.find((pal) => pal.label === label);
    if (selectedPal) {
      setSelectedPal(selectedPal);
    } else {
      console.error('Invalid label:', label);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Pal-Pedia</Text>
      <SelectDropdown
        data={pals.map((pal) => pal.label)}
        onSelect={onSelectPal}
        defaultButtonText="Select a Pal"
        buttonTextAfterSelection={(selectedItem, index) => pals[index].label}
        buttonStyle={styles.dropdownButton}
        buttonTextStyle={styles.dropdownButtonText}
        dropdownStyle={styles.dropdown}
        search
      />
      {selectedPal && (
        <View style={styles.itemInfoContainer}>
          <Text style={styles.itemInfoText}>{selectedPal.value}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#272525',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  dropdownButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  itemInfoContainer: {
    marginTop: 20,
  },
  itemInfoText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default PalInfoDropdown;