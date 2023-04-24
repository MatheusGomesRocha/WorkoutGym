import React, { useState } from 'react';

import {
    Container,

    FilterArea,
    Filter,
    FilterText,

    WorkoutArea,
    Workout,
    WorkoutImg,
    WorkoutInfo,
    WorkoutTitle,
    WorkoutDetails,

    Texto
} from './styles';

export default () => {
    const [filter, setFilter] = useState('');

    return(
        <Container>
            <FilterArea horizontal>
                <Filter bg={filter === 'peito' ? '#FE6F32' : 'transparent'} bc={filter === 'peito' ? '#FE6F32' : '#ccc'} onPress={() => setFilter('peito')}>
                    <FilterText color={filter === 'peito' ? '#fff' : '#aaa'}>Peito</FilterText>
                </Filter>

                <Filter bg={filter === 'costas' ? '#FE6F32' : 'transparent'} bc={filter === 'costas' ? '#FE6F32' : '#ccc'} onPress={() => setFilter('costas')}>
                    <FilterText color={filter === 'costas' ? '#fff' : '#aaa'}>Costas</FilterText>
                </Filter>

                <Filter bg={filter === 'biceps' ? '#FE6F32' : 'transparent'} bc={filter === 'biceps' ? '#FE6F32' : '#ccc'} onPress={() => setFilter('biceps')}>
                    <FilterText color={filter === 'biceps' ? '#fff' : '#aaa'}>Biceps</FilterText>
                </Filter>

                <Filter bg={filter === 'triceps' ? '#FE6F32' : 'transparent'} bc={filter === 'triceps' ? '#FE6F32' : '#ccc'} onPress={() => setFilter('triceps')}>
                    <FilterText color={filter === 'triceps' ? '#fff' : '#aaa'}>Triceps</FilterText>
                </Filter>

                <Filter style={{marginRight: 15}} bg={filter === 'ombro' ? '#FE6F32' : 'transparent'} bc={filter === 'ombro' ? '#FE6F32' : '#ccc'} onPress={() => setFilter('ombro')}>
                    <FilterText color={filter === 'ombro' ? '#fff' : '#aaa'}>Ombro</FilterText>
                </Filter>
            </FilterArea>

            <WorkoutArea>
                <Workout>
                    <WorkoutImg></WorkoutImg>

                    <WorkoutInfo>
                        <WorkoutTitle>Elevação Pélvica no Banco</WorkoutTitle>

                        <WorkoutDetails>10 min | Intermediário</WorkoutDetails>
                    </WorkoutInfo>
                </Workout>

                <Workout>
                    <WorkoutImg></WorkoutImg>

                    <WorkoutInfo>
                        <WorkoutTitle>Elevação Pélvica no Banco</WorkoutTitle>

                        <WorkoutDetails>10 min | Intermediário</WorkoutDetails>
                    </WorkoutInfo>
                </Workout>

                <Workout>
                    <WorkoutImg></WorkoutImg>

                    <WorkoutInfo>
                        <WorkoutTitle>Elevação Pélvica no Banco</WorkoutTitle>

                        <WorkoutDetails>10 min | Intermediário</WorkoutDetails>
                    </WorkoutInfo>
                </Workout>

                <Workout>
                    <WorkoutImg></WorkoutImg>

                    <WorkoutInfo>
                        <WorkoutTitle>Elevação Pélvica no Banco</WorkoutTitle>

                        <WorkoutDetails>10 min | Intermediário</WorkoutDetails>
                    </WorkoutInfo>
                </Workout>

                <Workout>
                    <WorkoutImg></WorkoutImg>

                    <WorkoutInfo>
                        <WorkoutTitle>Elevação Pélvica no Banco</WorkoutTitle>

                        <WorkoutDetails>10 min | Intermediário</WorkoutDetails>
                    </WorkoutInfo>
                </Workout>

                <Workout>
                    <WorkoutImg></WorkoutImg>

                    <WorkoutInfo>
                        <WorkoutTitle>Elevação Pélvica no Banco</WorkoutTitle>

                        <WorkoutDetails>10 min | Intermediário</WorkoutDetails>
                    </WorkoutInfo>
                </Workout>
            </WorkoutArea>
        </Container>
    )
}