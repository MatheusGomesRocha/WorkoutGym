import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppTab from './AppTab';
import Home from '../screens/Home';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator initialRouteName="preload">
            <MainStack.Screen name="app__tab" component={Home} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="home" component={Home} options={{title: null, headerTransparent: true, headerLeft: null}} />
        </MainStack.Navigator>
    )
}