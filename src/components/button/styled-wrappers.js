import styled from 'styled-components';

export const Container = styled.div`
    width: ${props => props.width ? props.width : '10%'};
    height: ${props => props.height ? props.height : '10%'};
    border: solid 1px white;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
`;

export const Text = styled.span`
    color: white;
    font-size: 1vw;
`;