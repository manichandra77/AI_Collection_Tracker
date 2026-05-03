'use client'

import { useState } from 'react'
import { CollectionItem, ChatMessage, mockCollectionItems, mockChatMessages } from '@/lib/mock-data'
import { CollectionGrid } from '@/components/collection-grid'
import { ChatInterface } from '@/components/chat-interface'
import { AnalyticsView } from '@/components/analytics-view'
import { Sparkles, ArrowLeft, LayoutGrid, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface DashboardProps {
  onBack: () => void
}

type TabType = 'collection' | 'analytics'

export function Dashboard({ onBack }: DashboardProps) {
  const [items, setItems] = useState<CollectionItem[]>(mockCollectionItems)
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages)
  const [activeTab, setActiveTab] = useState<TabType>('collection')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onBack}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to home</span>
            </Button>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold text-foreground">CollectAI</span>
            </div>
          </div>
          
          {/* Tab Navigation */}
          <nav className="flex items-center gap-1 bg-secondary/50 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('collection')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all",
                activeTab === 'collection'
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <LayoutGrid className="h-4 w-4" />
              <span className="hidden sm:inline">Collection</span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all",
                activeTab === 'analytics'
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </button>
          </nav>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-medium text-foreground">
            J
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-[1800px] p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Collection Grid or Analytics */}
          <div className="flex-1 min-w-0">
            {activeTab === 'collection' ? (
              <CollectionGrid items={items} setItems={setItems} />
            ) : (
              <AnalyticsView items={items} />
            )}
          </div>

          {/* Right: Sticky Chat */}
          <aside className="w-full lg:w-[400px] shrink-0">
            <div className="lg:sticky lg:top-[88px] h-[500px] lg:h-[calc(100vh-112px)]">
              <ChatInterface messages={messages} setMessages={setMessages} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
