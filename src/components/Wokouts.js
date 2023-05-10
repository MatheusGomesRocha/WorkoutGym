import React, { useState, useRef, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';

import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Animated, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

import { workouts } from '../json/workouts';
import { bold, primary, secondary, semibold } from '../globals';

import ModalReplace from './Modal/ModalReplace';
import AnimatedHeader from './AnimatedHeader';

const Container = styled.View`
`;
const Workout = styled.View``;
const WorkoutHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
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
    background-color: ${props=>props.bg};
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 30px;
`;


export default function Workouts({ filter, setFilter }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(workouts);
    const [elevation, setElevation] = useState(0);

    const navigation = useNavigation();

    const offsetEdit = useRef(new Animated.Value(0)).current;
    const offsetDelete = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setLoading(true);

        setData(workouts.filter(item => item.muscle === filter));

        navigation.setOptions({
            title: <AnimatedHeader filter={filter} setFilter={setFilter} />
        })

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
                justifyContent: 'flex-end',
                marginTop: 15,
                height: 90,
                width: '35%',
                backgroundColor: "#fff",
            },
        });
    
        return (
            <Animated.View style={[styles.swipe, {transform: [{translateX: trans}]}]}>
                <SwipeItem bg={secondary}>
                    <MaterialCommunityIcons color="#fff" size={25} name="find-replace" />
                </SwipeItem>
            </Animated.View>
        );
    };

    const renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [0, 170, 171],
          outputRange: [90, 120, 121],
        });

        const styles = StyleSheet.create({
            swipe: {
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                height: 90,
                width: '35%',
                backgroundColor: "#fff",
            },
        });
    
        return (
            <Animated.View style={[styles.swipe, {transform: [{translateX: trans}]}]}>
                <SwipeItem bg={primary}>
                    <Feather color="#fff" size={25} name="trash" />
                </SwipeItem>
            </Animated.View>
        );
    };

    const WorkoutFather = ({ item }) => {
        return(
            <Workout>
                <WorkoutHeader>
                    <WorkoutBig>Treino {item.id}</WorkoutBig>
                    <WorkoutMuscle>{item.muscle}</WorkoutMuscle>
                </WorkoutHeader>

                <FlatList
                    style={{paddingHorizontal: 20}}
                    keyExtractor={item => item.id}
                    data={item.data}
                    renderItem={({item}) => 
                        <WorkoutChildren item={item} />
                    }
                />
            </Workout>
        )
    };

    const WorkoutChildren = ({ item }) => {
        return(
            <Swipeable 
                onSwipeableLeftOpen={() => setModalVisible(true)} 
                renderLeftActions={renderLeftActions}
                renderRightActions={renderRightActions}
            >
                <WorkoutItem onPress={() => navigation.navigate('workoutdetail')}>
                    <WorkoutDetail>
                        <WorkoutMiniature></WorkoutMiniature>

                        <WorkoutContent>
                            <WorkoutLine></WorkoutLine>
                        
                            <WorkoutName>{item.name}</WorkoutName>

                            <WorkoutSeries>{`${item.sets}x${item.reps}`} vezes</WorkoutSeries>
                        </WorkoutContent>

                        <WorkoutLike>
                            <AntDesign name="hearto" color="#000" size={18} />
                        </WorkoutLike>
                    </WorkoutDetail>
                </WorkoutItem>
            </Swipeable>
        )
    };

    return(
        <Container>
            {loading ?
                <ActivityIndicator style={{marginTop: 80}} size="large" color={primary} />
                :
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => 
                        <WorkoutFather item={item} />                
                    }
                />
            }

            <ModalReplace modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Container>
    )
}