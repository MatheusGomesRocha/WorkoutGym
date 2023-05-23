import React, { useState } from "react";

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

import { StatusBar } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

import { grayish, lightgray, secondary } from "../../globals";
import Google from '../../assets/images/google.png';

import {
    Container,

    TopColored,
    LogoArea,

    Content,
    Title,
    Text,

    GetStartedButton,
    GetStartedText,

    LoginContent,
    LogoRow,
    LogoName,
    SmallText,
    Form,
    InputArea,
    Label,
    InputPassword,
    Input,
    ShowPasswordButton,
    Submit,
    SubmitText,
    LineRow,
    Line,
    LineText,
    SubmitOptions,
    SubmitOptionsLogo,
    SubmitOptionsText,
} from './styles';

export default () => {
    const [showPassword, setShowPassword] = useState(true);

    const topColoredHeight = useSharedValue(300);
    const contentStartOffsetY = useSharedValue(0);
    const logoOffsetX = useSharedValue(0);
    const loginOpacity = useSharedValue(0);

    const LoginStyle = useAnimatedStyle(() => {
        return {
            flex: 1,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            opacity: loginOpacity.value,
        }
    })

    const ColoredAndLogoArea = () => {
        const topColoredStyle = useAnimatedStyle(() => {
            return{
                height: topColoredHeight.value,
                backgroundColor: secondary,
                borderBottomLeftRadius: 120,
                borderBottomRightRadius: 120,
            }
        })
    
        const logoOffsetStyle = useAnimatedStyle(() => {
            return {
                backgroundColor: lightgray,
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                bottom: -250,
                width: 100,
                height: 100,
                borderRadius: 50,
                transform: [
                    {translateX: logoOffsetX.value},
                ],
                
            }
        })

        return (
            <Animated.View style={topColoredStyle}>
                <Animated.View style={logoOffsetStyle}>
                    <LogoArea></LogoArea>
                </Animated.View>
            </Animated.View>
        )
    }

    const StartContent = () => {
        const contentStartStyle = useAnimatedStyle(() => {
            return {
                flex: 1,
                zIndex: 9999,
                transform: [
                    {translateY: contentStartOffsetY.value}
                ],
            }
        })

        return(
            <Animated.View style={contentStartStyle}>
                <Content>
                    <Title>WorkoutGym</Title>

                    <Text>Plataforma para construir um novo jeito de se exercitar</Text>

                    <GetStartedButton onPress={goToLogin}>
                        <GetStartedText>Comece agora grátis</GetStartedText>
                        <FontAwesome5 style={{marginTop: 2}} name="angle-right" color="#fff" size={14} /> 
                    </GetStartedButton>
                </Content>
            </Animated.View>
        )
    }
    
    function goToLogin() {
        topColoredHeight.value = withTiming(0, {
            duration: 500
        })

        contentStartOffsetY.value = withTiming(1000, {
            duration: 500
        })

        logoOffsetX.value = withTiming(-1000, {
            duration: 1000
        })

        setTimeout(() => {
            loginOpacity.value = withTiming(1, {
                duration: 500,
            })
        }, 500)
    }

    return(
        <Container>
            <StatusBar backgroundColor={secondary} barStyle={'light-content'} />

            <ColoredAndLogoArea />

            <StartContent />

            <Animated.View style={LoginStyle}>
                <LoginContent>
                    <LogoRow>
                        <LogoName>WorkoutGym</LogoName>
                    </LogoRow>

                    <SmallText>Treino sem limites</SmallText>

                    <Form>
                        <InputArea>
                            <Label>Seu email</Label>
                            <Input keyboardType="email-address" W='100%' bW='1px' placeholderTextColor="#bbb" placeholder="workout@gmail.com" />
                        </InputArea>

                        <InputArea>
                            <Label>Escolha uma senha</Label>
                            
                            <InputPassword>
                                <Input secureTextEntry={showPassword} W='95%' bW='0' placeholderTextColor="#bbb" placeholder="min. 8 caracteres" />

                                <ShowPasswordButton onPress={() => setShowPassword(!showPassword)}>
                                    {!showPassword ?
                                        <Feather name="eye" color={grayish} size={20} />
                                        :
                                        <Feather name="eye-off" color={grayish} size={20} />
                                    }
                                </ShowPasswordButton> 
                            </InputPassword>
                        </InputArea>
                        
                        <Submit>
                            <SubmitText>Continue</SubmitText>
                        </Submit>
                    </Form>

                    
                    <LineRow>
                        <Line />
                        <LineText>ou</LineText>
                        <Line />
                    </LineRow>

                    <SubmitOptions>
                        <SubmitOptionsLogo source={require('../../assets/images/google.png')} />
                        <SubmitOptionsText>Cadastre-se com Google</SubmitOptionsText>
                    </SubmitOptions>

                    <SubmitOptions>
                        <SubmitOptionsLogo source={require('../../assets/images/apple-logo.png')} />
                        <SubmitOptionsText>Cadastre-se com Apple</SubmitOptionsText>
                    </SubmitOptions>
                </LoginContent>
            </Animated.View>
        </Container>
    )
}