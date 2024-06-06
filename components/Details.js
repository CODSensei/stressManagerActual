import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Details = ({navigation}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');

  return (
    <View className="flex flex-1 justify-center">
      <ImageBackground
        source={require('../assets/Welcome1.png')}
        resizeMode="cover"
        className="h-screen w-screen flex flex-1 flex-col">
        <View
          className="h-[500px] w-[340px] bg-rose-500 flex flex-col
      justify-between absolute top-40 left-6  rounded-3xl">
          <View className="h-16 flex justify-center">
            <Text className="text-center text-3xl font-medium text-yellow-300 underline">
              Basic Details
            </Text>
          </View>
          <View className="h-full w-full my-4">
            <TextInput
              className="border-2 px-4 rounded-lg mx-7 my-1 mb-5 text-yellow-300 font-medium text-lg"
              placeholder="Enter your Name"
              onChangeText={setName}
              value={name}
              textContentType='name'
            />
            <TextInput
              className="border-2 px-4 rounded-lg my-1 mx-7 mb-5 text-yellow-300 font-medium text-lg"
              placeholder="Enter your Contact Number"
              onChangeText={setNumber}
              value={number}
              textContentType='telephoneNumber'
              keyboardType='phone-pad'
            />
            <TextInput
              className="border-2 px-4 rounded-lg my-1 mb-5 mx-7 text-yellow-300 font-medium text-lg"
              placeholder="Enter your Email Address"
              onChangeText={setEmail}
              value={email}
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            <TextInput
              className="border-2 px-4 rounded-lg my-1 mb-5 mx-7 text-yellow-300 font-medium text-lg"
              placeholder="Enter your Persuing Course"
              onChangeText={setCourse}
              value={course}
            />
            <TouchableOpacity className="rounded-2xl flex-row bg-yellow-400 justify-center w-28 h-10 ml-28 my-4 items-center py-1"
            onPress={() => {
              navigation.navigate('Questions');
            }}
            >
              <Text className="text-black text-base font-semibold">SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
