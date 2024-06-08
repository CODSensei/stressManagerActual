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

const Questions = ({navigation}) => {
let [increaser, setincreaser] = useState(0);
 
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: '1',
        value: '1',
      },
      {
        id: '2',
        label: '2',
        value: '2',
      },
      {
        id: '3',
        label: '3',
        value: '3',
      },
      {
        id: '4',
        label: '4',
        value: '4',
      },
      {
        id: '5',
        label: '5',
        value: '5',
      },
      {
        id: '6',
        label: '6',
        value: '6',
      },
      {
        id: '7',
        label: '7',
        value: '7',
      },
      {
        id: '8',
        label: '8',
        value: '8',
      },
      {
        id: '9',
        label: '9',
        value: '9',
      },
      {
        id: '10',
        label: '10',
        value: '10',
      },
    ],
    [],
  );
  const [selectedId, setSelectedId] = useState(0);
console.log(increaser);
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
        <View className="flex flex-row absolute bottom-0 justify-between">
          {increaser == 0 ? (
            <View className="mx-8 my-8 ">
              <Text className="text-gray-400 text-lg pr-24">PREVIOUS</Text>
            </View>
          ) : (
            <TouchableOpacity
              className="mx-8 my-8"
              onPress={() => {
                navigation.navigate('Onboarding2');
              }}>
              <Text className="text-white text-lg pr-24">PREVIOUS</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            className="mx-8 my-8"
            onPress={()=>{{setincreaser}
            increaser= increaser+1;
            }} >
            <Text className="text-white text-lg"> NEXT </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});
