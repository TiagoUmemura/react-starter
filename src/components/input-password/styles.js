import styled from 'styled-components';

export const StyledInput = styled.input.attrs({type:'password'})`
    border-radius: 20px;
    margin: 1.5%;
    padding: 2%;
    border-style: none;
    border: ${props => props.border ? props.border : 'none'};
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: gray;
        padding-left: 5%;
    }
`;