import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  background: rgba(0,0,0,0.3);
  animation: .25s ease-in 0s bgFadeIn;

  @keyframes bgFadeIn {
    0% {
      background-color: rgb(0,0,0, 0);
    }
    100% {
      background-color: rgb(0,0,0, .5);
    }
  }
`

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 630px;
  height: 420px;
  background-color: lightgray;
  border-radius: 20px;
  padding: 40px;
  animation: .25s ease-in 0s test;

  @keyframes test {
    0% {
      opacity: 0;
      width: 0px;
    }
    100% {
      opacity: 1;
      width: 630px;
    }
  }
`