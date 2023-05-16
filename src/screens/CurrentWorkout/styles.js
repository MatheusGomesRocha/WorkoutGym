import styled from 'styled-components/native';
import { bold, grayFont, grayish, primary, primaryTransparent, semibold, lightgray, regular } from '../../globals';
import { secondary } from '../../globals';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 120px;
    padding: 0 25px;
`;
export const ProgressLine = styled.View`
    background-color: ${secondary};
    width: ${props=>props.w || 0};
    height: 3px;
    border-radius: 3px;
    position: absolute;
    top: 0;
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
export const WorkoutFinish = styled.TouchableOpacity`
    background-color: ${lightgray};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 40px;
    border-radius: 8px;
`;
export const WorkoutFinishText = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    margin-left: 15px;
`;


/** -------------------------------------------------------- */


export const Content = styled.View`
    flex: 1;
`;
export const ContentOver = styled.View`
    flex: 1;
    background-color: ${primaryTransparent};
    justify-content: center;
    padding: 20px 25px;
`;
export const ContentInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 50px;
`;
export const ContentInfoLeft = styled.View`
`;
export const ContentInfoText = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 40px;
    width: 150px;
    line-height: 45px;
`;
export const ContentInfoLine = styled.View`
    background-color: ${secondary};
    width: 1px;
    height: 100px;
    margin: 0 45px 0 auto;
`;
export const ContentInfoRight = styled.View`
    align-items: center;
`;
export const ContentInfoNumber = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 40px;
`;
export const ContentInfoSmallText = styled.Text`
    color: ${secondary};
    font-family: ${regular};
`;


/** -------------------------------------------------------- */


export const NextWorkout = styled.View`
    margin-top: 80px;
`;
export const NextText = styled.Text`
    color: #888;
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

export const WorkoutButton = styled.TouchableOpacity`
    background-color: #fff;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    margin-top: auto;
`;
export const WorkoutButtonText = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 16px;
`;


/** -------------------------------------------------------- */


export const RelaxArea = styled.View`
    flex: 1;
    padding: 10px 25px 40px 25px;
    justify-content: space-between;
`;
export const RelaxTitle = styled.View``;
export const RelaxBold = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 45px;
`;
export const RelaxSemiBold = styled.Text`
    color: ${grayFont};
    font-family: ${semibold};
    font-size: 40px;
    margin-top: -18px;
`;

export const RelaxWave = styled.View`
`;
export const RelaxText = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    text-align: center;
    font-size: 20px;
`;

export const RelaxTimer = styled.View`
    align-items: center;
`;
export const RelaxTimerNumber = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 50px;
`;
export const RelaxTimerText = styled.Text`
    color: ${grayFont};
    font-family: ${semibold};
`;

