import { 
    View,
    Text, 
    Image,
    StyleSheet,
    ScrollView,
    StatusBar,
    SafeAreaView,
    Linking,
    Platform,
  } from "react-native";
import React from 'react';
import { Stack, router, } from "expo-router";
import MapView, { UrlTile } from "react-native-maps";


const map = () => {
    return ( 
        <View style={styles.container}>
      <MapView
        style={styles.map}
        
      >
        <UrlTile
          urlTemplate="https://api.maptiler.com/tiles/3d55ff57-ba59-442d-8e07-e55c30a2dd7b/?key=7kzpPw2oc7jNaFZdRLyk#7.7"
          maximumZ={19}
        />
      </MapView>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});

export default map;