import { 
  View,
  Text, 
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  sticky,
} from "react-native";
const TopPalImage = require("./assets/PalBackground.png");
const PalSiteImage = require("./assets/VisitPalSite.png");
//const PaldeckImage = require("./assets/Paldeck.jpg");
//Test edit for updating

const App = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <ScrollView style={styles.scrollView}>
        <Image
          source={TopPalImage}
          style={{
            position: sticky,
            resizeMode: 'cover',
            alignSelf: 'center',
            height: 250, width: 420,
            marginBottom: 50,
          }}
        />
        <View style={styles.Rectangle1} />
        <View style={styles.Rectangle2} />
        <View style={styles.Rectangle3} />
        <View style={styles.Rectangle4} />
        <View style={styles.Rectangle5} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Rectangle1: {
    height: 130, width: 350, backgroundColor: '#464040', alignSelf: 'center',
    marinTop: 100, 
    marginBottom: 50,
  },
  Rectangle2: {
    height: 130, width: 350, backgroundColor: '#464040', alignSelf: 'center', 
    marginBottom: 50, 
  },
  Rectangle3: {
    height: 130, width: 350, backgroundColor: '#464040', alignSelf: 'center', 
    marginBottom: 50, 
  },
  Rectangle4: {
    height: 130, width: 350, backgroundColor: '#464040', alignSelf: 'center', 
    marginBottom: 50, 
  },
  Rectangle5: {
    height: 130, width: 350, backgroundColor: '#464040', alignSelf: 'center', 
    marginBottom: 50,
  },
  overlayImage: {
    position: 'absolute'
    , top: 325, left: 30, width: 350, height: 100
  },
  conatiner: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginBottom: 0,
  },
  scrollView: {
    backgroundColor: '#272525',
    marginHorizontal: 0,
    marginVertical: 0,
  },
});

export default App;