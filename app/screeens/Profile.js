import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import styles from './common.style'
import { COLORS, FONT, icons, images, SIZES } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loadUser } from '../../redux/action';
import { useNavigation } from 'expo-router';

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const { user } = useSelector(state => state.auth)

  const getAge=(date)=>{
    var today = new Date();
    var birthDate = new Date(date);
    var eage = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        eage--;
    }
    return eage;
  }
  
  const { profile } = useSelector(state => state.auth)
  
  const User = user ? user.profiles[0] : null
  const Profile = profile ? profile : user ? user.profiles[0] : { pname: "", _id: "", records: "" }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={styles.container}>
        {/* <Text style={styles.userName}>Welcome {Profile.pname}</Text> */}
        <Text style={styles.welcomeMessage}>Manage your Profile here:</Text>
      </View>
      <View style={{flex:1, alignItems:'center', marginTop:20,}}>
        <Image source={require('../../assets/images/user.png')} style={{width:150, height:150}}></Image>
    <SafeAreaView style={{flex:1, width:500, }}>
        <View style={{flex:1, flexDirection:"row", maxHeight:30,  marginTop:20, alignItems:'center'}}> 
            <View style={{flex:1, marginHorizontal:20 ,alignItems:'flex-end'}}><Text style={styles.welcomeMessage}>Name</Text></View>
            <View style={{flex : 1, }}><Text style={{fontFamily:FONT.regular, fontSize:SIZES.xLarge}}>{Profile.pname}</Text></View>
       </View>
       <View style={{flex:1, flexDirection:"row", maxHeight:30,  marginTop:20, alignItems:'flex-end'}}> 
            <View style={{ flex:1,marginHorizontal:20 ,alignItems:'flex-end'}}><Text style={styles.welcomeMessage}>Age</Text></View>
            <View style={{flex : 1, }}><Text style={{fontFamily:FONT.regular, fontSize:SIZES.xLarge}}>{getAge(Profile.dob)}</Text></View>
       </View>
       <View style={{flex:1, flexDirection:"row", maxHeight:30,  marginTop:20, alignItems:'center'}}> 
            <View style={{flex:1, marginHorizontal:20 ,alignItems:'flex-end'}}><Text style={styles.welcomeMessage}>Gender</Text></View>
            <View style={{flex : 1, }}><Text style={{fontFamily:FONT.regular, fontSize:SIZES.xLarge}}>{Profile.gender}</Text></View>
       </View>
       </SafeAreaView>
    
      </View>
      <View >

      </View>
    </SafeAreaView>
  )
}

export default Profile