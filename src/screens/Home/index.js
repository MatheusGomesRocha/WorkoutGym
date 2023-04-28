import React, { useState, useRef } from 'react';

import { FlatList, useWindowDimensions, StyleSheet, Animated } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { DayScroll } from '../../components/DayScroll';

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

    CurrentMonth,
    CurrentMonthText,

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

export default () => {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

    const window = useWindowDimensions();

    const showScrollMonth = useRef(new Animated.Value(0)).current;

    let monthW = Math.round(window.width / 3.5);
    let offsetMonthW = Math.round((window.width - monthW) / 2);
    
    function showMonthSelect() {
        Animated.timing(showScrollMonth, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }

    const growMonthSelect = {
        height: showScrollMonth.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 40]
        })
    }

    return(
        <Container>
           <Welcome>
            <SmallText>Hello Matheus 👋</SmallText>

            <BigText>Welcome back!</BigText>
           </Welcome>

           <Acitivity>
            <CalendarHeader>
                <ActivityTitle>Atividade</ActivityTitle>

                <Animated.View style={[styles.months]}>
                    <FlatList
                        data={months}
                        horizontal
                        renderItem={({item}) => 
                            <CalendarMonth style={{width: monthW}}>
                                <CalendarSelect bc={currentMonth === item.value ? 'red' : '#cecece'} bg={currentMonth === item.value ? 'red' : 'transparent'} onPress={() => setCurrentMonth(item.value)}>
                                    <CalendarSelectText color={currentMonth === item.value ? '#fff' : '#aaa'}>{item.label}</CalendarSelectText>
                                </CalendarSelect>
                            </CalendarMonth>
                        }
                        keyExtractor={(item) => item.value}
                        style={{marginLeft: 10}}
                    />
                </Animated.View>

                <CurrentMonth>
                    <CurrentMonthText>Abril</CurrentMonthText>
                    <FontAwesome name="angle-down" size={14} color="#aaa" />
                </CurrentMonth>
            </CalendarHeader>

            <DayScroll />
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

const styles = StyleSheet.create({
    months: {
        height: 0,
        display: 'none'
    }
});