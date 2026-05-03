'use client'

import { Button } from '@/components/ui/button'
import { Sparkles, Layers, MessageSquare, BarChart3 } from 'lucide-react'

interface LandingPageProps {
  onGetStarted: () => void
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">CollectAI</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary mb-8">
            <Sparkles className="h-4 w-4" />
            <span>Powered by AI</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight text-balance mb-6">
            AI Collection Tracker
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty mb-10">
            Track and manage your physical collections using natural language. 
            Whether it&apos;s watches, die-cast cars, or rare collectibles, 
            our AI assistant helps you catalog, value, and gain insights into your treasures.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-xl shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            Get Started
          </Button>

          {/* Features */}
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Smart Cataloging</h3>
              <p className="text-sm text-muted-foreground text-center">
                Organize your items with intelligent categorization and tagging
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Natural Language</h3>
              <p className="text-sm text-muted-foreground text-center">
                Ask questions about your collection in plain English
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Value Insights</h3>
              <p className="text-sm text-muted-foreground text-center">
                Track market values and get AI-powered recommendations
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <p className="text-center text-sm text-muted-foreground">
          Built for collectors, by collectors
        </p>
      </footer>
    </div>
  )
}
