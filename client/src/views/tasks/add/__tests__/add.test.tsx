import React from 'react';
import { render } from '@testing-library/react';
import Add from '../../add';

test('renders <Add/> component correctly', () => {
    const props = {
        preFill: {
            id: null,
            title: "",
            description: "",
            createDate: null,
            tags: "",
            status: ""
        },
        handleModal: jest.fn(),
    }
  render(<Add {...props}/>);
});
