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
import { COLORS, icons, images, SIZES } from "../../constants";
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
      style={{ alignItems: "center", marginBottom: 10, marginHorizontal: 10 }}
    >
      <TouchableOpacity
        onPress={async () => {
          //console.log(item);
          dispatch(loadProfile(item._id));
          navigation.navigate("Nav")
        }}
      >
        <Image
          source={require(`../../assets/images/user.png`)}
          style={{ width: 180, height: 180, borderRadius: 180 / 2 }}
        ></Image>
      </TouchableOpacity>
      <Text>{title === "none" ? "" : title}</Text>
    </View>
  );

  const Add = ({ title, item }) => (
    <View
      style={{ alignItems: "center", marginBottom: 10, marginHorizontal: 10 }}
    >
      <TouchableOpacity
        onPress={() => {
          dispatch(loadProfile(item._id));
          //console.log(item)

          navigation.navigate("askPname");
        }}
      >
        <Image
          source={require(`../../assets/images/addUser.png`)}
          style={{ width: 180, height: 180, borderRadius: 180 / 2 }}
        ></Image>
      </TouchableOpacity>
      <Text>{title === "none" ? "" : title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, alignContent: "center" }}>
      <View style={styles.container2}>
        <Text style={styles.userName}>Welcome {user ? user.name : ""}</Text>
        <Text style={styles.welcomeMessage}>Select your Profiles here:</Text>
      </View>
      <View style={{ flex: 1, alignContent: "stretch" }}>
        <View style={styles.container2}>
          <FlatList
            data={Profiles}
            renderItem={({ item }) =>
              item._id !== "-1" ? (
                <Item title={item.pname} item={item} />
              ) : (
                <Add title={item.pname} item={item} />
              )
            }
            keyExtractor={(item) => item._id}
            numColumns="2"
          />
        </View>
        <View contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
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
