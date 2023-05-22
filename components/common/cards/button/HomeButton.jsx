import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity,Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import styles from '../../../../app/screeens/common.style'
import { COLORS, icons, images, SIZES } from '../../../../constants';

const CardButton = ({title, description, icon}) => {
  return (
    
      <View>
        <TouchableOpacity style={styles.button}>
          <View >
        
          <Text style={styles.btnTitle}>{title}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoWrapper}>{description}</Text>
          </View>
        </TouchableOpacity>
      </View>
      
  )
}

export default CardButton