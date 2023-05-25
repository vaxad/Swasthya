import { SafeAreaView } from "react-native";
import { COLORS, icons, images, SIZES,FONT } from '../constants';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './screeens/BottomNav';
import { Stack, useRouter } from "expo-router";
import SelectProfile from "./profiles/SelectProfile";
import Splash from './screeens/Splash';
import RegistrationScreen from "./screeens/Registration";
import AddRecord from "./screeens/AddRecord";
import AskName from "./screeens/AskName";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/action";
import { useEffect } from "react";

const StackNav = createNativeStackNavigator();
function Nav({navigation}) {
  //useDispatch(loadUser);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <BottomNavigator navigation={navigation}/>
    </SafeAreaView>
  );
}


function Main({navigation}) {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [])
  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
          options={{
            headerShown: false
        }}
        />
    <NavigationContainer independent={true} >
      <StackNav.Navigator>
        
        <StackNav.Screen
          name="Nav"
          component={Nav}
          options={({navigation})=>({
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerRight: () => {
                return(
                <ScreenHeaderBtn iconUrl={require('../assets/icons/qrcode.png')} dimensions="80%" handlePress={()=>{navigation.navigate('registration')}} />
                )
            },
            headerLeft: () => {
                return(
                <ScreenHeaderBtn iconUrl={require('../assets/images/user.png')} dimensions="100%" handlePress={()=>{navigation.navigate('selectProfile')}}/>
                )
            },
            headerTitle: "Swasthyá",
            headerTransparent:"true",
            headerTitleAlign: 'center',
            headerTitleStyle:{
              fontFamily: FONT.bold,
                fontSize: SIZES.xLarge,
                color: '#FF7927',
                marginTop: 2,
              }
              })}
        />
        <StackNav.Screen name="selectProfile" component={SelectProfile} options={{ headerShown: false }}/>
        <StackNav.Screen name="addRecord" component={AddRecord} options={{ headerShown: false }}/>
        <StackNav.Screen name="askName" component={AskName} options={{ headerShown: false }} />
        <StackNav.Screen name="registration" component={RegistrationScreen} options={{ headerShown: false }} />
      </StackNav.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
}

export default Main;
