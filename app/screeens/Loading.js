import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import styles from './common.style'
import { COLORS, icons, images, SIZES } from '../../constants';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ImageBackground } from 'react-native';

const Loading = ({ navigation }) => {

  const { user } = useSelector(state => state.auth)
  const { isAuthenticated } = useSelector(state => state.auth)
  if (isAuthenticated !== undefined) {
    if (isAuthenticated) {
      navigation.replace('Nav')
    } else {
      navigation.replace('registration')
    }
  }
  return (
    <ImageBackground source={require('../../assets/splash2.png')} style={{ width: '100%', height: '100%' }}>
    </ImageBackground>
  )
}

export default Loading