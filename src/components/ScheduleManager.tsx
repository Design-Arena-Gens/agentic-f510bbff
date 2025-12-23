'use client'

import { useState } from 'react'
import { 
  Clock, 
  Calendar,
  Plus,
  ChevronLeft,
  ChevronRight,
  Play,
  Edit2,
  Trash2,
  Globe,
  Users,
  TrendingUp,
  Sparkles,
  AlertCircle,
  Check
} from 'lucide-react'

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const scheduledVideos = [
  { 
    id: 1,
    title: '10 AI Tools You NEED in 2024',
    date: '2024-12-24',
    time: '14:00',
    status: 'scheduled',
    thumbnail: '🤖'
  },
  { 
    id: 2,
    title: 'How I Grew to 30K Subscribers',
    date: '2024-12-26',
    time: '16:00',
    status: 'scheduled',
    thumbnail: '📈'
  },
  { 
    id: 3,
    title: 'YouTube Algorithm Secrets Revealed',
    date: '2024-12-28',
    time: '12:00',
    status: 'draft',
    thumbnail: '🔓'
  },
]

const bestTimes = [
  { day: 'Monday', times: ['14:00', '18:00'], engagement: 'High' },
  { day: 'Tuesday', times: ['12:00', '17:00'], engagement: 'Medium' },
  { day: 'Wednesday', times: ['15:00', '19:00'], engagement: 'High' },
  { day: 'Thursday', times: ['14:00', '20:00'], engagement: 'Very High' },
  { day: 'Friday', times: ['16:00', '21:00'], engagement: 'High' },
  { day: 'Saturday', times: ['10:00', '15:00'], engagement: 'Medium' },
  { day: 'Sunday', times: ['11:00', '18:00'], engagement: 'High' },
]

const audienceTimezones = [
  { region: 'United States', percentage: 45, timezone: 'EST/PST' },
  { region: 'United Kingdom', percentage: 15, timezone: 'GMT' },
  { region: 'India', percentage: 12, timezone: 'IST' },
  { region: 'Germany', percentage: 8, timezone: 'CET' },
  { region: 'Other', percentage: 20, timezone: 'Various' },
]

export default function ScheduleManager() {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    
    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }

  const formatMonth = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const getVideosForDay = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return scheduledVideos.filter(v => v.date === dateStr)
  }

  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Schedule Manager</h1>
        <p className="text-gray-400">AI-optimized video scheduling for maximum reach</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-youtube-red" />
                Content Calendar
              </h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={prevMonth}
                  className="p-2 hover:bg-youtube-light rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>
                <span className="text-white font-medium">{formatMonth(currentMonth)}</span>
                <button
                  onClick={nextMonth}
                  className="p-2 hover:bg-youtube-light rounded-lg transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map(day => (
                <div key={day} className="text-center text-xs text-gray-400 py-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(currentMonth).map((day, index) => {
                const videos = day ? getVideosForDay(day) : []
                const isToday = day === new Date().getDate() && 
                  currentMonth.getMonth() === new Date().getMonth() &&
                  currentMonth.getFullYear() === new Date().getFullYear()
                
                return (
                  <div
                    key={index}
                    className={`min-h-[80px] p-2 rounded-lg transition-colors ${
                      day 
                        ? 'bg-youtube-light/30 hover:bg-youtube-light cursor-pointer' 
                        : ''
                    } ${isToday ? 'ring-2 ring-youtube-red' : ''}`}
                  >
                    {day && (
                      <>
                        <span className={`text-sm ${isToday ? 'text-youtube-red font-bold' : 'text-gray-400'}`}>
                          {day}
                        </span>
                        <div className="mt-1 space-y-1">
                          {videos.map(video => (
                            <div
                              key={video.id}
                              className={`text-xs p-1 rounded truncate ${
                                video.status === 'scheduled' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-yellow-500/20 text-yellow-400'
                              }`}
                            >
                              {video.thumbnail} {video.time}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Add New */}
            <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 bg-youtube-light hover:bg-youtube-gray text-white rounded-lg transition-colors">
              <Plus className="w-5 h-5" />
              Schedule New Video
            </button>
          </div>

          {/* Upcoming Videos */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-youtube-red" />
              Upcoming Scheduled
            </h3>
            
            <div className="space-y-3">
              {scheduledVideos.map(video => (
                <div 
                  key={video.id}
                  className="flex items-center gap-4 p-4 bg-youtube-light/50 rounded-lg"
                >
                  <div className="text-3xl">{video.thumbnail}</div>
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{video.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {video.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {video.time}
                      </span>
                      <span className={`flex items-center gap-1 ${
                        video.status === 'scheduled' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {video.status === 'scheduled' ? <Check className="w-3 h-3" /> : <Edit2 className="w-3 h-3" />}
                        {video.status.charAt(0).toUpperCase() + video.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-youtube-gray rounded-lg transition-colors">
                      <Edit2 className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-youtube-gray rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* AI Recommendations */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-youtube-red" />
              AI Best Times
            </h3>
            
            <div className="space-y-3">
              {bestTimes.slice(0, 4).map((item, index) => (
                <div 
                  key={index}
                  className="p-3 bg-youtube-light/50 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{item.day}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      item.engagement === 'Very High' ? 'bg-green-500/20 text-green-400' :
                      item.engagement === 'High' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {item.engagement}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {item.times.map((time, tIndex) => (
                      <span 
                        key={tIndex}
                        className="text-xs bg-youtube-dark px-2 py-1 rounded text-gray-300"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-xs text-gray-400 mt-4 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              Based on your audience activity and historical performance
            </p>
          </div>

          {/* Audience Timezones */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-youtube-red" />
              Audience Regions
            </h3>
            
            <div className="space-y-3">
              {audienceTimezones.map((region, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{region.region}</span>
                    <span className="text-gray-400">{region.percentage}%</span>
                  </div>
                  <div className="w-full bg-youtube-dark rounded-full h-2">
                    <div 
                      className="bg-youtube-red h-2 rounded-full"
                      style={{ width: `${region.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Frequency Tip */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-youtube-red" />
              Posting Frequency
            </h3>
            <div className="text-center py-4">
              <div className="text-4xl font-bold text-youtube-red mb-2">2-3x</div>
              <div className="text-gray-400 text-sm">per week recommended</div>
            </div>
            <p className="text-xs text-gray-400">
              Based on your niche and audience, posting 2-3 times per week leads to optimal growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
