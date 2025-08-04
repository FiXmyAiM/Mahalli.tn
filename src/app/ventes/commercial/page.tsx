import PropertyGrid from '@/components/property/PropertyGrid'

// Sample commercial sale properties - In a real app, this would come from an API
const commercialSaleProperties = [
  {
    id: '9',
    title: 'Local commercial - Centre-ville Tunis',
    type: 'vente' as const,
    price: 250000,
    location: 'Centre-ville, Tunis',
    bedrooms: 0,
    bathrooms: 1,
    surface: 80,
    images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'],
    isNew: false,
    isFeatured: true,
    amenities: ['Vitrine', 'Parking', 'Climatisation', 'Sécurité'],
    description: 'Local commercial idéalement situé en centre-ville avec forte affluence.'
  }
]

export default function CommercialPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mahalli-bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Immobilier Commercial
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Développez votre activité avec nos locaux commerciaux stratégiquement situés
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid 
        properties={commercialSaleProperties}
        title="Locaux Commerciaux à Vendre"
        subtitle="Des espaces commerciaux dans les zones les plus dynamiques"
        showFilters={true}
      />
    </div>
  )
}