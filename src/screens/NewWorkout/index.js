import React, { useState, useRef } from 'react';

import {
    Container,
    ScrollTeste,
    Text,
} from './styles';

import { bold, regular, semibold } from '../../globals';

import { Animated, StyleSheet, useWindowDimensions, Easing } from 'react-native';

export default () => {
    const opacity = useRef(new Animated.Value(1)).current;
    const translation = useRef(new Animated.Value(0)).current;
    
    let window = useWindowDimensions();
    window.width = window.width / 2 - 95;

    function headerFixed (event, EasingFunction) {
        if(event.contentOffset.y > 0) {
            Animated.timing(opacity, {
                toValue: 0,
                duration: 100,
                easing: Easing.linear,
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
                easing: Easing.linear,
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
            outputRange: ['20%', '100%'],
        }),
        marginRight: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 20],
        }),
    };

    const muscleStyle = {
        opacity: opacity,
    };

    const muscleMoviment = {
        left: translation.interpolate({
            inputRange: [0, 100],
            outputRange: [0, window.width],
        })
    };

    return(
        <Container>
                <Animated.View style={[styles.header, headerStyle]}>
                    <Animated.View style={[styles.left, textStyle]}>
                        <Animated.Text style={styles.bigText}>New</Animated.Text>
                        <Animated.Text style={styles.smallText}>workout</Animated.Text>
                    </Animated.View>

                    <Animated.View style={[styles.muscleArea, muscleWidth]}>
                        <Animated.Text style={[styles.muscle, muscleStyle]}>Muscle</Animated.Text>

                        <Animated.View>
                            <Animated.Text style={[styles.muscleName, muscleMoviment]}>Legs</Animated.Text>
                        </Animated.View>
                    </Animated.View>
                </Animated.View>

                <ScrollTeste onScroll={(event) => headerFixed(event.nativeEvent)}>

                <Text>Olá mundo22222</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
                <Text>Olá mundo</Text>
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
        paddingRight: 80,
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
        marginLeft: 'auto',
    },

    muscle: {
        color: '#aaa',
        fontFamily: semibold,
        fontSize: 12,
        width: 100,
        textAlign: 'center',
    },

    muscleName: {
        color: '#000',
        textAlign: 'center',
        fontFamily: semibold,
        fontSize: 18,
        width: 100,
    }
});