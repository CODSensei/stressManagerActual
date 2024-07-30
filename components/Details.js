import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import firestore from '@react-native-firebase/firestore';
import {Dropdown} from 'react-native-element-dropdown';
import {LinearGradient} from 'react-native-gradients';

const Details = ({navigation}) => {
  const colorList = [
    {offset: '0%', color: '#42047e', opacity: '.65'},
    // {offset: '29%', color: '#44107A', opacity: '1'},
    // {offset: '67%', color: '#FF1361', opacity: '1'},
    {offset: '100%', color: '#b5c6e0', opacity: '.98'},
  ];
  let [Name, setName] = useState('');
  let [Number, setNumber] = useState('');
  const [Parent_Number, setParent_Number] = useState('');
  let [Email, setEmail] = useState('');
  let [Parent_Email, setparent_Email] = useState('');
  let [Course, setCourse] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [navigationcheck, setnavigationcheck] = useState(false);
  const data = [
    {label: 'Goverment Employee', value: 'Goverment Employee'},
    {label: 'Self-Employed', value: 'Self-Employed'},
    {label: 'Student', value: 'Student'},
    {label: 'Doctor', value: 'Doctor'},
    {label: 'Lawyer', value: 'Lawyer'},
    {label: 'None', value: 'None'},
  ];

  let dataupdate = () => {
    firestore()
      .collection('users')
      .doc(Email)
      .set({
        name: Name,
        number: Number,
        email: Email,
        parent_Email: Parent_Email,
        parent_contact: Parent_Number,
        course: Course,
      })
      .then(() => {
        console.log('User added!');
      });
  };
  return (
    <ScrollView className="flex">
      <ImageBackground
        source={require('../assets/Welcome1.png')}
        resizeMode="cover"
        className="h-screen w-screen flex flex-1 flex-col">
        <View className="flex flex-1 h-5/6 w-80 justify-center items-center self-center ml-1 absolute top-16">
          <LinearGradient colorList={colorList} angle={90} />
          <View
            className=" flex flex-col
          justify-between absolute  self-center  rounded-3xl">
            <Text className="text-center text-3xl font-medium text-violet-600 underline mt-3">
              Basic Details
            </Text>

            <View className="h-full w-full my-4">
              <TextInput
                className="border-2 px-4 rounded-lg mx-7 my-1 mb-5 text-black font-medium text-lg bg-slate-50"
                placeholder="Enter your Name"
                placeholderTextColor={'#4b5563'}
                onChangeText={setName}
                value={Name}
                textContentType="name"
              />
              <TextInput
                className="border-2 px-4 rounded-lg my-1 mx-7 mb-5 text-black font-medium text-lg bg-slate-50"
                placeholder="Enter your Contact Number"
                placeholderTextColor={'#4b5563'}
                onChangeText={setNumber}
                value={Number}
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
              />
              <TextInput
                className="border-2 px-4 rounded-lg my-1 mb-5 mx-7 text-black font-medium text-lg bg-slate-50"
                placeholder="Enter your Email Address"
                placeholderTextColor={'#4b5563'}
                onChangeText={setEmail}
                value={Email}
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <TextInput
                className="border-2 px-4 rounded-lg my-1 mx-7 mb-5 text-black font-medium text-lg bg-slate-50"
                placeholder="Gaurdian Contact Number"
                placeholderTextColor={'#4b5563'}
                onChangeText={setParent_Number}
                value={Parent_Number}
                textContentType="telephoneNumber"
                keyboardType="phone-pad"
              />
              <TextInput
                className="border-2 px-4 rounded-lg my-1 mb-5 mx-7 text-black font-medium text-lg bg-slate-50"
                placeholder="Gaurdian Email Address "
                placeholderTextColor={'#4b5563'}
                onChangeText={setparent_Email}
                value={Parent_Email}
                keyboardType="email-address"
                textContentType="emailAddress"
              />
              <Dropdown
                className="border-2 h-12 px-4 rounded-lg my-1 mb-5 mx-7 text-black font-medium text-lg bg-slate-50"
                placeholder={!isFocus ? 'Select Job Role' : '...'}
                placeholderTextColor={'#1c1b1fbf'}
                placeholderStyle={styles.placeholderStyle}
                itemTextStyle={styles.itemtextStyle}
                inputSearchStyle={styles.inputsearchStyle}
                selectedTextStyle={styles.selectedtextStyle}
                search={true}
                data={data}
                labelField="label"
                iconColor="#1c1b1fbf"
                valueField="value"
                searchPlaceholder="Search ..."
                maxHeight={300}
                value={Course}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                  setCourse(item.value);
                  setIsFocus(false);
                }}
              />
              {Name == '' ||
              Number == '' ||
              Email == '' ||
              Course == '' ||
              Parent_Email == '' ||
              Parent_Number == '' ? (
                <TouchableOpacity
                  className="rounded-2xl flex-row bg-blue-500 justify-center w-28 h-10 mx-24 my-4 items-center py-1"
                  onPress={() => {
                    {
                      Number == Parent_Number
                        ? Alert.alert(
                            'Parent number and Personal Number Can not be the Same',
                          )
                        : Email == Parent_Email
                        ? Alert.alert(
                            'Parent contact Email and your Personal contact Email Can not be the same ',
                          )
                        : Alert.alert('Fill all the required fields');
                    }
                  }}>
                  <Text className="text-white text-base font-semibold">
                    SUBMIT
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  className="rounded-2xl flex-row bg-blue-500 justify-center w-28 h-10 mx-24 my-4 items-center py-1"
                  onPress={() => {
                    {
                      Number == Parent_Number
                        ? Alert.alert(
                            'Parent number and Personal Number Can not be the Same',
                          )
                        : Email == Parent_Email
                        ? Alert.alert(
                            'Parent contact Email and your Personal contact Email Can not be the same ',
                          )
                        : (dataupdate(),
                          navigation.navigate('Questionspage', {Email: Email}));
                    }
                  }}>
                  <Text className="text-white text-base font-semibold">
                    SUBMIT
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 16,
    color: '#4b5563',
  },

  itemtextStyle: {
    fontSize: 16,
    color: '#4b5563',
  },
  inputsearchStyle: {
    fontSize: 16,
    color: '#4b5563',
  },
  selectedtextStyle: {
    fontSize: 16,
    color: '#4b5563',
  },
});
