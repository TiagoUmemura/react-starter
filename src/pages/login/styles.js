import styled from 'styled-components';

export const Container = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`;

export const Card = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 500px;
    width: 350px;
    border-radius: 10px;
`;

export const Title = styled.span`
    color: gray;
    font-size: 14px;
`

export const CreateAcc = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const CreateText = styled.span`
    color: gray;
    font-weight: bold;
    font-size: 12px;
`

export const Term = styled.span`
    color: gray;
    font-size: 12px;
`