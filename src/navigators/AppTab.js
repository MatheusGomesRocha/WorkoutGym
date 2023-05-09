import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Exercise from '../screens/Exercises';
import Workout from '../screens/Workout';
import WorkoutStack from './WorkoutStack';

const AppTab = createBottomTabNavigator();

export default () => {
    return(
        <AppTab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            tabBarOption={{
                keyboardHidesTabBar: true
            }}
        >
            <AppTab.Screen name="home" component={Home} options={{title: null, headerTransparent: true, headerShown: false,}}/>
            <AppTab.Screen name="progress" component={Home} options={{title: null, headerTransparent: true, headerShown: false,}}/>
            <AppTab.Screen name="exercise" component={WorkoutStack} options={{title: null, headerTransparent: true, headerShown: false,}}/>
            <AppTab.Screen name="chat" component={Exercise} options={{title: null, headerTransparent: true, headerShown: false,}}/>
            <AppTab.Screen name="profile" component={Home} options={{title: null, headerTransparent: true, headerShown: false,}}/>
        </AppTab.Navigator>
    )
}