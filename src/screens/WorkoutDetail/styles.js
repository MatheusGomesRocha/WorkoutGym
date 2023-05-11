import styled from 'styled-components/native';
import { bold, grayFont, grayish, primary, primaryTransparent, regular, semibold } from '../../globals';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;
export const Scroll = styled.ScrollView`
`;

export const GifArea = styled.View`
    background-color: #ccc;
    height: 250px;
`;

export const Information = styled.View`
    padding: 20px;
`;
export const Left = styled.View``;
export const Name = styled.Text`
    color: #000;
    font-family: ${bold};
    font-size: 20px;
`;
export const Level = styled.Text`
    color: ${grayFont};
    font-family: ${regular};
`;
export const Filter = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`;
export const FilterItem = styled.View`
    align-items: center;
    justify-content: center;
    background-color: ${primaryTransparent};
    padding: 0 10px;
    height: 29px;
    border-radius: 5px;
    margin-right: 10px;
`;
export const FilterText = styled.Text`
    color: ${primary};
`;

export const DescriptionArea = styled.View`
    padding: 0 20px;
`;
export const DescriptionTitle = styled.Text`
    color: #000;
    font-family: ${bold};
    font-size: 18px;
`;
export const DescriptionText = styled.Text`
    color: ${grayFont};
    font-family: ${semibold};
    margin-top: 10px;
    font-size: 15px;
`;
export const ReadMore = styled.TouchableOpacity`
    color: ${primary};
    font-family: ${semibold};
    font-size: 15px;
`;
export const ReadMoreText = styled.Text``;

export const Lists = styled.View``;
export const ListItem = styled.View``;