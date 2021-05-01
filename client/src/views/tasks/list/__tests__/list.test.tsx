import React from 'react';
import { render } from '@testing-library/react';
import List from '../../list';

test('renders <List/> component correctly', () => {
    const props = {
        title: "In Progress",
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
  render(<List {...props}/>);
});
