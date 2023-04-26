import React, { useState, useRef } from 'react';

import {
    Container,
    ScrollTeste,
    Text,
    SlideView,
} from './styles';

import { Animated, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { bold, regular, semibold } from '../../globals';

import { MyThumb } from '../../components/Slider/MyThumb';
import { MyMarker } from '../../components/Slider/MyMarker';


export default () => {
    const opacity = useRef(new Animated.Value(1)).current;
    const translation = useRef(new Animated.Value(0)).current;
    const opacityThumb = useRef(new Animated.Value(0)).current;

    const [slideValue, setSlideValue] = useState(5);
    let window = useWindowDimensions();
    
    function headerFixed (event) {
        if(event.contentOffset.y > 0) {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false,
            }).start();
    
            Animated.timing(opacity, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false,
            }).start();
    
            Animated.timing(translation, {
                toValue: 100,
                duration: 100,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(opacity, {
                toValue: 1,
                duration: 100,
                useNativeDriver: false,
            }).start();
    
            Animated.timing(opacity, {
                toValue: 1,
                duration: 100,
                useNativeDriver: false,
            }).start();
    
            Animated.timing(translation, {
                toValue: 0,
                duration: 100,
                useNativeDriver: false,
            }).start();
        }
    };

    function showThumb (value) {
        Animated.spring(opacityThumb, {
            toValue: value,
            duration: 100,
            friction: 4,
            tension: 15,
            useNativeDriver: false,
        }).start();
    }

    const headerStyle = {
        height: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [60, 200],
        }),
    };

    const textStyle = {
        opacity: opacity,
    };

    const muscleWidth = {
        width: translation.interpolate({
            inputRange: [0, 100],
            outputRange: ['40%', '100%'],
        }),
        left: translation.interpolate({
            inputRange: [0, 100],
            outputRange: [0, -window.width / 2],
        }),
        marginLeft: translation.interpolate({
            inputRange: [0, 100],
            outputRange: [10, 0],
        }),
    };

    const muscleStyle = {
        opacity: opacity,
    };

    return(
        <Container>
            <Animated.View style={[styles.header, headerStyle]}>
                <Animated.View style={[styles.left, textStyle]}>
                    <Animated.Text style={styles.bigText}>New</Animated.Text>
                    <Animated.Text style={styles.smallText}>workout</Animated.Text>
                </Animated.View>

                <Animated.View style={[styles.muscleArea, muscleWidth]}>
                    <View style={{alignItems: 'flex-start'}}>
                        <Animated.Text style={[styles.muscle, muscleStyle]}>Muscle</Animated.Text>

                        <Animated.View style={[styles.muscleSelect]}>
                            <Animated.Text style={[styles.muscleName]}>Quadriceps</Animated.Text>
                            <FontAwesome style={{marginLeft: 10}} name="angle-down" color="#000" size={15} />  
                        </Animated.View>
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
                renderAboveThumbComponent={() => <MyThumb slideValue={slideValue} opacityThumb={opacityThumb} />}
                onSlidingStart={() => showThumb(1)}
                onSlidingComplete={() => showThumb(0)}
            />

            <ScrollTeste onScroll={(event) => headerFixed(event.nativeEvent)}>
            </ScrollTeste>
        </Container>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
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