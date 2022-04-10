import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignInForm } from './SignInForm';
import { ProvideAuth } from 'hooks/useProvideAuth';

describe('SignInForm test', () => {
  const mock = jest.fn();
  it('email is required', async () => {
    render(
      <ProvideAuth>
        <SignInForm onSignIn={mock} />{' '}
      </ProvideAuth>
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
      <ProvideAuth>
        <SignInForm onSignIn={mock} />{' '}
      </ProvideAuth>
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
