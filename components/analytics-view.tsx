'use client'

import { CollectionItem } from '@/lib/mock-data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  TrendingUp, 
  Package, 
  DollarSign, 
  PieChart,
  BarChart3,
  Clock
} from 'lucide-react'

interface AnalyticsViewProps {
  items: CollectionItem[]
}

export function AnalyticsView({ items }: AnalyticsViewProps) {
  // Calculate analytics
  const totalValue = items.reduce((sum, item) => sum + item.value, 0)
  const totalItems = items.length
  const avgValue = totalItems > 0 ? totalValue / totalItems : 0
  
  // Category breakdown
  const categoryStats = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = { count: 0, value: 0 }
    }
    acc[item.category].count++
    acc[item.category].value += item.value
    return acc
  }, {} as Record<string, { count: number; value: number }>)

  // Condition breakdown
  const conditionStats = items.reduce((acc, item) => {
    if (!acc[item.condition]) {
      acc[item.condition] = 0
    }
    acc[item.condition]++
    return acc
  }, {} as Record<string, number>)

  // Top items by value
  const topItems = [...items].sort((a, b) => b.value - a.value).slice(0, 5)

  // Recent acquisitions
  const recentItems = [...items]
    .sort((a, b) => new Date(b.acquired).getTime() - new Date(a.acquired).getTime())
    .slice(0, 5)

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const conditionColors: Record<string, string> = {
    'Mint': 'bg-emerald-500/20 text-emerald-400',
    'Excellent': 'bg-blue-500/20 text-blue-400',
    'Good': 'bg-amber-500/20 text-amber-400',
    'Fair': 'bg-orange-500/20 text-orange-400',
  }

  const categoryColors: Record<string, string> = {
    'Watches': 'bg-primary/20 text-primary',
    'Die-Cast': 'bg-rose-500/20 text-rose-400',
    'Collectibles': 'bg-violet-500/20 text-violet-400',
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <BarChart3 className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-foreground">Collection Analytics</h1>
          <p className="text-sm text-muted-foreground">
            Insights and statistics about your collection
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Value</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{formatCurrency(totalValue)}</div>
            <p className="text-xs text-muted-foreground mt-1">Across all items</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Items</CardTitle>
            <Package className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{totalItems}</div>
            <p className="text-xs text-muted-foreground mt-1">In your collection</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{formatCurrency(avgValue)}</div>
            <p className="text-xs text-muted-foreground mt-1">Per item</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Categories</CardTitle>
            <PieChart className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{Object.keys(categoryStats).length}</div>
            <p className="text-xs text-muted-foreground mt-1">Active categories</p>
          </CardContent>
        </Card>
      </div>

      {/* Two Column Layout */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Category Breakdown */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-foreground">Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {Object.entries(categoryStats).map(([category, stats]) => {
              const percentage = (stats.value / totalValue) * 100
              return (
                <div key={category} className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${categoryColors[category] || 'bg-secondary text-foreground'}`}>
                        {category}
                      </span>
                      <span className="text-sm text-muted-foreground">{stats.count} items</span>
                    </div>
                    <span className="text-sm font-medium text-foreground">{formatCurrency(stats.value)}</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>

        {/* Condition Distribution */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-foreground">Condition Distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {Object.entries(conditionStats).map(([condition, count]) => {
              const percentage = (count / totalItems) * 100
              return (
                <div key={condition} className="flex items-center gap-4">
                  <span className={`px-2.5 py-1 rounded text-xs font-medium min-w-[80px] text-center ${conditionColors[condition]}`}>
                    {condition}
                  </span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary/60 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground min-w-[50px] text-right">{count} ({percentage.toFixed(0)}%)</span>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>

      {/* Top Items & Recent */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Top Items by Value */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              Top Items by Value
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {topItems.map((item, index) => (
              <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-medium text-primary">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{item.brand} {item.model}</p>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
                <span className="text-sm font-semibold text-primary">{formatCurrency(item.value)}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Acquisitions */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Recent Acquisitions
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {recentItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{item.brand} {item.model}</p>
                  <p className="text-xs text-muted-foreground">{item.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{formatCurrency(item.value)}</p>
                  <p className="text-xs text-muted-foreground">{formatDate(item.acquired)}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
