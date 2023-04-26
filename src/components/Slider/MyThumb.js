import React, { useRef } from 'react';

import { Animated, View, Text, StyleSheet } from 'react-native';
import { bold } from '../../globals';

export const MyThumb = ({ slideValue, opacityThumb }) => {
    return(
        <Animated.View style={[styles.thumb, {
                opacity: opacityThumb,
                height: opacityThumb.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 40],
                }),
                width: opacityThumb.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 40],
                }),
            }]}>
            <Animated.View style={{opacity: opacityThumb}}>
                <View style={styles.line}></View>
                <Text style={styles.value}>{slideValue}</Text>
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    thumb: {
        backgroundColor: '#fff',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            elevation: 20,
            borderRadius: 3,
    },

    line: {
        backgroundColor: 'red',
        width: 15,
        height: 3,
        borderRadius: 2,
    },

    value: {
        fontFamily: bold,
        fontSize: 18,
        color: '#000',
    }
});