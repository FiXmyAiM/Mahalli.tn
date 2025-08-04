import PropertyGrid from '@/components/property/PropertyGrid'

// Sample apartment sale properties - In a real app, this would come from an API
const apartmentSaleProperties = [
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
  }
]

export default function AppartementsVentePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mahalli-bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Appartements à Vendre
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Investissez dans l'immobilier tunisien avec nos appartements sélectionnés
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid 
        properties={apartmentSaleProperties}
        title="Appartements Disponibles à la Vente"
        subtitle="Des opportunités d'investissement dans les meilleures zones de Tunisie"
        showFilters={true}
      />
    </div>
  )
}