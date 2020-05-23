import React from 'react';
import Button from '../index';

import { render, fireEvent, cleanup } from '../../../setupTests';

afterEach(cleanup);

const buttonProps = {
    bgColor: 'blue', 
    width: '30px', 
    height: '50px', 
    text: 'test',
    borderRadius: '25px', 
    onClickHandler: jest.fn()
}

describe('Button Component', () => {
  
  it('display text inside button', () => {

    const { getByText, rerender } = render(<Button {...buttonProps} />);
    expect(getByText('test')).toBeTruthy(); 

    rerender(<Button {...buttonProps} text='New text' />);
    expect(getByText('New text')).toBeTruthy();     
  });

  it('calls correct function on click', () => {
    const { getByText } = render(<Button {...buttonProps} />)
    fireEvent.click(getByText(buttonProps.text));
    expect(buttonProps.onClickHandler).toHaveBeenCalled();
  });

})