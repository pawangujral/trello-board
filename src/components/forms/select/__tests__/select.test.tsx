import React from 'react';
import { render } from '@testing-library/react';
import Select from '../../select';

test('renders <Select/> component correctly', () => {
    const props = {
        name: "fname",
        label: "First Name",
        onChange: jest.fn(),
        options: ["One", "Two"],
        value: "",
    }
  render(<Select {...props}/>);
});
