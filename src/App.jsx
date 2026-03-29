import { Navigate, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AuthPage from "./pages/AuthPage"
import MainPage from "./pages/MainPage"
import ChooseUserType from "./components/sections/AuthPageSections/ChooseUserType"
import SignUpForm from "./components/sections/AuthPageSections/SignUpForm"
import VerificationCode from "./components/sections/AuthPageSections/VericationCode"
import AddExperience from "./components/sections/AuthPageSections/AddExperience"
import EditProfile from "./components/sections/AuthPageSections/EditProfile"
import EditProfileCompany from "./components/sections/AuthPageSections/EditProfileCompany"
import PostAndArticle from "./components/sections/MainPageSections/PostAndArticle"
import NotificationsTab from "./components/sections/MainPageSections/NotificationsTab"
import ProfileTab from "./components/sections/MainPageSections/ProfileTab"
import SectionPlaceholder from "./components/sections/MainPageSections/SectionPlaceholder"
import { JobsTab, InboxTab } from "./pages/MainPageTabs"
import { ROUTES } from "./routes"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.landing} element={<LandingPage />} />

        <Route path={ROUTES.signup} element={<AuthPage />}>
          <Route index element={<Navigate to="choose-user-type" replace />} />
          <Route path="choose-user-type" element={<ChooseUserType />} />
          <Route path="sign-up" element={<SignUpForm />} />
          <Route path="verification-code" element={<VerificationCode />} />
          <Route path="add-experience" element={<AddExperience />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="edit-profile-company" element={<EditProfileCompany />} />
        </Route>

        <Route path={ROUTES.app} element={<MainPage />}>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<PostAndArticle />} />
          <Route path="jobs" element={<JobsTab />} />
          <Route path="jobs/:jobId" element={<JobsTab />} />
          <Route path="notifications" element={<NotificationsTab />} />
          <Route path="inbox" element={<InboxTab />} />
          <Route path="inbox/:threadId" element={<InboxTab />} />
          <Route path="profile" element={<ProfileTab />} />
          <Route path="settings" element={<SectionPlaceholder title="Settings" />} />
        </Route>

        <Route path="*" element={<Navigate to={ROUTES.landing} replace />} />
      </Routes>
    </div>
  )
}

export default App
