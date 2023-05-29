import 'react-native-gesture-handler';
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { COLORS, icons, images, SIZES,FONT } from '../constants';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn'
import Main from './Main'
import { Stack, useRouter } from "expo-router";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
import { loadUser } from "../redux/action";
import Splash from "./screeens/Splash";


export const context =createContext();

const App=()=>{
    
    return(
            
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Provider store={store}>
     <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerTitle: "",
            headerTitleAlign: 'center',
            headerTitleStyle:{fontFamily: FONT.bold,
                fontSize: SIZES.xLarge,
                color: '#FF7927',
                marginTop: 2,}
        }}
        />
        <Main/>
        </Provider>
    </SafeAreaView>
    
    )}

export default App;
