import React, { useState, useEffect } from 'react';

import Feather from 'react-native-vector-icons/Feather';

import { useWindowDimensions, Vibration } from 'react-native';

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

    RelaxWave,
    RelaxText, 

    RelaxTimer,
    RelaxTimerNumber,
    RelaxTimerText,
} from './styles';

export default function CurrentWorkout () {
    const [modalVisible, setModalVisible] = useState(false);
    const [completeSet, setCompleteSet] = useState(false);
    const [timer, setTimer] = useState(10);
    
    const window = useWindowDimensions();

    const [width, setWidth] = useState(window.width / 5);

    const Timer = () => {
        useEffect(() => {
            if(completeSet) {
                let interval = setInterval(() => {
                    setTimer(timer => timer > 0 ? timer - 1 : 0);
                }, 1000);

                if(timer === 0) {
                    setCompleteSet(false);
                    setTimer(10);
                    Vibration.vibrate(3000);
                }
    
                return () => clearInterval(interval);
    
                // setTimeout(() => {
                //     setCompleteSet(false);
                //     setTimer(60);
                // }, 60000);
        
            }
        }, [completeSet]);

        return <RelaxTimerNumber>{timer}</RelaxTimerNumber>;
    }
    
    function handleProgressLine () {
        // Calcular a Largura da linha baseada em quantas séries foram passadas e quantas restam

        setWidth(width => width + window.width / 5);
    }

    return(
        <Container>
            <ProgressLine w={width+'px'} />

            {!completeSet ?
                <Header>
                    <WorkoutInfo>
                        <WorkoutInfoNumber>5</WorkoutInfoNumber>
                        <WorkoutInfoText>Séries restantes</WorkoutInfoText>
                    </WorkoutInfo>

                    <WorkoutFinish onPress={handleProgressLine}>
                        <Feather name="flag" color={primary} size={18} />
                        <WorkoutFinishText>Finalizar série</WorkoutFinishText>
                    </WorkoutFinish>
                </Header>
            : 
                null
            }

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

                        <RelaxWave>
                            <RelaxText>Respire fundo</RelaxText>
                        </RelaxWave>

                        <RelaxTimer>
                            <Timer />
                            <RelaxTimerText>Segundos restantes</RelaxTimerText>
                        </RelaxTimer>
                    </RelaxArea>
                }
            </Content>

            <ModalReps completeSet={completeSet} setCompleteSet={setCompleteSet} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Container>
    )
}