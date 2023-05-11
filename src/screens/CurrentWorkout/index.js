import React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import { useWindowDimensions } from 'react-native';

import { primary } from '../../globals';

import {
    Container,

    Header,
    ProgressLine,
    WorkoutInfo,
    WorkoutInfoNumber,
    WorkoutInfoText,
    WorkoutFinish,
    WorkoutFinishText,

    Content,
    ContentOver,
    ContentInfo,
    ContentInfoLeft,
    ContentInfoText,
    ContentInfoLine,
    ContentInfoRight,
    ContentInfoNumber,
    ContentInfoSmallText,

    NextWorkout,
    NextText,
    NextName,
    NextMiniature,

    WorkoutButton,
    WorkoutButtonText
} from './styles';

export default function CurrentWorkout () {
    const window = useWindowDimensions();

    function handleProgressLine () {
        // Calcular a Largura da linha baseada em quantas séries foram passadas e quantas restam
    }

    return(
        <Container>
            <Header>
                <ProgressLine w={window.width / 5 +'px'} />

                <WorkoutInfo>
                    <WorkoutInfoNumber>5</WorkoutInfoNumber>
                    <WorkoutInfoText>Séries restantes</WorkoutInfoText>
                </WorkoutInfo>

                <WorkoutFinish>
                    <Feather name="flag" color={primary} size={18} />
                    <WorkoutFinishText>Finalizar treino</WorkoutFinishText>
                </WorkoutFinish>
            </Header>

            <Content>
                <ContentOver>
                    <ContentInfo>
                        <ContentInfoLeft>
                            <ContentInfoText>Rosca direta</ContentInfoText>
                        </ContentInfoLeft>

                        <ContentInfoLine />

                        <ContentInfoRight>
                            <ContentInfoNumber>15</ContentInfoNumber>
                            <ContentInfoSmallText>Vezes</ContentInfoSmallText>
                        </ContentInfoRight>
                    </ContentInfo>

                    <NextWorkout>
                        <NextText>Próximo</NextText>
                        <NextName>Rosca concentrada</NextName>
                        <NextMiniature></NextMiniature>
                    </NextWorkout>

                    <WorkoutButton>
                        <WorkoutButtonText>Completado</WorkoutButtonText>
                    </WorkoutButton>
                </ContentOver>
            </Content>
        </Container>
    )
}