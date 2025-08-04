import PropertyGrid from '@/components/property/PropertyGrid'

// Sample pool properties - In a real app, this would come from an API
const poolProperties = [
  {
    id: '1',
    title: 'Villa moderne avec piscine - Hammamet',
    type: 'location' as const,
    price: 180,
    priceType: 'nuit' as const,
    location: 'Hammamet, Nabeul',
    bedrooms: 4,
    bathrooms: 3,
    surface: 220,
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    rating: 4.8,
    reviewCount: 24,
    isNew: true,
    isFeatured: true,
    amenities: ['Piscine', 'WiFi', 'Climatisation', 'Parking'],
    description: 'Magnifique villa moderne avec vue sur mer, parfaite pour des vacances en famille.'
  },
  {
    id: '5',
    title: 'Villa avec jardin - Nabeul',
    type: 'location' as const,
    price: 200,
    priceType: 'nuit' as const,
    location: 'Nabeul',
    bedrooms: 5,
    bathrooms: 3,
    surface: 280,
    images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    rating: 4.9,
    reviewCount: 32,
    isNew: false,
    isFeatured: true,
    amenities: ['Jardin', 'BBQ', 'Piscine', 'Parking'],
    description: 'Spacieuse villa familiale avec grand jardin et espaces de détente.'
  }
]

export default function PiscinePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mahalli-bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Maisons avec Piscine
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Profitez de nos propriétés avec piscine pour des vacances rafraîchissantes
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid 
        properties={poolProperties}
        title="Propriétés avec Piscine"
        subtitle="Détendez-vous dans nos maisons et villas équipées de piscines privées"
        showFilters={true}
      />
    </div>
  )
}