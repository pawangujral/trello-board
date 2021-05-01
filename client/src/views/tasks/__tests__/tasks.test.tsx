import React from 'react';
import { render } from '@testing-library/react';
import Tasks from '../../tasks';

test('renders <Tasks/> component correctly', () => {
    const props = {}
  render(<Tasks {...props}/>);
});
