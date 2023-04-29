import React, { useState } from 'react';

import { DayScroll } from '../../components/DayScroll';
import { MonthScroll } from '../../components/MonthScroll';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

            <MonthScroll setOpenMonthMenu={setOpenMonthMenu} openMonthMenu={openMonthMenu} setMonthName={setMonthName} />

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