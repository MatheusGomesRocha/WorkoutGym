import React, { useState, useEffect } from 'react';

import {
    Container,
    Scroll,

    GifArea,

    Information,
    Left,
    Name,
    Level,
    Filter,
    FilterItem,
    FilterText,

    DescriptionArea,
    DescriptionTitle,
    DescriptionText,
    ReadMore,
    ReadMoreText,
} from './styles';

export default function WorkoutDetail () {
    const [descriptionLines, setDescriptionLines] = useState(5);
    const [countLines, setCountLines] = useState(0);
    const [readMore, setReadMore] = useState(false);

    useEffect(() => {
        if(readMore) {
            setDescriptionLines(5);
        } else {
            setDescriptionLines(18);
        }
    }, [readMore]);

    function handleTextLayout (e) {
        if(e.nativeEvent.lines.length > 5) {
            setReadMore(true);
            setCountLines(e.nativeEvent.lines.length);
        } 
    }

    return(
        <Container>
            <Scroll>
                <GifArea>
                </GifArea>

                <Information>
                    <Left>
                        <Name>Rosca Direta</Name>
                        <Level>Treino nível Mediano</Level>

                        <Filter>
                            <FilterItem>
                                <FilterText>15 min</FilterText>
                            </FilterItem>

                            <FilterItem>
                                <FilterText>350 Cal</FilterText>
                            </FilterItem>
                        </Filter>
                    </Left>
                </Information>

                <DescriptionArea>
                    <DescriptionTitle>Descrição</DescriptionTitle>

                    <DescriptionText onTextLayout={(e) => handleTextLayout(e)} numberOfLines={descriptionLines} ellipsizeMode={'tail'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                        dolore magna aliqua. Viverra vitae congue eu consequat ac felis donec et odio. Eget lorem dolor sed viverra 
                        ipsum nunc aliquet bibendum. Neque viverra justo nec ultrices dui sapien. Id velit ut tortor pretium viverra 
                        suspendisse potenti nullam. Et tortor at risus viverra adipiscing at. Eleifend donec pretium vulputate sapien 
                        nec sagittis. Tempus imperdiet nulla malesuada pellentesque elit eget. Eget nunc scelerisque viverra mauris in aliquam. 
                        Ipsum dolor sit amet consectetur adipiscing elit ut aliquam. Aliquet lectus proin nibh nisl condimentum id venenatis a. 
                        Amet est placerat in egestas erat imperdiet sed euismod nisi. Hendrerit gravida rutrum quisque non tellus orci ac.
                        Sem integer vitae justo eget magna fermentum. Elementum nibh tellus molestie nunc non blandit. Ante in nibh mauris cursus.
                    </DescriptionText>
                    <ReadMore onPress={() => setReadMore(!readMore)}>
                        <ReadMoreText>{readMore ? 'Leia mais...' : 'Leia menos...'}</ReadMoreText>
                    </ReadMore>
                </DescriptionArea>
            </Scroll>
        </Container>
    )
}