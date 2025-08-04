import PropertyGrid from '@/components/property/PropertyGrid'

// Sample land sale properties - In a real app, this would come from an API
const landSaleProperties = [
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
    amenities: ['Constructible', 'Bien situé', 'Accès route'],
    description: 'Terrain bien situé pour construction de villa ou projet immobilier.'
  }
]

export default function TerrainsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="mahalli-bg-primary py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Terrains à Vendre
          </h1>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            Investissez dans des terrains constructibles aux meilleurs emplacements
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <PropertyGrid 
        properties={landSaleProperties}
        title="Terrains Disponibles à la Vente"
        subtitle="Des opportunités foncières pour vos projets de construction"
        showFilters={true}
      />
    </div>
  )
}