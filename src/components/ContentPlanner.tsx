'use client'

import { useState } from 'react'
import { 
  Calendar, 
  Plus, 
  TrendingUp, 
  Lightbulb, 
  Target,
  Sparkles,
  RefreshCw,
  CheckCircle,
  Clock,
  Play,
  ChevronRight
} from 'lucide-react'

const trendingTopics = [
  { topic: 'AI Tools & Productivity', score: 95, growth: '+42%' },
  { topic: 'Tech Reviews 2024', score: 88, growth: '+28%' },
  { topic: 'Side Hustle Ideas', score: 82, growth: '+35%' },
  { topic: 'Gaming Highlights', score: 79, growth: '+18%' },
  { topic: 'Health & Fitness Tips', score: 75, growth: '+22%' },
]

const suggestedContent = [
  { 
    title: '5 AI Tools That Will 10x Your Productivity',
    category: 'Tech',
    estimatedViews: '25K-35K',
    difficulty: 'Medium',
    tags: ['AI', 'Productivity', 'Tools']
  },
  { 
    title: 'I Tried the Viral Morning Routine for 30 Days',
    category: 'Lifestyle',
    estimatedViews: '40K-60K',
    difficulty: 'Easy',
    tags: ['Lifestyle', 'Challenge', 'Routine']
  },
  { 
    title: 'Building a $10K/Month Side Business from Scratch',
    category: 'Business',
    estimatedViews: '50K-80K',
    difficulty: 'Hard',
    tags: ['Business', 'Money', 'Tutorial']
  },
  { 
    title: 'React vs Vue vs Angular in 2024 - Which One?',
    category: 'Programming',
    estimatedViews: '15K-25K',
    difficulty: 'Medium',
    tags: ['Programming', 'Web Dev', 'Comparison']
  },
]

const contentCalendar = [
  { date: 'Dec 23', title: 'Weekly Q&A Session', status: 'scheduled', type: 'Live' },
  { date: 'Dec 24', title: '10 AI Tools You NEED in 2024', status: 'editing', type: 'Video' },
  { date: 'Dec 26', title: 'How I Grew to 30K Subscribers', status: 'scripting', type: 'Video' },
  { date: 'Dec 28', title: 'YouTube Algorithm Secrets', status: 'idea', type: 'Video' },
  { date: 'Dec 30', title: 'End of Year Recap', status: 'idea', type: 'Video' },
]

export default function ContentPlanner() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  const handleGenerateIdeas = () => {
    setIsGenerating(true)
    setTimeout(() => setIsGenerating(false), 2000)
  }

  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Content Planner</h1>
        <p className="text-gray-400">AI-powered content ideas and scheduling for maximum impact</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trending Topics */}
        <div className="glass rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-youtube-red" />
              Trending Topics
            </h3>
            <button 
              onClick={handleGenerateIdeas}
              className="p-2 hover:bg-youtube-light rounded-lg transition-colors"
            >
              <RefreshCw className={`w-4 h-4 text-gray-400 ${isGenerating ? 'animate-spin' : ''}`} />
            </button>
          </div>
          <div className="space-y-3">
            {trendingTopics.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedTopic(item.topic)}
                className={`w-full p-4 rounded-lg transition-all duration-200 text-left ${
                  selectedTopic === item.topic 
                    ? 'bg-youtube-red/20 border border-youtube-red/50' 
                    : 'bg-youtube-light/50 hover:bg-youtube-light'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{item.topic}</span>
                  <span className="text-green-400 text-xs">{item.growth}</span>
                </div>
                <div className="w-full bg-youtube-dark rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-youtube-red to-red-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.score}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400 mt-1 block">Trend Score: {item.score}/100</span>
              </button>
            ))}
          </div>
        </div>

        {/* AI Suggested Content */}
        <div className="lg:col-span-2 glass rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-youtube-red" />
              AI Suggested Content
            </h3>
            <button 
              onClick={handleGenerateIdeas}
              className="flex items-center gap-2 bg-youtube-red hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
            >
              <Lightbulb className="w-4 h-4" />
              Generate Ideas
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {suggestedContent.map((content, index) => (
              <div 
                key={index}
                className="p-4 bg-youtube-light/50 rounded-lg hover:bg-youtube-light transition-colors group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs bg-youtube-red/20 text-youtube-red px-2 py-1 rounded-full">
                    {content.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    content.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                    content.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {content.difficulty}
                  </span>
                </div>
                <h4 className="text-white font-medium mb-2 group-hover:text-youtube-red transition-colors">
                  {content.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <Target className="w-3 h-3" />
                  Est. Views: {content.estimatedViews}
                </div>
                <div className="flex flex-wrap gap-2">
                  {content.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-youtube-dark px-2 py-1 rounded text-gray-400">
                      #{tag}
                    </span>
                  ))}
                </div>
                <button className="w-full mt-4 flex items-center justify-center gap-2 py-2 bg-youtube-red/20 hover:bg-youtube-red/40 text-youtube-red rounded-lg transition-colors text-sm">
                  <Plus className="w-4 h-4" />
                  Add to Calendar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Calendar */}
      <div className="mt-6 glass rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-youtube-red" />
            Content Calendar
          </h3>
          <button className="flex items-center gap-2 bg-youtube-light hover:bg-youtube-gray text-white px-4 py-2 rounded-lg transition-colors text-sm">
            <Plus className="w-4 h-4" />
            Add Content
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Date</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Title</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Type</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contentCalendar.map((item, index) => (
                <tr key={index} className="border-b border-white/5 hover:bg-youtube-light/30 transition-colors">
                  <td className="py-4 px-4 text-gray-300 text-sm">{item.date}</td>
                  <td className="py-4 px-4 text-white text-sm font-medium">{item.title}</td>
                  <td className="py-4 px-4">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.type === 'Live' ? 'bg-red-500/20 text-red-400' : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`flex items-center gap-1 text-xs ${
                      item.status === 'scheduled' ? 'text-green-400' :
                      item.status === 'editing' ? 'text-yellow-400' :
                      item.status === 'scripting' ? 'text-blue-400' :
                      'text-gray-400'
                    }`}>
                      {item.status === 'scheduled' ? <CheckCircle className="w-3 h-3" /> :
                       item.status === 'editing' ? <Play className="w-3 h-3" /> :
                       <Clock className="w-3 h-3" />}
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
