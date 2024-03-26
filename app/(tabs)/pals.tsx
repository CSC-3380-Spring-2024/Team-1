import { 
    View,
    Text, 
    Image,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Linking,
    FlatList,
  } from "react-native";
import React from 'react';
import { Stack, router, } from "expo-router";


const pals = () => {
    return ( 
        <SafeAreaView style={styles.conatiner}>

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginBottom: 0,
    },
    FlatList: {
        backgroundColor: '#272525',
        marginHorizontal: 0,
        marginVertical: 0,
      },


});

export default pals;