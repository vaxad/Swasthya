import { View, ScrollView, SafeAreaView, Text } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { COLORS, icons, images, SIZES,FONT } from '../constants';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn'
import Main from './Main'
import { Stack, useRouter } from "expo-router";
import { createContext } from "react";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";


export const context =createContext();

const State=(props)=>{
    const [state,setState]=useState('test')
    return(
        <context.Provider value={{state, setState}}>
            {props.children}
        </context.Provider>
    )
}

const App=()=>{
    return(
        <State>
            <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
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
    </SafeAreaView>
    </Provider>
    </State>
    )}

export default App;
