import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import styles from './common.style'
import { COLORS, icons, images, SIZES } from '../../constants';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Asha = ({ navigation }) => {
  const { user } = useSelector(state => state.auth)

  const [User, setUser] = useState(user ? user : null)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <View style={styles.container}>
        <Text style={styles.userName}>Welcome {(user) ? user.name : ""}</Text>
        <Text style={styles.welcomeMessage}>Manage your Asha Karyakartas here:</Text>
      </View>
      <View >

      </View>
    </SafeAreaView>
  )
}

export default Asha