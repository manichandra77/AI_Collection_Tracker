import { CollectionGrid } from '@/components/collection-grid'
import { ChatInterface } from '@/components/chat-interface'
import { Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-[1800px] items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">CollectAI</span>
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
            <CollectionGrid />
          </div>

          {/* Right: Sticky Chat */}
          <aside className="w-full lg:w-[400px] shrink-0">
            <div className="lg:sticky lg:top-[88px] h-[500px] lg:h-[calc(100vh-112px)]">
              <ChatInterface />
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
