import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {total} from './Questionspage';
import {Course, Email, Name, emailAddress} from './Details';
import firestore from '@react-native-firebase/firestore';
import { useState,useEffect } from 'react';

const Result = ({navigation,route}) => {
  let [Name, setName] = useState('');
  let [Number, setNumber] = useState('');
  let [Email, setEmail] = useState('');
  let [Course, setCourse] = useState('');
  let [total, settotal] = useState('');
  console.log(route.params.email);
  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(route.params.email)
      .onSnapshot(documentSnapshot => {
        console.log('User data: ', documentSnapshot.data());
        setName(documentSnapshot.data().name);
        setNumber(documentSnapshot.data().number);
        setEmail(documentSnapshot.data().email);
        setCourse(documentSnapshot.data().course);
        settotal(documentSnapshot.data().result);
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, [route.params.Email]);

  let level;
  if (total <= 300 && total > 240) {
    level = 'Extremely High';
  }
  if (total <= 240 && total > 180) {
    level = 'High';
  }
  if (total <= 180 && total > 120) {
    level = 'Medium';
  }
  if (total <= 120 && total > 60) {
    level = 'Average';
  }
  if (total <= 60 && total > 30) {
    level = 'Low';
  }
let totalfinal = (total / 300) * 100;


  return (
    <View>
      <ImageBackground
        source={require('../assets/Welcome3.png')}
        resizeMode="stretch"
        className="h-screen w-screen flex flex-col justify-center align-middle">
        <View className="flex justify-center align-middle h-3/5 w-80 bg-bck self-center rounded-lg">
        <Text className='text-black text-center text-lg font-bold absolute top-0 self-center'>RESULTS OF THE SURVEY</Text>
        <Text className='text-black text-center text-lg font-medium'>Hello  <Text className='text-black text-center text-lg font-bold'>{`${Name}`}   </Text> </Text>
        <Text className='text-black text-center text-lg font-medium'>Phone: <Text className='text-black text-center text-lg font-bold'>{`${Number}`} </Text> </Text>
        <Text className='text-black text-center text-lg font-medium'>Email: <Text className='text-black text-center text-lg font-bold'>{`${Email}`}  </Text> </Text>
        <Text className='text-black text-center text-lg font-medium'>Course:<Text className='text-black text-center text-lg font-bold'>{`${Course}`} </Text> </Text>
        <Text className='text-black text-center text-lg font-medium'>Result:<Text className='text-black text-center text-lg font-bold'>{`${totalfinal}`}% stress </Text> </Text>
        <Text className='text-black text-center text-lg font-medium'>Level of stress :<Text>{`${level}`}</Text></Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});
