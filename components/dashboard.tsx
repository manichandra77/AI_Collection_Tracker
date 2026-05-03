'use client'

import { useState } from 'react'
import { CollectionItem, ChatMessage, mockCollectionItems, mockChatMessages } from '@/lib/mock-data'
import { CollectionGrid } from '@/components/collection-grid'
import { ChatInterface } from '@/components/chat-interface'
import { Sparkles, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface DashboardProps {
  onBack: () => void
}

export function Dashboard({ onBack }: DashboardProps) {
  const [items, setItems] = useState<CollectionItem[]>(mockCollectionItems)
  const [messages, setMessages] = useState<ChatMessage[]>(mockChatMessages)

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
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-foreground">Dashboard</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Analytics</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Settings</a>
          </nav>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-medium text-foreground">
            J
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-[1800px] p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Collection Grid */}
          <div className="flex-1 min-w-0">
            <CollectionGrid items={items} setItems={setItems} />
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
