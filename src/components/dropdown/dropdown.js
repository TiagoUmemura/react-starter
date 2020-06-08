import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import { Button } from './styled-wrappers'

export default function DropdownBootstrap ({ items, value, handleSelec, width, height }) {
  const [value, setValue] = useState('')
  const handleSelect = (e) => {
    console.log(e)
    setValue(e)
  }

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Button
      href=''
      ref={ref}
      onClick={(e) => {
        e.preventDefault()
        onClick(e)
      }}
      width={width}
      height={height}
    >
      {children}
      &#x25bc;
    </Button>
  ))

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={CustomToggle}
        id='dropdown-custom-component'
      >
        {value}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {items.length > 0 && items.map(item =>
          <Dropdown.Item
            key={item.value}
            eventKey={item.value}
            onSelect={handleSelect}
          >
            {item.fields.map((field, index) => <span key={index}>{field}</span>)}
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  )
}
