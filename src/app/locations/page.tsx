import PropertyGrid from '@/components/property/PropertyGrid'

// Sample location properties data
const locationProperties = [
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
    amenities: ['Terrasse', 'WiFi', 'Proche mer'],
    description: 'Charmante maison traditionnelle dans la médina historique de Sousse.'
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
  },
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
  },
  {
    id: '9',
    title: 'Riad authentique - Djerba',
    type: 'location' as const,
    price: 150,
    priceType: 'nuit' as const,
    location: 'Houmt Souk, Djerba',
    bedrooms: 4,
    bathrooms: 2,
    surface: 180,
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    rating: 4.7,
    reviewCount: 28,
    isNew: false,
    isFeatured: true,
    amenities: ['Patio', 'Climatisation', 'Authentique'],
    description: 'Riad traditionnel djerbien avec architecture authentique et confort moderne.'
  },
  {
    id: '10',
    title: 'Chalet montagne - Aïn Draham',
    type: 'location' as const,
    price: 90,
    priceType: 'nuit' as const,
    location: 'Aïn Draham, Jendouba',
    bedrooms: 2,
    bathrooms: 1,
    surface: 80,
    images: ['https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    rating: 4.5,
    reviewCount: 12,
    isNew: true,
    isFeatured: false,
    amenities: ['Cheminée', 'Vue montagne', 'Calme'],
    description: 'Chalet cosy en montagne, parfait pour une escapade nature et détente.'
  },
  {
    id: '11',
    title: 'Appartement bord de mer - Monastir',
    type: 'location' as const,
    price: 110,
    priceType: 'nuit' as const,
    location: 'Marina, Monastir',
    bedrooms: 2,
    bathrooms: 1,
    surface: 90,
    images: ['https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    rating: 4.6,
    reviewCount: 20,
    isNew: false,
    isFeatured: false,
    amenities: ['Vue mer', 'Balcon', 'Proche plage'],
    description: 'Appartement moderne avec vue directe sur la marina et la mer.'
  },
  {
    id: '12',
    title: 'Maison d\'hôtes - Sidi Bou Saïd',
    type: 'location' as const,
    price: 220,
    priceType: 'nuit' as const,
    location: 'Sidi Bou Saïd, Tunis',
    bedrooms: 3,
    bathrooms: 2,
    surface: 160,
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    rating: 4.9,
    reviewCount: 41,
    isNew: false,
    isFeatured: true,
    amenities: ['Vue panoramique', 'Terrasse', 'Authentique'],
    description: 'Maison d\'hôtes de charme avec vue imprenable sur la baie de Tunis.'
  }
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen pt-8">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6">
            Locations Saisonnières
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
            Découvrez les plus belles propriétés de Tunisie pour vos vacances de rêve
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-blue-100">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              <span>Villas avec piscine</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              <span>Appartements vue mer</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              <span>Maisons traditionnelles</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-300 rounded-full"></span>
              <span>Destinations authentiques</span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid 
        properties={locationProperties}
        showFilters={true}
        viewType="grid"
      />

      {/* Destinations populaires */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Destinations Populaires
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorez les destinations les plus prisées pour vos vacances en Tunisie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Hammamet', count: 45, image: 'https://images.unsplash.com/photo-1539650116574-75c0c6930311?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Djerba', count: 38, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Sousse', count: 32, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Sidi Bou Saïd', count: 28, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Nabeul', count: 25, image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Monastir', count: 22, image: 'https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((destination) => (
              <div key={destination.name} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-12 h-64">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                  <p className="text-blue-200">{destination.count} propriétés disponibles</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}