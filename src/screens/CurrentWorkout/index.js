import React, { useState, useEffect } from 'react';

import Feather from 'react-native-vector-icons/Feather';

import { useWindowDimensions } from 'react-native';

import { primary } from '../../globals';
import ModalReps from '../../components/Modal/ModalReps';

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
    WorkoutButtonText,

    RelaxArea,
    RelaxTitle,
    RelaxBold,
    RelaxSemiBold,

    RelaxText, 

    RelaxTimer,
    RelaxTimerNumber,
    RelaxTimerText,
} from './styles';

export default function CurrentWorkout () {
    const [modalVisible, setModalVisible] = useState(false);
    const [completeSet, setCompleteSet] = useState(false);
    const [timer, setTimer] = useState(60);
    
    const window = useWindowDimensions();
    
    const [width, setWidth] = useState(window.width / 5);

    // useEffect(() => {
    //     let interval = setInterval(() => {
    //         setTimer(timer => timer > 0 ? timer - 1 : 0);
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, [completeSet]);

    function handleProgressLine () {
        // Calcular a Largura da linha baseada em quantas séries foram passadas e quantas restam

        setWidth(width => width + window.width / 5);
    }

    return(
        <Container>
            <Header>
                <ProgressLine w={width+'px'} />

                <WorkoutInfo>
                    <WorkoutInfoNumber>5</WorkoutInfoNumber>
                    <WorkoutInfoText>Séries restantes</WorkoutInfoText>
                </WorkoutInfo>

                <WorkoutFinish onPress={handleProgressLine}>
                    <Feather name="flag" color={primary} size={18} />
                    <WorkoutFinishText>Finalizar treino</WorkoutFinishText>
                </WorkoutFinish>
            </Header>

            <Content>
                {!completeSet ? 
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

                        <WorkoutButton onPress={() => setModalVisible(true)}>
                            <WorkoutButtonText>Completado</WorkoutButtonText>
                        </WorkoutButton>
                    </ContentOver>
                    :
                    <RelaxArea>
                        <RelaxTitle>
                            <RelaxBold>Relaxe,</RelaxBold>
                            <RelaxSemiBold>Ande por aí</RelaxSemiBold>
                        </RelaxTitle>

                        <RelaxText>Inspire</RelaxText>

                        <RelaxTimer>
                            <RelaxTimerNumber>{timer}</RelaxTimerNumber>
                            <RelaxTimerText>Segundos restantes</RelaxTimerText>
                        </RelaxTimer>
                    </RelaxArea>
                }
            </Content>

            <ModalReps modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Container>
    )
}