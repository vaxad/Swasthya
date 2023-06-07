
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { COLORS, icons, images, SIZES, FONT } from '../../constants';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Home from './Home';
import Doctors from './Doctors';
import Rewards from './Rewards';
import Asha from './Asha';
import Profile from './Profile';
import { useDispatch } from "react-redux";
import { logout } from "../../redux/action";
import AddRecords from "./AddRecords";

const home = 'Home'
const doctors = 'Doctors'
const rewards = 'Rewards'
const profile = 'Profile'
const asha = 'ABHA'

const Tab = createBottomTabNavigator();
const BottomNavigator = ({ navigation }) => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, }}>
            <Tab.Navigator
                initialRouteName={home}
                screenOptions={({ route }) => ({
                    tabBarStyle: { position: 'absolute', backgroundColor:COLORS.blue },
                    tabBarIcon: ({ focused, color, size }) => {
                        color = COLORS.pink;
                        let iconName;
                        let routeName = route.name;
                        switch (routeName) {
                            case home:
                                iconName = focused ? 'home' : 'home-outline';
                                break;
                            case doctors:
                                iconName = focused ? 'person-add' : 'person-add-outline';
                                break;
                            case rewards:
                                iconName = focused ? 'gift' : 'gift-outline';
                                break;
                            case asha:
                                iconName = focused ? 'woman' : 'woman-outline';
                                break;
                            case profile:
                                iconName = focused ? 'person' : 'person-outline';
                                break;
                        }
                        return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                    }
                })}
            >
                <Tab.Screen name={home} navigation={navigation} options={{ headerShown: false, tabBarLabelStyle: { color: COLORS.pink } }} component={Home} />
                <Tab.Screen name={doctors} options={{ headerShown: false, tabBarLabelStyle: { color: COLORS.pink } }} component={Doctors} />
                <Tab.Screen name={rewards} options={{ headerShown: false, tabBarLabelStyle: { color: COLORS.pink } }} component={Rewards} />
                <Tab.Screen name={asha} options={{ headerShown: false, tabBarLabelStyle: { color: COLORS.pink } }} component={Asha} />
                <Tab.Screen name={profile} options={{ headerShown: false, tabBarLabelStyle: { color: COLORS.pink } }} component={Profile} />
                {/* <Tab.Screen name="add" options={{ headerShown: false, tabBarLabelStyle: { color: COLORS.pink}, tabBarButton:()=>null}} component={AddRecords} /> */}

            </Tab.Navigator>
        </SafeAreaView>
    );
};

export default BottomNavigator;
