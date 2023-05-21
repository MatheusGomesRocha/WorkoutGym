import styled from 'styled-components/native';
import { bold, grayFont, lightgray, primary, secondary, semibold } from '../../globals';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const TopColored = styled.View`
    background-color: ${secondary};
    height: 300px;
    border-bottom-left-radius: 120px;
    border-bottom-right-radius: 120px;
`;
export const LogoArea = styled.View`
    background-color: ${lightgray};
    align-self: center;
    bottom: -250px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 40px 20px;
`;
export const Title = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    font-size: 40px;
    margin-top: 30px;
`;
export const Text = styled.Text`
    color: ${secondary};
    font-family: ${semibold};
    margin-top: 40px;
    font-size: 16px;
    text-align: center;
`;

export const GetStartedButton = styled.TouchableOpacity`
    background-color: ${primary};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    padding: 0 20px;
    height: 45px;
    border-radius: 20px;
`;
export const GetStartedText = styled.Text`
    color: #fff;
    font-family: ${bold};
    margin-right: 15px;
`;