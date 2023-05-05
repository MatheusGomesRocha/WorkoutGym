import React from 'react';

import styled from 'styled-components/native';
import { Modal } from 'react-native';

import { primary, lightgray, secondary, semibold } from '../../globals';

const Container = styled.TouchableOpacity`
    flex: 1;
    background-color: rgba(0, 0, 0, .1);
    align-items: center;
    justify-content: center;
`;
const Area = styled.View`
    background-color: #fff;
    width: 50%;
    border-radius: 5px;
`;
const MuscleItem = styled.TouchableOpacity`
    background-color: ${props=>props.bg};
    justify-content: center;
    align-items: center;
    border-color: ${lightgray};
    border-bottom-width: 1px;
    padding: 0 10px;
    height: 50px;
`;
const Muscle = styled.Text`
    font-family: ${semibold};
    color: ${props=>props.color};
`;

let muscles = ['Peito', 'Costas', 'Biceps', 'Triceps', 'Ombro', 'Quadriceps', 'Posterior', 'Gluteo', 'Abdomen'];

export default ModalMuscle = ({ modalVisible, setModalVisible, filter, setFilter }) => {
    function handleFilter(item) {
        setFilter(item);
        setModalVisible(false);
    }

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <Container onPress={() => setModalVisible(false)}>
                <Area>
                    {muscles.map((item, k) => (
                        <MuscleItem bg={item === filter ? primary : 'transparent'} onPress={() => handleFilter(item)} key={k}>
                            <Muscle color={item === filter ? '#fff' : secondary}>{item}</Muscle>
                        </MuscleItem>
                    ))}
                </Area>
            </Container>
        </Modal>
    )
}