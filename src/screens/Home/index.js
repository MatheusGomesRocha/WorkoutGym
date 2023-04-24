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
    CalendarSelect,
    CalendarSelectText,
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

export default () => {
    const [currentDate, setCurrentDate] = useState(20);

    return(
        <Container>
           <Welcome>
            <SmallText>Hello Matheus 👋</SmallText>

            <BigText>Welcome back!</BigText>
           </Welcome>

           <Acitivity>
            <CalendarHeader>
                <ActivityTitle>Atividade</ActivityTitle>

                <CalendarSelect>
                    <CalendarSelectText>Abril</CalendarSelectText>
                    <FontAwesome name="angle-down" size={12} color="#aaa" />
                </CalendarSelect>
            </CalendarHeader>

            <Calendar horizontal>
                <CalendarWrapped>
                    <CalendarItem bc={currentDate === 19 ? primary : '#cecece'} onPress={() => setCurrentDate(19)} style={{marginLeft: 25}}>
                        <CalendarDayName>S</CalendarDayName>
                        <CalendarDayValue>19</CalendarDayValue>
                    </CalendarItem>

                    <CalendarDot bg={currentDate === 19 ? primary : 'transparent'}></CalendarDot>
                </CalendarWrapped>

                <CalendarWrapped>
                    <CalendarItem bc={currentDate === 20 ? primary : '#cecece'} onPress={() => setCurrentDate(20)}>
                        <CalendarDayName>M</CalendarDayName>
                        <CalendarDayValue>20</CalendarDayValue>
                    </CalendarItem>

                    <CalendarDot bg={currentDate === 20 ? primary : 'transparent'}></CalendarDot>
                </CalendarWrapped>
            </Calendar>
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