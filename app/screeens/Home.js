import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import styles from './common.style'
import { COLORS, icons, images, SIZES } from '../../constants';
import CardButton from '../../components/common/cards/button/HomeButton'
import { useNavigation } from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();

  

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
      <View style={styles.container}>
      <Text style={styles.userName}>Welcome Kartik</Text>
      <Text style={styles.welcomeMessage}>Manage your Swasthyá here:</Text>
      </View>
      
      <View style={styles.cardsContainer}>
        <CardButton title="Add Records" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..." icon={icons.menu} handlePress={()=>{navigation.navigate("addRecord")}}/>
        <CardButton title="View Records" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..." icon={icons.menu} handlePress={()=>{navigation.navigate("selectProfile")}}/>
        <CardButton title="Digitize at Home" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..." icon={icons.menu} handlePress={()=>{navigation.navigate("selectProfile")}}/>
        <CardButton title="View History" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..." icon={icons.menu} handlePress={()=>{navigation.navigate("selectProfile")}}/>
      </View>
      </ScrollView>
      
      </SafeAreaView>
  )
}

export default Home