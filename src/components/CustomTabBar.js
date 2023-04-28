import React, { useState, useRef, useEffect } from 'react';

import { Animated, View } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';

const Container = styled.View`
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 70px;
    width: 100%;
    padding: 0 15px;
`;

const Touch = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 25px;
`;

const TouchCenter = styled.TouchableHighlight`
    background-color: red;
    align-items: center;
    justify-content: center;
    top: -20px;
    width: 50px;
    height: 50px;
    border-radius: 35px;
    shadow-color: red;
    elevation: 7;
`;

const Title = styled.Text`
    color: ${props=>props.color};
    margin-top: 3px;
    font-size: 10px;
`;


export default ({ state, navigation, index }) => {          /** Props que vem para facilitar a customização */
    const positionAnim = useRef(new Animated.Value(15)).current; // Initial value for opacity: 0

    const goTo = (screen) => {          // function que pega o nome da screen enviada dependendo da Tab que o usuário clicou
        navigation.navigate(screen);

        // if(screen === 'home') {
        //     Animated.timing(positionAnim, {
        //         toValue: 15,
        //         duration: 300,
        //         useNativeDriver: false,
        //       }).start();
        // } else if (screen === 'progress') {
        //     Animated.timing(positionAnim, {
        //         toValue: 84,
        //         duration: 300,
        //         useNativeDriver: false,
        //       }).start();
        // } else if (screen === 'chat') {
        //     Animated.timing(positionAnim, {
        //         toValue: 224,
        //         duration: 300,
        //         useNativeDriver: false,
        //       }).start();
        // } else if (screen === 'profile') {
        //     Animated.timing(positionAnim, {
        //         toValue: 295,
        //         duration: 300,
        //         useNativeDriver: false,
        //       }).start();
        // }
    }

    return (
        <Container>
            {/* <Animated.View style={{backgroundColor: '#000', position: 'absolute', height: 3, borderRadius: 5, width: 40, top: 0, left:
            positionAnim }}></Animated.View> */}
            <Touch bg={state.index === 0 ? '#57A6CA' : 'transparent'} onPress={() => goTo('home')}>
                <AntDesign name="home" color={state.index === 0 ? 'red' : '#ccc'} size={20} />
            </Touch>

            <Touch bg={state.index === 1 ? '#57A6CA' : 'transparent'} onPress={() => goTo('progress')}>
                <MaterialIcons name="insert-chart-outlined" color={state.index === 1 ? 'red' : '#ccc'} size={20} />
            </Touch>

            <TouchCenter bg={state.index === 2 ? '#57A6CA' : 'transparent'} onPress={() => goTo('exercise')}>
                <Ionicons name="play-outline" color="#fff" size={20} />
            </TouchCenter>

            <Touch bg={state.index === 3 ? '#57A6CA' : 'transparent'} onPress={() => goTo('chat')}>
                <MaterialCommunityIcons name="note-multiple-outline" color={state.index === 3 ? 'red' : '#ccc'} size={20} />
            </Touch>

            <Touch bg={state.index === 4 ? '#57A6CA' : 'transparent'} onPress={() => goTo('profile')}>
                <AntDesign name="user" color={state.index === 4 ? 'red' : '#ccc'} size={20} />
            </Touch>
        </Container>
    );
}