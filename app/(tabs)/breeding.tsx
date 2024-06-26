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
import React, { useState, useEffect } from 'react';
import { Octicons } from '@expo/vector-icons';
import { Link, Stack, router, } from "expo-router";
import SelectDropdown from "react-native-select-dropdown";
import { AntDesign, FontAwesome5, FontAwesome, Ionicons, Feather } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
const { StorageAccessFramework } = FileSystem;
import parentpals from './parentpals.json';

const palArray = ["Lamball", "Cattiva", "Chikipi", "Lifmunk", "Foxparks", "Fuack", "Sparkit", "Tanzee", "Rooby", "Pengullet", "Penking", "Jolthog", "Jolthog Cryst", "Gumoss", "Flower Gummos", "Vixy", "Hoocrates", "Teafant", "Depresso", "Cremis", "Daedream", "Rushroar", "Nox", "Fuddler", "Killamari", "Mau", "Mau Cryst", "Celaray", "Direwolf", "Tocotoco", "Flopìe", "Mozzarina", "Bristla", "Gobfin", "Gobfin Ignis", "Hagnyu", "Hagnyu Cryst", "Mossanda", "Mossanda Lux", "Woolipop", "Caprity", "Melpaca", "Eikthyrdeer", "Eikthyrdeer Terra", "Nitewing", "Ribbuny", "Incineram", "Incineram Noct", "Cinnamoth", "Arsox", "Dumud", "Cawgnito", "Leezpunk", "Leezpunk Ignis", "Loupmoon", "Galeclaw", "Robinquill", "Robinquill Terra", "Gorirat", "Beegarde", "Elizabee", "Grintale", "Swee", "Sweepa", "Chillet", "Univolt", "Foxcicle", "Pyrin", "Pyrin Noct", "Reindrix", "Rayhound", "Kitsun", "Dazzi", "Lunaris", "Dinossom", "Dinossom Lux", "Surfent", "Surfefnt Terra", "Maraith", "Digtoise", "Tombat", "Lovander", "Flambelle", "Vanwyrm", "Vanwyrm Cryst", "Bushi", "Beakon", "Ragnahawk", "Katress", "Wixen", "Verdash", "Vaelet", "Sibelyx", "Elphidran Aqua", "Elphidran", "Kelpsea", "Kelpsea Ignis", "Azurobe", "Cryolinx", "Blazehowl", "Blazehowl Noct", "Relaxaurus", "Relaxaurus Lux", "Broncherry", "Broncherry Aqua", "Petallia", "Reptyro", "Ice Reptyro", "Kingpaca", "Ice Kingpaca", "Mammorest", "Mammorest Cryst", "Wumpo", "Wumpo Botan", "Warsect", "Fenglope", "Felbat", "Quivern", "Blazamut", "Helzephyr", "Astegon", "Menasting", "Anubis", "Jormuntude", "Jormuntide Ignis", "Suzaku", "Suzaku Aqua", "Grizzbolt", "Lyleen Noct", "Lyleen", "Faleris", "Orserk", "Shadowbeak", "Paladius", "Necromus", "Frostallion", "Frostallion Noct", "Jetragon"]
const palBreedingValues = [1470, 1460, 1500, 1430, 1400, 1330, 1410, 1250, 1155, 1350, 520, 1370, 1360, 1240, 1240, 1450, 1390, 1490, 1380, 1455, 1230, 1130, 1180, 1220, 1290, 1480, 1440, 870, 1060, 1340, 1280, 910, 1320, 1090, 1100, 1420, 1422, 430, 390, 1190, 930, 890, 920, 900, 420, 1310, 590, 580, 490, 790, 895, 1080, 1120, 1140, 950, 1030, 1020, 1000, 1040, 1070, 330, 510, 1300, 410, 800, 680, 760, 360, 240, 880, 740, 830, 1210, 1110, 820, 810, 560, 550, 1150, 850, 750, 940, 1405, 660, 620, 640, 220, 380, 700, 1160, 990, 1050, 450, 540, 530, 1260, 1270, 500, 130, 710, 670, 280, 270, 860, 840, 780, 320, 230, 470, 440, 300, 290, 460, 480, 340, 980, 1010, 350, 10, 190, 150, 260, 570, 310, 315, 50, 30, 200, 250, 210, 370, 140, 60, 80, 70, 120, 100, 90]
var parentOneIndex = -1;
var parentTwoIndex = -1;
var selectedPal = -1;


// Function to implement a method that uses the index provided in the pal name array and set it to an image which is then displayed
// Takes in parameters pareneOneIndex
    type ImageMap = {
        [key: number]: any;
    }


    const imageMap: ImageMap = {
        0: require('./assets/palImages/0.png'), 1: require('./assets/palImages/1.png'), 2: require('./assets/palImages/2.png'), 3: require('./assets/palImages/3.png'), 4: require('./assets/palImages/4.png'), 5: require('./assets/palImages/5.png'), 6: require('./assets/palImages/6.png'), 7: require('./assets/palImages/7.png'),8: require('./assets/palImages/8.png'), 9: require('./assets/palImages/9.png'), 10: require('./assets/palImages/10.png'), 11: require('./assets/palImages/11.png'), 12: require('./assets/palImages/12.png'), 13: require('./assets/palImages/13.png'), 14: require('./assets/palImages/14.png'),
        23: require('./assets/palImages/23.png'), 17: require('./assets/palImages/17.png'), 15: require('./assets/palImages/15.png'),  16: require('./assets/palImages/16.png'), 18: require('./assets/palImages/18.png'), 19: require('./assets/palImages/19.png'), 20: require('./assets/palImages/20.png'), 21: require('./assets/palImages/21.png'), 22: require('./assets/palImages/22.png'), 24: require('./assets/palImages/24.png'), 25: require('./assets/palImages/25.png'), 26: require('./assets/palImages/26.png'), 27: require('./assets/palImages/27.png'), 28: require('./assets/palImages/28.png'), 29: require('./assets/palImages/29.png'), 30: require('./assets/palImages/30.png'), 31: require('./assets/palImages/31.png'), 32: require('./assets/palImages/32.png'), 33: require('./assets/palImages/33.png'), 34: require('./assets/palImages/34.png'), 35: require('./assets/palImages/35.png'),// 36: require('./assets/palImages/36.png'), 37: require('./assets/palImages/37.png'), 38: require('./assets/palImages/38.png'), 39: require('./assets/palImages/39.png'), 40: require('./assets/palImages/40.png'), 41: require('./assets/palImages/41.png'), 42: require('./assets/palImages/42.png'), 43: require('./assets/palImages/43.png'), 44: require('./assets/palImages/44.png'), 45: require('./assets/palImages/45.png'), 46: require('./assets/palImages/46.png'), 47: require('./assets/palImages/47.png'), 48: require('./assets/palImages/48.png'), 49: require('./assets/palImages/49.png'), 50: require('./assets/palImages/50.png'),
        // 51: require('./assets/palImages/51.png'), 52: require('./assets/palImages/52.png'), 53: require('./assets/palImages/53.png'), 54: require('./assets/palImages/54.png'), 55: require('./assets/palImages/55.png'), 56: require('./assets/palImages/56.png'), 57: require('./assets/palImages/57.png'), 58: require('./assets/palImages/58.png'), 59: require('./assets/palImages/59.png'), 60: require('./assets/palImages/60.png'), 61: require('./assets/palImages/61.png'), 62: require('./assets/palImages/62.png'), 63: require('./assets/palImages/63.png'), 64: require('./assets/palImages/64.png'), 65: require('./assets/palImages/65.png'), 66: require('./assets/palImages/66.png'), 67: require('./assets/palImages/67.png'), 68: require('./assets/palImages/68.png'), 69: require('./assets/palImages/69.png'), 70: require('./assets/palImages/70.png'), 71: require('./assets/palImages/71.png'), 72: require('./assets/palImages/72.png'), 73: require('./assets/palImages/73.png'), 74: require('./assets/palImages/74.png'), 75: require('./assets/palImages/75.png'), 76: require('./assets/palImages/76.png'), 77: require('./assets/palImages/77.png'), 78: require('./assets/palImages/78.png'), 79: require('./assets/palImages/79.png'), 80: require('./assets/palImages/80.png'), 81: require('./assets/palImages/81.png'), 82: require('./assets/palImages/82.png'), 83: require('./assets/palImages/83.png'), 84: require('./assets/palImages/84.png'), 85: require('./assets/palImages/85.png'), 86: require('./assets/palImages/86.png'), 87: require('./assets/palImages/87.png'), 88: require('./assets/palImages/88.png'), 89: require('./assets/palImages/89.png'), 90: require('./assets/palImages/90.png'), 91: require('./assets/palImages/91.png'), 92: require('./assets/palImages/92.png'), 93: require('./assets/palImages/93.png'), 94: require('./assets/palImages/94.png'), 95: require('./assets/palImages/95.png'), 96: require('./assets/palImages/96.png'), 97: require('./assets/palImages/97.png'), 98: require('./assets/palImages/98.png'), 99: require('./assets/palImages/99.png'), 100: require('./assets/palImages/100.png'),
        // 101: require('./assets/palImages/101.png'), 102: require('./assets/palImages/102.png'), 103: require('./assets/palImages/103.png'), 104: require('./assets/palImages/104.png'), 105: require('./assets/palImages/105.png'), 106: require('./assets/palImages/106.png'), 107: require('./assets/palImages/107.png'), 108: require('./assets/palImages/108.png'), 109: require('./assets/palImages/109.png'), 110: require('./assets/palImages/110.png'), 111: require('./assets/palImages/111.png'),
    }

//Breeding calculator algorithm
//
//

//Function uses Palworlds pre-defined algorithm to get resulting Pal index
const CalcultorFunction = (p1: number, p2: number) => {
    var resultingPalIndex = -1;
    if (p1 != -1 && p2 != -1) { //If Parent 1 and Parent 2 are both chosen
        const breedPwr1 = palBreedingValues[p1];
        const breedPwr2 = palBreedingValues[p2];
        const resultingPalPwr = (breedPwr1 + breedPwr2) / 2;
        if (palBreedingValues.includes(resultingPalPwr)) { //Breeding power result is directly found within the array
            resultingPalIndex = palBreedingValues.indexOf(resultingPalPwr);
        }
        else{ //Breeding power result is not in array (choose floor of the two numbers) 
            let closestPal = palBreedingValues[0];
            let minDifference = Math.abs(resultingPalPwr - closestPal)
            for (let i = 1; i < palBreedingValues.length; i++) {
                const difference = Math.abs(resultingPalPwr - palBreedingValues[i]);
                if (difference < minDifference) {
                    closestPal = palBreedingValues[i];
                    minDifference = difference;
                }
            }
            resultingPalIndex = palBreedingValues.indexOf(closestPal);
        }
    }
    return resultingPalIndex;
}

//Renders the image of child pal
const RenderChildImg = (p1: number, p2: number) => {
    if (p1 != -1 && p2 != -1) {
        const childPalIndex = CalcultorFunction(p1, p2);
        const palName = palArray[childPalIndex]
        const imageSource = imageMap[childPalIndex];
        return <View>
            <Image
                    source={imageSource}
                    style={styles.palChildImg}
                />
                <Text style={styles.childTxt}> {palName} </Text>
        </View>
    }
}

//Initial breeding screen
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
                    onSelect={(selectedItem, index,) => {
                        parentOneIndex = index;
                        setRefresh(!refresh)
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
                        parentTwoIndex = index;
                        setRefresh(!refresh)
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
                <View style={styles.leftPalContainer}>
                    {RenderParentImg(parentOneIndex)}
                </View>
                <View style={styles.rightPalContainer}>
                    {RenderParentImg(parentTwoIndex)}
                </View>
            </View>
            <FontAwesome5 style={styles.downArrowStyle} name="arrow-down" size={50} color="white" />
            <View style={styles.palResultImageContainer}>
                {RenderChildImg(parentOneIndex, parentTwoIndex)}
            </View>
        </SafeAreaView>

//Secondary page
const PossiblePairPage = () => {

    interface Pal {
        name: string;
        index: number;
    }
    interface Combination {
        left: string;
        right: string; 
    }

    interface ParentPalsData {
        palArray: Pal[];
        combinations: { [key: string]: Combination[] };
    }

    const parentpalsData: ParentPalsData = parentpals as ParentPalsData;
    const [selectedPalCombinations, setSelectedPalCombinations] = useState<Combination[]>([]);
    const [selectedPalName, setSelectedPalName] = useState<string | null>(null); 
    
    useEffect(() => {
        //console.log("Parent Pals Data:", parentpalsData); // log fetched data 
        //console.log("Selected Pal Name:", selectedPalName); // log user selected pal
        
        if (selectedPalName !== null) {
            const combinations = parentpalsData.combinations[selectedPalName];
            //console.log("Combinations:", combinations); // Log combinations fetched
            if (combinations && combinations.length > 0) {
                setSelectedPalCombinations(combinations);
            } else {
                setSelectedPalCombinations([]);
            }
        }
    }, [selectedPalName, parentpalsData.combinations]);

    const handlePalSelect = (name: string) => {
        setSelectedPalName(name);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Pressable style={styles.pressableOption} onPress={changeContent}>
                <Octicons style={styles.switchIcon} name="arrow-switch" size={45} color="white"/>
                <Text style={styles.pressableOptionText1}> Calculate Possible Children! </Text>
            </Pressable>
            <View style={styles.comboDropdownContainer}>
                <SelectDropdown
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
                        data={parentpalsData.palArray.map((pal) => pal.name)} // Display pal names
                        defaultButtonText="Select Pal"
                        onSelect={
                            (name: string) => handlePalSelect(name)
                        } // Pass name instead of index
                />
            </View>
            <ScrollView style={styles.combinationsContainer}>
                {selectedPalCombinations.length > 0 ? (
                    selectedPalCombinations.map((combination, index) => {
                        const parentOne = parentpalsData.palArray.find(pal => pal.name === combination.left);
                        const parentTwo = parentpalsData.palArray.find(pal => pal.name === combination.right);
                        // Check if both parent pal objects exist
                        
                    if (parentOne && parentTwo) {
                        console.log(palArray.indexOf(parentOne.name))
                        console.log(palArray.indexOf(parentTwo.name))
                        return (
                        <View key={index} style={styles.combinationsContainer}>
                            <View style={styles.palPairContainer}>
                                <View style={styles.comboLeftContainer}>
                                    {RenderComboImg(palArray.indexOf(parentOne.name))}
                                </View>
                                <View style={styles.symbolContainer}>
                                    <AntDesign name="plus" size={50} color="white"/>
                                </View>
                                <View style={styles.comboRightContainer}>
                                    {RenderComboImg(palArray.indexOf(parentTwo.name))}
                                </View>
                            </View>
                            <View style={styles.comboTxtContainer}>
                                <View style={styles.comboLTxtContainer}>
                                    <Text style={styles.comboTxt}>{parentOne.name}</Text>
                                </View>
                                <View style={styles.comboRTxtContainer}>
                                    <Text style={styles.comboTxt}>{parentTwo.name}</Text>
                                </View>
                            </View>
                        </View>
                    );
                     } else {
                        // Handle case where one or both parent pals are not found
                        return (
                        <View key={index}>
                            <Text style={styles.childTxt}>Invalid combination</Text>
                        </View>
                        );
                    }
                    })
            ) : (
                <Text style={styles.childTxt}>No combinations available for this pal.</Text>
                )}
                </ScrollView>
        </ScrollView>
    );
};

//Loads parent images
const RenderParentImg = (parentIndex: number) => {
    const imageSource = imageMap[parentIndex];
    if (parentIndex !== -1) {
        console.log("sucess")
        return  <Image 
                    source={imageSource}
                    style={styles.palParentImg}
                />

    }
    return null;
}

//Loads image of selected pal for possible combo page
const RenderComboImg = (parentIndex: number) => {
    const imageSource = imageMap[parentIndex];
    if (parentIndex !== -1) {
        return  <Image 
                    source={imageSource}
                    style={styles.palCombo}
                />

    }
    return null;
}

// Function to refresh the blank box components after selecting a pal name (Used in onSelect())
const [refresh, setRefresh] = useState<boolean>(false);

// Function to render between the breeding calculator page and the possible parent page
const [content, setContent] = useState(1);

//Function to render pages
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
        <Text style={styles.textStyle}>
            Welcome to the Palworld Breeding Calculator! 
        </Text>
        {renderContent()}
    </SafeAreaView>
);
};

//Styling
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
    desiredPalDropdown2BtnStyle: {
        width: '100%',
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
    comboDropdownContainer: {
        height: 50,
        width: 370,
        alignSelf: 'center',
        flexDirection: 'row',
        marginLeft: 200,
        marginTop: 15,
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
    leftPalContainer: {
        width: '43.3%',
        height: '100%',
        backgroundColor: '#464040',
    },
    rightPalContainer: {
        marginLeft: 'auto',
        width: '43.3%',
        height: '100%',
        backgroundColor: '#464040',
    },
    palParentImg: {
        marginLeft: 'auto',
        width: '100%',
        height: '100%',
    },
    palResultImageContainer: {
        marginTop: 10,
        width: 220,
        height: 250,
        alignSelf: 'center',
        backgroundColor: '#464040',
    },
    palChildImg: {
        alignSelf: 'center',
        width: '85%',
        height: '85%',
    },
    //Possible Combo styles
    //
    //
    comboScrollViewContainer: {
        backgroundColor: '#272525',
        marginHorizontal: 0,
        marginVertical: 0,
    },
    desiredPalContainer: {
        width: '43.3%',
        height: '100%',
        marginLeft: 105,
        backgroundColor: '#464040',
    },
    parentComboTxt: {
        marginTop: 20,
        color: 'white',
        fontSize: 25,
        alignSelf: 'center',
    },
    desiredPalDropdownContainer: {
        height: 50,
        width: 370,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: "white",
    },
    parentComboBarContainer: {
        height: 100, 
        width: 370,
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#464040',
    },
    comboListLeftImg: {
        marginRight: 'auto',
        width: 100,
        height: '100%',
    },
    comboListRightImg: {
        marginLeft: 'auto',
        width: 100,
        height: '100%',
    },
    comboListPlus: {
        verticalAlign: 'middle',
    },
    palCombo: {
        marginLeft: 'auto',
        width: 100,
        height: 100,
    },
    //Styles for possible pair combo
    container: {
        flex: 1,
        backgroundColor: '#272525',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    dropdownContainer: {
        marginBottom: 20,
    },
    combinationsContainer: {
        alignSelf: 'center',
        marginTop: 25,
        flex: 1,
    },
    palPairContainer: {
        height: 100,
        width: 300,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    comboLeftContainer: {
        height: 100,
        width: 100,
    },
    comboRightContainer: {
        height: 100,
        width: 100,
        marginLeft: 25,
    },
    comboTxtContainer: {
        height: 30,
        width: 300,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    comboTxt: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
    },
    comboLTxtContainer: {
        height: 30,
        width: 100,
        alignSelf: 'flex-end',
    },
    comboRTxtContainer: {
        height: 30,
        width: '100%',     
    },
    symbolContainer:{
        height: '50%',
        width: 50,
        marginTop: 26,
        marginLeft: 25,
    }
});
export default breeding;