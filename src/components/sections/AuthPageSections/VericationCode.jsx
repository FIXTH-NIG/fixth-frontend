import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../../routes';
import { useAuth } from '../../../hooks';

const PageWrapper = styled.div`
  background: rgba(228, 228, 228, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  width: 480px;
  @media (max-width: 700px){
    width: 100%;
  }
`;

const Card = styled.div`
  width: 100%;
  border-radius: 32px;
  border: 1px solid #fcfcfc;
  background: rgba(228, 228, 228, 1);
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  padding: 40px 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
   @media (max-width: 700px){
    padding: 16px;
    border: none;
    box-shadow: none;
  }
`;

const HeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
  margin-bottom: 54px;
`;

const Title = styled.h1`
  color: rgba(31, 31, 31, 1);
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -1.2px;
  line-height: normal;
  margin: 0;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.6px;
  line-height: normal;
  margin: 0;
`;

const SubtitleGray = styled.span`
  color: rgba(127, 127, 127, 1);
`;

const SubtitleDark = styled.span`
  color: rgba(31, 31, 31, 1);
`;

const OtpRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 72px;
  @media (max-width: 700px){
    gap: 16px;
  }
`;

const OtpInput = styled.input`
  width: 40px;
  padding: 4px 8px;
  border: none;
  border-bottom: 1px solid var(--grey);
  background: transparent;
  color: var(--black);
  text-align: center;
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 32px;
  font-weight: 500;
  line-height: normal;
  outline: none;
  caret-color: rgba(75, 111, 187, 1);

  &:focus {
    border-bottom-color: rgba(75, 111, 187, 1);
  }
`;

const ActionsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-bottom: 48px;
`;

const VerifyButton = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 20px;
  background: var(--blue);
  border: none;
  cursor: pointer;
  color: rgba(228, 228, 228, 1);
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: -0.45px;
  opacity: 1;

  &:hover {
    background: rgba(60, 90, 160, 1);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const ResendText = styled.p`
  color: rgba(127, 127, 127, 1);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.39px;
  margin: 0;
`;

const ResendLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(31, 31, 31, 1);
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.39px;
  padding: 0;
`;

const DifferentEmailLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(31, 31, 31, 1);
  font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.39px;
  text-decoration: underline;
  padding: 0;
`;

const FormMessage = styled.p`
  color: ${props => props.$error ? '#c0392b' : '#2c3e50'};
  font-size: 12px;
  margin: 12px 0 0;
  text-align: center;
`;

const OTP_LENGTH = 6;

export default function VerificationCode() {
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const { pendingEmail, verifyOtp, resendVerification } = useAuth();

  const handleChange = (index, e) => {
    const val = e.target.value.replace(/\D/g, '').slice(-1);
    const updated = [...otp];
    updated[index] = val;
    setOtp(updated);
    if (val && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH);
    const updated = [...otp];
    pasted.split('').forEach((char, i) => { updated[i] = char; });
    setOtp(updated);
    const nextEmpty = updated.findIndex((v) => !v);
    inputRefs.current[nextEmpty === -1 ? OTP_LENGTH - 1 : nextEmpty]?.focus();
  };

  const handleVerify = async () => {
    setError('');
    setMessage('');

    if (!pendingEmail) {
      setError('Please go back and enter your email first.');
      return;
    }

    const code = otp.join('');
    if (code.length < OTP_LENGTH) {
      setError('Please enter the full verification code.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await verifyOtp({ email: pendingEmail, code });
      const profileComplete = response?.profile_complete ?? response?.profileComplete;
      const nextRoute = profileComplete === false ? ROUTES.signupAddExperience : ROUTES.appHome;
      navigate(nextRoute);
    } catch (err) {
      setError(err?.message || 'Verification failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    setError('');
    setMessage('');

    if (!pendingEmail) {
      setError('Please go back and enter your email first.');
      return;
    }

    setIsResending(true);
    try {
      await resendVerification({ email: pendingEmail });
      setOtp(Array(OTP_LENGTH).fill(''));
      inputRefs.current[0]?.focus();
      setMessage('A new code has been sent to your email.');
    } catch (err) {
      setError(err?.message || 'Unable to resend code. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  const handleUseDifferentEmail = () => {
    navigate(ROUTES.signupSignUp);
  };

  return (
    <PageWrapper>
      <Card>
        <HeaderGroup>
          <Title>Confirm your email</Title>
          <Subtitle>
            <SubtitleGray>Enter the verification code we sent to </SubtitleGray>
            <SubtitleDark>{pendingEmail || 'your email'}</SubtitleDark>
          </Subtitle>
        </HeaderGroup>

        <OtpRow onPaste={handlePaste}>
          {otp.map((digit, i) => (
            <OtpInput
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e)}
              onKeyDown={(e) => handleKeyDown(i, e)}
            />
          ))}
        </OtpRow>

        <ActionsGroup>
          <VerifyButton onClick={handleVerify} disabled={isSubmitting}>
            {isSubmitting ? 'Verifying...' : 'Verify'}
          </VerifyButton>
          <ResendText>
            Didn't receive code?{' '}
            <ResendLink onClick={handleResend} disabled={isResending}>
              {isResending ? 'Sending...' : 'Resend OTP'}
            </ResendLink>
          </ResendText>
          {error ? <FormMessage $error>{error}</FormMessage> : null}
          {message ? <FormMessage>{message}</FormMessage> : null}
        </ActionsGroup>

        <DifferentEmailLink type="button" onClick={handleUseDifferentEmail}>
          Use a different email
        </DifferentEmailLink>
      </Card>
    </PageWrapper>
  );
}
