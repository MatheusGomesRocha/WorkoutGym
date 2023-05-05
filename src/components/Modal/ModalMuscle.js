import React from 'react';

import styled from 'styled-components/native';
import { Modal } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

import { lightgray, secondary, semibold } from '../../globals';

let muscles = ['Peito', 'Costas', 'Biceps', 'Triceps', 'Ombro', 'Quadriceps', 'Posterior', 'Gluteo', 'Abdomen'];

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
const MuscleItem = styled.TouchableHighlight`
    border-color: ${lightgray};
    border-bottom-width: 1px;
    padding: 12px 10px;
`;
const Muscle = styled.Text`
    font-family: ${semibold};
    color: ${secondary};
`;

export default ModalMuscle = ({ modalVisible, setModalVisible, filter, setFilter }) => {
    const color = useSharedValue(100);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: 'red',
            backgroundPosition: 50
        }
    })

    function handleFilter(value) {
        setFilter(value);

        color.value = withSpring(50);
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
                        <Animated.View style={[animatedStyle]} key={k}>
                            <MuscleItem>
                                <Muscle>{item}</Muscle>
                            </MuscleItem>
                        </Animated.View>
                    ))}
                </Area>
            </Container>
        </Modal>
    )
}