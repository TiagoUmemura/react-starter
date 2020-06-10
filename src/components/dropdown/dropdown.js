import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import { Button, SelectedOptionContainer, TextContainer, IconContainer } from './styled-wrappers'
//Developed with react bootstrap library
export default function DropdownBootstrap ({
  items,
  value,
  handleSelect,
  width,
  height,
  defaultLabel = '',
  disabled
}) {
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
      disabled={disabled}
    >
      {children}
    </Button>
  ))

  return (
    <Dropdown>
      <Dropdown.Toggle
        as={CustomToggle}
        id='dropdown-custom-component'
      >
        <SelectedOptionContainer>
          <TextContainer>{value !== '' ? items.find(item => item.value === value).fields[0] : defaultLabel}</TextContainer>
          <IconContainer>&#x25bc;</IconContainer>
        </SelectedOptionContainer>
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
