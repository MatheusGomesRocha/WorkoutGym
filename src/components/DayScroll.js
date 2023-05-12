import React, { useEffect, useRef } from 'react';

import { FlatList, useWindowDimensions } from 'react-native';
import styled from 'styled-components/native';

import { primary, bold, regular } from '../globals';
import { json } from '../json/data';

const CalendarWrapped = styled.TouchableOpacity`
    align-items: center;
`;
const CalendarItem = styled.View`
    background-color: ${props=>props.bg};
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 60px;
    margin-left: 15px;
    border-radius: 10px;
    border-width: 1px;
    border-color: ${props=>props.bc};
`;
const CalendarDayName = styled.Text`
    color: ${primary};
    font-family: ${bold};
`;
const CalendarDayValue = styled.Text`
    color: #000;
    font-family: ${regular};
`;
const CalendarDot = styled.View`
    background-color: ${props=>props.bg};
    width: 7px;
    height: 7px;
    border-radius: 4px;
    margin: 10px 0 0 15px;
`;

export const DayScroll = ({ currentDate, setCurrentDate, currentMonth, selectedDate, bgColor }) => {
    let today = new Date();

    const DayRef = useRef();
    const window = useWindowDimensions();

    let dayW = Math.round(window.width / 7);
    let offsetW = Math.round((window.width - dayW) / 2);

    let days = [];
    let daysInMonth = new Date(today.getFullYear(), currentMonth, 0).getDate();

    for(let i = 1; i <= daysInMonth; i++) {
        let daysInWeek = new Date(today.getFullYear(), currentMonth, i).getDay();

        if(daysInWeek === 0) {
            days.push(
                {day: i, dayOfTheWeek: 'D'}
            );
        } else if (daysInWeek === 1) {
            days.push(
                {day: i, dayOfTheWeek: 'S'}
            );
        } else if (daysInWeek === 2) {
            days.push(
                {day: i, dayOfTheWeek: 'T'}
            );
        } else if (daysInWeek === 3) {
            days.push(
                {day: i, dayOfTheWeek: 'Q'}
            );
        } else if (daysInWeek === 4) {
            days.push(
                {day: i, dayOfTheWeek: 'Q'}
            );
        } else if (daysInWeek === 5) {
            days.push(
                {day: i, dayOfTheWeek: 'S'}
            );
        } else if (daysInWeek === 6) {
            days.push(
                {day: i, dayOfTheWeek: 'S'}
            );
        }
    } 

    function scrollEndAction (e) {
        let posX = e.nativeEvent.contentOffset.x;
        let targetDay = Math.round(posX / dayW) + 1;
        setCurrentDate(targetDay);
    }

    function scrollToDay (d) {
        let posX = d * 55;
        setCurrentDate(d);

        DayRef.current.scrollToOffset({
            offset: posX,
            animated: true,
        });
    }

    useEffect(() => {
        setTimeout(() => {
            scrollToDay(new Date().getDate());
        }, 1000)
    }, []);

    return(
        <FlatList
            onMomentumScrollEnd={scrollEndAction}
            ref={DayRef}
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{marginTop: 10}}
            contentContainerStyle={{paddingHorizontal: offsetW, paddingBottom: 10}}
            data={days}
            renderItem={({item}) => 
                <CalendarWrapped style={{width: dayW}} onPress={() => scrollToDay(item.day)}>
                    <CalendarItem bg={bgColor} bc={currentDate === item.day ? primary : '#cecece'}>
                        <CalendarDayName>{item.dayOfTheWeek}</CalendarDayName>
                        <CalendarDayValue>{item.day}</CalendarDayValue>
                    </CalendarItem>

                    <CalendarDot bg={currentDate === item.day ? primary : 'transparent'}></CalendarDot>
                </CalendarWrapped>                
            }
            keyExtractor={(item) => item.day}
        />
    )
}