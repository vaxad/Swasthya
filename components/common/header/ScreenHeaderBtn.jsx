import React from 'react'
import { View, Text, TouchableOpacity,Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimensions,handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
      <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimensions)}/>
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn