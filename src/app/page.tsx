import Hero from '@/components/common/Hero'
import TrustIndicators from '@/components/common/TrustIndicators'
import PropertyGrid from '@/components/property/PropertyGrid'

// Sample data - In a real app, this would come from an API or database
const sampleProperties = [
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
  }
]

const featuredProperties = sampleProperties.filter(p => p.isFeatured)
const locationProperties = sampleProperties.filter(p => p.type === 'location').slice(0, 4)
const saleProperties = sampleProperties.filter(p => p.type === 'vente').slice(0, 4)

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Trust Indicators */}
      <TrustIndicators />
      
      {/* Featured Properties */}
      <PropertyGrid 
        properties={featuredProperties}
        title="Nos Coups de Cœur"
        subtitle="Découvrez une sélection de propriétés exceptionnelles, soigneusement choisies par notre équipe"
        maxItems={6}
      />
      
      {/* Location Saisonnière Section */}
      <div className="bg-muted/30">
        <PropertyGrid 
          properties={locationProperties}
          title="Locations Saisonnières Populaires"
          subtitle="Trouvez votre refuge parfait pour des vacances inoubliables en Tunisie"
          maxItems={4}
        />
      </div>
      
      {/* Vente Immobilière Section */}
      <PropertyGrid 
        properties={saleProperties}
        title="Opportunités d'Investissement"
        subtitle="Investissez dans l'immobilier tunisien avec des biens sélectionnés pour leur potentiel"
        maxItems={4}
      />
      
      {/* Call to Action Section */}
      <section className="py-16 lg:py-24 mahalli-bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 lg:mb-6">
            Prêt à commencer votre prochain chapitre ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 lg:mb-10 leading-relaxed">
            Que vous cherchiez à louer pour les vacances ou à investir dans l'immobilier, 
            notre équipe est là pour vous accompagner à chaque étape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+21642614477"
              className="inline-flex items-center justify-center px-8 py-4 bg-card text-primary font-semibold rounded-xl hover:bg-card/90 transition-colors duration-200 shadow-lg"
            >
              📞 Appelez-nous maintenant
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-colors duration-200 border-2 border-accent/50"
            >
              💬 Contactez-nous
            </a>
          </div>
          <div className="mt-8 text-primary-foreground/80 text-sm">
            <p>📍 Ben Arous, Tunisie | 📞 42 614 477 / 93 128 882</p>
          </div>
        </div>
      </section>
    </div>
  )
}