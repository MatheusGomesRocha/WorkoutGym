import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppTab from './AppTab';
import Home from '../screens/Home';
import CurrentWorkout from '../screens/CurrentWorkout';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator initialRouteName="preload">
            <MainStack.Screen name="app__tab" component={AppTab} options={{title: null, headerTransparent: true, headerLeft: null}} />
            {/* <MainStack.Screen name="home" component={Home} options={{title: null, headerTransparent: true, headerLeft: null}} /> */}
            <MainStack.Screen name="workoutcurrent" component={CurrentWorkout} options={{headerShown: false}} />
        </MainStack.Navigator>
    )
}