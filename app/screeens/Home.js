import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import styles from './common.style'
import { COLORS, icons, images, SIZES } from '../../constants';
import CardButton from '../../components/common/cards/button/HomeButton'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, logout, deleteProfile } from '../../redux/action';
import addrecord from '../../assets/icons/add_record.png'
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    if(!(user&&user.profiles[0])){
      navigation.navigate('askName')
    }
  }, []);
  const navigation = useNavigation();

  const { profile } = useSelector(state => state.auth)
  const { user } = useSelector(state => state.auth)
  
  
  const User = user ? user.profiles[0] : null
  const Profile = profile ? profile : user ? user.profiles[0]? user.profiles[0] : { pname: "", _id: "", records: "" }:{ pname: "", _id: "", records: "" }

  if (profile) {
    //console.log(profile+"hellooo");
  }
  if (!user) {
    navigation.navigate("registration")
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.userName}>Welcome {Profile.pname}</Text>
          <Text style={styles.welcomeMessage}>Manage your Swasthyá here:</Text>
        </View>

        <View style={styles.cardsContainer}>
          {/* <CardButton title="Add Records" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..." icon={icons.menu} handlePress={() => { navigation.navigate("addRecord") }} />
          <CardButton title="View Records" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..." icon={icons.menu} handlePress={() => { navigation.navigate("splash") }} />
          <CardButton title="Digitize at Home" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..." icon={icons.menu} handlePress={() => { dispatch(deleteProfile(Profile._id)) }} />
          <CardButton title="View History" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took..." icon={icons.menu} handlePress={() => { navigation.navigate("selectProfile") }} /> */}
          <View style={{flex:1, flexDirection:"row"}}> 
            <View style={{flex : 1, marginRight:5}}>
              <CardButton title="Add Records" img={require('../../assets/icons/add_record.png')} handlePress={()=>{navigation.navigate('addRecord')}}/>
            </View>
            <View style={{flex : 1, marginLeft:5}}>
              <CardButton title="View Records" img={require('../../assets/icons/view_records.png')}/>
            </View>  
       </View>
       <View style={{flex:1, flexDirection:"row"}}> 
            <View style={{flex : 1, marginRight:5}}>
              <CardButton title="Digitalize" img={require('../../assets/icons/digitalize.png')}/>
            </View>
            <View style={{flex : 1, marginLeft:5}}>
              <CardButton title="View Data" img={require('../../assets/icons/view_data.png')}/>
            </View>  
       </View>
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home