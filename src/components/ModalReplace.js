import React, { useState } from 'react';

import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { Modal } from 'react-native';
import { grayish, secondary, bold, semibold, regular, lightgray } from '../globals';

const Container = styled.View`
    flex: 1;
    background-color: rgba(0, 0, 0, .1);
    justify-content: flex-end;
`;
const Area = styled.View`
    background-color: #fff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    width: 100%;
    height: 75%;
    padding: 0 35px;
`;

const ButtonClose = styled.TouchableOpacity`
    background-color: ${grayish};
    align-self: center;
    width: 50px;
    height: 4px;
    border-radius: 2px;
    margin-top: 5px;
`;

const Header = styled.View`
    flex-direction: row;
    margin-top: 50px;
`;
const Title = styled.Text`
    color: ${props=>props.color};
    font-family: ${props=>props.ff};
    font-size: 35px;
    margin-right: 15px;
`;

const FilterArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
`;
const Filter = styled.TouchableOpacity`
    background-color: ${props=>props.bg};
    padding: 10px 15px;
    border-radius: 10px;
`;
const FilterText = styled.Text`
    color: ${props=>props.color};
    font-family: ${bold};
`;

const WorkoutArea = styled.View`
`;
const WorkoutItem = styled.TouchableOpacity`
    background-color: #fff;
    justify-content: center;
    height: 90px;
    border-radius: 10px;
    margin-top: 15px;
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

let filterdata = ['liked', 'recent', 'recommended'];

export default ModalReplace = ({modalVisible, setModalVisible}) => {
    const [filter, setFilter] = useState('liked');

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <Container>
                <Area>
                    <ButtonClose onPress={() => setModalVisible(false)} />

                    <Header>
                        <Title ff={bold} color={secondary}>Replace</Title>
                        <Title ff={regular} color={grayish}>with</Title>
                    </Header>

                    <FilterArea>
                        {filterdata.map((item, k) => (
                            <Filter bg={filter === item ? lightgray : 'transparent'} key={k} onPress={() => setFilter(item)}>
                                <FilterText color={filter === item ? secondary : grayish}>{item}</FilterText>
                            </Filter>
                        ))}
                    </FilterArea>

                    <WorkoutArea>
                        <WorkoutItem>
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
                    </WorkoutArea>
                </Area>
            </Container>
        </Modal>
    )
}