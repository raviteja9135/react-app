import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Search from './Search';

describe('<Search />', () => {
  test('it should mount', () => {
    function someText() {
      
    }
    render(<Search someText={someText} />);
    
    const search = screen.getByTestId('Search');

    expect(search).toBeInTheDocument();
  });
});