# Team-1

Our app Palpedia acts as a companion/Database app to give information on the Breeding probabilities, Map information, and a general PalPedia deck with all of the Pals stats. Our Homepage and UI were made in typescript, and our databases on the backend are handled in SQL using SQLite. We also have an interactive map and a filtered search bar to find the pals you need!
To use the project, initialize the expo project using npx create-expo-app in the terminal. After the app is created use any Android emulator to be able to simulate the app.


---Setup Guide to React Native---

Software Used:  
- VSCode or any other IDE/text editor 
- Mobile App “Expo Go” for viewing projects on physical devices (Optional)
- Node.js - Allows us to use npm 
- Android Studio to run emulator 
- VSCode additional extensions:  
  - Babel - Syntax highlighter (Optional)
  - React Native tools - Commands 
  - Android/IOS emulator 

How to Setup App with npm 

1. Open the terminal in the desired destination folder and type: 
   - npx create-expo-app "Project Name" 
   This creates a new project folder

2. In VSCode, go to file → open folder, and select the project folder you just created
   If done correctly, you should see a file called App.js which contains basic test code
   
4. Clone the GitHub repository and pull code from 'main'
   
6. Once pulled, start the program using:
   - npx expo start 
   Once done, a QR code should appear signaling a successful startup

7. (Optional) Scan the QR code which will prompt you to open the Expo Go app 

8. Once started, open any Android emulator and type 'a' in the terminal to open the Expo Go app in the emulator

---Android Studio Installation--- (Optional if another emulator is used)

1. Complete setup wizard for Android studio checking all boxes during install 

2. Once in the main Android studio page of the app:
   - Hit the “three bars” icon at the top left
   - Go to tools → SDK manager
   - Under SDK Platforms, install Android 13.0 “Tiramisu” API level: 33
   - Go to SDK Tools tab and make sure the following are installed:
     - Android SDK Build Tools
     - Android Emulator
     - Android Emulator Hypervisor Driver
     - Android SDK Platform Tools
   - Click Apply and OK 

3. On the right sidebar of the home screen, click “Device Manager” (3rd icon):
   - Click the “+” or “Create virtual device”
   - Choose the device dimensions (I chose Pixel 6a); hit next
   - At the next screen, check Tiramisu API 33; let installation occur

4. Install Android/IOS emulator extension
   
6. Click the cog icon → Extension settings
   
8. Under the emulator path, confirm that the path is:  
   - ~/Library/Android/sdk/emulatora 

9. Under Emulator Path Windows, type in the path:  
   - C:\Users\(”Username”)\AppData\Local\Android\Sdk\emulator 

10. In VSCode:
    - Hit crtl + shift + p to open terminal at the top
    - Type Emulator then go to “View android emulators”
    - Hit enter, it should pop up with the virtual device you just created
    - Hit enter again to open it up (may take a second) 

11. For future use, just go to the expo go app once emulator is on and it should automatically connect 

Made by: Adam Ben Hmida, Aaron Nguyen, Jack Thomas, Dennis Garay, and Jacob Dalton 
