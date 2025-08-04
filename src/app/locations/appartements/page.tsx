import PropertyGrid from '@/components/property/PropertyGrid'

// Sample apartment properties - In a real app, this would come from an API
const apartmentProperties = [
  {
    id: '7',
    title: 'Appartement familial - Sfax',
    type: 'location' as const,
    price: 80,
    priceType: 'nuit' as const,
    location: 'Centre-ville, Sfax',
    bedrooms: 3,
    bathrooms: 2,
    surface: 120,
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    rating: 4.4,
    reviewCount: 15,
    isNew: true,
    isFeatured: false,
    amenities: ['WiFi', 'Climatisation', 'Proche centre'],
    description: 'Appartement confortable pour séjour familial ou professionnel à Sfax.'
  }
]

export default function AppartementsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mahalli-bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Appartements de Location Saisonnière
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Des appartements confortables au cœur des plus belles villes tunisiennes
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid 
        properties={apartmentProperties}
        title="Nos Appartements Disponibles"
        subtitle="Des logements modernes et bien situés pour vos séjours en Tunisie"
        showFilters={true}
      />
    </div>
  )
}