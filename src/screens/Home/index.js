import React, { useState, useEffect } from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { DayScroll } from '../../components/DayScroll';
import { MonthScroll } from '../../components/MonthScroll';

import { json } from '../../json/data';
import { FlatList, View, Text} from 'react-native';

import { 
    Container,

    Welcome,
    SmallText,
    BigText,

    Acitivity,
    CalendarHeader,
    ActivityTitle,

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

export default () => {
    const [monthName, setMonthName] = useState(new Date().toLocaleString('pt-BR', {month: 'long'}));
    const [openMonthMenu, setOpenMonthMenu] = useState(false);

    const [currentDate, setCurrentDate] = useState(new Date().getDate());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

    const [selectedDate, setSelectedDate] = useState('');

    let bgColor = 'transparent';

    useEffect(() => {
        let month = new Date().toLocaleString('pt-BR', {month: 'long'});
        let split = month.split('');
        split[0] = split[0].toLocaleUpperCase();

        setMonthName(split.join(""));
    }, []);

    useEffect(() => {
        let day, month;

        if(currentDate < 10) {
            day = '0'+currentDate;
        } else {
            day = currentDate;
        }

        if(currentMonth < 10) {
            month = '0'+currentMonth;
        } else {
            month = currentMonth;
        }

        setSelectedDate(day+'-'+month);
    }, [currentDate]);

    return(
        <Container>
           <Welcome>
            <SmallText>Hello Matheus 👋</SmallText>

            <BigText>Welcome back!</BigText>
           </Welcome>

           <Acitivity>
            <CalendarHeader>
                <ActivityTitle>Atividade</ActivityTitle>

                <CurrentMonth onPress={() => setOpenMonthMenu(true)}>
                    <CurrentMonthText>{monthName}</CurrentMonthText>
                    <FontAwesome name="angle-down" size={14} color="#aaa" />
                </CurrentMonth>
            </CalendarHeader>

            <MonthScroll 
                currentMonth={currentMonth} 
                setCurrentMonth={setCurrentMonth} 
                setOpenMonthMenu={setOpenMonthMenu} 
                openMonthMenu={openMonthMenu} 
                setMonthName={setMonthName} 
            />

            <DayScroll 
                currentDate={currentDate} 
                setCurrentDate={setCurrentDate} 
                currentMonth={currentMonth} 
                selectedDate={selectedDate}
                bgColor={bgColor}
            />
           </Acitivity>

           {/* <Report>
                <ReportTitle>Relatório do Dia</ReportTitle>

                <ReportWrapped>
                    <ReportRow>
                        <ReportItem>
                            <ReportEmoji>
                                <Emoji>🔥</Emoji>
                            </ReportEmoji>

                            <ReportContent>
                                <ReportValue>{currentReport.calories}</ReportValue>
                                <ReportDetail>Calorias</ReportDetail>
                            </ReportContent>
                        </ReportItem>

                        <ReportItem>
                            <ReportEmoji>
                                <Emoji>⚡</Emoji>
                            </ReportEmoji>

                            <ReportContent>
                                <ReportValue>{currentReport.proteins}</ReportValue>
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
                                <ReportValue>{currentReport.carbo}</ReportValue>
                                <ReportDetail>Carbo</ReportDetail>
                            </ReportContent>
                        </ReportItem>

                        <ReportItem>
                            <ReportEmoji>
                                <Emoji>🕐</Emoji>
                            </ReportEmoji>

                            <ReportContent>
                                <ReportValue>{currentReport.time}</ReportValue>
                                <ReportDetail>Tempo</ReportDetail>
                            </ReportContent>
                        </ReportItem>
                    </ReportRow>
                </ReportWrapped>
           </Report> */}
        </Container>
    )
}