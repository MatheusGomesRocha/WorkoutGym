import React, { useState, useEffect } from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native';

import AnimatedHeader from '../../components/AnimatedHeader';
import Workouts from '../../components/Wokouts';

import {
    Container,

    Button,
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
    const [filter, setFilter] = useState('Biceps');
    const [offset, setOffset] = useState(0);

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <NewWorkout />
        })
    }, [])

    const NewWorkout = () => {
        return(
            <Button>
                <AntDesign name="pluscircleo" color="#000" size={20} />
            </Button>
        )
    }
    
    function headerFixed (event) {
        if(event.contentOffset.y > 0) {
            setOffset(event.contentOffset.y);
        } else {
            setOffset(0);
        }
    };

    return(
        <Container>
            {/* <AnimatedHeader filter={filter} setFilter={setFilter} contentOffset={offset} /> */}

            <Workouts filter={filter} setFilter={setFilter} />
        </Container>
    )
}