import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import MainLayout from './components/layout/MainLayout'
import CommunityBanner from './components/home/CommunityBanner'
import CommunityHighlights from './components/home/CommunityHighlights'
import FeaturedGroups from './components/home/FeaturedGroups'
import LiveWebinar from './components/home/LiveWebinar'
import CommunitySpotlight from './components/home/CommunitySpotlight'

function App() {
  const [count, setCount] = useState(0)

  return (
      <MainLayout>
        <CommunityBanner/>
        <CommunityHighlights />
        <FeaturedGroups />
        <LiveWebinar />
        <CommunitySpotlight />
      </MainLayout>
  )
}

export default App
