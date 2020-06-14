import React from 'react'
import InputUpload from '../input-upload'
import { render, fireEvent, act } from 'setupTests'

it('After upload image show label name on component', async () => {
    const { getByTestId, getByRole, getByText } = render(<InputUpload />)

    const inputImage = getByTestId('image-upload')
    const file = new File(['(⌐□_□)'], 'image-test.png', {
      type: 'image/png'
    })
    Object.defineProperty(inputImage, 'files', {
      value: [file]
    })
    fireEvent.change(inputImage)

    expect(getByText('image-test.png')).toBeVisible()
})