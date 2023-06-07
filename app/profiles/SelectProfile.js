import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import styles from "../screeens/common.style";
import { COLORS, FONT, icons, images, SIZES } from "../../constants";
import Button from "../../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import { loadUser, logout, loadProfile } from "../../redux/action";
import { useEffect } from "react";

const SelectProfile = ({ navigation }, state) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const { profile } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    dispatch(loadUser())
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const clearAppData = async function () {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.error(error);
    }
  };

  function __delay__(timer) {
    return new Promise(resolve => {
      timer = timer || 2000;
      setTimeout(function () {
        resolve();
      }, timer);
    });
  };


  const User = user ? user.profiles[0] : null;
  const Profile = profile ? profile : { pname: "", _id: "", records: "" };

  const profiles = user ? user.profiles : "";
  let Profiles = {};
  if (profiles) {
    if (profiles.length < 4) {
      Profiles = profiles.concat({
        _id: "-1",
        pname: "Add profile",
        records: { age: -1 },
      });
      //console.log(Profiles)
    } else {
      Profiles = profiles;
    }
  }
  //console.log(Profiles)

  const Item = ({ title, item }) => (
    <View
      style={{ alignItems: "center", marginBottom: 10, marginHorizontal: 10, paddingHorizontal:20 }}
    >
      <TouchableOpacity
      onPress={async () => {
        //console.log(item);
        dispatch(loadProfile(item._id));
        navigation.navigate("Nav");
        setRefreshing(true);
        dispatch(loadUser());
        onRefresh()
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

  const Add = ({ title, item }) => (
    <View
      style={{ alignItems: "center", marginBottom: 10, marginHorizontal: 10 }}
    >
      <TouchableOpacity
        onPress={() => {
          //dispatch(loadProfile());
          //console.log(item)
          navigation.navigate("askName");
          dispatch(loadUser())
        }}

      ><View style={{backgroundColor:COLORS.blue, borderRadius: 180 / 2 }}>
        <Image
          source={require(`../../assets/icons/add_user.png`)}
          
          style={{ width: 80, height: 80, borderRadius: 180 / 2 }}
        ></Image>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, alignContent: "center" }}>
      <View style={{paddingHorizontal:30, marginTop:80, marginBottom:20}}>
        <Text style={styles.userName}>Welcome {user ? user.name : ""}</Text>
        <Text style={styles.welcomeMessage}>Select your Profiles here:</Text>
      </View>
      <View style={{ flex: 1, alignContent: "stretch" }}>
        <View>
          <FlatList
            data={Profiles}
            refreshing={refreshing}
            onRefresh={onRefresh}
            renderItem={({ item }) =>
              item._id !== "-1" ? (
                <Item title={item.pname} item={item} />
              ) : (
                <Add title={item.pname} item={item} />
              )
            }
            keyExtractor={(item) => item._id}
            numColumns="1"
          />
        </View>
        <View style={{flex:1, justifyContent:'flex-end', marginBottom:30}}>
          <TouchableOpacity style={{ width: 350, alignSelf: "center" }}>
            <Button
              style={{ width: 80 }}
              title="Log out"
              onPress={() => {
                dispatch(logout());
                clearAppData();
                navigation.goBack();
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectProfile;
