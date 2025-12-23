'use client'

import { useState } from 'react'
import { 
  Image, 
  Upload, 
  Sparkles, 
  Eye, 
  Target,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingUp,
  Palette,
  Type,
  Maximize,
  RefreshCw,
  Download
} from 'lucide-react'

interface AnalysisResult {
  category: string
  score: number
  status: 'good' | 'warning' | 'bad'
  feedback: string
}

const sampleAnalysis: AnalysisResult[] = [
  { 
    category: 'Face Detection', 
    score: 95, 
    status: 'good',
    feedback: 'Face clearly visible and expressive - great for engagement'
  },
  { 
    category: 'Text Readability', 
    score: 78, 
    status: 'warning',
    feedback: 'Text could be larger for mobile viewers'
  },
  { 
    category: 'Color Contrast', 
    score: 88, 
    status: 'good',
    feedback: 'Strong contrast between text and background'
  },
  { 
    category: 'Composition', 
    score: 82, 
    status: 'good',
    feedback: 'Good use of rule of thirds'
  },
  { 
    category: 'Brand Consistency', 
    score: 65, 
    status: 'warning',
    feedback: 'Consider adding brand colors or logo'
  },
  { 
    category: 'Click-Worthiness', 
    score: 90, 
    status: 'good',
    feedback: 'Creates curiosity and intrigue'
  },
]

const thumbnailTips = [
  { tip: 'Use bright, contrasting colors', icon: Palette },
  { tip: 'Include expressive faces', icon: Eye },
  { tip: 'Keep text to 3-5 words max', icon: Type },
  { tip: 'Use 1280x720 resolution', icon: Maximize },
]

const competitorThumbnails = [
  { title: 'Top Competitor #1', ctr: '12.4%', views: '2.1M' },
  { title: 'Top Competitor #2', ctr: '10.8%', views: '1.8M' },
  { title: 'Top Competitor #3', ctr: '9.6%', views: '1.4M' },
]

export default function ThumbnailAnalyzer() {
  const [uploaded, setUploaded] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<AnalysisResult[]>([])
  const [dragActive, setDragActive] = useState(false)

  const handleUpload = () => {
    setUploaded(true)
    setAnalyzing(true)
    setTimeout(() => {
      setAnalyzing(false)
      setAnalysis(sampleAnalysis)
    }, 2500)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleUpload()
  }

  const overallScore = analysis.length > 0 
    ? Math.round(analysis.reduce((acc, item) => acc + item.score, 0) / analysis.length)
    : 0

  return (
    <div className="p-8 animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Thumbnail Analyzer</h1>
        <p className="text-gray-400">AI-powered thumbnail analysis for maximum click-through rate</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upload & Preview */}
        <div className="lg:col-span-2 space-y-6">
          {/* Upload Zone */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Image className="w-5 h-5 text-youtube-red" />
              Upload Thumbnail
            </h3>
            
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                dragActive 
                  ? 'border-youtube-red bg-youtube-red/10' 
                  : 'border-white/20 hover:border-white/40'
              }`}
            >
              {!uploaded ? (
                <>
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">Drag & drop your thumbnail here</p>
                  <p className="text-gray-500 text-sm mb-4">or</p>
                  <button
                    onClick={handleUpload}
                    className="bg-youtube-red hover:bg-red-600 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Browse Files
                  </button>
                  <p className="text-gray-500 text-xs mt-4">
                    Supported: JPG, PNG • Max size: 2MB • Recommended: 1280x720
                  </p>
                </>
              ) : analyzing ? (
                <div className="py-8">
                  <RefreshCw className="w-12 h-12 text-youtube-red mx-auto mb-4 animate-spin" />
                  <p className="text-white font-medium mb-2">Analyzing thumbnail...</p>
                  <p className="text-gray-400 text-sm">Using AI to evaluate your thumbnail</p>
                </div>
              ) : (
                <div className="relative">
                  <div className="bg-youtube-light rounded-lg p-4 mb-4">
                    <div className="aspect-video bg-gradient-to-br from-youtube-red/30 to-purple-500/30 rounded-lg flex items-center justify-center">
                      <Image className="w-16 h-16 text-white/50" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <button 
                      onClick={() => { setUploaded(false); setAnalysis([]); }}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Upload Different
                    </button>
                    <button className="flex items-center gap-2 bg-youtube-light hover:bg-youtube-gray text-white px-4 py-2 rounded-lg transition-colors text-sm">
                      <Download className="w-4 h-4" />
                      Download Optimized
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Analysis Results */}
          {analysis.length > 0 && (
            <div className="glass rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-youtube-red" />
                  Analysis Results
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 text-sm">Overall Score:</span>
                  <div className={`text-2xl font-bold ${
                    overallScore >= 80 ? 'text-green-500' :
                    overallScore >= 60 ? 'text-yellow-500' :
                    'text-red-500'
                  }`}>
                    {overallScore}/100
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysis.map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-youtube-light/50 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {item.status === 'good' ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : item.status === 'warning' ? (
                          <AlertTriangle className="w-5 h-5 text-yellow-500" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500" />
                        )}
                        <span className="text-white font-medium">{item.category}</span>
                      </div>
                      <span className={`text-sm font-bold ${
                        item.score >= 80 ? 'text-green-500' :
                        item.score >= 60 ? 'text-yellow-500' :
                        'text-red-500'
                      }`}>
                        {item.score}%
                      </span>
                    </div>
                    <div className="w-full bg-youtube-dark rounded-full h-2 mb-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          item.score >= 80 ? 'bg-green-500' :
                          item.score >= 60 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400">{item.feedback}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Tips */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-youtube-red" />
              Quick Tips
            </h3>
            
            <div className="space-y-3">
              {thumbnailTips.map((item, index) => {
                const Icon = item.icon
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-youtube-light/50 rounded-lg"
                  >
                    <Icon className="w-5 h-5 text-youtube-red" />
                    <span className="text-sm text-gray-300">{item.tip}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Competitor Analysis */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-youtube-red" />
              Top Performing
            </h3>
            
            <div className="space-y-3">
              {competitorThumbnails.map((item, index) => (
                <div 
                  key={index}
                  className="p-3 bg-youtube-light/50 rounded-lg"
                >
                  <div className="aspect-video bg-gradient-to-br from-youtube-gray to-youtube-light rounded mb-2 flex items-center justify-center">
                    <Image className="w-8 h-8 text-white/30" />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-300">{item.title}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">CTR: {item.ctr}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Generate Variations */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-youtube-red" />
              AI Variations
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Let AI generate thumbnail variations optimized for higher CTR
            </p>
            <button className="w-full flex items-center justify-center gap-2 bg-youtube-red hover:bg-red-600 text-white py-3 rounded-lg transition-colors">
              <Sparkles className="w-4 h-4" />
              Generate Variations
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
