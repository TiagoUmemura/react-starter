import styled from 'styled-components'

export const Button = styled.button`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : '100%'};
  border: none;
  background: #F4F5F7;
  font-weight: bold;
  color: #575766;
  border-radius: 10px;
  text-align: right;
`
export const SelectedOptionContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const TextContainer = styled.div`
  display:flex;
  width: 85%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const IconContainer = styled.div`
  display: flex;
  width: 15%;
  height: 100%;
  align-items: center;
  justify-content: center;
`


