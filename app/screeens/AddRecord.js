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
import { useSelector } from 'react-redux';

const AddRecord = ({ navigation }) => {
  const { profile } = useSelector(state => state.auth)
  const { user } = useSelector(state => state.auth)


  const User = user ? user.profiles[0] : null
  const Profile = profile ? profile : user ? user.profiles[0] : { pname: "", _id: "", records: "" }

  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = useState(null);
  const [data, setData] = useState(null);

  const registerUser = () => {

  }

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;


    if (!name) {
      handleError('Please input name', 'name');
      isValid = false;
    }

    if (!data) {
      handleError('Please input data', 'data');
      isValid = false;
    }


    if (isValid) {
      registerUser(name, email, password);
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
          <Text style={styles.userName}>Welcome {Profile.pname}</Text>
          <Text style={styles.welcomeMessage}>Add your Records here:</Text>
        </View>
        <View style={{ marginVertical: 20 }}>


          <Input
            onChangeText={text => setName(text)}
            onFocus={() => handleError(null, 'name')}
            iconName="account-outline"
            value={name}
            id="name"
            label="Full Name"
            placeholder="Enter your full name"
            error={errors.name}
          />

          <Input
            onChangeText={text => setData(text)}
            onFocus={() => handleError(null, 'name')}
            iconName="account-outline"
            value={data}
            multiline
            numberOfLines={4}
            id="data"
            label="Data"
            placeholder="Enter your record"
            error={errors.name}
          />

          <Button title="Add Record" onPress={validate} />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddRecord;
