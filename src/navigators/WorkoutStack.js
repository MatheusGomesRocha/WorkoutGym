import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Workout from '../screens/Workout';
import NewWorkout from '../screens/NewWorkout';
import WorkoutDetail from '../screens/WorkoutDetail';
import CurrentWorkout from '../screens/CurrentWorkout';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator initialRouteName="workout">
            <MainStack.Screen name="workout" component={Workout} options={{title: null, headerTransparent: true, headerLeft: null}} />
            <MainStack.Screen name="newworkout" component={NewWorkout} options={{headerTitleAlign: 'center', headerStyle: {height: 60}}} />
            <MainStack.Screen name="workoutdetail" component={WorkoutDetail} options={{title: 'Detalhes', headerTitleAlign: 'center', headerStyle: {height: 60}}} />
            <MainStack.Screen name="workoutcurrent" component={CurrentWorkout} options={{headerShown: false}} />
        </MainStack.Navigator>
    )
}