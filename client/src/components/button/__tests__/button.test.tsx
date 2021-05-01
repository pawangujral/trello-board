import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../button';

test('renders <Button/> component correctly', () => {
    const props = {
        title: 'click here'
    }
  render(<Button {...props}/>);
});
