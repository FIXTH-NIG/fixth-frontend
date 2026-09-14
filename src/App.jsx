import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import UserTypeGate from './components/UserTypeGate'
import { OnboardingProvider } from './lib/OnboardingContext'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import CheckInbox from './pages/CheckInbox'
import ResetPassword from './pages/ResetPassword'
import PasswordChanged from './pages/PasswordChanged'
import VerifyEmail from './pages/VerifyEmail'
import Welcome from './pages/Welcome'
import SettingUp from './pages/SettingUp'
import OnboardingIndex from './pages/onboarding/OnboardingIndex'
import StudentProfile from './pages/onboarding/StudentProfile'
import OnboardingAbout from './pages/onboarding/OnboardingAbout'
import StudentInternship from './pages/onboarding/StudentInternship'
import StudentSkills from './pages/onboarding/StudentSkills'
import StudentLocationSharing from './pages/onboarding/StudentLocationSharing'
import OrgDetails from './pages/onboarding/OrgDetails'
import OrgVerification from './pages/onboarding/OrgVerification'
import OnboardingComplete from './pages/onboarding/OnboardingComplete'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/student/signup" replace />} />
        <Route path=":userType" element={<UserTypeGate />}>
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="check-inbox" element={<CheckInbox />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="password-changed" element={<PasswordChanged />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="setting-up" element={<SettingUp />} />
          <Route
            path="onboarding"
            element={
              <OnboardingProvider>
                <Outlet />
              </OnboardingProvider>
            }
          >
            <Route index element={<OnboardingIndex />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="about" element={<OnboardingAbout />} />
            <Route path="internship-info" element={<StudentInternship />} />
            <Route path="skills" element={<StudentSkills />} />
            <Route path="location-sharing" element={<StudentLocationSharing />} />
            <Route path="org-details" element={<OrgDetails />} />
            <Route path="verification" element={<OrgVerification />} />
            <Route path="complete" element={<OnboardingComplete />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/student/signup" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
