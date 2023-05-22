
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { COLORS, icons, images, SIZES,FONT } from '../../constants';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './Home';
import Doctors from './Doctors';
import Rewards from './Rewards';
import Asha from './Asha';
import Profile from './Profile';

const home='Home'
const doctors='Doctors'
const rewards='Rewards'
const profile='Profile'
const asha='Asha'

const Tab = createBottomTabNavigator();
const BottomNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    <Tab.Navigator 
                initialRouteName={home}
                screenOptions={({route})=>({tabBarIcon:({focused,color,size})=>{
                    color=COLORS.primary;
                    let iconName;
                    let routeName=route.name;
                    switch(routeName){
                        case home:
                            iconName=focused?'home':'home-outline';
                            break;
                        case doctors:
                            iconName=focused?'person-add':'person-add-outline';
                            break;
                        case rewards:
                            iconName=focused?'gift':'gift-outline';
                            break;
                        case asha:
                            iconName=focused?'woman':'woman-outline';
                            break;
                        case profile:
                            iconName=focused?'person':'person-outline';
                            break;    
                    }
                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                }})}
                >
                    <Tab.Screen name={home} options={{headerShown: false, tabBarLabelStyle:{color:COLORS.primary}}} component={Home}/>
                    <Tab.Screen name={doctors} options={{headerShown: false, tabBarLabelStyle:{color:COLORS.primary}}} component={Doctors}/>
                    <Tab.Screen name={rewards} options={{headerShown: false, tabBarLabelStyle:{color:COLORS.primary}}} component={Rewards}/>
                    <Tab.Screen name={asha} options={{headerShown: false, tabBarLabelStyle:{color:COLORS.primary}}} component={Asha}/>
                    <Tab.Screen name={profile} options={{headerShown: false, tabBarLabelStyle:{color:COLORS.primary}}} component={Profile}/>

                </Tab.Navigator>
                </SafeAreaView>
  );
};

export default BottomNavigator;
