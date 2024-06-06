import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  
  const Onboarding3 = ({navigation}) => {
    return (
      <View className="flex flex-1 justify-center">
        <ImageBackground
          source={require('../assets/Welcome3.png')}
          resizeMode="stretch"
          className="h-screen w-screen flex flex-1 flex-col">
          <View
            className="h-80 w-screen flex flex-col
        justify-end absolute bottom-0 rounded-t-3xl">
           
            <View className="flex flex-row justify-between">
              <TouchableOpacity
                className="mx-8 my-8 text-slate-300"
                onPress={() => {
                  navigation.navigate('Details');
                }}>
                <Text className="text-white text-lg">SKIP</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="mx-8 my-8"
                onPress={() => {
                  navigation.navigate('Details');
                }}>
                <Text className="text-white text-lg">NEXT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  
  export default Onboarding3;
  
  const styles = StyleSheet.create({});
  