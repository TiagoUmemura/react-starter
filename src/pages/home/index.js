import React, {useState} from 'react';

import { Container } from './styles';
import Dropdown from 'components/dropdown/dropdown'

function Home() {
  const [value, setValue] = useState('')

  const DropdownValues = [
    { fields: ['Test'], value: 'test' },
    { fields: ['Test Test'], value: 'test test' }
  ]

  const onSelect = (e) => {
    setValue(e)
  }
  return (
    <Container>
      <Dropdown
        items={DropdownValues} 
        defaultLabel='default label'
        value={value}
        handleSelect={onSelect}
        width='125px'
        height='50px'
      />
    </Container>
  );
}

export default Home;