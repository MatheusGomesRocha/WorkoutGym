import React from 'react';

import {
    Container,
    Text,
    Button,
} from './styles';

import { TouchableHighlight } from 'react-native'; 

export default ({ navigation }) => {
    return(
        <Container>
            <Button onPress={() => navigation.navigate('newworkout')}>
                <Text>Olá mundo 2</Text>
            </Button>
        </Container>
    )
}