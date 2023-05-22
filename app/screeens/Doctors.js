import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import styles from './common.style'
import { COLORS, icons, images, SIZES } from '../../constants';

const Doctors = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={styles.container}>
      <Text style={styles.userName}>Welcome Kartik</Text>
      <Text style={styles.welcomeMessage}>Manage your Doctors here:</Text>
      </View>
      <View >
        
      </View>
      </SafeAreaView>
  )
}

export default Doctors