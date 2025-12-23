'use client'

import { useState } from 'react'
import { 
  FileText, 
  Sparkles, 
  Copy, 
  Check, 
  RefreshCw,
  Hash,
  Link,
  Clock,
  Search,
  Wand2,
  ChevronDown,
  ChevronUp,
  AlertCircle
} from 'lucide-react'

const sampleDescription = `🚀 In this video, I'm sharing the top 10 AI tools that every content creator needs to know about in 2024! These tools have completely transformed my workflow and helped me save 20+ hours every week.

⏰ TIMESTAMPS:
00:00 - Introduction
01:30 - Tool #1: ChatGPT for Scripting
03:45 - Tool #2: Midjourney for Thumbnails
05:20 - Tool #3: Descript for Editing
07:15 - Tool #4: Opus Clip for Shorts
09:00 - Tool #5: Canva AI
10:45 - Tool #6: ElevenLabs
12:30 - Tool #7: Runway ML
14:15 - Tool #8: Notion AI
16:00 - Tool #9: Synthesia
17:45 - Tool #10: Claude AI
19:30 - Wrap Up & Recommendations

🔗 LINKS MENTIONED:
► ChatGPT: https://chat.openai.com
► Midjourney: https://midjourney.com
► Descript: https://descript.com

📌 CONNECT WITH ME:
► Instagram: @yourchannel
► Twitter: @yourchannel
► Website: https://yourwebsite.com

#AI #ContentCreation #YouTubeTips #Productivity #AITools #2024`

const suggestedKeywords = [
  { keyword: 'ai tools 2024', volume: '12.5K', difficulty: 'Medium' },
  { keyword: 'content creation ai', volume: '8.2K', difficulty: 'Low' },
  { keyword: 'youtube automation', volume: '5.8K', difficulty: 'Medium' },
  { keyword: 'productivity tools', volume: '22.1K', difficulty: 'High' },
  { keyword: 'video editing ai', volume: '9.4K', difficulty: 'Low' },
]

const suggestedHashtags = [
  '#AI', '#AITools', '#ContentCreation', '#YouTubeTips', '#Productivity', 
  '#TechTools', '#2024', '#Automation', '#WorkflowHacks', '#CreatorTools'
]

export default function DescriptionOptimizer() {
  const [description, setDescription] = useState('')
  const [optimizedDescription, setOptimizedDescription] = useState(sampleDescription)
  const [isOptimizing, setIsOptimizing] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showTimestamps, setShowTimestamps] = useState(true)
  const [showLinks, setShowLinks] = useState(true)
  const [showHashtags, setShowHashtags] = useState(true)

  const handleOptimize = () => {
    if (!description.trim()) return
    setIsOptimizing(true)
    setTimeout(() => {
      setOptimizedDescription(sampleDescription)
      setIsOptimizing(false)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(optimizedDescription)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const seoScore = 85

  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Description Optimizer</h1>
        <p className="text-gray-400">AI-powered video descriptions optimized for SEO and engagement</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Input */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-youtube-red" />
              Video Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Video Title</label>
                <input
                  type="text"
                  placeholder="Enter your video title..."
                  className="w-full bg-youtube-light border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-youtube-red transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Brief Description or Key Points</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what your video is about, main topics covered, key takeaways..."
                  className="w-full h-32 bg-youtube-light border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-youtube-red transition-colors resize-none"
                />
              </div>

              {/* Options */}
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={showTimestamps}
                    onChange={(e) => setShowTimestamps(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-600 bg-youtube-light text-youtube-red focus:ring-youtube-red"
                  />
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">Include Timestamps</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={showLinks}
                    onChange={(e) => setShowLinks(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-600 bg-youtube-light text-youtube-red focus:ring-youtube-red"
                  />
                  <Link className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">Include Links Section</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={showHashtags}
                    onChange={(e) => setShowHashtags(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-600 bg-youtube-light text-youtube-red focus:ring-youtube-red"
                  />
                  <Hash className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">Include Hashtags</span>
                </label>
              </div>

              <button
                onClick={handleOptimize}
                disabled={isOptimizing}
                className="flex items-center gap-2 bg-youtube-red hover:bg-red-600 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
              >
                {isOptimizing ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Optimizing...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5" />
                    Optimize Description
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Optimized Output */}
          <div className="glass rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-youtube-red" />
                Optimized Description
              </h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-youtube-dark rounded-full">
                    <div 
                      className="h-2 bg-gradient-to-r from-youtube-red to-green-500 rounded-full"
                      style={{ width: `${seoScore}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-300">SEO: {seoScore}%</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 bg-youtube-light hover:bg-youtube-gray text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>
            
            <div className="bg-youtube-light rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap font-sans">
                {optimizedDescription}
              </pre>
            </div>
            
            <div className="mt-4 text-sm text-gray-400">
              Character count: {optimizedDescription.length} / 5000
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Keywords */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-youtube-red" />
              Suggested Keywords
            </h3>
            
            <div className="space-y-3">
              {suggestedKeywords.map((item, index) => (
                <div 
                  key={index}
                  className="p-3 bg-youtube-light/50 rounded-lg hover:bg-youtube-light transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-sm">{item.keyword}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      item.difficulty === 'Low' ? 'bg-green-500/20 text-green-400' :
                      item.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {item.difficulty}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">Volume: {item.volume}/mo</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hashtags */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Hash className="w-5 h-5 text-youtube-red" />
              Trending Hashtags
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {suggestedHashtags.map((tag, index) => (
                <button
                  key={index}
                  className="text-xs bg-youtube-light hover:bg-youtube-red/20 text-gray-300 hover:text-youtube-red px-3 py-1.5 rounded-full transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-youtube-red" />
              SEO Tips
            </h3>
            
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Put main keywords in first 100 characters
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Use timestamps for longer videos
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Limit to 3-5 relevant hashtags
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Include CTAs for engagement
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
