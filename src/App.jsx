import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import MainLayout from './components/layout/MainLayout'
import CommunityBanner from './components/home/CommunityBanner'

function App() {
  const [count, setCount] = useState(0)

  return (
      <MainLayout>
        <CommunityBanner/>
      </MainLayout>
  )
}

export default App
