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
  } from "react-native";
import React, { useState } from 'react';
import { Octicons } from '@expo/vector-icons';
import { Link, Stack, router, } from "expo-router";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign, FontAwesome5, FontAwesome, Ionicons, Feather } from '@expo/vector-icons';

const palArray = ["Lamball", "Cattiva", "Chikipi", "Lifmunk", "Foxparks", "Fuack", "Sparkit", "Tanzee", "Rooby", "Pengullet", "Penking", "Jolthog", "Jolthog Cryst", "Gumoss", "Flower Gummos", "Vixy", "Hoocrates", "Teafant", "Depresso", "Cremis", "Daedream", "Rushroar", "Nox", "Fuddler", "Killamari", "Mau", "Mau Cryst", "Celaray", "Direwolf", "Tocotoco", "Flopìe", "Mozzarina", "Bristla", "Gobfin", "Gobfin Ignis", "Hagnyu", "Hagnyu Cryst", "Mossanda", "Mossanda Lux", "Woolipop", "Caprity", "Melpaca", "Eikthyrdeer", "Eikthyrdeer Terra", "Nitewing", "Ribbuny", "Incineram", "Incineram Noct", "Cinnamoth", "Arsox", "Dumud", "Cawgnito", "Leezpunk", "Leezpunk Ignis", "Loupmoon", "Galeclaw", "Robinquill", "Robinquill Terra", "Gorirat", "Beegarde", "Elizabee", "Grintale", "Swee", "Sweepa", "Chillet", "Univolt", "Foxcicle", "Pyrin", "Pyrin Noct", "Reindrix", "Rayhound", "Kitsun", "Dazzi", "Lunaris", "Dinossom", "Dinossom Lux", "Surfent", "Surfefnt Terra", "Maraith", "Digtoise", "Tombat", "Lovander", "Flambelle", "Vanwyrm", "Vanwyrm Cryst", "Bushi", "Beakon", "Ragnahawk", "Katress", "Wixen", "Verdash", "Vaelet", "Sibelyx", "Elphidran Aqua", "Elphidran", "Kelpsea", "Kelpsea Ignis", "Azurobe", "Cryolinx", "Blazehowl", "Blazehowl Noct", "Relaxaurus", "Relaxaurus Lux", "Broncherry", "Broncherry Aqua", "Petallia", "Reptyro", "Ice Reptyro", "Kingpaca", "Ice Kingpaca", "Mammorest", "Mammorest Cryst", "Wumpo", "Wumpo Botan", "Warsect", "Fenglope", "Felbat", "Quivern", "Blazamut", "Helzephyr", "Astegon", "Menasting", "Anubis", "Jormuntude", "Jormuntide Ignis", "Suzaku", "Suzaku Aqua", "Grizzbolt", "Lyleen Noct", "Lyleen", "Faleris", "Orserk", "Shadowbeak", "Paladius", "Necromus", "Frostallion", "Frostallion Noct", "Jetragon"]

const breeding = () => {
    const BreedingCalcPage = () => 
        <SafeAreaView style={styles.conatiner}>
            <Pressable style={styles.pressableOption} onPress={changeContent}>
                <Octicons style={styles.switchIcon} name="arrow-switch" size={45} color="white"/>
                <Text style={styles.pressableOptionText1}> Calculate Possible Combinations! </Text>
            </Pressable>
            <View style={styles.parentDropdownContainer}>
                <SelectDropdown 
                    data={palArray}
                    defaultButtonText="Parent 1"
                    onSelect={(selectedItem, index) => {
                        
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                    buttonStyle={styles.dropdown2BtnStyle}
                    buttonTextStyle={styles.dropdown2BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={25} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown2DropdownStyle}
                    rowStyle={styles.dropdown2RowStyle}
                    rowTextStyle={styles.dropdown2RowTxtStyle}
                    selectedRowStyle={styles.dropdown2SelectedRowStyle}
                    search
                    searchInputStyle={styles.dropdown2searchInputStyleStyle}
                    searchPlaceHolder={'Search here'}
                    searchPlaceHolderColor={'#F8F8F8'}
                    renderSearchInputLeftIcon={() => {
                    return <FontAwesome name={'search'} color={'#FFF'} size={18} />;
                    }}
                />
                <AntDesign name="plus" size={50} color="white"/>
                <SelectDropdown 
                    data={palArray}
                    defaultButtonText="Parent 2"
                    onSelect={(selectedItem, index) => {
                        
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                    buttonStyle={styles.dropdown2BtnStyle}
                    buttonTextStyle={styles.dropdown2BtnTxtStyle}
                    renderDropdownIcon={isOpened => {
                    return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#FFF'} size={25} />;
                    }}
                    dropdownIconPosition={'right'}
                    dropdownStyle={styles.dropdown2DropdownStyle}
                    rowStyle={styles.dropdown2RowStyle}
                    rowTextStyle={styles.dropdown2RowTxtStyle}
                    selectedRowStyle={styles.dropdown2SelectedRowStyle}
                    search
                    searchInputStyle={styles.dropdown2searchInputStyleStyle}
                    searchPlaceHolder={'Search here'}
                    searchPlaceHolderColor={'#F8F8F8'}
                    renderSearchInputLeftIcon={() => {
                    return <FontAwesome name={'search'} color={'#FFF'} size={18} />;
                    }}
                />
            </View>
            <View style={styles.palImageContainer}>
                <View style={styles.leftPalImg}>

                </View>
                <View style={styles.rightPalImg}>
                    
                </View>
            </View>
            <FontAwesome5 style={styles.downArrowStyle} name="arrow-down" size={80} color="white" />
            <View style={styles.palResultImageContainer}>
                <Text style={styles.childTxt}>"Child Name"</Text>
            </View>
        </SafeAreaView>

    const PossiblePairPage = () => 
        <SafeAreaView style={styles.conatiner}>
            <Pressable style={styles.pressableOption} onPress={changeContent}>
                <Octicons style={styles.switchIcon} name="arrow-switch" size={45} color="white"/>
                <Text style={styles.pressableOptionText2}> Calculate Possible Child! </Text>
            </Pressable>
            <Text style={styles.textStyle}> Possible Pair page</Text>
        </SafeAreaView>


    const [content, setContent] = useState(1);

    const renderContent = () => {
        switch (content) {
            case 1:
                return <BreedingCalcPage />;
            case 2:
                return <PossiblePairPage />;
            default:
                return null;
        }
    }

    const changeContent = () => {
        setContent((prevContent) => (prevContent === 2 ? 1 : prevContent + 1))
    }

    return ( 
        <SafeAreaView style={styles.conatiner}>
            <StatusBar barStyle="light-content" backgroundColor='#3A3B3C'/>
            <Stack.Screen options={{ header: () => null}}/>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.textStyle}>
                    Welcome to the Palworld Breeding Calculator! 
                </Text>
                {renderContent()}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        marginBottom: 0,
        backgroundColor: '#272525',
    },
    textStyle: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        marginTop: 80,
        width: 400
    },
    scrollView: {
        marginHorizontal: 0,
        marginVertical: 0,
    },
    pressableOption: {
        height: 55, 
        width: 370,
        backgroundColor: '#464040',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
    },
    pressableOptionText1: {
        color: 'white',
        fontSize: 20,
        textAlignVertical: 'center',
        marginLeft: 12,
    },
    pressableOptionText2: {
        color: 'white',
        fontSize: 20,
        textAlignVertical: 'center',
        marginLeft: 45,
    },
    switchIcon: {
        textAlignVertical: 'center',
        marginLeft: 10,
    },

    // Dropdown Styles
    //
    //
    //
    parentDropdownContainer: {
        height: 50,
        width: 370,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    dropdown2BtnStyle: {
        width: '43.3%',
        height: 50,
        backgroundColor: '#464040',
    },
    dropdown2BtnTxtStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    dropdown2DropdownStyle: {
        backgroundColor: '#464040',
    },
    dropdown2RowStyle: {backgroundColor: '#464040', borderBottomColor: 'white'},
    dropdown2RowTxtStyle: {
        color: 'white',
        textAlign: 'center',
    },
    dropdown2SelectedRowStyle: {backgroundColor: '#464040'},
    dropdown2searchInputStyleStyle: {
        backgroundColor: '#464040',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    },
    downArrowStyle: {
        alignSelf: 'center',
        marginTop: 10,
    },
    childTxt: {
        color: 'white',
        fontSize: 25,
        alignSelf: 'center',
    },

    // Pal Image Container
    //
    //
    palImageContainer: {
        marginTop: 30,
        width: 370,
        height: 160,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    leftPalImg: {
        width: '43.3%',
        height: '100%',
        backgroundColor: '#464040',
    },
    rightPalImg: {
        marginLeft: 'auto',
        width: '43.3%',
        height: '100%',
        backgroundColor: '#464040',
    },
    palResultImageContainer: {
        marginTop: 10,
        width: '60%',
        height: 200,
        alignSelf: 'center',
        backgroundColor: '#464040',
    },

});
export default breeding;