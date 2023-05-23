import styled from 'styled-components/native';
import { bold, grayFont, grayish, lightgray, primary, secondary, semibold } from '../../globals';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export const TopColored = styled.View`
    background-color: ${secondary};
`;
export const LogoArea = styled.View`
    background-color: red;
    width: 50px;
    height: 50px;
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


/** --------------------------------------------------------------------------- **/


export const LoginContent = styled.View`
    flex: 1;
    background-color: #fff;
    padding: 0 20px;
    justify-content: center;
`;
export const LogoRow = styled.View``;
export const LogoName = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    text-align: center;
    font-size: 30px;
`;

export const SmallText = styled.Text`
    color: ${secondary};
    font-family: ${semibold};
    text-align: center;
    margin-top: 10px;
`;

export const Form = styled.View`
    margin-top: 50px;
`;
export const InputArea = styled.View`
    margin-top: 20px;
`;
export const Label = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    margin-bottom: 7px;
`;
export const InputPassword = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${grayish};
    height: 42px;
    border-radius: 21px;
    padding-right: 10px;
`;
export const Input = styled.TextInput`
    color: ${secondary};
    font-family: ${bold};
    border-color: ${grayish};
    border-width: ${props=>props.bW};
    height: 42px;
    width: ${props=>props.W};
    border-radius: 21px;
    padding-left: 10px;
`;
export const ShowPasswordButton = styled.TouchableOpacity``;
export const Submit = styled.TouchableOpacity`
    background-color: ${primary};
    align-items: center;
    justify-content: center;
    height: 42px;
    border-radius: 21px;
    margin-top: 30px;
`;
export const SubmitText = styled.Text`
    color: #fff;
    font-family: ${bold};
`;

export const LineRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;
export const Line = styled.View`
    background-color: ${grayish};
    width: 40%;
    height: 1px;
`;
export const LineText = styled.Text`
    color: ${grayFont};
    font-family: ${bold};
    font-size: 16px;
    line-height: 20px;
`;

export const SubmitOptions = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid ${grayish};
    height: 48px;
    border-radius: 24px;
    margin-top: 20px;
`;
export const SubmitOptionsLogo = styled.Image`
    width: 15px;
    height: 15px;
`;
export const SubmitOptionsText = styled.Text`
    color: ${secondary};
    font-family: ${bold};
    margin-left: 13px;
    font-size: 15px;
`;