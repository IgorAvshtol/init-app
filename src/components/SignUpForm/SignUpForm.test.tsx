import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignUpForm } from './SignUpForm';
import { Provider } from 'react-redux';
import { store } from 'store/store';

describe('SignInForm test', () => {
  it('name is required', async () => {
    render(
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    );
    const nameField = screen.getByRole('textbox', { name: /name/i });

    expect(nameField).toBeInTheDocument();

    const buttonSubmit = screen.getByRole('button', { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    const errorNameMessageBefore = screen.queryByText('Name is required');

    expect(errorNameMessageBefore).not.toBeInTheDocument();

    userEvent.type(nameField, '');
    userEvent.click(buttonSubmit);

    const errorNameMessageAgain = screen.findByText('Name is required');

    expect(await errorNameMessageAgain).toBeInTheDocument();
  });
  it('email is required', async () => {
    render(
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    );
    const emailField = screen.getByRole('textbox', { name: /email/i });

    expect(emailField).toBeInTheDocument();

    const buttonSubmit = screen.getByRole('button', { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    const errorEmailMessageBefore = screen.queryByText('Email is required');

    expect(errorEmailMessageBefore).not.toBeInTheDocument();

    userEvent.type(emailField, '');
    userEvent.click(buttonSubmit);

    const errorEmailMessageAgain = screen.findByText('Email is required');

    expect(await errorEmailMessageAgain).toBeInTheDocument();
  });
  it('password is required', async () => {
    render(
      <Provider store={store}>
        <SignUpForm />
      </Provider>
    );
    const passwordField = screen.getByText(/password/i);

    expect(passwordField).toBeInTheDocument();

    const buttonSubmit = screen.getByRole('button', { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    const errorPasswordMessageBefore = screen.queryByText('Password is required');

    expect(errorPasswordMessageBefore).not.toBeInTheDocument();

    userEvent.type(passwordField, '');
    userEvent.click(buttonSubmit);

    const errorPasswordMessageAgain = screen.findByText('Password is required');

    expect(await errorPasswordMessageAgain).toBeInTheDocument();
  });
});
