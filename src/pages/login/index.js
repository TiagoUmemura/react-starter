import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { 
  Container, 
  Card,
  Title,
  CreateAcc,
  CreateText,
  Term
} from './styles';
import Button from '../../components/button';
import InputText from '../../components/input-text';
import InputPassword from '../../components/input-password';
import { login, logout } from '../../store/ducks/auth/actions';

function Login() {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.auth.isLogged);

  return (
    <Container>
      <Card>
        <Title>Bem vindo! Insira seus dados para entrar</Title>
        <InputText 
          name='email' 
          placeholder='Email'
          border='1px solid gray'
        />
        <InputPassword 
          name='senha'
          placeholder='Senha'
          border='1px solid gray'
        />
        <Button
          bgColor={'gray'}
          borderRadius='10px'
          width='120px'
          height='35px' 
          text='Entrar' 
          onClickHandler={ () => dispatch(login('user', 'password'))}
        />
        <CreateAcc>
          <CreateText>Crie uma nova conta. Cadastre-se.</CreateText>
        </CreateAcc>
        <CreateAcc>
          <Term>Termos de uso. Políticas de privacidade.</Term>
        </CreateAcc>
      </Card>
    </Container>
  );
}

export default Login;
