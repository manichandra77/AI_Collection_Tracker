'use client'

import { CollectionItem } from '@/lib/mock-data'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Watch, Car, Package, Sparkles } from 'lucide-react'

interface CollectionCardProps {
  item: CollectionItem
}

function getCategoryIcon(category: string) {
  switch (category) {
    case 'Watches':
      return <Watch className="h-5 w-5" />
    case 'Die-Cast':
      return <Car className="h-5 w-5" />
    case 'Collectibles':
      return <Package className="h-5 w-5" />
    default:
      return <Sparkles className="h-5 w-5" />
  }
}

function getConditionColor(condition: string) {
  switch (condition) {
    case 'Mint':
      return 'bg-primary/20 text-primary border-primary/30'
    case 'Excellent':
      return 'bg-chart-2/20 text-chart-2 border-chart-2/30'
    case 'Good':
      return 'bg-chart-4/20 text-chart-4 border-chart-4/30'
    case 'Fair':
      return 'bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30'
    default:
      return 'bg-muted text-muted-foreground'
  }
}

export function CollectionCard({ item }: CollectionCardProps) {
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(item.value)

  return (
    <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              {getCategoryIcon(item.category)}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {item.brand}
              </p>
              <h3 className="font-semibold text-foreground truncate text-balance">
                {item.model}
              </h3>
            </div>
          </div>
          <Badge 
            variant="outline" 
            className={`shrink-0 text-xs ${getConditionColor(item.condition)}`}
          >
            {item.condition}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-secondary/80 text-secondary-foreground text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-border/50">
          <span className="text-xs text-muted-foreground">{item.category}</span>
          <span className="font-semibold text-primary">{formattedValue}</span>
        </div>
      </CardContent>
    </Card>
  )
}
