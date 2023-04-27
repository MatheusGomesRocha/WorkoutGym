import styled from 'styled-components/native';
import { bold, regular, semibold } from '../../globals';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;
export const DropdownButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;
export const ScrollContent = styled.ScrollView``;

export const SlideView = styled.View`
    width: 100%;
`;

export const WorkoutItem = styled.View`
    padding: 0 25px;
    margin-top: 40px;
`;
export const WorkoutHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const WorkoutBig = styled.Text`
    font-family: ${bold};
    color: #000;
    font-size: 24px;
`;
export const WorkoutMuscle = styled.Text`
    font-family: ${semibold};
    color: #aaa;
    font-size: 16px;
`;
export const WorkoutDetail = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
`;
export const WorkoutMiniature = styled.View`
    background-color: #ccc;
    width: 70px;
    height: 70px;
    border-radius: 15px;
`;
export const WorkoutContent = styled.View`
    margin-left: 30px;
`;
export const WorkoutLine = styled.View`
    background-color: red;
    width: 20px;
    height: 3px;
    border-radius: 5px;
`;
export const WorkoutName = styled.Text`
    font-family: ${bold};
    color: #000;
    margin-top: 7px;
    font-size: 16px;
`;
export const WorkoutSeries = styled.Text`
    font-family: ${semibold};
    color: #aaa;
    margin-top: 7px;
`;
export const WorkoutLike = styled.TouchableOpacity`
    margin-left: auto;
`;
