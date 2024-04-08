import { Text, View, StyleSheet} from "react-native";
import React from 'react';
import MapboxGL from '@rnmapbox/maps';


MapboxGL.setAccessToken('pk.eyJ1IjoiamFja3Rob21hczIzMyIsImEiOiJjbHVvb2ZjanIxZGczMmpwb2QzNGltemhtIn0.fEp2Gn2u1vYHMl31PHT2wg');
MapboxGL.setAccessToken('sk.eyJ1IjoiamFja3Rob21hczIzMyIsImEiOiJjbHVxODM2bmgyZGtpMmptajE0YmkzOG5kIn0.e14aFyZoCOMtopQEEEFkEw');

const map = () => {
    const rasterSourceProps = {
        id: '<PalworldMap></PalworldMap>',
        tileUrlTemplates: ['https://api.maptiler.com/tiles/d634cb8b-0aac-4b63-b27e-502297041ac5/{z}/{x}/{y}.png?key=QQ5ef4zZIr0A0wyEqSBM'],
        tileSize: 256,
    };
    const styles = StyleSheet.create({
        map: {
          flex: 1
        },
    });

    const coordinates = [0, 0]; // replace with your coordinates

    return ( 
        <View>
            <Text>Map Page</Text>
            <MapboxGL.MapView   
                style={styles.map} 
                rotateEnabled>
                <MapboxGL.RasterSource {...rasterSourceProps} >
                    <MapboxGL.BackgroundLayer id="background"  sourceLayerID="Palworld Map" style={{ backgroundColor:"#f2efea"} } />
                    <MapboxGL.RasterLayer
                        id="PalworldMapLayer"
                        sourceLayerID="Palworld_Map"
                        minZoomLevel= {1}
                        maxZoomLevel= {19}   
                        style={{rasterOpacity: 1, rasterFadeDuration: 100}}               
                    />           
                </MapboxGL.RasterSource>
                <MapboxGL.Camera zoomLevel={3} centerCoordinate={coordinates} />
                <MapboxGL.MarkerView coordinate={coordinates} id="Test" />        
            </MapboxGL.MapView>
        </View>
    );
};  
export default map;
