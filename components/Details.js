import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import firestore from '@react-native-firebase/firestore';


const Details = ({navigation}) => {
  let [Name, setName] = useState('');
  let [Number, setNumber] = useState('');
  let [Email, setEmail] = useState('');
  let [Course, setCourse] = useState('');

  let dataupdate = ()=>{
    firestore()
  .collection('users')
  .doc(Email)
  .set({
    name: Name,
    number: Number,
    email: Email,
    course : Course,

  })
  .then(() => {
    console.log('User added!');
  });}
  return (
    <View className="flex flex-1 justify-center">
      <ImageBackground
        source={require('../assets/Welcome1.png')}
        resizeMode="cover"
        className="h-screen w-screen flex flex-1 flex-col">
        <View
          className="h-[500px] w-[340px] bg-bck flex flex-col
      justify-between absolute top-40 self-center  rounded-3xl">
          <View className="h-16 flex justify-center">
            <Text className="text-center text-3xl font-medium text-violet-600 underline">
              Basic Details
            </Text>
          </View>
          <View className="h-full w-full my-4">
            <TextInput
              className="border-2 px-4 rounded-lg mx-7 my-1 mb-5 text-black font-medium text-lg"
              placeholder="Enter your Name"
              onChangeText={setName}
              value={Name}
              textContentType="name"
            />
            <TextInput
              className="border-2 px-4 rounded-lg my-1 mx-7 mb-5 text-black font-medium text-lg"
              placeholder="Enter your Contact Number"
              onChangeText={setNumber}
              value={Number}
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
            />
            <TextInput
              className="border-2 px-4 rounded-lg my-1 mb-5 mx-7 text-black font-medium text-lg"
              placeholder="Enter your Email Address"
              onChangeText={setEmail}
              value={Email}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <TextInput
              className="border-2 px-4 rounded-lg my-1 mb-5 mx-7 text-black font-medium text-lg"
              placeholder="Enter your Persuing Course"
              onChangeText={setCourse}
              value={Course}
            />
            {Name == '' || Number == '' || Email == '' || Course == '' ? (
              <TouchableOpacity
                className="rounded-2xl flex-row bg-violet-600 justify-center w-28 h-10 ml-28 my-4 items-center py-1"
                onPress={() => {Alert.alert('Fill all the required fields');}}>
                <Text className="text-white text-base font-semibold">
                  SUBMIT
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                className="rounded-2xl flex-row bg-violet-600 justify-center w-28 h-10 ml-28 my-4 items-center py-1"
                onPress={() => {
                  dataupdate();
                  navigation.navigate('Questionspage');
                }}>
                <Text className="text-white text-base font-semibold">
                  SUBMIT
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Details;
export const emailAddress = [
  {
    email:Email,
  },]
const styles = StyleSheet.create({});
