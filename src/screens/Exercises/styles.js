import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;
export const Texto = styled.Text``;

export const FilterArea = styled.ScrollView`
    margin-top: 50px;
    padding-bottom: 10px;
    min-height: 45px;
`;
export const Filter = styled.TouchableOpacity`
    background-color: ${props=>props.bg};
    border-color: ${props=>props.bc};
    justify-content: center;
    border-width: 1px;
    padding: 0 15px;
    height: 35px;
    margin-left: 15px;
    border-radius: 10px;
`;
export const FilterText = styled.Text`
    color: ${props=>props.color};
`;

/** -------------------------------------------------------- **/

export const WorkoutArea = styled.ScrollView`
    padding: 0 15px;
    margin-top: 10px;
`;
export const Workout = styled.View`
    flex-direction: row;
    align-items: center;
    border: 1px solid #ddd;
    padding: 0 20px;
    height: 130px;
    border-radius: 20px;
    margin-top: 20px;
`;
export const WorkoutImg = styled.View`
    background-color: #ccc;
    width: 80px;
    height: 80px;
`;
export const WorkoutInfo = styled.View`
    margin-left: 30px;
    max-width: 70%;
`;
export const WorkoutTitle = styled.Text`
    color: #000;
    font-weight: bold;
    font-size: 20px;
    width: 95%;
`;
export const WorkoutDetails = styled.Text`
    color: #bbb;
`;