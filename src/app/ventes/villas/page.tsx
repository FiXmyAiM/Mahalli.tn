import PropertyGrid from '@/components/property/PropertyGrid'

// Sample villa sale properties - In a real app, this would come from an API
const villaSaleProperties = [
  {
    id: '6',
    title: 'Penthouse vue mer - Djerba',
    type: 'vente' as const,
    price: 320000,
    location: 'Houmt Souk, Djerba',
    bedrooms: 4,
    bathrooms: 3,
    surface: 180,
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    isNew: false,
    isFeatured: true,
    amenities: ['Vue mer', 'Terrasse', 'Ascenseur', 'Parking'],
    description: 'Penthouse exceptionnel avec vue panoramique sur la mer Méditerranée.'
  }
]

export default function VillasVentePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mahalli-bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Villas à Vendre
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Découvrez nos villas d'exception pour un investissement de prestige
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid 
        properties={villaSaleProperties}
        title="Villas Disponibles à la Vente"
        subtitle="Des propriétés d'exception dans les plus beaux emplacements de Tunisie"
        showFilters={true}
      />
    </div>
  )
}