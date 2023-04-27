import React, { useState } from 'react';

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
import { FlatList } from 'react-native';

const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export default () => {
    const [currentDate, setCurrentDate] = useState(new Date().getDate());

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

    return(
        <Container>
           <Welcome>
            <SmallText>Hello Matheus 👋</SmallText>

            <BigText>Welcome back!</BigText>
           </Welcome>

           <Acitivity>
            <CalendarHeader style={{zIndex: 5}}>
                <ActivityTitle>Atividade</ActivityTitle>

                <CalendarMonth>
                    <CalendarSelect onPress={() => console.log('olá mundo')}>
                        <CalendarSelectText>Abril</CalendarSelectText>
                        <FontAwesome name="angle-down" size={12} color="#aaa" />
                    </CalendarSelect>
                </CalendarMonth>
            </CalendarHeader>

            <FlatList
                style={{marginTop: 10}}
                contentContainerStyle={{paddingLeft: 10, paddingRight: 25, paddingBottom: 10}}
                horizontal
                data={days}
                renderItem={({item}) => 
                    <CalendarWrapped>
                        <CalendarItem bc={currentDate === item.day ? primary : '#cecece'} onPress={() => setCurrentDate(item.day)}>
                            <CalendarDayName>{item.dayOfTheWeek}</CalendarDayName>
                            <CalendarDayValue>{item.day}</CalendarDayValue>
                        </CalendarItem>

                        <CalendarDot bg={currentDate === item.day ? primary : 'transparent'}></CalendarDot>
                    </CalendarWrapped>                
                }
                keyExtractor={(item) => item.day}
            />
           </Acitivity>

           <Report style={{zIndex: 1}}>
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