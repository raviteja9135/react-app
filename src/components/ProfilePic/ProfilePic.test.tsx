import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfilePic from './ProfilePic';

describe('<ProfilePic />', () => {
  test('it should mount', () => {
    render(<ProfilePic />);
    
    const profilePic = screen.getByTestId('ProfilePic');

    expect(profilePic).toBeInTheDocument();
  });
});