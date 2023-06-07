import { SafeAreaView, Text, View } from "react-native";
import { COLORS, icons, images, SIZES, FONT } from '../constants';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn'
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './screeens/BottomNav';
import { Stack, useRouter } from "expo-router";
import SelectProfile from "./profiles/SelectProfile";
import Splash from './screeens/Glogin';
import RegistrationScreen from "./screeens/Registration";
import AddRecord from "./screeens/AddRecord";
import AskName from "./screeens/AskName";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../redux/action";
import { useEffect } from "react";
import Qr from "./screeens/Qr";
import AskPname from "./screeens/AskPname";
import Loading from "./screeens/Loading";
import { TransitionPresets, CardStyleInterpolators } from "react-navigation-stack";
import AddRecords from "./screeens/AddRecords";

const StackNav = createStackNavigator();
function Nav({ navigation }) {
  const dispatch = useDispatch();


  const { user } = useSelector(state => state.auth)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <BottomNavigator navigation={navigation} />
    </SafeAreaView>
  );
}

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function Main({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [])
  const { user } = useSelector(state => state.auth)
  const { isAuthenticated } = useSelector(state => state.auth);

  let auth = false;
  const [load, setLoad] = useState(true);
  useEffect(() => {
    if (isAuthenticated === true || isAuthenticated === false) {
      setLoad(false);
      auth = isAuthenticated;
    } else {
    dispatch(loadUser());
      auth = isAuthenticated;
      setLoad(true);
    }
  }, []);
  return (


    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />

      <StackNav.Navigator
        // initialRouteName={load ? "loading" : auth ? "Nav" : "registration"}
        initialRouteName="registration"
        screenOptions={{

          gestureEnabled: true,
          gestureDirection: "horizontal",

          CardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >

        <StackNav.Screen name="loading" component={Loading} options={{ headerShown: false }} />
        <StackNav.Screen name="registration" component={RegistrationScreen} options={{ headerShown: false }} />
        <StackNav.Screen
          name="Nav"
          component={Nav}
          options={({ navigation }) => ({
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: { backgroundColor: "#006089" },
            headerShadowVisible: false,
            headerRight: () => {
              return (
                <View style={{ marginRight: 25 }}>
                  <ScreenHeaderBtn iconUrl={require('../assets/icons/qr.png')} dimensions="80%" handlePress={() => { navigation.navigate('qr') }} />
                </View>
              )
            },
            headerLeft: () => {

              return (
                <View style={{ marginLeft: 25 }}>
                  <ScreenHeaderBtn iconUrl={require('../assets/images/pfp.png')} dimensions="100%" handlePress={() => { navigation.navigate('selectProfile') }} />
                </View>
              )

            },
            title: "Swasthyá",
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: FONT.bold,
              fontSize: SIZES.xLarge,
              color: COLORS.btn1,
              marginTop: 2,
            }
          })}
        />
        <StackNav.Screen name="selectProfile" component={SelectProfile} options={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false
        }} />
        <StackNav.Screen name="addRecord" component={AddRecords} options={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false
        }} />
        <StackNav.Screen name="splash" component={Splash} options={{ headerShown: false }} />
        <StackNav.Screen name="qr" component={Qr} options={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false
        }} />
        <StackNav.Screen name="askName" component={AskName} options={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false
        }} />
        <StackNav.Screen name="askPname" component={AskPname} options={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerShown: false
        }} />
        
      </StackNav.Navigator>

    </SafeAreaView>
  );
}

export default Main;
