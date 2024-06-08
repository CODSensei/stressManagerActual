import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {total} from './Questionspage';
import {Course, Email, Name, emailAddress} from './Details';
import firestore from '@react-native-firebase/firestore';

const Result = () => {
  let [Name, setName] = useState('');
  let [Number, setNumber] = useState('');
  let [Email, setEmail] = useState('');
  let [Course, setCourse] = useState('');
  let [total, settotal] = useState('');
  firestore()
    .collection('user')
    .doc(emailAddress[0].email)
    .get()
    .then(value => {
      const data = value.data();

      setName(data?.name);
      setCourse(data?.course);
      setEmail(data?.email);
      setNumber(data?.number);
      settotal(data?.result);
    });

  const final = (total / 30) * 100;
  let level;
  if (final <= 300 && final > 240) {
    level = 'Extremely High';
  }
  if (final <= 240 && final > 180) {
    level = 'High';
  }
  if (final <= 180 && final > 120) {
    level = 'Medium';
  }
  if (final <= 120 && final > 60) {
    level = 'Average';
  }
  if (final <= 60 && final > 30) {
    level = 'Low';
  }

  return (
    <View>
      <ImageBackground
        source={require('../assets/Welcome3.png')}
        resizeMode="stretch"
        className="h-screen w-screen flex flex-col justify-center align-middle">
        <View className="flex justify-center align-middle h-3/5 w-80 bg-bck self-center rounded-lg"></View>
        <Text>Hello {`${Name}`} </Text>
        <Text> Phone:{`${Number}`} </Text>
        <Text>Email:{`${Email}`} </Text>
        <Text>Course:{`${Course}`} </Text>
        <Text>Result:{`${total}`} </Text>
        <Text>Level of stress :{`${level}`}</Text>
      </ImageBackground>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});
