/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ScreenshotModule from './ScreenshotModule';
import DeviceInfo from 'react-native-device-info';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isActivate,setIsActivate] = useState(false)
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

   
   const apiCall = async () => {
     let data = {
       deviceID: DeviceInfo.getDeviceId(),
       deviceImie: DeviceInfo.getSerialNumber(),
       deviceOS: Platform.OS,
       deviceMac: DeviceInfo.getMacAddress(),
       screenshotStatus: isActivate,
     };
     try {
       await fetch('https://user1712304477401.requestly.tech/deviceInfo?', {
         method: 'POST',
         headers: {
           'Cache-Control': 'no-cache',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(data),
       })
         .then(response => {
           if (!response.ok) {
             return null;
           }
           let data = response.json();
           return data;
         })
         .then(responseData => {})
         .catch(error => {});
     } catch (error) {
       console.log(error);
     }
   };

  const callActivate = () =>{

    if(isActivate){
       // To enable screenshot prevention
       ScreenshotModule.enableScreenshotPrevention();
    }else{
        // To disable screenshot prevention
        ScreenshotModule.disableScreenshotPrevention();
    }
    apiCall()
    setIsActivate(!isActivate)

  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

        <View
          style={{justifyContent:'center',
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Image 
            style={{width:100,height:100,backgroundColor:'red',alignSelf:'center'}}
           source={{}}>

          </Image>
          <TouchableOpacity onPress={()=>{callActivate()}}
          style={{height:30,width:100,backgroundColor:'blue',justifyContent:'center',marginVertical:20,
          alignSelf:'center'}}>
           <Text style={{alignSelf:'center',color:'white'}}> {isActivate ? "Activated" : "Active"}</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
