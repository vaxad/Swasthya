import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT, SIZES } from '../../constants';
import { loadUser } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './common.style';


const AddRecords = () => {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const { profile } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);

  const Item = ({ title, item }) => (
    <View
      style={{ alignItems: "center", marginBottom: 10, marginHorizontal: 10, paddingHorizontal:20 }}
    >
      <TouchableOpacity
      onPress={async () => {
        //console.log(item);
        dispatch(loadProfile(item._id));
        navigation.navigate("Nav")
      }}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: "#B1E4F9",
    borderRadius:SIZES.small,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.blue, fontFamily: FONT.bold, fontSize: 18}}>
      {title === "none" ? "" : title}
      </Text>
    </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, alignContent: "center" }}>
      <View style={{paddingHorizontal:30, marginTop:80, marginBottom:20}}>
        {/* <Text style={styles.userName}>Welcome {user ? user.name : ""}</Text> */}
        <View style={{  marginHorizontal:20 }}>
        <Text style={styles.welcomeMessage}>Add your Records here:</Text></View>
      </View>
      <View style={{ flex: 1, alignContent: "stretch", marginHorizontal:40 }}>
        <View style={{marginTop:10}}>
        <TouchableOpacity
      onPress={() => {
      }}
      activeOpacity={0.7}
      style={{
        height: 65,
        width: '100%',
        backgroundColor: "#B1E4F9",
    borderRadius:SIZES.small,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.blue, fontFamily: FONT.bold, fontSize: 18}}>
       Scan Records
      </Text>
    </TouchableOpacity>
        </View>

        <View style={{marginTop:10}}>
        <TouchableOpacity
      onPress={() => {
      }}
      activeOpacity={0.7}
      style={{
        height: 65,
        width: '100%',
        backgroundColor: "#B1E4F9",
    borderRadius:SIZES.small,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.blue, fontFamily: FONT.bold, fontSize: 18}}>
       Media
      </Text>
    </TouchableOpacity>
        </View>

        <View style={{marginTop:10}}>
        <TouchableOpacity
      onPress={() => {
      }}
      activeOpacity={0.7}
      style={{
        height: 65,
        width: '100%',
        backgroundColor: "#B1E4F9",
    borderRadius:SIZES.small,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.blue, fontFamily: FONT.bold, fontSize: 18}}>
       Email
      </Text>
    </TouchableOpacity>
        </View>

        <View style={{marginTop:10}}>
        <TouchableOpacity
      onPress={() => {
      }}
      activeOpacity={0.7}
      style={{
        height: 65,
        width: '100%',
        backgroundColor: "#B1E4F9",
    borderRadius:SIZES.small,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.blue, fontFamily: FONT.bold, fontSize: 18}}>
       WhatsApp
      </Text>
    </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default AddRecords