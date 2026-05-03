'use client'

import { useState } from 'react'
import { LandingPage } from '@/components/landing-page'
import { Dashboard } from '@/components/dashboard'

type View = 'landing' | 'dashboard'

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('landing')

  if (currentView === 'landing') {
    return <LandingPage onGetStarted={() => setCurrentView('dashboard')} />
  }

  return <Dashboard onBack={() => setCurrentView('landing')} />
}
