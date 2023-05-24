import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {COLORS, SIZES} from '../../constants';
const Button = ({title, onPress = () => {},disabled}) => {
  let color=COLORS.primary;
  if(disabled){
     color=COLORS.gray;
  }else{
    color=COLORS.primary;
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: color,
    borderRadius:SIZES.large/0.5,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
