import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { AntDesign, FontAwesome5, FontAwesome, Ionicons } from '@expo/vector-icons';

export default () => {
    return (
        <Tabs 
            screenOptions={{
                tabBarStyle: {
                    height: 70,
                    backgroundColor: '#272525',
                    borderTopColor: '#272525',
                }
            }}
        >
            <Tabs.Screen 
                name="home" 
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="home" size={35} color="white" />
                    )
                }}
            />
            <Tabs.Screen 
                name="pals"
                options={{
                    tabBarIcon: () => (
                        <AntDesign name="appstore1" size={35} color="white" />
                    )
                }}
            />
            <Tabs.Screen 
                name="breeding"
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="egg" size={35} color="white" />
                    )
                }}
            />
            <Tabs.Screen 
                name="map"
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="map-marker" size={35} color="white" />
                    )
                }}
            />
            <Tabs.Screen 
                name="settings"
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="cog" size={35} color="white" />
                    )
                }}
            />
        </Tabs>
    );
};

const styles = StyleSheet.create({

})