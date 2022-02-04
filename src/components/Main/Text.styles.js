import styled from 'styled-components';

export const StyledTextSection = styled.section`
    margin: 30px auto;
    text-align: center;
`

export const StyledText = styled.p`
    margin-bottom: 35px;
    color: #000;
    font-size: 24px;
    font-family: ${({textStyle}) => textStyle};
    letter-spacing: .5px;

    & a {
        padding-bottom: 2px;
        border-bottom: 3px solid ${({color2}) => color2};
        color: ${({color1}) => color1};
        font-weight: 600;
        text-decoration: none;
    }
`