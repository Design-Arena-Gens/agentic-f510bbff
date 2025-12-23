'use client'

import { 
  TrendingUp, 
  Users, 
  Eye, 
  ThumbsUp, 
  Play, 
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Target,
  Calendar,
  CheckCircle
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

const viewsData = [
  { day: 'Mon', views: 12400 },
  { day: 'Tue', views: 15800 },
  { day: 'Wed', views: 13200 },
  { day: 'Thu', views: 18900 },
  { day: 'Fri', views: 22100 },
  { day: 'Sat', views: 28500 },
  { day: 'Sun', views: 25200 },
]

const subscriberData = [
  { month: 'Jan', subscribers: 10200 },
  { month: 'Feb', subscribers: 12400 },
  { month: 'Mar', subscribers: 15100 },
  { month: 'Apr', subscribers: 18800 },
  { month: 'May', subscribers: 23500 },
  { month: 'Jun', subscribers: 29800 },
]

const stats = [
  { label: 'Total Views', value: '2.4M', change: '+12.5%', positive: true, icon: Eye },
  { label: 'Subscribers', value: '29.8K', change: '+8.2%', positive: true, icon: Users },
  { label: 'Watch Time', value: '156K hrs', change: '+15.3%', positive: true, icon: Clock },
  { label: 'Engagement', value: '4.8%', change: '-0.3%', positive: false, icon: ThumbsUp },
]

const agentTasks = [
  { task: 'Optimized 3 video titles for better CTR', status: 'completed', time: '2 hours ago' },
  { task: 'Generated trending content ideas', status: 'completed', time: '4 hours ago' },
  { task: 'Scheduled 2 videos for optimal posting time', status: 'completed', time: '6 hours ago' },
  { task: 'Analyzing competitor channels', status: 'in-progress', time: 'In progress' },
  { task: 'Generate thumbnail variations', status: 'pending', time: 'Scheduled' },
]

const upcomingContent = [
  { title: '10 AI Tools You NEED in 2024', date: 'Dec 24', views: '~15K' },
  { title: 'How I Grew to 30K Subscribers', date: 'Dec 26', views: '~22K' },
  { title: 'YouTube Algorithm Secrets Revealed', date: 'Dec 28', views: '~35K' },
]

export default function Dashboard() {
  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">AI-powered insights and automation for your YouTube channel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="glass rounded-xl p-6 glass-hover transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-youtube-red/20 rounded-lg">
                  <Icon className="w-6 h-6 text-youtube-red" />
                </div>
                <div className={`flex items-center gap-1 text-sm ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          )
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Views Chart */}
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-youtube-red" />
            Weekly Views
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={viewsData}>
                <defs>
                  <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF0000" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF0000" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#3F3F3F" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#272727', border: '1px solid #3F3F3F', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="views" 
                  stroke="#FF0000" 
                  fillOpacity={1}
                  fill="url(#viewsGradient)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subscribers Chart */}
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-youtube-red" />
            Subscriber Growth
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={subscriberData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#3F3F3F" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#272727', border: '1px solid #3F3F3F', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="subscribers" 
                  stroke="#FF0000" 
                  strokeWidth={3}
                  dot={{ fill: '#FF0000', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Agent Activity */}
        <div className="lg:col-span-2 glass rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-youtube-red" />
            AI Agent Activity
          </h3>
          <div className="space-y-4">
            {agentTasks.map((task, index) => (
              <div key={index} className="flex items-center gap-4 p-3 bg-youtube-light/50 rounded-lg">
                <div className={`w-2 h-2 rounded-full ${
                  task.status === 'completed' ? 'bg-green-500' :
                  task.status === 'in-progress' ? 'bg-yellow-500 animate-pulse' :
                  'bg-gray-500'
                }`} />
                <div className="flex-1">
                  <p className="text-white text-sm">{task.task}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  task.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                  task.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {task.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Content */}
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-youtube-red" />
            Upcoming Content
          </h3>
          <div className="space-y-4">
            {upcomingContent.map((content, index) => (
              <div key={index} className="p-3 bg-youtube-light/50 rounded-lg">
                <p className="text-white text-sm font-medium mb-2 line-clamp-1">{content.title}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {content.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {content.views}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
