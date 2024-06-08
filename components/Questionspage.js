import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useState} from 'react';
import {ques} from '../assets/question.js';
import RadioGroup from 'react-native-radio-buttons-group';
import firestore from '@react-native-firebase/firestore';
import { emailAddress } from './Details.js';


const Questions = ({navigation}) => {
  let [total, settotal] = useState(0);
  let [increaser, setincreaser] = useState(0);

  let dataupdate = ()=>{
    firestore()
  .collection('users')
  .doc(emailAddress[0].email)
  .update({
    result:total,
    createdAt: firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    console.log('User added!');
  });}
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: '1',
        value: 1,
      },
      {
        id: '2',
        label: '2',
        value: 2,
      },
      {
        id: '3',
        label: '3',
        value: 3,
      },
      {
        id: '4',
        label: '4',
        value: 4,
      },
      {
        id: '5',
        label: '5',
        value: 5,
      },
      {
        id: '6',
        label: '6',
        value: 6,
      },
      {
        id: '7',
        label: '7',
        value: 7,
      },
      {
        id: '8',
        label: '8',
        value: 8,
      },
      {
        id: '9',
        label: '9',
        value: 9,
      },
      {
        id: '10',
        label: '10',
        value: 10,
      },
    ],
    [],
  );
  let [selectedId, setSelectedId] = useState(0);

  return (
    <View classname="flex justify-center align-middle">
      <ImageBackground
        source={require('../assets/Welcome1.png')}
        resizeMode="cover"
        className="h-screen w-screen flex flex-col justify-center align-middle">
        <View className="flex justify-center align-middle h-3/5 w-80 bg-bck self-center rounded-lg">
          <Text className="text-xl font-bold text-black absolute top-2 self-center">
            Questions{`${increaser + 1}`}
          </Text>
          <Text className="text-xl font-medium text-black absolute top-8 self-center">
            Q.{`${ques[increaser].q}`}
          </Text>
          <View className="flex flex-wrap absolute top-28 text-lg">
            <RadioGroup
              className="font-bold"
              radioButtons={radioButtons}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
          </View>
        </View>
        <View className="flex flex-row absolute bottom-10 justify-center items-center self-center ">
          {selectedId == 0 ? (
            <View
              className="mx-8 my-8 bg-bck rounded-lg h-10 w-20 self-center align-middle justify-center items-center"
              onPress={() => {
                setincreaser(increaser + 1);
                settotal(total + selectedId);
                setSelectedId((selectedId = 0));
              }}>
              <Text className="text-black self-center align-middle justify-center items-center text-lg">
                {' '}
                NEXT{' '}
              </Text>
            </View>
          ) : increaser == 29 ? (
            <TouchableOpacity
              className="mx-8 my-8 bg-bck rounded-lg h-10 w-20 self-center align-middle justify-center items-center hidden"
              onPress={() => {
                setincreaser(increaser + 1);
                settotal(total + selectedId);
                setSelectedId((selectedId = 0));
              }}>
              <Text className="text-black self-center align-middle justify-center items-center text-lg">
                {' '}
                NEXT{' '}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="mx-8 my-8 bg-bck rounded-lg h-10 w-20 self-center align-middle justify-center items-center"
              onPress={() => {
                setincreaser(increaser + 1);
                settotal(total + selectedId);
                setSelectedId((selectedId = 0));
              }}>
              <Text className="text-black self-center align-middle justify-center items-center text-lg">
                {' '}
                NEXT{' '}
              </Text>
            </TouchableOpacity>
          )}
          {increaser == 29 ? (
            <TouchableOpacity
              className="mx-8 my-8 bg-bck rounded-lg h-10 w-20 self-center align-middle justify-center items-center"
              onPress={() => {
                dataupdate();
                navigation.navigate('Result');
              }}>
              <Text className="text-black self-center align-middle justify-center items-center text-lg">
                {' '}
                SUBMIT{' '}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="mx-8 my-8 bg-bck rounded-lg h-10 w-20 self-center align-middle justify-center items-center hidden"
              onPress={() => {
                navigation.navigate('Result');
              }}>
              <Text className="text-black self-center align-middle justify-center items-center text-lg">
                {' '}
                SUBMIT{' '}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Questions;


const styles = StyleSheet.create({});
