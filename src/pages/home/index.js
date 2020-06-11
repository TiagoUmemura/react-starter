import React, {useState} from 'react';
import { useDispatch } from 'react-redux'

import { Container } from './styles';
import Dropdown from 'components/dropdown/dropdown'
import Button from 'components/button'
import {socketConnect, sendMessage} from 'store/ducks/socket/actions'

function Home() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

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
      <Button
        bgColor='black'
        width='125px'
        height='50px'
        text='Socket Connect'
        onClickHandler={() => dispatch(socketConnect())}
      />
      <Button
        bgColor='black'
        width='125px'
        height='50px'
        text='Socket Send Message'
        onClickHandler={() => dispatch(sendMessage('message text'))}
      />
    </Container>
  );
}

export default Home;