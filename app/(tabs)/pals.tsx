
import { Asset } from 'expo-asset';
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

const pals = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
 // const [dropdownVisible, setdropdownVisible] = useState(false);
  //const [selectedDrop, setSelectedDrop] = useState(null);

  

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
    <View style = {styles.pageBackground}>
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
        <Text style={styles.textStyle}>Close</Text>
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
    pageBackground: {
        flex: 1,
        marginBottom: 0,
        backgroundColor: '#272525',
    },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#464040',
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
    backgroundColor: '#464040'
  },
  buttonOpen: {
    backgroundColor: '#464040',
  },
  buttonClose: {
    backgroundColor: '#464040',
  },

  //color of modal text options
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  //when click upon filter, this determines the color of that container  
  container: {
        flex: 1,
        backgroundColor: 'white',
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
      buttonText: {
        fontSize: 18,
        color: 'white',
      },
      modalContainer: {
        marginTop: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
      },
      optionButton: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      optionText: {
        fontSize: 16,
      },

    });

export default pals;