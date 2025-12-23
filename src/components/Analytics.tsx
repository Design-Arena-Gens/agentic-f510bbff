'use client'

import { useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown,
  Users, 
  Eye, 
  Clock,
  ThumbsUp,
  MessageSquare,
  Share2,
  ArrowUpRight,
  ArrowDownRight,
  Play,
  Filter,
  Download
} from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

const viewsData = [
  { date: 'Dec 1', views: 12400, subscribers: 120 },
  { date: 'Dec 5', views: 15800, subscribers: 180 },
  { date: 'Dec 10', views: 22100, subscribers: 250 },
  { date: 'Dec 15', views: 28500, subscribers: 320 },
  { date: 'Dec 20', views: 35200, subscribers: 410 },
]

const engagementData = [
  { name: 'Likes', value: 4200, color: '#22C55E' },
  { name: 'Comments', value: 890, color: '#3B82F6' },
  { name: 'Shares', value: 456, color: '#A855F7' },
  { name: 'Saves', value: 1200, color: '#F59E0B' },
]

const trafficSources = [
  { source: 'YouTube Search', percentage: 35, views: '84K' },
  { source: 'Suggested Videos', percentage: 28, views: '67K' },
  { source: 'Browse Features', percentage: 18, views: '43K' },
  { source: 'External', percentage: 12, views: '29K' },
  { source: 'Direct', percentage: 7, views: '17K' },
]

const topVideos = [
  { title: '10 AI Tools That Changed My Life', views: '125K', ctr: '9.2%', avgView: '6:42', growth: '+15%' },
  { title: 'How I Make $10K/Month on YouTube', views: '98K', ctr: '8.5%', avgView: '8:15', growth: '+12%' },
  { title: 'YouTube Algorithm Secrets 2024', views: '76K', ctr: '7.8%', avgView: '5:33', growth: '+8%' },
  { title: 'My Exact Workflow Revealed', views: '54K', ctr: '6.9%', avgView: '7:22', growth: '-2%' },
]

const demographics = [
  { age: '13-17', percentage: 8 },
  { age: '18-24', percentage: 32 },
  { age: '25-34', percentage: 38 },
  { age: '35-44', percentage: 15 },
  { age: '45+', percentage: 7 },
]

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('30d')

  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
          <p className="text-gray-400">Deep insights into your channel performance</p>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-youtube-light border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-youtube-red"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="flex items-center gap-2 bg-youtube-light hover:bg-youtube-gray text-white px-4 py-2 rounded-lg transition-colors text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Views', value: '240.8K', change: '+18.5%', positive: true, icon: Eye },
          { label: 'Watch Time', value: '15.6K hrs', change: '+22.3%', positive: true, icon: Clock },
          { label: 'Subscribers', value: '+1,280', change: '+15.2%', positive: true, icon: Users },
          { label: 'Engagement Rate', value: '5.8%', change: '-0.4%', positive: false, icon: ThumbsUp },
        ].map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="glass rounded-xl p-6">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Views & Subscribers Chart */}
        <div className="lg:col-span-2 glass rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-youtube-red" />
            Views & Subscriber Growth
          </h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={viewsData}>
                <defs>
                  <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF0000" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#FF0000" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#3F3F3F" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
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
                  fill="url(#viewsGrad)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Engagement Breakdown */}
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <ThumbsUp className="w-5 h-5 text-youtube-red" />
            Engagement Breakdown
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={engagementData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {engagementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#272727', border: '1px solid #3F3F3F', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {engagementData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-gray-400">{item.name}: {item.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Videos */}
        <div className="lg:col-span-2 glass rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Play className="w-5 h-5 text-youtube-red" />
            Top Performing Videos
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-2 text-gray-400 font-medium text-sm">Video</th>
                  <th className="text-right py-3 px-2 text-gray-400 font-medium text-sm">Views</th>
                  <th className="text-right py-3 px-2 text-gray-400 font-medium text-sm">CTR</th>
                  <th className="text-right py-3 px-2 text-gray-400 font-medium text-sm">Avg. View</th>
                  <th className="text-right py-3 px-2 text-gray-400 font-medium text-sm">Growth</th>
                </tr>
              </thead>
              <tbody>
                {topVideos.map((video, index) => (
                  <tr key={index} className="border-b border-white/5 hover:bg-youtube-light/30 transition-colors">
                    <td className="py-3 px-2 text-white text-sm font-medium max-w-[200px] truncate">{video.title}</td>
                    <td className="py-3 px-2 text-gray-300 text-sm text-right">{video.views}</td>
                    <td className="py-3 px-2 text-gray-300 text-sm text-right">{video.ctr}</td>
                    <td className="py-3 px-2 text-gray-300 text-sm text-right">{video.avgView}</td>
                    <td className={`py-3 px-2 text-sm text-right ${video.growth.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {video.growth}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Traffic Sources & Demographics */}
        <div className="space-y-6">
          {/* Traffic Sources */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Share2 className="w-5 h-5 text-youtube-red" />
              Traffic Sources
            </h3>
            <div className="space-y-3">
              {trafficSources.map((source, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-300">{source.source}</span>
                    <span className="text-gray-400">{source.percentage}%</span>
                  </div>
                  <div className="w-full bg-youtube-dark rounded-full h-2">
                    <div 
                      className="bg-youtube-red h-2 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demographics */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-youtube-red" />
              Age Demographics
            </h3>
            <div className="space-y-3">
              {demographics.map((demo, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm w-12">{demo.age}</span>
                  <div className="flex-1 bg-youtube-dark rounded-full h-4">
                    <div 
                      className="bg-gradient-to-r from-youtube-red to-red-400 h-4 rounded-full flex items-center justify-end pr-2"
                      style={{ width: `${demo.percentage}%` }}
                    >
                      {demo.percentage > 15 && (
                        <span className="text-xs text-white font-medium">{demo.percentage}%</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
