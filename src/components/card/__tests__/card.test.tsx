import React from 'react';
import {render, screen} from '@testing-library/react';
import Card, {cardProps} from './../card';

let defaultProps: cardProps;

beforeEach(() => {
  defaultProps = {
    data: [{
      id: 1,
      title: 'test',
      description: 'this is test message',
      createDate: new Date(),
      tags: 'tag 1',
      status: 'complete',
    }],
    handleEdit: jest.fn(),
  };
});

describe('test Card component', () => {
  test('should render card', () => {
    render(<Card {...defaultProps}/>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('should render card', () => {
    render(<Card {...defaultProps}/>);
    const editButton = screen.getByText('Edit');
    expect(editButton).toBeInTheDocument();
    editButton.click();
  });
});
