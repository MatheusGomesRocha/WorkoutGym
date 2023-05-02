import React, { useState, useRef } from 'react';

import {
    Container,

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
} from './styles';

import AntDesign from 'react-native-vector-icons/AntDesign';

import AnimatedHeader from '../../components/AnimatedHeader';

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

    const [offset, setOffset] = useState(0);
    
    function headerFixed (event) {
        if(event.contentOffset.y > 0) {
            setOffset(event.contentOffset.y);
        } else {
            setOffset(0);
        }
    };

    const DATA = [
        {
          title: 'Main dishes',
          data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
          title: 'Sides',
          data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
          title: 'Drinks',
          data: ['Water', 'Coke', 'Beer'],
        },
        {
          title: 'Desserts',
          data: ['Cheese Cake', 'Ice Cream'],
        },
      ];

    return(
        <Container>
            <AnimatedHeader contentOffset={offset} />

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