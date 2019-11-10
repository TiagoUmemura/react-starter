import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${props => props.width ? props.width : '10%'};
    height: ${props => props.height ? props.height : '10%'};
    background-color: ${props => props.bgColor ? props.bgColor : '#FFF'};
    border: solid 1px white;
    border-radius: ${props => props.borderRadius ? props.borderRadius : '20px'};
    text-align: center;
    cursor: pointer;
`;

export const Text = styled.span`
    color: white;
    font-size: 1vw;
`;