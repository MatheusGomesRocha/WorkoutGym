import styled from 'styled-components/native';
import { bold, grayFont, grayish, primary, primaryTransparent, semibold, lightgray, regular } from '../../globals';
import { secondary } from '../../globals';

export const Container = styled.SafeAreaView`
    flex: 1;
`;
export const VideoArea = styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
`;

/** -------------------------------------------------------------------------------- */


export const Content = styled.View`
    background-color: #fff;
    flex: 1;
    margin-top: 300px;
`;
export const ProgressLine = styled.View`
    background-color: ${secondary};
    width: ${props=>props.w || 0};
    height: 3px;
    border-radius: 3px;
    position: absolute;
    top: 0;
    z-index: 999;
`;
export const ContentInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
    margin-top: 10px;
`;
export const ContentInfoLeft = styled.View`
    justify-content: center;
    height: 40px;
`;
export const ContentInfoText = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 30px;
`;
export const ContentInfoLine = styled.View`
    background-color: ${secondary};
    width: 1px;
    height: 50px;
    margin: 0 45px 0 auto;
`;
export const ContentInfoRight = styled.View`
    height: 40px;
`;
export const ContentInfoNumber = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 20px;
`;
export const ContentInfoSmallText = styled.Text`
    color: ${secondary};
    font-family: ${bold};
`;


/** -------------------------------------------------------------------------------- */


export const NextWorkout = styled.View`
    padding: 0 25px;
    margin-top: 20px;
`;
export const NextText = styled.Text`
    color: #aaa;
    font-family: ${bold};
`;
export const NextName = styled.Text`
    font-family: ${bold};
    color: ${secondary};
`;
export const NextMiniature = styled.View`
    background-color: #aaa;
    width: 50px;
    height: 50px;
    border-radius: 10px;
    margin-top: 10px;
`;


/** -------------------------------------------------------------------------------- */


export const MessageArea = styled.View`
    margin-top: 30px;
    align-items: center;
    background-color: red;
`; 
export const StartTextArea = styled.View`
    align-items: center;
    position: absolute;
`;
export const StartText = styled.Text`
    color: ${secondary};
    font-family: ${semibold};
    font-size: 20px;
`;
export const StartValue = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 40px;
`;


/** -------------------------------------------------------------------------------- */


export const TimerValue = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    text-align: center;
    font-size: 50px;
    position: absolute;
`;


/** -------------------------------------------------------------------------------- */


export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 0 25px;
    margin-top: auto;
`;
export const WorkoutInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const WorkoutInfoNumber = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 50px;
`;
export const WorkoutInfoText = styled.Text`
    color: ${grayFont};
    font-family: ${semibold};
    width: 70px;
    margin-left: 10px;
`;
export const TimerButton = styled.TouchableOpacity`
    background-color: ${primary};
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 15px;
`;
export const WorkoutFinish = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 40px;
    border-radius: 8px;
`;
export const WorkoutFinishText = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    margin-left: 15px;
`;


/** -------------------------------------------------------- */


export const RelaxTimerNumber = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 50px;
`;
