'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  MessageSquare, 
  Send, 
  Bot, 
  User,
  Sparkles,
  Lightbulb,
  TrendingUp,
  Clock,
  Image,
  FileText,
  RefreshCw,
  Copy,
  Check,
  ChevronDown
} from 'lucide-react'

interface Message {
  id: number
  role: 'user' | 'agent'
  content: string
  timestamp: Date
  suggestions?: string[]
}

const quickActions = [
  { label: 'Generate video ideas', icon: Lightbulb },
  { label: 'Optimize my title', icon: TrendingUp },
  { label: 'Best posting time', icon: Clock },
  { label: 'Create thumbnail', icon: Image },
  { label: 'Write description', icon: FileText },
]

const sampleConversation: Message[] = [
  {
    id: 1,
    role: 'agent',
    content: "Hello! I'm your YouTube AI Agent. I can help you with content ideas, title optimization, scheduling, analytics insights, and much more. What would you like to work on today?",
    timestamp: new Date(Date.now() - 300000),
    suggestions: ['Generate video ideas', 'Analyze my recent performance', 'Help me write a title']
  },
  {
    id: 2,
    role: 'user',
    content: "Can you help me come up with video ideas for my tech channel?",
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: 3,
    role: 'agent',
    content: `Based on your channel's niche and current trending topics, here are some video ideas:

🔥 **High Potential Ideas:**
1. "I Replaced My Entire Workflow with AI Tools (30 Day Results)"
2. "The Best Budget Tech of 2024 Under $100"
3. "5 Programming Skills That Will Make You Rich in 2025"

📈 **Trending Topics:**
1. "Apple Vision Pro: 6 Months Later - Honest Review"
2. "Why Everyone is Switching to Linux in 2024"
3. "The Future of AI Coding: GitHub Copilot vs Cursor"

💡 **Evergreen Content:**
1. "Complete Home Office Setup Guide for Developers"
2. "How to Learn Any Programming Language in 30 Days"
3. "My Exact YouTube Automation Setup (Tools & Workflow)"

Would you like me to help you develop any of these ideas further?`,
    timestamp: new Date(Date.now() - 180000),
    suggestions: ['Develop the AI tools idea', 'Generate titles for these', 'Show me trending data']
  },
  {
    id: 4,
    role: 'user',
    content: "Yes, help me develop the AI tools video idea. What should be my angle?",
    timestamp: new Date(Date.now() - 120000),
  },
  {
    id: 5,
    role: 'agent',
    content: `Great choice! The "AI Tools Workflow" video has high viral potential. Here's my recommended approach:

**📌 Recommended Angle:**
Personal transformation story with measurable results

**🎬 Video Structure:**
1. **Hook (0-30s):** Show dramatic before/after of your productivity
2. **Problem (30s-2min):** Your old, slow workflow struggles
3. **Solution (2-8min):** Each AI tool with live demos
4. **Results (8-10min):** Actual metrics - time saved, output increased
5. **CTA (10min+):** Encourage viewers to share their tools

**🛠️ Tools to Feature:**
- ChatGPT/Claude for scripting
- Midjourney for thumbnails
- Descript for editing
- Opus Clip for shorts
- Notion AI for planning

**📊 Predicted Performance:**
- Estimated views: 25K-50K
- Best posting: Thursday 2PM EST
- Target length: 12-15 minutes

Would you like me to generate optimized titles and thumbnails concepts for this video?`,
    timestamp: new Date(Date.now() - 60000),
    suggestions: ['Generate titles', 'Create thumbnail concepts', 'Write the script outline']
  },
]

export default function AgentChat() {
  const [messages, setMessages] = useState<Message[]>(sampleConversation)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [copiedId, setCopiedId] = useState<number | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      role: 'user',
      content: input,
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate agent response
    setTimeout(() => {
      const agentMessage: Message = {
        id: messages.length + 2,
        role: 'agent',
        content: "I'm analyzing your request. Based on your channel's performance and current trends, I'll provide personalized recommendations. Let me process this and get back to you with actionable insights.\n\n*Note: This is a demo. In production, this would connect to the YouTube API and AI models for real-time analysis.*",
        timestamp: new Date(),
        suggestions: ['Continue exploring', 'Try another feature', 'View analytics']
      }
      setMessages(prev => [...prev, agentMessage])
      setIsTyping(false)
    }, 2000)
  }

  const handleQuickAction = (action: string) => {
    setInput(action)
  }

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion)
    handleSend()
  }

  const handleCopy = (content: string, id: number) => {
    navigator.clipboard.writeText(content)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="h-screen flex flex-col bg-youtube-dark">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-3">
          <div className="p-2 bg-youtube-red/20 rounded-lg">
            <Bot className="w-6 h-6 text-youtube-red" />
          </div>
          AI Agent Chat
        </h1>
        <p className="text-gray-400 text-sm">Your intelligent YouTube assistant</p>
      </div>

      {/* Quick Actions */}
      <div className="px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <button
                key={index}
                onClick={() => handleQuickAction(action.label)}
                className="flex items-center gap-2 bg-youtube-light hover:bg-youtube-gray text-gray-300 hover:text-white px-4 py-2 rounded-full transition-colors whitespace-nowrap text-sm"
              >
                <Icon className="w-4 h-4" />
                {action.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''} animate-fade-in`}
          >
            {/* Avatar */}
            <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
              message.role === 'agent' ? 'bg-youtube-red/20' : 'bg-blue-500/20'
            }`}>
              {message.role === 'agent' ? (
                <Bot className="w-5 h-5 text-youtube-red" />
              ) : (
                <User className="w-5 h-5 text-blue-500" />
              )}
            </div>

            {/* Content */}
            <div className={`flex-1 max-w-[80%] ${message.role === 'user' ? 'text-right' : ''}`}>
              <div className={`inline-block rounded-2xl px-5 py-3 ${
                message.role === 'agent' 
                  ? 'bg-youtube-gray text-left' 
                  : 'bg-youtube-red text-white'
              }`}>
                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                  {message.content}
                </div>
              </div>
              
              {/* Timestamp & Actions */}
              <div className={`flex items-center gap-2 mt-2 ${message.role === 'user' ? 'justify-end' : ''}`}>
                <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                {message.role === 'agent' && (
                  <button 
                    onClick={() => handleCopy(message.content, message.id)}
                    className="p-1 hover:bg-youtube-light rounded transition-colors"
                  >
                    {copiedId === message.id ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <Copy className="w-3 h-3 text-gray-500" />
                    )}
                  </button>
                )}
              </div>

              {/* Suggestions */}
              {message.suggestions && message.role === 'agent' && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {message.suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestion(suggestion)}
                      className="text-xs bg-youtube-light/50 hover:bg-youtube-light text-gray-300 px-3 py-1.5 rounded-full transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex gap-4 animate-fade-in">
            <div className="w-10 h-10 rounded-full bg-youtube-red/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-youtube-red" />
            </div>
            <div className="bg-youtube-gray rounded-2xl px-5 py-3">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-youtube-red animate-spin" />
                <span className="text-sm text-gray-400">Agent is thinking...</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 border-t border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything about your YouTube channel..."
              className="w-full bg-youtube-gray border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-youtube-red transition-colors pr-12"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <Sparkles className="w-5 h-5 text-youtube-red/50" />
            </div>
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="p-4 bg-youtube-red hover:bg-red-600 disabled:bg-gray-600 rounded-xl transition-colors"
          >
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-3 text-center">
          AI responses are generated based on YouTube best practices and your channel data
        </p>
      </div>
    </div>
  )
}
