import React, { useState } from 'react';
import { View, Image, StyleSheet, SafeAreaView, Dimensions, ScrollView, StatusBar } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Stack } from 'expo-router';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Define your options and corresponding image paths
const optionImageMap: Record<string, any> = {
  'Bosses': require('./assets/palmaps/palmap_bosses.png'),
  'Enemy Camps': require('./assets/palmaps/palmap_camp.png'),
  'Dungeons': require('./assets/palmaps/palmap_dungeons.png'),
  'Fast Travel': require('./assets/palmaps/palmap_fasttravel.png'),
  'Merchants': require('./assets/palmaps/palmap_merchant.png'),
  'Memos': require('./assets/palmaps/palmap_note.png'),
  'Skill Fruits': require('./assets/palmaps/palmap_npc.png'),
  'Syndicate Towers': require('./assets/palmaps/palmap_tower.png'),
};
const options = Object.keys(optionImageMap);

const App = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor='#3A3B3C'/>
      <Stack.Screen options={{ header: () => null}}/>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem, index) => setSelectedOption(options[index])}
        buttonTextAfterSelection={(selectedItem) => selectedItem}
        rowTextForSelection={(item) => item}
        buttonStyle={styles.dropdownButton}
        dropdownStyle={styles.dropdown}
      />
      <View style={styles.imageContainer}>
        {selectedOption && (
          <ScrollView
            maximumZoomScale={2} // Adjust these values as needed
            minimumZoomScale={1}
            contentContainerStyle={styles.scrollViewContent}
            horizontal={true}
          >
            <Image 
              source={optionImageMap[selectedOption]} 
              style={[styles.image, { minHeight: windowHeight * 0.8, minWidth: windowWidth * 0.8}]} 
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButton: {
    width: 200,
    height: 40,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  dropdown: {
    width: 200,
    borderRadius: 5,
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    minWidth: windowWidth,
    minHeight: windowHeight,
  },
});

export default App;