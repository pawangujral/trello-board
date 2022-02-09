import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Add, {addProps} from './../add';

let defaultProps: addProps;

beforeEach(() => {
  defaultProps = {
    handleModal: jest.fn(),
    preFill: {
      createDate: null,
      description: '',
      id: null,
      status: '',
      tags: '',
      title: '',
    },
  };
});

describe('Test add compoenents', () => {
  test('should render model without error', () => {
    render(<Add {...defaultProps}/>);
    const headerText = screen.getByText('What you\'ve in mind today?');
    expect(headerText).toBeInTheDocument();
  });

  test('should be able to close model all form fields', () => {
    render(<Add {...defaultProps}/>);
    const closeButton = screen.getByRole('button', {name: /X/i});
    closeButton.click();
  });

  test('should fill all form fields', () => {
    render(<Add {...defaultProps}/>);
    const titleInput = screen.getByLabelText('title*') as HTMLInputElement;
    fireEvent.change(titleInput, {target: {value: 'test'}});
    expect(titleInput.value).toBe('test');
  });

  test('should be able to change dropdown value', () => {
    render(<Add {...defaultProps}/>);
    const selectComp = screen.getByLabelText('Tags*') as HTMLInputElement;
    fireEvent.change(selectComp, {target: {value: 'developer'}});
    expect(selectComp.value).toBe('developer');
  });

  test('should not be able to submit without all required fields', () => {
    render(<Add {...defaultProps}/>);
    const saveBtn = screen.getByText('Save') as HTMLButtonElement;
    fireEvent.click(saveBtn);
    expect(screen.getByText('* All fields are required')).toBeInTheDocument();
  });
});

