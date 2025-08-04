import PropertyGrid from '@/components/property/PropertyGrid'

// Sample beachfront properties - In a real app, this would come from an API
const beachfrontProperties = [
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
    amenities: ['Vue mer', 'Piscine', 'WiFi', 'Climatisation', 'Accès plage'],
    description: 'Magnifique villa moderne avec vue sur mer, parfaite pour des vacances en famille.'
  },
  {
    id: '3',
    title: 'Maison traditionnelle rénovée - Sousse',
    type: 'location' as const,
    price: 120,
    priceType: 'nuit' as const,
    location: 'Médina, Sousse',
    bedrooms: 3,
    bathrooms: 2,
    surface: 150,
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    rating: 4.6,
    reviewCount: 18,
    isNew: false,
    isFeatured: false,
    amenities: ['Terrasse', 'WiFi', 'Proche mer', 'Vue mer'],
    description: 'Charmante maison traditionnelle dans la médina historique de Sousse.'
  }
]

export default function BordDeMerPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mahalli-bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Propriétés Bord de Mer
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Séjournez face à la mer Méditerranée dans nos propriétés d'exception
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid 
        properties={beachfrontProperties}
        title="Nos Propriétés en Bord de Mer"
        subtitle="Des locations avec vue imprenable sur la mer et accès direct aux plages"
        showFilters={true}
      />
    </div>
  )
}