import { 
    View,
    Text, 
    Image,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Linking,
  } from "react-native";
import React from 'react';
import { Stack, router, } from "expo-router";


const TopPalImage = require("./assets/PalBackground.png");
const PalSiteImage = require("./assets/VisitPalSite.png");
const PaldeckImage = require("./assets/Paldeck.png");
const BreedingImage = require("./assets/PalEggs.png");


const home = () => {
    return ( 
        <SafeAreaView style={styles.conatiner}>
            <Image
                source={TopPalImage}
                style={{
                    resizeMode: 'cover',
                    alignSelf: 'center',
                    height: 250, width: 420,
                }}
            />
            <ScrollView style={styles.scrollView}>
                
                <Stack.Screen options={{ header: () => null}} />
              
                <StatusBar backgroundColor='#272525' />
              
                <View style={styles.Rectangle1}>
                  <Image
                    source={PalSiteImage}
                    style={styles.boxImage}
                  />
                  <Text
                    style={styles.boxText}
                    onPress={() => {Linking.openURL('https://www.pocketpair.jp/palworld')}}
                  >
                    Palworld Official Site
                  </Text>
                </View>
                
                
                <View style={styles.Rectangle2}>
                  <Image
                    source={PaldeckImage}
                    style={styles.boxImage}
                  />
                  <Text
                    style={styles.boxText}
                    onPress={() => {Linking.openURL('https://store.steampowered.com/news/app/1623730/view/4013339239712681243')}}
                  >
                    Palworld Patch Notes
                  </Text>
                </View>  
                
                
                <View style={styles.Rectangle3} />
                
                
                <View style={styles.Rectangle4} />
                
                
                <View style={styles.Rectangle5} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    Rectangle1: {
      height: 150, width: 380, backgroundColor: '#464040', alignSelf: 'center',
      marginTop: 50,
      marginBottom: 50,
    },
    Rectangle2: {
      height: 150, width: 380, backgroundColor: '#464040', alignSelf: 'center', 
      marginBottom: 50, 
    },
    Rectangle3: {
      height: 150, width: 380, backgroundColor: '#464040', alignSelf: 'center', 
      marginBottom: 50, 
    },
    Rectangle4: {
      height: 150, width: 380, backgroundColor: '#464040', alignSelf: 'center', 
      marginBottom: 50, 
    },
    Rectangle5: {
      height: 150, width: 380, backgroundColor: '#464040', alignSelf: 'center', 
      marginBottom: 50,
    },
    conatiner: {
      flex: 1,
      marginBottom: 0,
    },
    scrollView: {
      backgroundColor: '#272525',
      marginHorizontal: 0,
      marginVertical: 0,
    },
    boxImage: {
      resizeMode: 'cover',
      alignSelf: 'center',
      height: 100, width: 360,
      marginTop: 10,
    },
    boxText: {
      color: 'white',
      fontSize: 25,
      paddingLeft: 10,
      paddingTop: 3,
    },
  });

export default home;