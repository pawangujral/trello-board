import React from 'react';
import {render, screen} from '@testing-library/react';
import Button, {buttonProps} from './../button';

let props: buttonProps;

beforeEach(() => {
  props = {
    title: 'Click Me',
    variant: 'text',
    type: 'button',
    handleClick: jest.fn(),
  };
});

describe('unit test for button component', () => {
  test('should render correctly', () => {
    render(<Button {...props}/>);
    expect(screen.getByText(/Click Me/i)).toBeInTheDocument();
  });
});

