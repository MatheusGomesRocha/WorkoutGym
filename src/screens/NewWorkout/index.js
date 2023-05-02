import React, { useState, useRef } from 'react';

import {
    Container,

    DropdownButton,

    ScrollContent,

    WorkoutItem,
    WorkoutHeader,
    WorkoutBig,
    WorkoutMuscle,
    WorkoutDetail,
    WorkoutMiniature,
    WorkoutContent,
    WorkoutLine,
    WorkoutName,
    WorkoutSeries,
    WorkoutLike,

    Teste
} from './styles';

import { StyleSheet, useWindowDimensions, View, TouchableHighlight, Text } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { Swipeable } from 'react-native-gesture-handler';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { bold, regular, semibold } from '../../globals';

import { MyThumb } from '../../components/Slider/MyThumb';
import { MyMarker } from '../../components/Slider/MyMarker';

const data = [
    { label: 'Peito', value: '1' },
    { label: 'Costas', value: '2' },
    { label: 'Biceps', value: '3' },
    { label: 'Triceps', value: '4' },
    { label: 'Posterior', value: '5' },
    { label: 'Panturrilha', value: '6' },
    { label: 'Quadriceps', value: '7' },
    { label: 'Ombro', value: '8' },
];

export default () => {
    const [open, setOpen] = useState(false);
    const [dropdownValue, setDropdownValue] = useState('Peito');
    const [isFocus, setIsFocus] = useState(false);

    const [slideValue, setSlideValue] = useState(5);

    let window = useWindowDimensions();

    const headerSize = useSharedValue(200);
    const offsetLeft = useSharedValue(0);
    const muscleWidth = useSharedValue(45);
    const muscleLeft = useSharedValue(0);
    const offsetTop = useSharedValue(0);
    
    function headerFixed (event) {
        if(event.contentOffset.y > 0) {
            headerSize.value = withTiming(100, {
                duration: 250,
            });
            offsetLeft.value = withSpring(-300)
            muscleWidth.value = withTiming(100, {
                duration: 250,
            });
            muscleLeft.value = withSpring(-window.width / 2);
            offsetTop.value = withTiming(-200, {
                duration: 250,
            });
        } else {
            headerSize.value = withTiming(200, {
                duration: 250,
            });
            offsetLeft.value = withSpring(0);
            muscleWidth.value = withTiming(40, {
                duration: 250
            });
            muscleLeft.value = withSpring(0);
            offsetTop.value = withTiming(0, {
                duration: 250,
            });
        }
    };

    const animatedHeader = useAnimatedStyle(() => {
        return {
            height: headerSize.value,
        };
    });

    const animatedLeft = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offsetLeft.value },
            ]
        }
    })

    const muscleArea = useAnimatedStyle(() => {
        return {
            width: muscleWidth.value+'%',
            left: muscleLeft.value,
        }
    })

    const muscleText = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: offsetTop.value }
            ]
        }
    })

    return(
        <Container>
            <Animated.View style={[styles.header, animatedHeader]}>
                <Animated.View style={[styles.left, animatedLeft]}>
                    <Animated.Text style={styles.bigText}>New</Animated.Text>
                    <Animated.Text style={styles.smallText}>workout</Animated.Text>
                </Animated.View>

                <Animated.View style={[styles.muscleArea, muscleArea]}>
                    <View style={{alignItems: 'flex-start', marginLeft: 10}}>
                        <Animated.Text style={[styles.muscle, muscleText]}>Muscle</Animated.Text>
                        
                        <DropdownButton onPress={() => console.log('olá mundo')}>
                            <Animated.Text style={[styles.muscleName]}>Quadriceps</Animated.Text>
                            <FontAwesome style={{marginLeft: 10}} name="angle-down" color="#000" size={15} />  
                        </DropdownButton>
                    </View>
                </Animated.View>
            </Animated.View>

            <Slider
                value={slideValue}
                onValueChange={e => setSlideValue(e[0])}
                minimumValue={0}
                maximumValue={10}
                step={1}
                minimumTrackTintColor='red'
                maximumTrackTintColor='#ccc'
                trackStyle={{backgroundColor: '#ccc', height: 1,}}
                renderThumbComponent={MyMarker}
                // renderAboveThumbComponent={() => <MyThumb slideValue={slideValue} opacityThumb={opacityThumb} />}
                onSlidingStart={() => showThumb(1)}
                onSlidingComplete={() => showThumb(0)}
            />

            <ScrollContent onScroll={(event) => headerFixed(event.nativeEvent)}>
                <WorkoutItem>
                    <WorkoutHeader>
                        <WorkoutBig>Treino 1</WorkoutBig>

                        <WorkoutMuscle>Glúteo e Pernas</WorkoutMuscle>
                    </WorkoutHeader>

                    <WorkoutDetail>
                         <WorkoutMiniature></WorkoutMiniature>

                         <WorkoutContent>
                            <WorkoutLine></WorkoutLine>
                        
                            <WorkoutName>Rosca Direta</WorkoutName>

                            <WorkoutSeries>4x15 vezes</WorkoutSeries>
                         </WorkoutContent>

                         <WorkoutLike>
                            <AntDesign name="hearto" color="#000" size={18} />
                         </WorkoutLike>
                    </WorkoutDetail>

                    <WorkoutDetail>
                         <WorkoutMiniature></WorkoutMiniature>

                         <WorkoutContent>
                            <WorkoutLine></WorkoutLine>
                        
                            <WorkoutName>Rosca Direta</WorkoutName>

                            <WorkoutSeries>4x15 vezes</WorkoutSeries>
                         </WorkoutContent>

                         <WorkoutLike>
                            <AntDesign name="hearto" color="#000" size={18} />
                         </WorkoutLike>
                    </WorkoutDetail>

                    <WorkoutDetail>
                         <WorkoutMiniature></WorkoutMiniature>

                         <WorkoutContent>
                            <WorkoutLine></WorkoutLine>
                        
                            <WorkoutName>Rosca Direta</WorkoutName>

                            <WorkoutSeries>4x15 vezes</WorkoutSeries>
                         </WorkoutContent>

                         <WorkoutLike>
                            <AntDesign name="hearto" color="#000" size={18} />
                         </WorkoutLike>
                    </WorkoutDetail>

                    <WorkoutDetail>
                         <WorkoutMiniature></WorkoutMiniature>

                         <WorkoutContent>
                            <WorkoutLine></WorkoutLine>
                        
                            <WorkoutName>Rosca Direta</WorkoutName>

                            <WorkoutSeries>4x15 vezes</WorkoutSeries>
                         </WorkoutContent>

                         <WorkoutLike>
                            <AntDesign name="hearto" color="#000" size={18} />
                         </WorkoutLike>
                    </WorkoutDetail>

                    <WorkoutDetail>
                         <WorkoutMiniature></WorkoutMiniature>

                         <WorkoutContent>
                            <WorkoutLine></WorkoutLine>
                        
                            <WorkoutName>Rosca Direta</WorkoutName>

                            <WorkoutSeries>4x15 vezes</WorkoutSeries>
                         </WorkoutContent>

                         <WorkoutLike>
                            <AntDesign name="hearto" color="#000" size={18} />
                         </WorkoutLike>
                    </WorkoutDetail>

                    <WorkoutDetail>
                         <WorkoutMiniature></WorkoutMiniature>

                         <WorkoutContent>
                            <WorkoutLine></WorkoutLine>
                        
                            <WorkoutName>Rosca Direta</WorkoutName>

                            <WorkoutSeries>4x15 vezes</WorkoutSeries>
                         </WorkoutContent>

                         <WorkoutLike>
                            <AntDesign name="hearto" color="#000" size={18} />
                         </WorkoutLike>
                    </WorkoutDetail>
                </WorkoutItem>
            </ScrollContent>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
        zIndex: 999,
    },

    left: {
        borderRightColor: '#eee',
        borderRightWidth: 1,
        paddingRight: 50,
    },

    bigText: {
        color: '#000',
        fontSize: 35,
        fontFamily: bold,
    },

    smallText: {
        color: '#ccc',
        fontSize: 35,
        fontFamily: regular,
        marginTop: -12,
    },

    muscleArea: {
        alignItems: 'center',
        marginLeft: 20,
    },

    muscle: {
        color: '#aaa',
        fontFamily: semibold,
        fontSize: 12,
        textAlign: 'left',
    },

    muscleSelect: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    muscleName: {
        color: '#000',
        textAlign: 'center',
        fontFamily: semibold,
        fontSize: 18,
        marginRight: 'auto',
    }
});