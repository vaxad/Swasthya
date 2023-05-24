import React, { useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity , TextInput, FlatList, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import styles from '../screeens/common.style'
import { COLORS, icons, images, SIZES } from '../../constants';
import { Picker } from '@react-native-picker/picker';

import { Button, Layout } from '@ui-kitten/components';
import { Flex } from 'native-base';


function SelectProfile(){

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      no:'1',
      title: 'First Profile',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      no:'2',
      title: 'Second Profile',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      no:'3',
      title: 'Third Profile',
    },
    {
      id: '58694a9f-3da1-471f-bd96-145571j29d72',
      no:'4',
      title: 'Fourth Profile',
    },
  ];

  const Item = ({title, no}) => (
      <View style={{alignItems:'center', marginBottom:10, marginHorizontal:10}}>
        <TouchableOpacity>
      <Image source={require(`../../assets/images/user.png`)} style={{width: 180, height: 180, borderRadius: 180/ 2}} ></Image>
      </TouchableOpacity>
      <Text>{title}</Text>
      </View>
  );

  return (
    <SafeAreaView style={{flex:1, alignContent:'center'}}>
      <View style={styles.container2}>
      <Text style={styles.userName}>Welcome Kartik</Text>
      <Text style={styles.welcomeMessage}>Select your Profiles here:</Text>
      </View>
      <View style={{flex:1, alignContent:'stretch'}}>
      <View style={styles.container2}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} no={item.no}/>}
        keyExtractor={item => item.id}
        numColumns="2"
      /></View></View>
     
          
      
      </SafeAreaView>
  )
}

export default SelectProfile;