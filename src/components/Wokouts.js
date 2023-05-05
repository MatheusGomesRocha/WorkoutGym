import React, { useState, useRef, useEffect } from 'react';

import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated, StyleSheet, ActivityIndicator } from 'react-native';

import { workouts } from '../json/workouts';
import { bold, primary, secondary, semibold } from '../globals';

import ModalReplace from './Modal/ModalReplace';

const Container = styled.View`
    padding: 0 25px;
`;
const WorkoutHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${props=>props.mTop};
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
    margin-top: 15px;
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
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 30px;
`;


export default function Workouts({ filter }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const offsetEdit = useRef(new Animated.Value(0)).current;
    const offsetDelete = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [filter]);

    function buttonPressedIn (value) {
        if(value === 0) {
            Animated.spring(offsetEdit, {
                toValue: 1,
                friction: 1,
                duration: 250,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.spring(offsetDelete, {
                toValue: 1,
                friction: 1,
                duration: 250,
                useNativeDriver: false,
            }).start();
        }
    }

    function buttonPressedOut (value) {
        if(value === 0) {
            setModalVisible(true);
            
            Animated.timing(offsetEdit, {
                toValue: 0,
                duration: 250,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(offsetDelete, {
                toValue: 0,
                duration: 250,
                useNativeDriver: false,
            }).start();
        }
    }

    const renderLeftActions = (progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [0, 170, 171],
          outputRange: [-200, 1, 1],
        });

        const styles = StyleSheet.create({
            swipe: {
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                height: 90,
                width: '45%',
                backgroundColor: "#fff",
            },

            itemEdit: {
                backgroundColor: secondary,
                width: offsetEdit.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 60],
                }),
                height: offsetEdit.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 60]
                }),
                borderRadius: 40,
                marginLeft: 30,
                
            },

            itemDelete: {
                backgroundColor: primary,
                width: offsetDelete.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 60],
                }),
                height: offsetDelete.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 60]
                }),
                borderRadius: 40,
                marginLeft: 20,
            }
        });
    
        return (
            <Animated.View style={[styles.swipe, {transform: [{translateX: trans}]}]}>
                <Animated.View style={[styles.itemEdit]}>
                    <SwipeItem onPressIn={() => buttonPressedIn(0)} onPressOut={() => buttonPressedOut(0)}>
                        <MaterialCommunityIcons color="#fff" size={25} name="find-replace" />
                    </SwipeItem>
                </Animated.View>

                <Animated.View style={[styles.itemDelete]}>
                    <SwipeItem onPressIn={() => buttonPressedIn(1)} onPressOut={() => buttonPressedOut(1)}>
                        <Feather color="#fff" size={25} name="x" />
                    </SwipeItem>
                </Animated.View>
            </Animated.View>
        );
    };

    return(
        <Container>
            {loading ?
                <ActivityIndicator style={{marginTop: 80}} size="large" color={primary} />
                :
                workouts.map((item, k) => (
                    item.muscle === filter ?
                        <Animated.View key={k}>
                            <WorkoutHeader mTop={k >= 1 ? '70px' : '20px'}>
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
                        </Animated.View>
                    :
    
                    null
                ))
            }

            <ModalReplace modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Container>
    )
}