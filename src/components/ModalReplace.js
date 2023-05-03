import React from 'react';

import styled from 'styled-components/native';
import { Modal, View, Text } from 'react-native';

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
`;
const Btn = styled.TouchableOpacity``;

export default ModalReplace = ({modalVisible, setModalVisible}) => {
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
                    <Btn onPress={() => setModalVisible(false)}>
                        <Text>Olá mundo</Text>
                    </Btn>
                </Area>
            </Container>
        </Modal>
    )
}