import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Bed, Bath, Square, Star, Heart, Phone, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface PropertyCardProps {
  property: {
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
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const formatPrice = (price: number, type: string, priceType?: string) => {
    const formattedPrice = price.toLocaleString('fr-TN')
    
    if (type === 'location') {
      const period = priceType === 'mois' ? '/mois' : '/nuit'
      return `${formattedPrice} DT${period}`
    }
    return `${formattedPrice} DT`
  }

  const getTypeColor = (type: string) => {
    return type === 'location' 
      ? 'mahalli-bg-accent border-accent/30' 
      : 'mahalli-bg-primary border-primary/30'
  }

  const getTypeLabel = (type: string) => {
    return type === 'location' ? 'Location' : 'Vente'
  }

  return (
    <div className="group bg-card rounded-3xl overflow-hidden card-shadow border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 sm:h-72 overflow-hidden flex-shrink-0">
        <Image
          src={property.images[0] || '/images/placeholder-property.jpg'}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className={`${getTypeColor(property.type)} shadow-md`}>
            {getTypeLabel(property.type)}
          </Badge>
          {property.isNew && (
            <Badge className="mahalli-bg-success shadow-md border border-success/30">
              Nouveau
            </Badge>
          )}
          {property.isFeatured && (
            <Badge className="bg-yellow-400/90 text-yellow-900 shadow-md border border-yellow-500/30">
              ⭐ Coup de cœur
            </Badge>
          )}
        </div>
        
        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors">
            <Heart className="h-4 w-4 text-gray-600 hover:text-primary" />
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-white transition-colors">
            <Eye className="h-4 w-4 text-gray-600 hover:text-primary" />
          </button>
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-3 left-3">
          <div className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
            <div className="text-xl font-bold mahalli-primary">
              {formatPrice(property.price, property.type, property.priceType)}
            </div>
          </div>
        </div>
      </div>

      {/* Content - Using flex-grow to push buttons to bottom */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        {/* Main Content Area - This will grow to fill available space */}
        <div className="flex-grow">
          {/* Title and Location */}
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {property.title}
            </h3>
            <div className="flex items-center text-muted-foreground mb-3">
              <MapPin className="h-4 w-4 mr-1 flex-shrink-0 mahalli-accent" />
              <span className="text-sm truncate">{property.location}</span>
            </div>
          </div>

          {/* Property Features */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1 mahalli-accent" />
                <span>{property.bedrooms} ch.</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1 mahalli-accent" />
                <span>{property.bathrooms} sdb</span>
              </div>
              <div className="flex items-center">
                <Square className="h-4 w-4 mr-1 mahalli-accent" />
                <span>{property.surface} m²</span>
              </div>
            </div>
          </div>

          {/* Rating (for rentals) */}
          {property.type === 'location' && property.rating && (
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < property.rating! ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {property.rating}/5 ({property.reviewCount || 0} avis)
              </span>
            </div>
          )}

          {/* Amenities */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {property.amenities.slice(0, 3).map((amenity, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md border border-muted"
                  >
                    {amenity}
                  </span>
                ))}
                {property.amenities.length > 3 && (
                  <span className="px-2 py-1 bg-muted/50 text-muted-foreground text-xs rounded-md border border-muted">
                    +{property.amenities.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Description Preview */}
          {property.description && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {property.description}
            </p>
          )}
        </div>

        {/* Action Buttons - Always at bottom */}
        <div className="flex gap-2 mt-auto">
          <Button asChild className="flex-1 mahalli-bg-primary hover:bg-primary/90">
            <Link href={`/${property.type}s/${property.id}`}>
              Voir détails
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="border-primary/30 mahalli-primary hover:mahalli-bg-primary hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Hover Effect Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  )
}

export default PropertyCard