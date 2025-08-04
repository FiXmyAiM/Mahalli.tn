'use client'

import { useState } from 'react'
import PropertyCard from './PropertyCard'
import { Button } from '@/components/ui/button'
import { Filter, Grid, List, SlidersHorizontal } from 'lucide-react'

interface Property {
  id: string
  title: string
  type: 'location' | 'vente'
  price: number
  priceType?: 'nuit' | 'mois' | 'total'
  location: string
  bedrooms: number
  bathrooms: number
  surface: number
  images: string[]
  rating?: number
  reviewCount?: number
  isNew?: boolean
  isFeatured?: boolean
  amenities?: string[]
  description?: string
}

interface PropertyGridProps {
  properties: Property[]
  title?: string
  subtitle?: string
  showFilters?: boolean
  viewType?: 'grid' | 'list'
  maxItems?: number
}

const PropertyGrid = ({ 
  properties, 
  title, 
  subtitle, 
  showFilters = false, 
  viewType = 'grid',
  maxItems
}: PropertyGridProps) => {
  const [currentViewType, setCurrentViewType] = useState<'grid' | 'list'>(viewType)
  const [sortBy, setSortBy] = useState('featured')
  const [showFiltersPanel, setShowFiltersPanel] = useState(false)

  const displayedProperties = maxItems ? properties.slice(0, maxItems) : properties

  const sortOptions = [
    { value: 'featured', label: 'Recommandés' },
    { value: 'price-asc', label: 'Prix croissant' },
    { value: 'price-desc', label: 'Prix décroissant' },
    { value: 'newest', label: 'Plus récents' },
    { value: 'rating', label: 'Mieux notés' },
  ]

  const getSortedProperties = () => {
    const sorted = [...displayedProperties]
    
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price)
      case 'newest':
        return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
      case 'rating':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
      case 'featured':
      default:
        return sorted.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
    }
  }

  const sortedProperties = getSortedProperties()

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-8 lg:mb-12">
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 lg:mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">
              {sortedProperties.length} propriété{sortedProperties.length > 1 ? 's' : ''} trouvée{sortedProperties.length > 1 ? 's' : ''}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Sort Dropdown */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground hidden sm:inline">Trier par:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* View Toggle */}
            <div className="flex items-center bg-muted/50 rounded-lg p-1">
              <button
                onClick={() => setCurrentViewType('grid')}
                className={`p-2 rounded-md transition-colors ${
                  currentViewType === 'grid' 
                    ? 'bg-card mahalli-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCurrentViewType('list')}
                className={`p-2 rounded-md transition-colors ${
                  currentViewType === 'list' 
                    ? 'bg-card mahalli-primary shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>

            {/* Filters Button */}
            {showFilters && (
              <Button
                variant="outline"
                onClick={() => setShowFiltersPanel(!showFiltersPanel)}
                className="border-border hover:bg-muted/50"
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filtres
              </Button>
            )}
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && showFiltersPanel && (
          <div className="bg-muted/30 rounded-xl p-6 mb-6 lg:mb-8 border border-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Type</label>
                <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground">
                  <option value="">Tous</option>
                  <option value="location">Location</option>
                  <option value="vente">Vente</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Prix</label>
                <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground">
                  <option value="">Tout budget</option>
                  <option value="0-100">0 - 100 DT</option>
                  <option value="100-500">100 - 500 DT</option>
                  <option value="500+">500+ DT</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Chambres</label>
                <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground">
                  <option value="">Toutes</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Surface</label>
                <select className="w-full px-3 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-card text-foreground">
                  <option value="">Toutes</option>
                  <option value="0-50">0 - 50 m²</option>
                  <option value="50-100">50 - 100 m²</option>
                  <option value="100-200">100 - 200 m²</option>
                  <option value="200+">200+ m²</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Properties Grid/List */}
        {sortedProperties.length > 0 ? (
          <div className={
            currentViewType === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8'
              : 'space-y-6'
          }>
            {sortedProperties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 lg:py-16">
            <div className="max-w-md mx-auto">
              <div className="mb-4">
                <Filter className="h-12 w-12 text-muted-foreground mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Aucune propriété trouvée
              </h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos critères de recherche ou contactez-nous pour des options personnalisées.
              </p>
              <Button className="mt-4 mahalli-bg-primary hover:bg-primary/90">
                Réinitialiser les filtres
              </Button>
            </div>
          </div>
        )}

        {/* Load More Button */}
        {maxItems && properties.length > maxItems && (
          <div className="text-center mt-8 lg:mt-12">
            <Button variant="outline" size="lg" className="border-primary/30 mahalli-primary hover:mahalli-bg-primary hover:text-primary-foreground">
              Voir plus de propriétés
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertyGrid