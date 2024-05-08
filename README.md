# Team-1

Our app Palpedia acts as a companion/Database app to give information on the Breeding probabilities, Map information, and general PalPedia deck with all of the Pals stats. Our Homepage and UI was made in typescript, and our batabases on the backend are handled in SQL usign SQLite. We also have an interactive map and a filtered search bar to find the pals you need!
To use the project, initialize the expo project using npx create-expo-app in the terminal. After the app is created use any android emulator to be able to simulate the app.


Setup Guide to React Native 

Required software:  

VSCode or any other IDE/text editor 

Mobile App “Expo Go” for development of IOS apps on windows machines 

Node.js - Allows us to use npm 

Android studio to run emulator 

VSCode additional extensions:  

Babel - Syntax highlighter 

React Native tools - Commands 

Android/IOS emulator 

How to Setup App with npm 

Open terminal in desired destination folder, type: 

npx create-expo-app "Project Name" 
  

This creates a new project folder 

In VSCode, go to file → open folder, and select the project folder you just created 

If done correctly, you should see a file name called App.js which contains basic test code 

How to Run/Test with Expo Go 

Download the Expo Go app on App Store 

Open terminal in the Apps.js project ( ctrl + ` ) 

In terminal, type cd “Project Name” to ensure that you are in the correct directory 

Then, type: 

npx expo start 
  

This will show an output containing a QR code 

In camera app, scan the QR code which will prompt you to open Expo Go app 

NOTE Make sure to not exit or quit the terminal unless you want to stop running the server 

Android Studio 

Complete setup wizard for android studio  

Check all boxes to install 

Once in main android studio page in app:  

hit the “three bars” icon at the top left 

Go to tools → SDK manager 

Under SDK Platforms, install Android 13.0 “Tiramisu” API level: 33 

Go to SDK Tools tab and make sure the following are installed:  

Android SDK Build Tools 

Android Emulator 

Android Emulator Hypervisor Driver 

Android SDK Platform Tools 

Click Apply and OK 

On the right sidebar of home screen, click “Device Manager” (3rd icon) 

Click the “+” or “Create virtual device” 

Choose the device dimensions (I chose Pixel 6a); hit next 

At the next screen, check Tiramisu API 33; let installation occur 

How to Run Android Emulator in VSCode 

Install Android/IOS emulator extension 

Click the cog icon → Extension settings 

Under emulator path, confirm that the path is:  

~/Library/Android/sdk/emulatora 

Under Emulator Path Windows, type in the path:  

C:\Users\(”Username”)\AppData\Local\Android\Sdk\emulator 

In VSCode:  

Hit crtl + shift + p to open terminal at the top 

Type Emulator; should then go to “View android emulators” after pressing enter 

Hit enter, then it should pop up with the virtual device you just created 

Hit enter again to open it up (may take a second) 

In your project file:  

Hit ctrl + ` to open terminal 

Type “npx expo start” 

Once project is running, press “a” to open up android emulator 

For first time, Expo Go should install 

For future use, just go to the expo go app once emulator is on and it should automatically connect 

NOTE When making edits to your program, you can refresh the emulator to show the new output by first saving the project and pressing r to reload the page (works for both physical phone and emulator) 

 

 

Setting Up Expo Router 

Preparation/Extensions 

Install npm icons for react native: react-native-ico-material-design - npm (npmjs.com) using: 

npm install --save react-native-ico-material-design react-native-svg 
  

Run command in project terminal 

Once installed, import it into your project using: 

import Icon from 'react-native-ico-material-design'; 
  

Test if it works by typing: 

<Icon name="add-plus-button" height="40" width="40" /> 
  

Install Expo Router which allows navigation in between screens 

In project file, install the following dependencies: 

npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar 
  

Use the following code to replace the main in package.json to: 

"main": "expo-router/entry", 
  

This makes the entry point of the app go directly to expo-router 

Add deep linking “scheme” to app.json file (can add anywhere): 

"scheme": "app-scheme-name", //Name it the same as "name": 
 

Made by: Adam Ben Hmida, Aaron Nguyen, Jack Thomas, Dennis Garay, and Jacob Dalton 


