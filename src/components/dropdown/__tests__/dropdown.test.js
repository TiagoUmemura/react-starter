import React from 'react'
import DropdownBootstrap from '../dropdown'
import { render, fireEvent, act } from 'setupTests'

describe('DropdownBootstrap component test', () => {
  const itemList = [
    { fields: ['Test'], value: 'test value' },
    { fields: ['Test2'], value: 'test value 2' }
  ]

  it('show default label when value is empty', () => {
    const { getByText } = render(
      <DropdownBootstrap
        items={itemList}
        value=''
        defaultLabel='default label test'
      />
    )
    expect(getByText('default label test')).toBeTruthy()
  })

  it('on click dropdown show item list', async () => {
    const onSelectFunction = jest.fn()
    const { getByText } = render(
      <DropdownBootstrap
        items={itemList}
        value=''
        defaultLabel='default label test'
        handleSelect={onSelectFunction}
      />
    )
    const buttonDropdown = getByText('default label test')
    await act(async () => fireEvent.click(buttonDropdown))

    expect(getByText(itemList[0].fields[0])).toBeVisible()
    expect(getByText(itemList[1].fields[0])).toBeVisible()
  })

  it('on click item calls on select function', async () => {
    const onSelectFunction = jest.fn()
    const { getByText } = render(
      <DropdownBootstrap
        items={itemList}
        value=''
        defaultLabel='default label test'
        handleSelect={onSelectFunction}
      />
    )
    const buttonDropdown = getByText('default label test')
    await act(async () => fireEvent.click(buttonDropdown))

    const buttonItem = getByText(itemList[0].fields[0])
    await act(async () => fireEvent.click(buttonItem))

    expect(onSelectFunction).toHaveBeenCalled()
  })

  it('show label of the selected value', async () => {
    const { getByText } = render(
      <DropdownBootstrap
        items={itemList}
        value={itemList[0].value}
        defaultLabel='default label test'
      />
    )
    const firstLabel = getByText(itemList[0].fields[0])
    expect(firstLabel).toBeVisible()
  })
})
