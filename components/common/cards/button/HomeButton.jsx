import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity,Image, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import styles from '../../../../app/screeens/common.style'
import { COLORS, FONT, icons, images, SHADOWS, SIZES } from '../../../../constants';

const CardButton = ({title, img, handlePress}) => {
  //console.log(img)
  //const image=require(img);
  return (
    
      <View>
        <TouchableOpacity style={style.button} onPress={handlePress} >
          <View style={{flex:1,  alignItems:'center'}}>
          <Image
          source={img}
          style={{ width: 100, height: 100, alignContent:'center', marginHorizontal:10}}
        ></Image>
        <View style={{marginTop:10}}>
          <Text style={styles.btnTitle}>{title}</Text>
          </View>
          </View>
          
        </TouchableOpacity>
      </View>
      
  )
}

export default CardButton


const style=StyleSheet.create({
  button: {
    padding: SIZES.large,
    backgroundColor: COLORS.btn1,
    borderRadius: SIZES.small,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  btnTitle: {
    flex:1,
    alignSelf:'center',
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: COLORS.white,
  },
})