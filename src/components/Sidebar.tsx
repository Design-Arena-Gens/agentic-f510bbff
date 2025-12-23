'use client'

import { 
  LayoutDashboard, 
  Calendar, 
  Type, 
  FileText, 
  Image, 
  Clock, 
  BarChart3, 
  MessageSquare,
  Youtube,
  Bot,
  Sparkles
} from 'lucide-react'

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'chat', label: 'AI Agent Chat', icon: MessageSquare },
  { id: 'planner', label: 'Content Planner', icon: Calendar },
  { id: 'titles', label: 'Title Generator', icon: Type },
  { id: 'descriptions', label: 'Description Optimizer', icon: FileText },
  { id: 'thumbnails', label: 'Thumbnail Analyzer', icon: Image },
  { id: 'schedule', label: 'Schedule Manager', icon: Clock },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
]

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <div className="w-64 bg-youtube-gray border-r border-white/10 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Youtube className="w-10 h-10 text-youtube-red" />
            <Bot className="w-5 h-5 text-white absolute -bottom-1 -right-1 bg-youtube-gray rounded-full p-0.5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">YouTube</h1>
            <p className="text-xs text-gray-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              AI Agent
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-youtube-red text-white shadow-lg shadow-youtube-red/20'
                  : 'text-gray-400 hover:text-white hover:bg-youtube-light'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
              {item.id === 'chat' && (
                <span className="ml-auto bg-green-500 w-2 h-2 rounded-full animate-pulse" />
              )}
            </button>
          )
        })}
      </nav>

      {/* Agent Status */}
      <div className="p-4 border-t border-white/10">
        <div className="glass rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-green-500 font-medium">Agent Active</span>
          </div>
          <p className="text-xs text-gray-400">
            AI agent is monitoring your channel and ready to assist.
          </p>
        </div>
      </div>
    </div>
  )
}
