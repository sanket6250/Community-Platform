import { Routes, Route } from 'react-router-dom'

import MainLayout from './components/layout/MainLayout'

import CommunityBanner from './components/home/CommunityBanner'
import CommunityHighlights from './components/home/CommunityHighlights'
import FeaturedGroups from './components/home/FeaturedGroups'
import LiveWebinar from './components/home/LiveWebinar'
import CommunitySpotlight from './components/home/CommunitySpotlight'

import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

const HomePage = () => {
  return (
    <MainLayout>
      <CommunityBanner />
      <CommunityHighlights />
      <FeaturedGroups />
      <LiveWebinar />
      <CommunitySpotlight />
    </MainLayout>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App