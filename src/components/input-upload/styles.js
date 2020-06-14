import styled from 'styled-components'

export const ContainerIcon = styled.div`
    display: flex;
    flex-direction: 'column';
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #ed3d95;
    border-radius: 50%;
    box-shadow: 0 7px 17px rgba(0,0,0,.4);
    color: #fff;
    width: 55px;
    height: 55px;
`

export const UploadMedia = styled.input.attrs({ type: 'file' })`
  display: none;
  border-style: none;
  outline: none;
  -webkit-user-select: none;
`