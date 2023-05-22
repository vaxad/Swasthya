import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { COLORS, icons, images, SIZES,FONT } from '../constants';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screeens/Splash';
import Doctors from './screeens/Doctors'
import Asha from './screeens/Asha'
import Profile from './screeens/Profile'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigator from './screeens/BottomNav';
import { Stack, useRouter } from "expo-router";

const StackNav = createNativeStackNavigator();
function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <BottomNavigator/>
    </SafeAreaView>
  );
}

function Main() {
  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerRight: () => {
                return(
                <ScreenHeaderBtn iconUrl={require('../assets/icons/qrcode.png')} dimensions="80%" />
                )
            },
            headerLeft: () => {
                return(
                <ScreenHeaderBtn iconUrl={require('../assets/images/user.png')} dimensions="100%" />
                )
            },
            headerTitle: "Swasthyá",
            headerTitleAlign: 'center',
            headerTitleStyle:{fontFamily: FONT.bold,
                fontSize: SIZES.xLarge,
                color: '#FF7927',
                marginTop: 2,}
        }}
        />
    <NavigationContainer independent={true} >
      <StackNav.Navigator>
        <StackNav.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <StackNav.Screen name="Profile" component={Doctors} options={{ headerShown: false }}/>
        <StackNav.Screen name="Settings" component={Profile} options={{ headerShown: false }} />
      </StackNav.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

export default Main;
