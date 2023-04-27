import React from 'react';

import styled from 'styled-components/native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet } from 'react-native';

const Marker = styled.View`
    background-color: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    shadow-color: '#000';
    elevation: 50;
    width: 25px;
    height: 25px;
    border-radius: 3px;
`;

export const MyMarker = () => {
    return(
        <Marker>
            <FontAwesome name="angle-left" size={15} color="#000" style={{marginRight: 5}} />
            <FontAwesome name="angle-right" size={15} color="#000" />
        </Marker>
    )
}
