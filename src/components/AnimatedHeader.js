import React, { useState } from 'react';

import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Slider } from '@miblanchard/react-native-slider';

import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, } from 'react-native-reanimated';

import { bold, regular, semibold } from '../globals';

import { MyThumb } from './Slider/MyThumb';
import { MyMarker } from './Slider/MyMarker';

const Container = styled.View`
    height: 213px;
`;
const DropdownButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;
const MuscleWrapped = styled.View`
    align-items: flex-start;
    margin-left: 10px;
`;
const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 180px;
`;
const Left = styled.View`
    border-right-color: #eee;
    border-right-width: 1px;
    padding-right: 50px;
`;
const BigText = styled.Text`
    color: #000;
    font-size: 35px;
    font-family: ${bold};
`;
const SmallText = styled.Text`
    color: #ccc;
    font-family: ${regular};
    font-size: 35px;
    margin-top: -12px;
`; 
const MuscleArea = styled.View`
    align-items: center;
    margin-left: 20px;
`;
const Muscle = styled.Text`
    color: #aaa;
    font-family: ${semibold};
    text-align: left;
    font-size: 12px;
`;
const MuscleSelect = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
const MuscleName = styled.Text`
    color: #000;
    text-align: center;
    font-family: ${semibold};
    font-size: 18px;
    margin-right: auto;
`;

export default function AnimatedHeader ({ contentOffset }) {
    const [slideValue, setSlideValue] = useState(5);

    let window = useWindowDimensions();

    const headerSize = useSharedValue(200);
    const offsetLeft = useSharedValue(0);
    const muscleWidth = useSharedValue(45);
    const muscleLeft = useSharedValue(0);
    const offsetTop = useSharedValue(0);

    // if(contentOffset > 0) {
    //     headerSize.value = withSpring(100);
    //     offsetLeft.value = withSpring(-300)
    //     muscleWidth.value = withSpring(100);
    //     muscleLeft.value = withSpring(-window.width / 2);
    //     offsetTop.value = withSpring(-200);
    // } else {
    //     headerSize.value = withSpring(200);
    //     offsetLeft.value = withSpring(0);
    //     muscleWidth.value = withSpring(40, {
    //         duration: 100
    //     });
    //     muscleLeft.value = withSpring(0);
    //     offsetTop.value = withSpring(0);
    // }

    function showThumb (value) {
        // Animated.spring(opacityThumb, {
        //     toValue: value,
        //     duration: 100,
        //     friction: 4,
        //     tension: 15,
        //     useNativeDriver: false,
        // }).start();
    }
    
    // const animatedHeader = useAnimatedStyle(() => {
    //     return {
    //         height: headerSize.value,
    //     };
    // });

    // const animatedLeft = useAnimatedStyle(() => {
    //     return {
    //         transform: [
    //             { translateX: offsetLeft.value },
    //         ]
    //     }
    // })

    // const muscleArea = useAnimatedStyle(() => {
    //     return {
    //         width: muscleWidth.value+'%',
    //         left: muscleLeft.value,
    //     }
    // })

    // const muscleText = useAnimatedStyle(() => {
    //     return {
    //         transform: [
    //             { translateY: offsetTop.value }
    //         ]
    //     }
    // })

    return (
        <Container>
            <Header>
                <Left>
                    <BigText>New</BigText>
                    <SmallText>workout</SmallText>
                </Left>

                <MuscleArea>
                    <MuscleWrapped>
                        <Muscle>Muscle</Muscle>
                        
                        <DropdownButton onPress={() => console.log('olá mundo')}>
                            <MuscleName>Quadriceps</MuscleName>
                            <FontAwesome style={{marginLeft: 10}} name="angle-down" color="#000" size={15} />  
                        </DropdownButton>
                    </MuscleWrapped>
                </MuscleArea>
            </Header>

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
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
        zIndex: 999,
        height: 150,
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