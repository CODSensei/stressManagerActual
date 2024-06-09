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
// import { emailAddress } from './Details.js';

const Questions = ({navigation, route}) => {
  let [total, settotal] = useState(0);
  let [increaser, setincreaser] = useState(0);

  let dataupdate = () => {
    firestore()
      .collection('users')
      .doc(route.params.Email)
      .update({
        result: total,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
      });
  };
  const radioButtons = useMemo(
    () => [
      {
        id: 1, // acts as primary key, should be unique and non-empty string
        label: <Text className="text-black text-lg">Option 1</Text>,
        value: 1,
      },
      {
        id: 2,
        label: <Text className="text-black text-lg">Option 2</Text>,
        value: 2,
      },
      {
        id: 3,
        label: <Text className="text-black text-lg">Option 3</Text>,
        value: 3,
      },
      {
        id: 4,
        label: <Text className="text-black text-lg">Option 4</Text>,
        value: 4,
      },
      {
        id: 5,
        label: <Text className="text-black text-lg">Option 5</Text>,
        value: 5,
      },
    ],
    [],
  );
  const radioButtonss = useMemo(
    () => [
      {
        id: 6,
        label: <Text className="text-black text-lg">Option 6</Text>,
        value: 6,
      },
      {
        id: 7,
        label: <Text className="text-black text-lg">Option 7</Text>,
        value: 7,
      },
      {
        id: 8,
        label: <Text className="text-black text-lg">Option 8</Text>,
        value: 8,
      },
      {
        id: 9,
        label: <Text className="text-black text-lg">Option 9</Text>,
        value: 9,
      },
      {
        id: 10,
        label: <Text className="text-black text-lg">Option 10</Text>,
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
          <View className="flex flex-row justify-around mt-10">
            <RadioGroup
              className="font-bold text-black"
              radioButtons={radioButtons}
              color={'#000'}
              onPress={setSelectedId}
              selectedId={selectedId}
            />
            <RadioGroup
              className="font-bold text-black"
              radioButtons={radioButtonss}
              color={'#000'}
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
                navigation.navigate('Result', {email: route.params.Email});
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
                navigation.navigate('Result', {email: route.params.Email});
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
