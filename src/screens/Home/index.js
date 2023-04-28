import React, { useState, useRef, useEffect } from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { primary, primaryTransparent } from '../../globals';

import { 
    Container,

    Welcome,
    SmallText,
    BigText,

    Acitivity,
    CalendarHeader,
    ActivityTitle,
    CalendarMonth,
    CalendarSelect,
    CalendarSelectText,
    CalendarDropdown,
    CalendarDropdownItem,
    CalendarDropdownText,
    Calendar,
    CalendarWrapped,
    CalendarItem,
    CalendarDayName,
    CalendarDayValue,
    CalendarDot,

    Report,
    ReportTitle,
    ReportWrapped,
    ReportRow,
    ReportItem,
    ReportEmoji,
    Emoji,
    ReportContent,
    ReportValue,
    ReportDetail,
 } from './styles';
import { FlatList, useWindowDimensions } from 'react-native';

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default () => {
    const [currentDate, setCurrentDate] = useState(new Date().getDate());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

    const window = useWindowDimensions();

    const DayRef = useRef();

    let today = new Date();

    let days = [];
    let daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()

    for(let i = 1; i <= daysInMonth; i++) {
        let daysInWeek = new Date(today.getFullYear(), today.getMonth(), i).getDay();

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

    let dayW = Math.round(window.width / 7);
    let offsetW = Math.round((window.width - dayW) / 2);

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
    }, [])

    return(
        <Container>
           <Welcome>
            <SmallText>Hello Matheus 👋</SmallText>

            <BigText>Welcome back!</BigText>
           </Welcome>

           <Acitivity>
            <CalendarHeader>
                <ActivityTitle>Atividade</ActivityTitle>

                <CalendarMonth>
                    <CalendarSelect>
                        <CalendarSelectText>Abril</CalendarSelectText>
                        <FontAwesome name="angle-down" size={12} color="#aaa" />
                    </CalendarSelect>
                </CalendarMonth>
            </CalendarHeader>

            <FlatList
                onMomentumScrollEnd={scrollEndAction}
                ref={DayRef}
                style={{marginTop: 10, width: '100%'}}
                contentContainerStyle={{paddingLeft: offsetW, paddingRight: offsetW, paddingBottom: 10}}
                horizontal
                data={days}
                renderItem={({item}) => 
                    <CalendarWrapped style={{width: dayW}} onPress={() => scrollToDay(item.day)}>
                        <CalendarItem bc={currentDate === item.day ? primary : '#cecece'}>
                            <CalendarDayName>{item.dayOfTheWeek}</CalendarDayName>
                            <CalendarDayValue>{item.day}</CalendarDayValue>
                        </CalendarItem>

                        <CalendarDot bg={currentDate === item.day ? primary : 'transparent'}></CalendarDot>
                    </CalendarWrapped>                
                }
                keyExtractor={(item) => item.day}
            />
           </Acitivity>

           <Report>
                <ReportTitle>Relatório do Dia</ReportTitle>

                <ReportWrapped>
                    <ReportRow>
                        <ReportItem>
                            <ReportEmoji>
                                <Emoji>🔥</Emoji>
                            </ReportEmoji>

                            <ReportContent>
                                <ReportValue>105</ReportValue>
                                <ReportDetail>Calorias</ReportDetail>
                            </ReportContent>
                        </ReportItem>

                        <ReportItem>
                            <ReportEmoji>
                                <Emoji>⚡</Emoji>
                            </ReportEmoji>

                            <ReportContent>
                                <ReportValue>105</ReportValue>
                                <ReportDetail>Proteinas</ReportDetail>
                            </ReportContent>
                        </ReportItem>
                    </ReportRow>

                    <ReportRow mTop={'20px'}>
                        <ReportItem>
                            <ReportEmoji>
                                <Emoji>🍞</Emoji>
                            </ReportEmoji>

                            <ReportContent>
                                <ReportValue>105</ReportValue>
                                <ReportDetail>Carbo</ReportDetail>
                            </ReportContent>
                        </ReportItem>

                        <ReportItem>
                            <ReportEmoji>
                                <Emoji>🕐</Emoji>
                            </ReportEmoji>

                            <ReportContent>
                                <ReportValue>105</ReportValue>
                                <ReportDetail>Tempo</ReportDetail>
                            </ReportContent>
                        </ReportItem>
                    </ReportRow>
                </ReportWrapped>
           </Report>
        </Container>
    )
}