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
import OnboardingEmail from './pages/onboarding/OnboardingEmail'
import OnboardingOtp from './pages/onboarding/OnboardingOtp'
import StudentProfile from './pages/onboarding/StudentProfile'
import StudentEducation from './pages/onboarding/StudentEducation'
import StudentPreferences from './pages/onboarding/StudentPreferences'
import OnboardingAbout from './pages/onboarding/OnboardingAbout'
import StudentSkills from './pages/onboarding/StudentSkills'
import StudentLocationSharing from './pages/onboarding/StudentLocationSharing'
import OnboardingReview from './pages/onboarding/OnboardingReview'
import OrgDetails from './pages/onboarding/OrgDetails'
import OrgVerification from './pages/onboarding/OrgVerification'
import OnboardingComplete from './pages/onboarding/OnboardingComplete'
import StudentHome from './pages/student/StudentHome'
import StudentProfilePage from './pages/student/StudentProfile'
import StudentEditProfile from './pages/student/StudentEditProfile'
import OpportunityDetail from './pages/student/OpportunityDetail'
import StudentApplications from './pages/student/StudentApplications'
import StudentNotifications from './pages/student/StudentNotifications'
import StudentSettings from './pages/student/StudentSettings'
import StudentAddProject from './pages/student/StudentAddProject'
import ProjectDetail from './pages/student/ProjectDetail'
import StudentApply from './pages/student/StudentApply'
import ApplySuccess from './pages/student/ApplySuccess'
import OrgHome from './pages/organization/OrgHome'
import OrgProfile from './pages/organization/OrgProfile'
import OrgEditProfile from './pages/organization/OrgEditProfile'
import OrgApplicants from './pages/organization/OrgApplicants'
import OrgStudentView from './pages/organization/OrgStudentView'
import OrgPlacementDetail from './pages/organization/OrgPlacementDetail'
import OrgAddPlacement from './pages/organization/OrgAddPlacement'
import OrgProjectView from './pages/organization/OrgProjectView'
import OrgNotifications from './pages/organization/OrgNotifications'
import OrgSettings from './pages/organization/OrgSettings'
import AdminHome from './pages/admin/AdminHome'
import AdminStudents from './pages/admin/AdminStudents'
import AdminOrganizations from './pages/admin/AdminOrganizations'
import AdminPlacements from './pages/admin/AdminPlacements'
import AdminAdmins from './pages/admin/AdminAdmins'
import AdminAddAdmin from './pages/admin/AdminAddAdmin'
import AdminEditProfile from './pages/admin/AdminEditProfile'
import AdminSettings from './pages/admin/AdminSettings'
import AdminChangePassword from './pages/admin/AdminChangePassword'
import AdminForgotPassword from './pages/admin/AdminForgotPassword'
import AdminCheckInbox from './pages/admin/AdminCheckInbox'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/student/signup" replace />} />
        <Route path="student/home" element={<StudentHome />} />
        <Route path="student/profile" element={<StudentProfilePage />} />
        <Route path="student/profile/edit" element={<StudentEditProfile />} />
        <Route path="student/opportunities/:opportunityId" element={<OpportunityDetail />} />
        <Route path="student/applications" element={<StudentApplications />} />
        <Route path="student/notifications" element={<StudentNotifications />} />
        <Route path="student/settings" element={<StudentSettings />} />
        <Route path="student/projects/new" element={<StudentAddProject />} />
        <Route path="student/projects/:projectId" element={<ProjectDetail />} />
        <Route path="student/apply" element={<StudentApply />} />
        <Route path="student/apply/success" element={<ApplySuccess />} />
        <Route path="organization/home" element={<OrgHome />} />
        <Route path="organization/profile" element={<OrgProfile />} />
        <Route path="organization/profile/edit" element={<OrgEditProfile />} />
        <Route path="organization/applicants" element={<OrgApplicants />} />
        <Route path="organization/students/:studentId" element={<OrgStudentView />} />
        <Route path="organization/placements/new" element={<OrgAddPlacement />} />
        <Route path="organization/placements/:placementId" element={<OrgPlacementDetail />} />
        <Route path="organization/projects/:projectId" element={<OrgProjectView />} />
        <Route path="organization/notifications" element={<OrgNotifications />} />
        <Route path="organization/settings" element={<OrgSettings />} />
        <Route path="admin/home" element={<AdminHome />} />
        <Route path="admin/students" element={<AdminStudents />} />
        <Route path="admin/organizations" element={<AdminOrganizations />} />
        <Route path="admin/placements" element={<AdminPlacements />} />
        <Route path="admin/admins" element={<AdminAdmins />} />
        <Route path="admin/admins/new" element={<AdminAddAdmin />} />
        <Route path="admin/profile/edit" element={<AdminEditProfile />} />
        <Route path="admin/settings" element={<AdminSettings />} />
        <Route path="admin/change-password" element={<AdminChangePassword />} />
        <Route path="admin/forgot-password" element={<AdminForgotPassword />} />
        <Route path="admin/check-inbox" element={<AdminCheckInbox />} />
        <Route
          path="staff/home"
          element={<AdminHome role="Admin" basePath="/staff" showAdmins={false} />}
        />
        <Route
          path="staff/students"
          element={<AdminStudents role="Admin" basePath="/staff" showAdmins={false} />}
        />
        <Route
          path="staff/organizations"
          element={<AdminOrganizations role="Admin" basePath="/staff" showAdmins={false} />}
        />
        <Route
          path="staff/placements"
          element={<AdminPlacements role="Admin" basePath="/staff" showAdmins={false} />}
        />
        <Route
          path="staff/profile/edit"
          element={<AdminEditProfile role="Admin" basePath="/staff" showAdmins={false} />}
        />
        <Route
          path="staff/settings"
          element={<AdminSettings role="Admin" basePath="/staff" showAdmins={false} />}
        />
        <Route
          path="staff/change-password"
          element={<AdminChangePassword role="Admin" basePath="/staff" showAdmins={false} />}
        />
        <Route
          path="staff/forgot-password"
          element={<AdminForgotPassword role="Admin" basePath="/staff" showAdmins={false} />}
        />
        <Route
          path="staff/check-inbox"
          element={<AdminCheckInbox role="Admin" basePath="/staff" showAdmins={false} />}
        />
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
            <Route path="email" element={<OnboardingEmail />} />
            <Route path="otp" element={<OnboardingOtp />} />
            <Route path="profile" element={<StudentProfile />} />
            <Route path="education" element={<StudentEducation />} />
            <Route path="preferences" element={<StudentPreferences />} />
            <Route path="about" element={<OnboardingAbout />} />
            <Route path="skills" element={<StudentSkills />} />
            <Route path="location-sharing" element={<StudentLocationSharing />} />
            <Route path="review" element={<OnboardingReview />} />
            <Route path="details" element={<OrgDetails />} />
            <Route path="verification" element={<OrgVerification />} />
            <Route path="complete" element={<OnboardingComplete />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/student/signup" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
