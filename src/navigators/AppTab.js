import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import CustomTabBar from '../components/CustomTabBar';

const AppTab = createBottomTabNavigator();

export default () => {
    return(
        <AppTab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            tabBarOption={{
                keyboardHidesTabBar: true
            }}
        >
            <AppTab.Screen name="home" component={Home} options={{title: null, headerTransparent: true}}/>
            <AppTab.Screen name="progress" component={Home} options={{title: null, headerTransparent: true}}/>
            <AppTab.Screen name="exercise" component={Home} options={{title: null, headerTransparent: true}}/>
            <AppTab.Screen name="chat" component={Home} options={{title: null, headerTransparent: true}}/>
            <AppTab.Screen name="profile" component={Home} options={{title: null, headerTransparent: true}}/>
        </AppTab.Navigator>
    )
}