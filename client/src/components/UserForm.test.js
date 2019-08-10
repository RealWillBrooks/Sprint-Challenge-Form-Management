import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './UserForm';
import { render, getByTestId, dispatchEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

describe('<UserForm />', () => {

it('renders without crashing', () => {
  render(<UserForm />);
})

it('renders <h1>User Log-In </h1>', () => {
    

  const app = render(<UserForm />)

  app.getByText('User Log-In')
})

it("error", () => {
  
    const { container } = render(<UserForm />);
    const submitButton = getByTestId(container, "submitButton");
    dispatchEvent.click(submitButton);
  });
});
