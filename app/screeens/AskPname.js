import { AsyncStorage } from 'react-native';
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import { COLORS } from '../../constants';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Loader from '../../components/common/Loader';
import styles from './common.style';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addname, loadUser, addProfile, loadProfile } from '../../redux/action';
import { useEffect } from 'react';

const AskPname = ({ navigation }) => {


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const { user } = useSelector(state => state.auth)

  const { profile } = useSelector(state => state.auth)


  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = useState("");
  const [data, setData] = useState(null);


  const add = async (name) => {



    const myForm = {
      "name": name
    }
    dispatch(addProfile(name));
    dispatch(loadUser());
    navigation.navigate('Nav')
  }

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;


    if (!name) {
      handleError('Please input name', 'name');
      isValid = false;
    }


    if (isValid) {
      add(name);
    }
  };


  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
        <View style={styles.container2}>
          <Text style={styles.userName}>Welcome User</Text>
          <Text style={styles.welcomeMessage}>Add your Name here:</Text>
        </View>
        <View style={{ marginVertical: 20 }}>


          <Input
            onChangeText={text => setName(text)}
            onFocus={() => handleError(null, 'name')}
            iconName="account-outline"
            value={name}
            id="name"
            label="Full Name"
            placeholder="Enter your Full name"
            error={errors.name}
          />


          <Button title="Add" onPress={validate} />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AskPname;
