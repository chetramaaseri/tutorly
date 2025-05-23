import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import AuthLayout from './layouts/AuthLayout'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import TermsAndConditions from './pages/legal/TermAndConditions'
import TutorsList from './pages/tutors/TutorsList'
import JobsList from './pages/jobs/JobsList'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='term-and-conditions' element={<TermsAndConditions />} />
        <Route path='all-tutors' element={<TutorsList tutorType={'all'} />} />
        <Route path='all-online-tutors' element={<TutorsList tutorType={'online'} />} />
        <Route path='all-home-tutors' element={<TutorsList tutorType={'home'} />} />
        <Route path='all-assignment-tutors' element={<TutorsList tutorType={'assignment'} />} />
        <Route path='all-tutor-jobs' element={<JobsList jobtype={'all'} />} />
        <Route path='online-tutor-jobs' element={<JobsList jobtype={'online'} />} />
        <Route path='offline-tutor-jobs' element={<JobsList jobtype={'offline'} />} />
        <Route path='assignment-tutor-jobs' element={<JobsList jobtype={'assignment'} />} />
        <Route path='about-us' element={<About />} />
        <Route path='contact-us' element={<Contact />} />
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='reset-password' element={<ResetPassword />} />
      </Route>
    </Routes>
  )
}

export default App
