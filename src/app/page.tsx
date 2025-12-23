'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Dashboard from '@/components/Dashboard'
import ContentPlanner from '@/components/ContentPlanner'
import TitleGenerator from '@/components/TitleGenerator'
import DescriptionOptimizer from '@/components/DescriptionOptimizer'
import ThumbnailAnalyzer from '@/components/ThumbnailAnalyzer'
import ScheduleManager from '@/components/ScheduleManager'
import Analytics from '@/components/Analytics'
import AgentChat from '@/components/AgentChat'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'planner':
        return <ContentPlanner />
      case 'titles':
        return <TitleGenerator />
      case 'descriptions':
        return <DescriptionOptimizer />
      case 'thumbnails':
        return <ThumbnailAnalyzer />
      case 'schedule':
        return <ScheduleManager />
      case 'analytics':
        return <Analytics />
      case 'chat':
        return <AgentChat />
      default:
        return <Dashboard />
    }
  }

  return (
    <main className="flex min-h-screen bg-youtube-dark">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </main>
  )
}
