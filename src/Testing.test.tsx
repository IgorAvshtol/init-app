import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignInForm } from './components/SignInForm';
import { Input } from './components/Input';
import { SignUpForm } from './components/SignUpForm';

describe('Input test', () => {
  it('email field should be in the document', () => {
    render(<Input name={'email'} label={'Email'} errors={null} />);
    const emailField = screen.getByText(/Email/i);
    expect(emailField).toBeInTheDocument();
  });
  it('name field should be in the document', () => {
    render(<Input name={'name'} label={'Name'} errors={null} />);
    const nameField = screen.getByText(/Name/i);
    expect(nameField).toBeInTheDocument();
  });
  it('password field should be in the document', () => {
    render(<Input name={'password'} label={'Password'} errors={null} />);
    const passwordField = screen.getByText(/Password/i);
    expect(passwordField).toBeInTheDocument();
  });
});

describe('SignInForm test', () => {
  it('email is required', async () => {
    render(<SignInForm />);
    const emailField = screen.getByRole('textbox', { name: /email/i });

    expect(emailField).toBeInTheDocument();

    const buttonSubmit = screen.getByRole('button', { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    const errorEmailMessageBefore = screen.queryByText(/Email is required/);

    expect(errorEmailMessageBefore).not.toBeInTheDocument();

    userEvent.type(emailField, '');
    userEvent.click(buttonSubmit);

    const errorEmailMessageAgain = screen.findByText(/Email is required/i);

    expect(await errorEmailMessageAgain).toBeInTheDocument();
  });
  it('password is required', async () => {
    render(<SignInForm />);
    const passwordField = screen.getByText(/password/i);

    expect(passwordField).toBeInTheDocument();

    const buttonSubmit = screen.getByRole('button', { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    const errorPasswordMessageBefore = screen.queryByText(/Password is required/);

    expect(errorPasswordMessageBefore).not.toBeInTheDocument();

    userEvent.type(passwordField, '');
    userEvent.click(buttonSubmit);

    const errorPasswordMessageAgain = screen.findByText(/Password is required/i);

    expect(await errorPasswordMessageAgain).toBeInTheDocument();
  });
});

describe('SignUpForm test', () => {
  it('name is required', async () => {
    render(<SignUpForm />);
    const nameField = screen.getByRole('textbox', { name: /name/i });

    expect(nameField).toBeInTheDocument();

    const buttonSubmit = screen.getByRole('button', { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    const errorEmailMessageBefore = screen.queryByText(/Email is required/);

    expect(errorEmailMessageBefore).not.toBeInTheDocument();

    userEvent.type(nameField, '');
    userEvent.click(buttonSubmit);

    const errorEmailMessageAgain = screen.findByText(/Email is required/i);

    expect(await errorEmailMessageAgain).toBeInTheDocument();
  });
  it('email is required', async () => {
    render(<SignUpForm />);
    const emailField = screen.getByRole('textbox', { name: /email/i });

    expect(emailField).toBeInTheDocument();

    const buttonSubmit = screen.getByRole('button', { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    const errorEmailMessageBefore = screen.queryByText(/Email is required/);

    expect(errorEmailMessageBefore).not.toBeInTheDocument();

    userEvent.type(emailField, '');
    userEvent.click(buttonSubmit);

    const errorEmailMessageAgain = screen.findByText(/Email is required/i);

    expect(await errorEmailMessageAgain).toBeInTheDocument();
  });
  it('password is required', async () => {
    render(<SignUpForm />);
    const passwordField = screen.getByText(/password/i);

    expect(passwordField).toBeInTheDocument();

    const buttonSubmit = screen.getByRole('button', { name: /submit/i });
    expect(buttonSubmit).toBeInTheDocument();
    const errorPasswordMessageBefore = screen.queryByText(/Password is required/);

    expect(errorPasswordMessageBefore).not.toBeInTheDocument();

    userEvent.type(passwordField, '');
    userEvent.click(buttonSubmit);

    const errorPasswordMessageAgain = screen.findByText(/Password is required/i);

    expect(await errorPasswordMessageAgain).toBeInTheDocument();
  });
});
