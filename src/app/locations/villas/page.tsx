import PropertyGrid from '@/components/property/PropertyGrid'

// Sample villa properties - In a real app, this would come from an API
const villaProperties = [
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
    amenities: ['Piscine', 'WiFi', 'Climatisation', 'Parking', 'Jardin'],
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

export default function VillasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mahalli-bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Villas de Location Saisonnière
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Découvrez nos villas exceptionnelles pour des vacances inoubliables en Tunisie
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid 
        properties={villaProperties}
        title="Nos Villas Disponibles"
        subtitle="Des propriétés spacieuses avec piscine, jardin et tout le confort moderne"
        showFilters={true}
      />
    </div>
  )
}