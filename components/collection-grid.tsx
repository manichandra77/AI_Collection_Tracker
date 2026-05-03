'use client'

import { useState } from 'react'
import { CollectionItem, mockCollectionItems } from '@/lib/mock-data'
import { CollectionCard } from '@/components/collection-card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Package } from 'lucide-react'

const categories = ['All', 'Watches', 'Die-Cast', 'Collectibles']

export function CollectionGrid() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredItems = mockCollectionItems.filter((item) => {
    const matchesSearch =
      item.brand.toLowerCase().includes(search.toLowerCase()) ||
      item.model.toLowerCase().includes(search.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
    
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const totalValue = filteredItems.reduce((sum, item) => sum + item.value, 0)
  const formattedTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(totalValue)

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Package className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">My Collection</h1>
            <p className="text-sm text-muted-foreground">
              {filteredItems.length} items · {formattedTotal} total value
            </p>
          </div>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search collection..."
            className="pl-9 bg-input border-border"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            className={
              selectedCategory === category
                ? 'bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90'
                : 'bg-transparent text-muted-foreground border-border cursor-pointer hover:bg-secondary hover:text-foreground'
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item) => (
          <CollectionCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Package className="h-12 w-12 text-muted-foreground/50 mb-3" />
          <p className="text-muted-foreground">No items found</p>
          <p className="text-sm text-muted-foreground/70">
            Try adjusting your search or filter
          </p>
        </div>
      )}
    </div>
  )
}
