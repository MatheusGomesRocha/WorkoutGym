import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppTab from './src/navigators/AppTab';

import { StatusBar } from 'react-native';
import MainStack from './src/navigators/MainStack';

export default () => {
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <MainStack />
    </NavigationContainer>
  )
}