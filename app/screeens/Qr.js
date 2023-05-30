import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import styles from './common.style'
import { COLORS, icons, images, SIZES } from '../../constants';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Qr = ({ navigation }) => {
  const { user } = useSelector(state => state.auth)

  const [User, setUser] = useState(user ? user : null)
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 30, backgroundColor: COLORS.lightWhite }}>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <View style={styles.container}>
          <Text style={styles.userName}>Welcome {(user) ? user.name : ""}</Text>
          <Text style={styles.welcomeMessage}>Manage your QrCode here:</Text>
        </View>
        <View >

        </View>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default Qr