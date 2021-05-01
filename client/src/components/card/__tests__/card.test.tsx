import React from 'react';
import { render } from '@testing-library/react';
import Card from '../../card';

test('renders <Card/> component correctly', () => {
    const props = {
        data: [{
            id: 1,
            title: "My Task",
            description: "This is description",
            createDate: new Date(),
            tags: "developer",
            status: "start"
        }],
        handleEdit: jest.fn()
    }
  render(<Card {...props}/>);
});
