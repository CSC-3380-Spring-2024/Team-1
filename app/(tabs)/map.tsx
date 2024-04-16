
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';

const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {/* Add your LocalTile layer */}
  
        <UrlTile
            urlTemplate="https://api.maptiler.com/tiles/3499956a-d35c-43b0-9de0-0c91b3385332/?key=PjKvWXCShbMhKQQUKJgF#18.0/-34.60000/-58.38300"
            maximumZ={19}
          />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default App;

