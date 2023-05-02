import React, { useState, useRef } from 'react';

import AnimatedHeader from '../../components/AnimatedHeader';
import Workouts from '../../components/Wokouts';

import { Text } from 'react-native';
import {
    Container,

    ScrollContent,
} from './styles';

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
    const [filter, setFilter] = useState('Peito');
    const [isFocus, setIsFocus] = useState(false);

    const [offset, setOffset] = useState(0);
    
    function headerFixed (event) {
        if(event.contentOffset.y > 0) {
            setOffset(event.contentOffset.y);
        } else {
            setOffset(0);
        }
    };

    return(
        <Container>
            <AnimatedHeader contentOffset={offset} />

            <ScrollContent onScroll={(event) => headerFixed(event.nativeEvent)}>
                <Workouts />
            </ScrollContent>
        </Container>
    )
}