import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { Container } from './styles';
import Button from '../../components/button';
import { login, logout } from '../../store/ducks/auth/actions';

function Home() {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.auth.isLogged);

  return (
    <Container>
      <Button text='text' onClickHandler={ () => dispatch(login('user', 'password'))}/>
      {
        isLogged ? <Button text='text2' onClickHandler={ () => dispatch(logout())}/> : false
      }
    </Container>
  );
}

export default Home;