'use client'

import { useState } from 'react'
import { 
  Type, 
  Sparkles, 
  Copy, 
  Check, 
  RefreshCw,
  TrendingUp,
  Target,
  Zap,
  Star,
  ThumbsUp,
  AlertCircle
} from 'lucide-react'

const titleFormulas = [
  { name: 'How-To', template: 'How to [RESULT] in [TIME]', example: 'How to Grow 10K Subscribers in 30 Days' },
  { name: 'Listicle', template: '[NUMBER] [TOPIC] That Will [BENEFIT]', example: '7 AI Tools That Will Double Your Productivity' },
  { name: 'Question', template: 'Why [TOPIC]? The Truth About [SUBJECT]', example: 'Why YouTube Changed? The Truth About Algorithm Updates' },
  { name: 'Challenge', template: 'I Tried [ACTION] for [TIME] - Here\'s What Happened', example: 'I Tried Posting Daily for 30 Days - Here\'s What Happened' },
  { name: 'Comparison', template: '[A] vs [B]: Which is Better for [USE CASE]?', example: 'iPhone vs Android: Which is Better for Content Creators?' },
]

interface GeneratedTitle {
  title: string
  score: number
  ctr: string
  suggestions: string[]
}

const sampleTitles: GeneratedTitle[] = [
  { 
    title: '10 AI Tools Every YouTuber NEEDS in 2024 (Game Changers!)',
    score: 92,
    ctr: '8.5%',
    suggestions: ['Strong emotional hook', 'Clear value proposition', 'Timely relevance']
  },
  { 
    title: 'I Used AI to Run My YouTube Channel for 30 Days (Results Shocked Me)',
    score: 88,
    ctr: '7.8%',
    suggestions: ['Personal story hook', 'Curiosity gap', 'Consider shorter title']
  },
  { 
    title: 'The YouTube Algorithm CHANGED - Here\'s What You Need to Know',
    score: 85,
    ctr: '7.2%',
    suggestions: ['Urgency created', 'Educational angle', 'Add specific number']
  },
  { 
    title: 'Stop Making These 5 YouTube Mistakes (Killing Your Growth!)',
    score: 82,
    ctr: '6.9%',
    suggestions: ['Problem-focused', 'Number included', 'Strong CTA']
  },
  { 
    title: 'How I Got 1 Million Views With This Simple Strategy',
    score: 78,
    ctr: '6.4%',
    suggestions: ['Social proof', 'Promise of simplicity', 'Add specificity']
  },
]

export default function TitleGenerator() {
  const [topic, setTopic] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [titles, setTitles] = useState<GeneratedTitle[]>(sampleTitles)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleGenerate = () => {
    if (!topic.trim()) return
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      // Simulate generating new titles based on topic
    }, 2000)
  }

  const handleCopy = (title: string, index: number) => {
    navigator.clipboard.writeText(title)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Title Generator</h1>
        <p className="text-gray-400">AI-powered title optimization for maximum click-through rate</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Topic Input */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Type className="w-5 h-5 text-youtube-red" />
              Generate Titles
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Video Topic or Keywords</label>
                <textarea
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Enter your video topic, main keywords, or a brief description..."
                  className="w-full h-24 bg-youtube-light border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-youtube-red transition-colors resize-none"
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="flex items-center gap-2 bg-youtube-red hover:bg-red-600 disabled:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Generate Titles
                    </>
                  )}
                </button>
                <span className="text-sm text-gray-400">
                  AI will analyze trends & optimize for CTR
                </span>
              </div>
            </div>
          </div>

          {/* Generated Titles */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-youtube-red" />
              Generated Titles
            </h3>
            
            <div className="space-y-4">
              {titles.map((item, index) => (
                <div 
                  key={index}
                  className="p-4 bg-youtube-light/50 rounded-lg hover:bg-youtube-light transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="text-white font-medium flex-1">{item.title}</h4>
                    <button
                      onClick={() => handleCopy(item.title, index)}
                      className="p-2 hover:bg-youtube-gray rounded-lg transition-colors"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-300">Score: {item.score}/100</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-300">Est. CTR: {item.ctr}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.suggestions.map((suggestion, sIndex) => (
                      <span 
                        key={sIndex}
                        className="text-xs bg-youtube-dark px-2 py-1 rounded text-gray-400 flex items-center gap-1"
                      >
                        <ThumbsUp className="w-3 h-3" />
                        {suggestion}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Title Formulas */}
        <div className="space-y-6">
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-youtube-red" />
              Proven Formulas
            </h3>
            
            <div className="space-y-4">
              {titleFormulas.map((formula, index) => (
                <div 
                  key={index}
                  className="p-3 bg-youtube-light/50 rounded-lg hover:bg-youtube-light transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-youtube-red font-medium text-sm">{formula.name}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2 font-mono">{formula.template}</p>
                  <p className="text-xs text-gray-300 italic">&ldquo;{formula.example}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-youtube-red" />
              Title Tips
            </h3>
            
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Keep titles under 60 characters to avoid truncation
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Include numbers for better engagement
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Use power words: &ldquo;Ultimate&rdquo;, &ldquo;Secret&rdquo;, &ldquo;Proven&rdquo;
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Create curiosity gaps without clickbait
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                Front-load important keywords for SEO
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
