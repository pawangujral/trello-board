import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Input, {inputProps} from './../input';

describe('Input', () => {
  test('should render', () => {
    const props: inputProps = {
      type: 'text',
      placeholder: 'this is a placeholder',
      label: 'Test',
      name: 'test',
      onChange: jest.fn(),
    };
    render(<Input {...props}/>);
    const input = screen.getByLabelText('Test') as HTMLInputElement;
    expect(input.value).toBe('');
    fireEvent.change(input, {target: {value: 'what'}});
    expect(input.value).toBe('what');
  });
});
