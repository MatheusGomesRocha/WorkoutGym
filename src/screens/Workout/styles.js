import styled from 'styled-components/native';
import { grayish } from '../../globals';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const AddButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border: 1px solid ${grayish};
    border-radius: 5px;
`;