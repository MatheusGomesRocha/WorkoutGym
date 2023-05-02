import React from 'react';

import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { workouts } from '../json/workouts';
import { bold, semibold } from '../globals';

const Container = styled.View`
    padding: 0 25px;
`;
const WorkoutHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 60px;
`;
const WorkoutBig = styled.Text`
    font-family: ${bold};
    color: #000;
    font-size: 24px;
`;
const WorkoutMuscle = styled.Text`
    font-family: ${semibold};
    color: #aaa;
    font-size: 16px;
`;
const WorkoutItem = styled.View`
    justify-content: center;
    margin-top: 15px;
    height: 90px;
`;
const WorkoutDetail = styled.View`
    flex-direction: row;
    align-items: center;
`;
const WorkoutMiniature = styled.View`
    background-color: #ccc;
    width: 70px;
    height: 70px;
    border-radius: 15px;
`;
const WorkoutContent = styled.View`
    margin-left: 30px;
`;
const WorkoutLine = styled.View`
    background-color: red;
    width: 20px;
    height: 3px;
    border-radius: 5px;
`;
const WorkoutName = styled.Text`
    font-family: ${bold};
    color: #000;
    margin-top: 7px;
    font-size: 16px;
`;
const WorkoutSeries = styled.Text`
    font-family: ${semibold};
    color: #aaa;
    margin-top: 7px;
`;
const WorkoutLike = styled.TouchableOpacity`
    margin-left: auto;
`;


export default function Workouts({ filter }) {
    return(
        <Container>
            {workouts.map((item, k) => (
                item.muscle === 'Biceps' ? 
                    <>
                        <WorkoutHeader>
                            <WorkoutBig>Treino {k+1}</WorkoutBig>
                            <WorkoutMuscle>{item.muscle}</WorkoutMuscle>
                        </WorkoutHeader>

                        {item.data.map((it, kk) => (
                            <WorkoutItem>
                                <WorkoutDetail>
                                    <WorkoutMiniature></WorkoutMiniature>
            
                                    <WorkoutContent>
                                        <WorkoutLine></WorkoutLine>
                                    
                                        <WorkoutName>{it.name}</WorkoutName>
            
                                        <WorkoutSeries>{`${it.sets}x${it.reps}`} vezes</WorkoutSeries>
                                    </WorkoutContent>
            
                                    <WorkoutLike>
                                        <AntDesign name="hearto" color="#000" size={18} />
                                    </WorkoutLike>
                                </WorkoutDetail>
                            </WorkoutItem>
                        ))}
                    </>
                    
                    :
                    
                    null
            ))}
        </Container>
    )
}