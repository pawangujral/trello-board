import React from 'react';
import { render } from '@testing-library/react';
import Input from '../../input';

test('renders <Input/> component correctly', () => {
    const props = {
        type: "text",
        name: "fname",
        label: "First Name",
        onChange: jest.fn()
    }
  render(<Input {...props}/>);
});
