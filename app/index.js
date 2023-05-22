import { View, ScrollView, SafeAreaView, Text } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { COLORS, icons, images, SIZES,FONT } from '../constants';
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn'
import Main from './Main'
import { Stack, useRouter } from "expo-router";

const App=()=>{
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
    {/* <Stack.Screen
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
        /> */}
        <Main/>
    </SafeAreaView>
    )}

export default App;
