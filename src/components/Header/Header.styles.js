import styled from 'styled-components';

export const StyledHeader = styled.header`
    height: 200px;
    padding: 30px 0;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ headerBg }) => headerBg};
    color: #fff;
    font-family: ${({ headerFont }) => headerFont};

    & > h1 { margin-top: 40px; }
`

export const ReactLogo = styled.figure`
    width: 5%;
    animation: rotate 1.5s infinite linear;
    overflow: hidden;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @keyframes rotate {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(360deg) }
    }
`