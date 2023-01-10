import { App } from '../src/App';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
