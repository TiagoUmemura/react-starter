import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { 
    Container 
} from './styles';
import Button from '../button';
import { logout } from '../../store/ducks/auth/actions';

function Header() {
  const dispatch = useDispatch();

  return (
    <Container>
        <Button
            bgColor={'gray'}
            borderRadius='10px'
            width='120px'
            height='35px' 
            text='Logout' 
            onClickHandler={() => dispatch(logout())}
        />
    </Container>
  );
}

export default Header;