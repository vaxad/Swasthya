import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../redux/action';

const Splash = ({navigation}) => {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    // setTimeout(() => {
    //   navigation.navigate('Nav');
    // }, 2000);
  }, []);
  const {user}=useSelector(state => state.auth)
  if(user){
    navigation.replace('nav')
  }
  return (
    <View>
      <Image source={require('../../assets/splash.png')}/>
    </View>
  );
};

export default Splash;
