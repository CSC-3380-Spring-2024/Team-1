import * as FileSystem from 'expo-file-system';
//import SQLite from 'expo-sqlite';
import * as sqlite from 'expo-sqlite';
import { Asset } from 'expo-asset';
//import * as SQLite from 'expo-sqlite';
import { MockData } from './MockData';
import { 
    View,
    Pressable,
    Text, 
    Alert,
    Modal,
    Image,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView, 
    Linking,
    FlatList,
  } from 'react-native';
import React, {useState} from 'react';
import { Stack, router, } from "expo-router";
import { NavigationContainer } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
//sqLlite instructions
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('db');

module.exports = defaultConfig;
//sqlite instructions
/**const db = SQLite.openDatabase('dbName', version);

const readOnly = true;
await db.transactionAsync(async tx => {
  const result = await tx.executeSqlAsync('SELECT COUNT(*) FROM USERS', []);
  console.log('Count:', result.rows[0]['COUNT(*)']);
}, readOnly);

async function openDatabase(pathToDatabaseFile: string): Promise<SQLite.WebSQLDatabase> {
  if (!(await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'SQLite')).exists) {
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'SQLite');
  }
  const asset = await Asset.fromModule(require(pathToDatabaseFile)).downloadAsync();
  await FileSystem.copyAsync({
    from: asset.localUri,
    to: FileSystem.documentDirectory + 'SQLite/myDatabaseName.db',
  });
  return SQLite.openDatabase('myDatabaseName.db');
}
//
*/
const pals = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  
  //trying to get this to work
  const handleSearch = (searchValue: string) => {
    setSearch(searchValue)
    const filtered = MockData.filter(pal => pal.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredData(filteredData);
  }; 
    
  
  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    setModalVisible(true);
  }
  const renderModalContent = () => {
    switch (selectedOption) {
        case 'DeckNumber' : 
        return <DeckNumberPage />;
        case 'Role' : 
        return <RolePage />;
        case 'Element' : 
        return <ElementPage />;
        case 'Alphabetical' : 
        return <AlphabeticalPage />;
    default:
        return null;
  }
};
  return (
      <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
      <View style={styles.centeredView}>
      <View style={styles.modalView}>
            {renderModalContent()}
        <Pressable
        style = {[styles.button, styles.buttonClose]}
        onPress = {() => setModalVisible(!modalVisible)}>
        <Text style={styles.textStyle}>Close Modal</Text>
        </Pressable>
      </View>
      </View>
      </Modal>
        <Pressable
        style = {[styles.button, styles.buttonOpen]}
        onPress={() => handleOptionPress("DeckNumber")}>
            <Text style = {styles.textStyle}>DeckNumber</Text>
        </Pressable>
        <Pressable
        style = {[styles.button, styles.buttonOpen]}
        onPress={() => handleOptionPress("Role")}>
            <Text style = {styles.textStyle}>Role</Text>
        </Pressable>
        <Pressable
        style = {[styles.button, styles.buttonOpen]}
        onPress={() => handleOptionPress("Element")}>
            <Text style = {styles.textStyle}>Element</Text>
        </Pressable>
        <Pressable
        style = {[styles.button, styles.buttonOpen]}
        onPress={() => handleOptionPress("Alphabetical")}>
            <Text style = {styles.textStyle}>Alphabetical</Text>
         </Pressable>
        </View>
     
  );
};



const DeckNumberPage = () => {
    //list the pals in DeckNumberOrder
   const numberSort = MockData.sort((a,b) => a.DeckNumber - b.DeckNumber);
   return (
    <SafeAreaView style = {styles.container}>
      <ScrollView contentContainerStyle ={styles.scrollView}>


          {numberSort.map((pal) => (
            <Text key = {pal.DeckNumber} style = {styles.item}>
                {`${pal.DeckNumber}, ${pal.name}, ${pal.element}, ${pal.role}`}
            </Text>
          ))}
      </ScrollView>
      </SafeAreaView>
   );  
};
    
  
    const ElementPage = () => {
    //list the pals in element order
    const elementSort = MockData.slice().sort((a, b) => {
      if (a.element !== b.element){
        return a.element.localeCompare(b.element);
      }
      return a.name.localeCompare(b.name);
    });
    const listElements = () => {
      return elementSort.map((pal, DeckNumber) => (
        <Text key = {DeckNumber}> {`${pal.element}. ${pal.name}, ${DeckNumber + 1}, ${pal.role}`}</Text>
      ));
    };
    return (
      <SafeAreaView style = {styles.container}>
        <ScrollView>
          {listElements()}
        </ScrollView>
      </SafeAreaView>
    );
  };
    
    const RolePage = () => {
    //list the pals in their roles
    const roleSort = MockData.slice().sort((a, b) => {
      if (a.element !== b.element){
        return a.element.localeCompare(b.element);
      }
      return a.name.localeCompare(b.name);
    });
    const listRoles = () => {
      return roleSort.map((pal, DeckNumber) => (
        <Text key = {pal.DeckNumber}> {`${pal.role}, ${pal.name}, ${pal.element}, ${DeckNumber + 1}`}</Text>
      ));
    };
    return (
      <SafeAreaView style = {styles.container}>
        <ScrollView>
          {listRoles()}
        </ScrollView>
      </SafeAreaView>
    );
    
    };
    const AlphabeticalPage = () => {
    //list the pals from A-Z
    const letterSort = MockData.slice().sort((a, b) => {
      const firstLetterA = a.name[0];
      const firstLetterB = b.name[0];

      if (firstLetterA !== firstLetterB) {
        return firstLetterA.localeCompare(firstLetterB);
      }
      else {
        const firstTwoA = a.name.substring(0,2);
        const firstTwoB = b.name.substring(0, 2);
        return firstTwoA.localeCompare(firstTwoB);
      }
    
    });
    const listLetter = () => {
      return letterSort.map((pal, DeckNumber) => (
        <Text key = {DeckNumber}> {`${pal.name}, ${DeckNumber + 1}, ${pal.element}, ${pal.role}`}</Text>
      ));
    };
    return (
      <SafeAreaView style ={styles.container}>
        <ScrollView>
          {listLetter()}
        </ScrollView>
      </SafeAreaView>
    );
  };
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  dropdownButton: {
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#F194FF',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        paddingVertical: 20,
      },
    item: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },

    });

export default pals;