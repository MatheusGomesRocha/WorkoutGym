import React, { useState, useEffect } from 'react';

import Feather from 'react-native-vector-icons/Feather';
import Video from 'react-native-video';

import { useWindowDimensions, Vibration } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming, withDelay } from 'react-native-reanimated';

import { primary, primaryTransparent } from '../../globals';
import ModalReps from '../../components/Modal/ModalReps';
import videoteste from '../../assets/videos/triceps-coice.mp4';

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
    VideoArea,
    ContentIndex,
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

    WorkoutPadding,
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
    const [timer, setTimer] = useState(5);
    
    const window = useWindowDimensions();

    const [width, setWidth] = useState(window.width / 5);

    const relaxScreen = useSharedValue(1000);
    const contentScreen = useSharedValue(0);

    const AnimatedContent = useAnimatedStyle(() => {
        return {
            transform: [
                {translateX: contentScreen.value}
            ],
            flex: 1,
        }
    })

    const AnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {translateY: relaxScreen.value},
            ],
            flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'space-between',
        }
    })

    useEffect(() => {
        if(completeSet) {
            relaxScreen.value = withDelay(50, withTiming(0, {duration: 500}));
            contentScreen.value = withTiming(-1000);

            if(timer === 0) {
                relaxScreen.value = withTiming(1000, {
                    duration: 500,
                });
            }
        } else {
            contentScreen.value = withTiming(0);
        }
    }, [completeSet, timer])

    const Timer = () => {
        useEffect(() => {
            if(completeSet) {
                let interval = setInterval(() => {
                    setTimer(timer => timer > 0 ? timer - 1 : 0);
                }, 1000);

                if(timer === 0) {
                    setTimeout(() => {
                        setCompleteSet(false);
                        setTimer(5);
                        Vibration.vibrate(3000);
                    }, 500)
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

            <Content>
                {!completeSet ? 
                    <Animated.View style={AnimatedContent}>
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

                        <ContentOver>
                            <VideoArea>
                                <Video source={videoteste}
                                    repeat={true}
                                    resizeMode="stretch"
                                    style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}
                                />
                            </VideoArea>

                            <ContentIndex>
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

                                <WorkoutPadding>
                                    <WorkoutButton onPress={() => setModalVisible(true)}>
                                        <WorkoutButtonText>Completado</WorkoutButtonText>
                                    </WorkoutButton>
                                </WorkoutPadding>
                            </ContentIndex>
                        </ContentOver>
                    </Animated.View>
                    :
                    <Animated.View style={AnimatedStyle}>
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
                    </Animated.View>
                }
            </Content>

            <ModalReps completeSet={completeSet} setCompleteSet={setCompleteSet} modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </Container>
    )
}