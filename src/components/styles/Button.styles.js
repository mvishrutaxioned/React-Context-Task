import styled from "styled-components";

export const Row = styled.div`
    margin: 40px auto
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button1 = styled.button`
    padding: 10px 15px;
    margin: 10px;
    border: 1px solid ${({color1}) => color1};
    color: ${({color1}) => color1};
    font-size: 26px;
    font-family: ${({font}) => font};
    outline: none;
    cursor: pointer;
`

export const Button2 = styled.button`
    padding: 10px 15px;
    margin: 10px;
    background: ${({color1}) => color1};
    color: #fff;
    font-size: 26px;
    font-family: ${({font}) => font};
    outline: none;
    cursor: pointer;
`

export const DropDown = styled.select`
    width: 10%;
    padding: 15px 5px;
    margin: 20px 10px 0 10px;
    font-size: 18px;
    outline: none;
    cursor: pointer;

    & option {
        margin: 10px 0;
        cursor: pointer;
    }
`