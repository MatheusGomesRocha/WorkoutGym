import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './src/navigators/MainStack';
import AppTab from './src/navigators/AppTab';

export default () => {
  return(
    <NavigationContainer>
      <AppTab />
    </NavigationContainer>
  )
}