import styled from 'styled-components/native';
import { regular, bold, light, semibold, primaryTransparent, primary } from '../../globals';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const Welcome = styled.View`
    padding: 0 25px;
    margin-top: 30px;
`;
export const SmallText = styled.Text`
    color: #000;
    font-family: ${regular};
`;
export const BigText = styled.Text`
    color: #000;
    font-size: 24px;
    font-family: ${bold};
`;

/** --------------------------------------------- **/

export const Acitivity = styled.View`
    margin-top: 20px;
`;
export const CalendarHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
`;
export const ActivityTitle = styled.Text`
    color: #000;
    font-family: ${semibold};
    font-size: 19px;
`;
export const CalendarSelect = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const CalendarSelectText = styled.Text`
    font-family: ${semibold};
    font-size: 12px;
    color: #aaa;
    margin-right: 5px;
`;
export const Calendar = styled.ScrollView`
    margin-top: 10px;
    padding-bottom: 10px;
`;
export const CalendarWrapped = styled.View`
    align-items: center;
`;
export const CalendarItem = styled.TouchableOpacity`
    background-color: ${props=>props.bg};
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 45px;
    border-radius: 10px;
    margin-left: 15px;
    border-width: 1px;
    border-color: ${props=>props.bc};
`;
export const CalendarDayName = styled.Text`
    color: ${primary};
    font-family: ${bold};
`;
export const CalendarDayValue = styled.Text`
    color: #000;
    font-family: ${regular};
`;
export const CalendarDot = styled.View`
    background-color: ${props=>props.bg};
    width: 7px;
    height: 7px;
    border-radius: 4px;
    margin: 10px 0 0 15px;
`;

/** --------------------------------------------- **/

export const Report = styled.View`
    padding: 0 25px;
    margin-top: 15px;
`;
export const ReportTitle = styled.Text`
    color: #000;
    font-family: ${semibold};
    font-size: 19px;
`;
export const ReportWrapped = styled.View`
    justify-content: center;
    align-items: center;
    border: 1px solid #eee;
    margin-top: 10px;
    padding: 15px;
    border-radius: 10px;
    height: 160px;
`;
export const ReportRow = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: ${props=>props.mTop || 0};
`;
export const ReportItem = styled.View`
    flex-direction: row;
    align-items: center;
    width: 135px;
`;
export const ReportEmoji = styled.View`
    background-color: ${primaryTransparent};
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    border-radius: 10px;
`;
export const Emoji = styled.Text`
    font-size: 22px;
    color: #000;
`;
export const ReportContent = styled.View`
    margin-left: 10px;
`;
export const ReportValue = styled.Text`
    color: #000;
    font-family: ${bold};
    font-size: 17px;
`;
export const ReportDetail = styled.Text`
    font-family: ${semibold};
    color: #aaa;
`;