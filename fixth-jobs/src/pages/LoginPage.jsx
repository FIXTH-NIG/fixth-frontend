import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { ROUTES } from '../routes';
import FixthLogo from '../assets/Icons/Fixth.svg';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate(ROUTES.jobs);
    } catch (err) {
      setError(getErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Card>
        <LogoArea>
          <img src={FixthLogo} alt="Fixth" />
        </LogoArea>

        <Heading>Welcome back</Heading>
        <Subheading>Log in to your Fixth account</Subheading>

        <Form onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="email">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field>

          <Field>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Field>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Logging in…' : 'Log In'}
          </SubmitButton>
        </Form>

        <Footer>
          Don&apos;t have an account?{' '}
          <FooterLink to={ROUTES.signup}>Sign up</FooterLink>
        </Footer>
      </Card>
    </PageWrapper>
  );
}

function getErrorMessage(code) {
  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Incorrect email or password.';
    case 'auth/too-many-requests':
      return 'Too many attempts. Try again later.';
    default:
      return 'Something went wrong. Please try again.';
  }
}

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background-color: var(--background-white);
  background-image: radial-gradient(ellipse at 60% 40%, rgba(99, 153, 217, 0.08) 0%, transparent 60%);
`;

const Card = styled.div`
  width: 100%;
  max-width: 440px;
  background: var(--white);
  border-radius: 18px;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 40px rgba(31, 31, 31, 0.10);
  @media (max-width: 480px) { padding: 28px 20px; }
`;

const LogoArea = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 28px;
  img { height: 22px; }
`;

const Heading = styled.h1`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: -0.8px;
  color: var(--black);
  margin-bottom: 6px;
  text-align: center;
`;

const Subheading = styled.p`
  font-size: 13px;
  color: var(--primary-grey);
  margin-bottom: 28px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--black);
`;

const Input = styled.input`
  height: 42px;
  border: 1px solid var(--light-ash);
  border-radius: 8px;
  background: #f1f1f1;
  padding: 0 14px;
  font-size: 14px;
  font-family: inherit;
  color: var(--black);
  outline: none;
  transition: all 150ms ease;
  &::placeholder { color: var(--primary-grey); }
  &:focus {
    border-color: var(--blue);
    background: #fff;
    box-shadow: 0 0 0 3px rgba(75, 111, 187, 0.12);
  }
`;

const ErrorMessage = styled.p`
  font-size: 13px;
  color: #e53e3e;
  padding: 10px 12px;
  background: rgba(229, 62, 62, 0.08);
  border-radius: 6px;
  border-left: 3px solid #e53e3e;
`;

const SubmitButton = styled.button`
  margin-top: 6px;
  height: 42px;
  border-radius: 40px;
  background-color: var(--blue);
  color: var(--white);
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.4px;
  transition: all 200ms ease;
  box-shadow:
    inset 0 6px 4px -6px rgba(255, 255, 255, 0.9),
    inset 0 -6px 10px -6px rgba(0, 0, 0, 0.45);
  &:hover:not(:disabled) {
    filter: brightness(1.1);
    transform: translateY(-1px);
    box-shadow:
      0 4px 12px rgba(75, 111, 187, 0.35),
      inset 0 6px 4px -6px rgba(255, 255, 255, 0.9);
  }
  &:active:not(:disabled) { transform: translateY(0); }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const Footer = styled.p`
  margin-top: 24px;
  text-align: center;
  font-size: 13px;
  color: var(--primary-grey);
`;

const FooterLink = styled(Link)`
  color: var(--blue);
  font-weight: 500;
  &:hover { text-decoration: underline; }
`;
