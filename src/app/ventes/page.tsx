import PropertyGrid from '@/components/property/PropertyGrid'

// Sample sale properties data
const saleProperties = [
  {
    id: '2',
    title: 'Appartement centre-ville - Tunis',
    type: 'vente' as const,
    price: 180000,
    location: 'Centre-ville, Tunis',
    bedrooms: 3,
    bathrooms: 2,
    surface: 110,
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    isNew: false,
    isFeatured: true,
    amenities: ['Ascenseur', 'Balcon', 'Parking'],
    description: 'Appartement lumineux au cœur de Tunis, proche de toutes commodités.'
  },
  {
    id: '4',
    title: 'Studio moderne - Ben Arous',
    type: 'vente' as const,
    price: 85000,
    location: 'Ben Arous',
    bedrooms: 1,
    bathrooms: 1,
    surface: 45,
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    isNew: true,
    isFeatured: false,
    amenities: ['Climatisation', 'Cuisine équipée'],
    description: 'Studio moderne parfait pour jeune couple ou investissement locatif.'
  },
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
  },
  {
    id: '8',
    title: 'Terrain constructible - Monastir',
    type: 'vente' as const,
    price: 120000,
    location: 'Monastir',
    bedrooms: 0,
    bathrooms: 0,
    surface: 500,
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    isNew: false,
    isFeatured: false,
    amenities: ['Constructible', 'Bien situé'],
    description: 'Terrain bien situé pour construction de villa ou projet immobilier.'
  },
  {
    id: '13',
    title: 'Villa neuve - Hammamet',
    type: 'vente' as const,
    price: 450000,
    location: 'Hammamet Sud, Nabeul',
    bedrooms: 5,
    bathrooms: 4,
    surface: 300,
    images: ['https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    isNew: true,
    isFeatured: true,
    amenities: ['Piscine', 'Jardin', 'Garage', 'Climatisation'],
    description: 'Villa neuve de standing avec piscine et grand jardin, proche des plages.'
  },
  {
    id: '14',
    title: 'Duplex moderne - Sousse',
    type: 'vente' as const,
    price: 220000,
    location: 'Sahloul, Sousse',
    bedrooms: 4,
    bathrooms: 3,
    surface: 160,
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    isNew: false,
    isFeatured: false,
    amenities: ['Duplex', 'Terrasse', 'Parking', 'Ascenseur'],
    description: 'Duplex spacieux dans résidence sécurisée avec toutes commodités.'
  },
  {
    id: '15',
    title: 'Maison traditionnelle - Kairouan',
    type: 'vente' as const,
    price: 95000,
    location: 'Médina, Kairouan',
    bedrooms: 3,
    bathrooms: 2,
    surface: 130,
    images: ['https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    isNew: false,
    isFeatured: false,
    amenities: ['Authentique', 'Cour intérieure', 'Rénové'],
    description: 'Maison traditionnelle rénovée dans la médina historique de Kairouan.'
  },
  {
    id: '16',
    title: 'Local commercial - Sfax',
    type: 'vente' as const,
    price: 150000,
    location: 'Centre commercial, Sfax',
    bedrooms: 0,
    bathrooms: 1,
    surface: 80,
    images: ['https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    isNew: false,
    isFeatured: false,
    amenities: ['Commercial', 'Vitrine', 'Parking'],
    description: 'Local commercial bien situé dans zone d\'activité commerciale dynamique.'
  },
  {
    id: '17',
    title: 'Appartement standing - La Marsa',
    type: 'vente' as const,
    price: 280000,
    location: 'La Marsa, Tunis',
    bedrooms: 3,
    bathrooms: 2,
    surface: 140,
    images: ['https://images.unsplash.com/photo-1565182999561-18d7dc61c393?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    isNew: true,
    isFeatured: true,
    amenities: ['Vue mer', 'Terrasse', 'Standing', 'Sécurisé'],
    description: 'Appartement haut standing avec vue mer dans résidence de luxe.'
  },
  {
    id: '18',
    title: 'Terrain agricole - Bizerte',
    type: 'vente' as const,
    price: 200000,
    location: 'Périphérie, Bizerte',
    bedrooms: 0,
    bathrooms: 0,
    surface: 2000,
    images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    isNew: false,
    isFeatured: false,
    amenities: ['Agricole', 'Grande surface', 'Accès route'],
    description: 'Grand terrain agricole idéal pour projet agricole ou touristique.'
  }
]

export default function VentesPage() {
  return (
    <div className="min-h-screen pt-8">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6">
            Ventes Immobilières
          </h1>
          <p className="text-xl lg:text-2xl text-green-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
            Investissez dans l'immobilier tunisien avec des biens sélectionnés pour leur qualité et leur potentiel
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-green-100">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>Appartements neufs</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>Villas de standing</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>Terrains constructibles</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-300 rounded-full"></span>
              <span>Locaux commerciaux</span>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid 
        properties={saleProperties}
        showFilters={true}
        viewType="grid"
      />

      {/* Investment Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Investir en Tunisie ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les avantages d'un investissement immobilier en Tunisie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                📈
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marché en Croissance</h3>
              <p className="text-gray-600">
                Le marché immobilier tunisien connaît une croissance stable avec de nombreuses opportunités d'investissement.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
                🏖️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Destination Touristique</h3>
              <p className="text-gray-600">
                La Tunisie attire des millions de visiteurs chaque année, garantissant un bon potentiel locatif.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prix Attractifs</h3>
              <p className="text-gray-600">
                Des prix immobiliers compétitifs comparés aux autres destinations méditerranéennes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mb-6">
                🏛️
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cadre Légal Stable</h3>
              <p className="text-gray-600">
                Un environnement juridique stable et des procédures d'acquisition simplifiées pour les étrangers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-lg flex items-center justify-center mb-6">
                🌍
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Position Stratégique</h3>
              <p className="text-gray-600">
                Située au cœur de la Méditerranée, la Tunisie bénéficie d'une position géographique privilégiée.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                🏠
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Diversité des Biens</h3>
              <p className="text-gray-600">
                Du studio moderne à la villa de luxe, trouvez le bien qui correspond à votre budget et vos objectifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de biens */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Types de Biens Disponibles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorez notre sélection variée de biens immobiliers à travers la Tunisie
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: 'Appartements', count: 156, price: '85K - 350K DT', image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { type: 'Villas', count: 89, price: '200K - 800K DT', image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { type: 'Terrains', count: 67, price: '50K - 500K DT', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { type: 'Commercial', count: 34, price: '100K - 400K DT', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((category) => (
              <div key={category.type} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-20 h-80">
                  <img 
                    src={category.image} 
                    alt={category.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.type}</h3>
                  <p className="text-gray-200 mb-1">{category.count} biens disponibles</p>
                  <p className="text-blue-300 font-medium">{category.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}