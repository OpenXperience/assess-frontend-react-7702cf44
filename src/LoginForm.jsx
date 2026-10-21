import { useState } from 'react';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = emailPattern.test(email);
  const isPasswordValid = password.length >= 8;

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={email.length > 0 && !isEmailValid}
          aria-describedby="email-error"
        />
        {!isEmailValid && email.length > 0 && (
          <p id="email-error">Please enter a valid email address.</p>
        )}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          aria-invalid={password.length > 0 && !isPasswordValid}
          aria-describedby="password-error"
        />
        {!isPasswordValid && password.length > 0 && (
          <p id="password-error">Password length must be at least 8 characters.</p>
        )}
      </div>

      <button type="submit" disabled={!isEmailValid || !isPasswordValid}>
        Submit
      </button>
    </form>
  );
}

export default LoginForm;
