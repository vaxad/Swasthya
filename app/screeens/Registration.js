import { AsyncStorage } from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import { COLORS, FONT } from '../../constants';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Loader from '../../components/common/Loader';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../../firebaseConfig'
import firebase from 'firebase/compat/app'
import { useDispatch } from 'react-redux';
import { loadUser, register } from '../../redux/action';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const RegistrationScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const [req, setReq] = useState(false);
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const { user } = useSelector(state => state.auth)

  if (user) {
    if (user.name === "none") {
      console.log("ask")
      navigation.replace('askName');
    } else {
      console.log("login")

      navigation.replace('Nav');

    }
  }
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('none');
  const [verificationId, setVerificationId] = useState(null);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const recaptchaVerifier = useRef(null)
  const [isDisabled, setIsDisabled] = useState(false);
  const [isDisabled2, setIsDisabled2] = useState(true);



  const sendVerification = () => {
    setIsDisabled(true);
    setIsDisabled2(false);
    const phoneProvider = new firebase.auth.PhoneAuthProvider;
    phoneProvider.verifyPhoneNumber(('+91' + phone), recaptchaVerifier.current).then(setVerificationId).catch((error) => { console.log(error) });
    setIsDisabled2(false);
  }

  const confirmCode = () => {

    setIsDisabled2(false);
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code
    );
    firebase.auth().signInWithCredential(credential)
      .then(() => {
        const myForm = {
          "name": name,
          "phone": phone
        }
        try {
          dispatch(register(myForm))
          if (user) {
            
          
              console.log("login")
        
              navigation.replace('Nav');
        
            
          }
        } catch (e) {
          console.log(e)
        }

      })

      .catch((error) => {
        console.log(error)
        alert('Invalid OTP');
        setCode('');
        setPhone('');
        setIsDisabled2(true);
        setIsDisabled(false);
      })
  }

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    }

    if (isValid) {
      sendVerification;
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
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig} />
        <Text style={{ color: COLORS.primary, fontSize: 40, fontFamily:FONT.medium }}>
          Login using OTP
        </Text>

        <View style={{ marginVertical: 20 }}>

          <Input
            keyboardType="numeric"
            onChangeText={setPhone}
            value={phone}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Enter your phone no"
            error={errors.phone}
          />
          <Button title="Send OTP" onPress={sendVerification} disabled={isDisabled} />
          <Input
            onChangeText={setCode}
            value={code}
            iconName="lock-outline"
            keyboardType="numeric"
            label="OTP"
            placeholder="Enter OTP"
          />
          <Button title="Verify OTP" onPress={confirmCode} disabled={isDisabled2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;
