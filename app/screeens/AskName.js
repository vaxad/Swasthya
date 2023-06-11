import { AsyncStorage } from 'react-native';
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Loader from '../../components/common/Loader';
import styles from './common.style';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addProfile, addname, loadUser } from '../../redux/action';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useEffect } from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import { StackActions } from '@react-navigation/native';

var edate='Enter Date of Birth';

const AskName = ({ navigation }) => {
  const pop=StackActions.pop(3)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, []);
  const { user } = useSelector(state => state.auth)
  const { nameAdd } = useSelector(state => state.auth)
  
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [data, setData] = useState(null);


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

const handleConfirm=(date)=>{
    console.warn("A date has been picked: ", date);
    
    let day = date.getDate();

let month = date.getMonth();

let year = date.getFullYear();
    edate=day+'-'+month+'-'+year;
    console.log(edate)
    var today = new Date();
    var birthDate = new Date(date);
    var eage = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        eage--;
    }
    console.log(eage)
    setAge(eage);
    hideDatePicker();
};
  const add = async (name) => {

    const myForm = {
      "name": name,
      "dob": edate,
      "gender":gender
    }
    console.log(myForm)
    dispatch(addProfile(myForm));
    dispatch(loadUser());
    // navigation.goBack()
    navigation.dispatch(pop);
    setName('');
    edate='Enter Date of Birth';
    setGender('')
  }

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;


    if (!name) {
      //handleError('Please input name', 'name');
      <Alert>Please input name</Alert>
      isValid = false;
    }
    if (!age) {
      //handleError('Please input DOB', 'dob');
      <Alert>Please input Age</Alert>
      isValid = false;
    }
    if (!gender) {
     // handleError('Please input gender', 'gender');
      <Alert>Please input Gender</Alert>
      isValid = false;
    }


    if (isValid) {
      add(name);
    }
  };


  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  return(
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, marginTop:30 }}>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 20 }}>
    <View style={styles.container}>
      {/* <Text style={styles.userName}>Welcome {Profile.pname}</Text> */}
      <Text style={styles.welcomeMessage}>Add your Details here:</Text>
    </View>
    <View style={{flex:1, alignItems:'center', marginTop:20,}}>
      <Image source={require('../../assets/images/user.png')} style={{width:150, height:150}}></Image>
  
    </View>
    
        
        <View style={{flex:1}}>


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
          <TouchableOpacity onPress={showDatePicker}>
           <Input
            disabled={true}
            iconName="account-outline"
            value={edate}
            date={edate}
            id="age"
            label="Date of birth"
            placeholder="Enter your date of birth"
            error={errors.name}
          />
          </TouchableOpacity>
          <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <View style={{marginBottom: 20}}>
      <Text style={ {marginVertical: 5,
    fontSize: 14,
    color: COLORS.gray,}}>Gender</Text>
      <View
        style={[
          {height: 55,
            backgroundColor: COLORS.light,
            borderRadius:SIZES.large/0.5,
            flexDirection: 'row',
            paddingHorizontal: 15,
            borderWidth: 0.5,},
          {
            borderColor: COLORS.primary,
            alignItems: 'center',
          },
        ]}>
          {/* <Icon
        name={}
        style={{color: COLORS.primary, fontSize: 22, marginRight: 10}}
      /> */}
          <SelectDropdown
          buttonStyle={{color: COLORS.primary, flex: 1,backgroundColor:COLORS.lightWhite}}
	data={['Male', 'Female', 'Prefer not say']}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
    setGender(selectedItem);
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
</View>
</View>

          <View style={{flex:1, justifyContent:'flex-end', marginBottom:30}}>
          <Button title="Add" onPress={validate} />
          </View>

        </View>
      </ScrollView>
  </SafeAreaView>
  );
  // return (
  //   <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
  //     <Loader visible={loading} />
  //     <ScrollView
  //       contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}>
  //       <View style={styles.container2}>
  //         <Text style={styles.userName}>Welcome User</Text>
  //         <Text style={styles.welcomeMessage}>Add your Name here:</Text>
  //       </View>
  //       <View style={{ marginVertical: 20 }}>


  //         <Input
  //           onChangeText={text => setName(text)}
  //           onFocus={() => handleError(null, 'name')}
  //           iconName="account-outline"
  //           value={name}
  //           id="name"
  //           label="Full Name"
  //           placeholder="Enter your Full name"
  //           error={errors.name}
  //         />


  //         <Button title="Add" onPress={validate} />

  //       </View>
  //     </ScrollView>
  //   </SafeAreaView>
  // );
};

export default AskName;
