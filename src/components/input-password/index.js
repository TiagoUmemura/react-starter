import React from 'react';

import { 
    StyledInput
} from './styles';

function InputPassword({ name, placeholder, border }) {
  return (
    <StyledInput type='password' name={name} placeholder={placeholder} border={border}/>
  );
}

export default InputPassword;
