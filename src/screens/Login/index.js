import React from "react";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { StatusBar } from "react-native";

import { secondary } from "../../globals";

import {
    Container,

    TopColored,
    LogoArea,

    Content,
    Title,
    Text,

    GetStartedButton,
    GetStartedText
} from './styles';

export default () => {
    return(
        <Container>
            <StatusBar backgroundColor={secondary} barStyle={'light-content'} />

            <TopColored>
                <LogoArea></LogoArea>
            </TopColored>

            <Content>
                <Title>WorkoutGym</Title>

                <Text>Plataforma para construir um novo jeito de se exercitar</Text>

                <GetStartedButton>
                    <GetStartedText>Comece agora grátis</GetStartedText>
                    <FontAwesome5 style={{marginTop: 2}} name="angle-right" color="#fff" size={14} /> 
                </GetStartedButton>
            </Content>
        </Container>
    )
}