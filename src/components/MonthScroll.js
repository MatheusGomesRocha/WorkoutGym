import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components/native';
import { FlatList, useWindowDimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withDelay } from 'react-native-reanimated';

import { semibold } from '../globals';

const months = [
    {label: 'Janeiro', value: 1},
    {label: 'Fevereiro', value: 2},
    {label: 'Março', value: 3},
    {label: 'Abril', value: 4},
    {label: 'Maio', value: 5},
    {label: 'Junho', value: 6},
    {label: 'Julho', value: 7},
    {label: 'Agosto', value: 8},
    {label: 'Setembro', value: 9},
    {label: 'Outubro', value: 10},
    {label: 'Novembro', value: 11},
    {label: 'Dezembro', value: 12},
];

const Container = styled.View``;
const CalendarMonth = styled.View``;
const CalendarSelect = styled.TouchableOpacity`
    background-color: ${props=>props.bg};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-color: ${props=>props.bc};
    border-width: 1px;
    padding: 0 15px;
    height: 32px;
    margin-right: 10px;
    border-radius: 5px;
`;
const CalendarSelectText = styled.Text`
    color: ${props=>props.color};
    font-family: ${semibold};
    font-size: 12px;
    margin-right: 5px;
`;


export const MonthScroll = ({ openMonthMenu, setOpenMonthMenu, setMonthName }) => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [display, setDisplay] = useState('none');

    const window = useWindowDimensions();

    let monthW = Math.round(window.width / 3.5);

    const offset = useSharedValue(500);

    const scrollWidth = useSharedValue(0);
    const scrollHeight = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: offset.value}
            ],
            width: scrollWidth.value,
            height: scrollHeight.value,
            flexDirection: 'column',
            alignItems: 'flex-end',
        };
    });

    useEffect(() => {
        if(openMonthMenu) {
            scrollHeight.value = withDelay(50, withTiming(37));
            scrollWidth.value = withDelay(50, withTiming('100%'));

            offset.value = withSpring(0);
        }
    }, [openMonthMenu])

    function selectMonth(label, value) {
        setMonthName(label); 
        setCurrentMonth(value);
        setOpenMonthMenu(false);
        
        offset.value = withSpring(300);
        scrollHeight.value = withDelay(50, withTiming(0));
        scrollWidth.value = withDelay(50, withTiming(0));
    }

    return(
        <Container>
            <Animated.View style={[animatedStyles]}>
                <FlatList
                    data={months}
                    horizontal

                    renderItem={({item}) => 
                        <CalendarMonth style={{width: monthW}}>
                            <CalendarSelect onPress={() => selectMonth(item.label, item.value)} bc={currentMonth === item.value ? 'red' : '#cecece'} bg={currentMonth === item.value ? 'red' : 'transparent'}>
                                <CalendarSelectText color={currentMonth === item.value ? '#fff' : '#aaa'}>{item.label}</CalendarSelectText>
                            </CalendarSelect>
                        </CalendarMonth>
                    }
                    keyExtractor={(item) => item.value}
                    style={{paddingLeft: 25, paddingRight: 25, marginTop: 5}}
                />
            </Animated.View>
        </Container>
    )
}