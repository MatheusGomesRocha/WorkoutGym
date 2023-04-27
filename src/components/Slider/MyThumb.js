import React from 'react';

import styled from 'styled-components/native';
import { Animated, StyleSheet } from 'react-native';

import { bold } from '../../globals';

const Line = styled.View`
    background-color: red;
    width: 12px;
    height: 3px;
    border-radius: 2px;
`;
const Value = styled.Text`
    color: #000;
    font-family: ${bold};
    font-size: 13px;
`;

export const MyThumb = ({ slideValue, opacityThumb }) => {
    return(
        <Animated.View style={[styles.thumb, {
                opacity: opacityThumb,
                height: opacityThumb.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 25],
                }),
                width: opacityThumb.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 25],
                }),
            }]}>
            <Animated.View style={{opacity: opacityThumb}}>
                <Line />
                <Value>{slideValue}</Value>
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
});