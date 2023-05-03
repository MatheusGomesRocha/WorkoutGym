import React, { useState } from 'react';

import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';

import { workouts } from '../json/workouts';
import { bold, semibold } from '../globals';
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native';

const Container = styled.View`
    padding: 0 25px;
`;
const WorkoutHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
`;
const WorkoutBig = styled.Text`
    font-family: ${bold};
    color: #000;
    font-size: 24px;
`;
const WorkoutMuscle = styled.Text`
    font-family: ${semibold};
    color: #aaa;
    font-size: 16px;
`;
const WorkoutItem = styled.TouchableOpacity`
    background-color: #fff;
    justify-content: center;
    height: 90px;
    border-radius: 10px;
    padding: 0 10px;
    margin: 15px 1px 1px 1px;
`;
const WorkoutDetail = styled.View`
    flex-direction: row;
    align-items: center;
`;
const WorkoutMiniature = styled.View`
    background-color: #ccc;
    width: 70px;
    height: 70px;
    border-radius: 15px;
`;
const WorkoutContent = styled.View`
    margin-left: 30px;
`;
const WorkoutLine = styled.View`
    background-color: red;
    width: 20px;
    height: 3px;
    border-radius: 5px;
`;
const WorkoutName = styled.Text`
    font-family: ${bold};
    color: #000;
    margin-top: 7px;
    font-size: 16px;
`;
const WorkoutSeries = styled.Text`
    font-family: ${semibold};
    color: #aaa;
    margin-top: 7px;
`;
const WorkoutLike = styled.TouchableOpacity`
    margin-left: auto;
`;

const SwipeRow = styled.View`
    flex-direction: row;
`;
const SwipeItem = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: blue;
`;



export default function Workouts({ filter }) {
    const renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [0, 170, 171],
          outputRange: [-200, 1, 1],
        });
    
        const styles = StyleSheet.create({
            swipe: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 15,
                height: 90,
                width: '50%',
                backgroundColor: "#fff",
            }
        });
    
        return (
            <Animated.View style={[styles.swipe, {transform: [{translateX: trans}]}]}>
                <Animated.View>
                    <SwipeItem></SwipeItem>
                </Animated.View>

                <Animated.View>
                    <SwipeItem></SwipeItem>
                </Animated.View>
            </Animated.View>
        );
    };

    
    return(
        <Container>
            {workouts.map((item, k) => (
                item.muscle === 'Biceps' ? 
                    <View key={k}>
                        <WorkoutHeader>
                            <WorkoutBig>Treino {k+1}</WorkoutBig>
                            <WorkoutMuscle>{item.muscle}</WorkoutMuscle>
                        </WorkoutHeader>

                        {item.data.map((it, kk) => (
                            <Swipeable renderLeftActions={renderLeftActions} key={kk}>
                                <WorkoutItem>
                                    <WorkoutDetail>
                                        <WorkoutMiniature></WorkoutMiniature>
                
                                        <WorkoutContent>
                                            <WorkoutLine></WorkoutLine>
                                        
                                            <WorkoutName>{it.name}</WorkoutName>
                
                                            <WorkoutSeries>{`${it.sets}x${it.reps}`} vezes</WorkoutSeries>
                                        </WorkoutContent>
                
                                        <WorkoutLike>
                                            <AntDesign name="hearto" color="#000" size={18} />
                                        </WorkoutLike>
                                    </WorkoutDetail>
                                </WorkoutItem>
                            </Swipeable>
                        ))}
                    </View>
                    
                    :
                    
                    null
            ))}
        </Container>
    )
}

const styles = StyleSheet.create({
    animatedButton: {
        justifyContent: 'center',
        marginTop: 15,
        height: 90
    }
});