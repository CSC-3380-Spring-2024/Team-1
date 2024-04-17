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
import React, { useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import { Link, Stack, router, } from "expo-router";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign, FontAwesome5, FontAwesome, Ionicons, Feather } from '@expo/vector-icons';


const pals = () => {
    return ( 
        <SafeAreaView style={styles.conatiner}>
            <StatusBar barStyle="light-content" backgroundColor='#3A3B3C'/>
            <Stack.Screen options={{ header: () => null}}/>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginBottom: 0,
        backgroundColor: '#272525',
    },
    filterIconPressableContainer: {
        backgroundColor: 'white',
        height: 70,
        width: 70,
        marginLeft: 10,
        marginTop: 50,
    },
});

export default pals;