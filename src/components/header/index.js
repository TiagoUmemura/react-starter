import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { 
    Container 
} from './styles';
import history from '../../history/history';
import Button from '../button';
import { logout } from '../../store/ducks/auth/actions';

function Header() {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.auth.isLogged);

  return (
    <Container>
        {isLogged ? 
            <Button
                bgColor={'gray'}
                borderRadius='10px'
                width='120px'
                height='35px' 
                text='Logout' 
                onClickHandler={ () => dispatch(logout())}
            />
            : 
            <Button
                bgColor={'lightgreen'}
                borderRadius='10px'
                width='120px'
                height='35px' 
                text='Back to login' 
                onClickHandler={ () => history.push('/')}
            />
        }
    </Container>
  );
}

export default Header;