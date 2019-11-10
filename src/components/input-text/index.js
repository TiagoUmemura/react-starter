import React from 'react';

import { 
    StyledInput
} from './styles';

function InputText({ name, placeholder, border }) {
  return (
    <StyledInput type='text' name={name} placeholder={placeholder} border={border}/>
  );
}

export default InputText;
