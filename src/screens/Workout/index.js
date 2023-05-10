import React from 'react';

import Entypo from 'react-native-vector-icons/Entypo';

import {
    Container,
    AddButton
} from './styles';

export default ({ navigation }) => {
    return(
        <Container>
            <AddButton onPress={() => navigation.navigate('newworkout')}>
                <Entypo name="plus" color="#aaa" size={30} />
            </AddButton>
        </Container>
    )
}