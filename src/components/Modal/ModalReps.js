import React, { useState, useRef, useEffect } from 'react';

import { Modal, FlatList, useWindowDimensions, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styled from 'styled-components/native';
import { bold, grayFont, grayish, light, primary, secondary, semibold } from '../../globals';
import { lightgray } from '../../globals';

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
    padding: 40px 0;
`;
const Header = styled.View`
    margin-top: 20px;
    padding: 0 40px;
`;
const BigText = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 35px;
`;
const SmallText = styled.Text`
    color: ${grayFont};
    font-family: ${semibold};
    font-size: 16px;
`;
const Button = styled.TouchableOpacity`
    background-color: ${props=>props.bg};
    flex-direction: row;
    align-items: center;
    margin: 0 40px;
    height: 60px;
    border-radius: 10px;
`;
const ButtonText = styled.Text`
    color: ${props=>props.color};
    font-family: ${semibold};
    text-align: center;
    font-size: 18px;
    width: 100%;
`;

let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export default function ModalReps ({ modalVisible, setModalVisible }) {
    const [currentValue, setCurrentValue] = useState(0);

    const valueRef = useRef();
    const window = useWindowDimensions();

    let valueW = Math.round(window.width / 5);
    let offsetW = Math.round((window.width - valueW) / 2);

    const AnimatedItem = ({item}) => {
        const font = useSharedValue(16);
        const height = useSharedValue(20);
        const offsetY = useSharedValue(0);

        useEffect(() => {
            font.value = withTiming(50, {
                duration: 500,
            });
            height.value = withTiming(40, {
                duration: 500,
            });
            offsetY.value = withTiming(-63, {
                duration: 500,
            });
        }, [currentValue])

        const animatedItem = useAnimatedStyle(() => {
            return{
                width: valueW,
                alignItems: 'center',
                transform: [
                    {translateY: currentValue === item ? offsetY.value : 0}
                ],
            }
        })
        const animatedText = useAnimatedStyle(() => {
            return{
                fontSize: currentValue === item ? font.value : 16,
                color: currentValue === item ? secondary : grayFont,
                fontFamily: bold,
            }
        })
        const animatedLine = useAnimatedStyle(() => {
            return{
                backgroundColor: currentValue === item ? secondary : grayFont,
                width: 2,
                height: currentValue === item ? height.value : 20,
                marginTop: 10,
            }
        })

        return (
            <Animated.View style={animatedItem}>
                <Animated.Text style={animatedText}>{item}</Animated.Text>
                <Animated.View style={animatedLine} />
            </Animated.View>
        )
    }

    function scrollEndAction (e) {
        let posX = e.nativeEvent.contentOffset.x;
        let targetValue = Math.round(posX / valueW) + 1;
        setCurrentValue(targetValue);
    }

    function handleContinue () {
        setModalVisible(false);
        setCurrentValue(0);
    }

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
            >
                <Container>
                    <Area>
                        <Header>
                            <BigText>Quantas</BigText>
                            <SmallText>repetições você fez?</SmallText>
                        </Header>

                        <FlatList 
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={scrollEndAction}
                            keyExtractor={item => item}
                            ref={valueRef}
                            horizontal
                            contentContainerStyle={{paddingTop: 120, paddingHorizontal: offsetW, paddingBottom: 10}}
                            data={values}
                            renderItem={({item, k}) => 
                                <AnimatedItem index={k} item={item} />
                            }
                        />

                        <Button onPress={handleContinue}  bg={currentValue !== 0 ? primary : '#efefef'}>
                            <ButtonText color={currentValue !== 0 ? '#fff' : secondary}>Continue</ButtonText>
                            <AntDesign style={{right: 40}} name="arrowright" color={currentValue !== 0 ? '#fff' : secondary} size={18} />
                        </Button>
                    </Area>
                </Container>
        </Modal>
    )
}