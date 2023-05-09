import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Workout from '../screens/Workout';
import NewWorkout from '../screens/NewWorkout';
import AnimatedHeader from '../components/AnimatedHeader';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator initialRouteName="workout">
            <MainStack.Screen name="workout" component={Workout} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="newworkout" component={NewWorkout} options={{headerTitleAlign: 'center', headerLeft: null}} />
        </MainStack.Navigator>
    )
}