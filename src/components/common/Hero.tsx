'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, MapPin, Calendar, Users, Home, Euro } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Hero = () => {
  const [searchType, setSearchType] = useState('location')
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 2,
    propertyType: '',
    priceRange: '',
    bedrooms: '',
  })

  const handleSearch = () => {
    console.log('Recherche:', searchType, searchData)
    // TODO: Implement search functionality
  }

  const destinations = [
    'Hammamet', 'Sousse', 'Djerba', 'Tunis', 'Ben Arous', 'Nabeul', 
    'Monastir', 'Mahdia', 'Sfax', 'Bizerte', 'Gafsa', 'Tozeur'
  ]

  const propertyTypes = [
    { value: 'appartement', label: 'Appartement' },
    { value: 'villa', label: 'Villa' },
    { value: 'maison', label: 'Maison' },
    { value: 'studio', label: 'Studio' },
    { value: 'terrain', label: 'Terrain' },
    { value: 'commercial', label: 'Commercial' },
  ]

  const priceRanges = [
    { value: '0-50000', label: 'Moins de 50 000 DT' },
    { value: '50000-100000', label: '50 000 - 100 000 DT' },
    { value: '100000-200000', label: '100 000 - 200 000 DT' },
    { value: '200000-300000', label: '200 000 - 300 000 DT' },
    { value: '300000-500000', label: '300 000 - 500 000 DT' },
    { value: '500000+', label: 'Plus de 500 000 DT' },
  ]

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
            alt="Villa moderne en Tunisie"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto container-padding section-padding">
        <div className="text-center mb-16 space-y-comfortable">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight">
            Bienvenue chez{' '}
            <span className="text-gradient bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Mahalli</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto leading-relaxed text-balance font-light">
            Votre nouvelle référence pour la location saisonnière et la vente immobilière en Tunisie
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-pretty">
            Que vous soyez à la recherche d'un coin chaleureux pour les vacances ou prêt à investir dans votre futur chez-vous, on s'occupe de tout.
          </p>
        </div>

        {/* Search Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl card-shadow p-6 sm:p-8 lg:p-10 max-w-5xl mx-auto border border-white/20">
          <Tabs value={searchType} onValueChange={setSearchType} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 lg:mb-10 h-14 bg-muted/50 rounded-2xl p-1">
              <TabsTrigger 
                value="location" 
                className="text-sm sm:text-base font-medium py-3 rounded-xl data-[state=active]:mahalli-bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-200"
              >
                <Home className="h-4 w-4 mr-2" />
                Location Saisonnière
              </TabsTrigger>
              <TabsTrigger 
                value="vente" 
                className="text-sm sm:text-base font-medium py-3 rounded-xl data-[state=active]:mahalli-bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all duration-200"
              >
                <Euro className="h-4 w-4 mr-2" />
                Vente Immobilière
              </TabsTrigger>
            </TabsList>

            <TabsContent value="location" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Destination */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Destination"
                    value={searchData.destination}
                    onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    className="pl-10 h-12 border-border focus:border-primary focus:ring-primary"
                    list="destinations"
                  />
                  <datalist id="destinations">
                    {destinations.map(dest => (
                      <option key={dest} value={dest} />
                    ))}
                  </datalist>
                </div>

                {/* Check-in Date */}
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    placeholder="Arrivée"
                    value={searchData.checkIn}
                    onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                    className="pl-10 h-12 border-border focus:border-primary focus:ring-primary"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Check-out Date */}
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="date"
                    placeholder="Départ"
                    value={searchData.checkOut}
                    onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                    className="pl-10 h-12 border-border focus:border-primary focus:ring-primary"
                    min={searchData.checkIn || new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Guests */}
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <select
                    value={searchData.guests}
                    onChange={(e) => setSearchData({...searchData, guests: parseInt(e.target.value)})}
                    className="w-full pl-10 pr-4 py-3 h-12 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground text-sm"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>
                        {num} personne{num > 1 ? 's' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vente" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Location */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Localisation"
                    value={searchData.destination}
                    onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    className="pl-10 h-12 border-border focus:border-primary focus:ring-primary"
                    list="destinations"
                  />
                </div>

                {/* Property Type */}
                <select
                  value={searchData.propertyType}
                  onChange={(e) => setSearchData({...searchData, propertyType: e.target.value})}
                  className="px-4 py-3 h-12 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground text-sm"
                >
                  <option value="">Type de bien</option>
                  {propertyTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>

                {/* Price Range */}
                <select
                  value={searchData.priceRange}
                  onChange={(e) => setSearchData({...searchData, priceRange: e.target.value})}
                  className="px-4 py-3 h-12 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground text-sm"
                >
                  <option value="">Budget</option>
                  {priceRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>

                {/* Bedrooms */}
                <select
                  value={searchData.bedrooms}
                  onChange={(e) => setSearchData({...searchData, bedrooms: e.target.value})}
                  className="px-4 py-3 h-12 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary bg-card text-foreground text-sm"
                >
                  <option value="">Chambres</option>
                  <option value="1">1 chambre</option>
                  <option value="2">2 chambres</option>
                  <option value="3">3 chambres</option>
                  <option value="4">4 chambres</option>
                  <option value="5+">5+ chambres</option>
                </select>
              </div>
            </TabsContent>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 lg:mt-8">
              <Button 
                onClick={handleSearch}
                className="flex-1 sm:flex-none mahalli-bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 h-12 rounded-lg font-medium text-base transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Search className="h-5 w-5 mr-2" />
                Rechercher
              </Button>
              <Button 
                variant="outline"
                className="flex-1 sm:flex-none border-border hover:bg-muted/50 px-8 py-3 h-12 rounded-lg font-medium text-base transition-colors duration-200"
              >
                Recherche Avancée
              </Button>
            </div>
          </Tabs>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-sm lg:text-base text-white/80">Propriétés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-sm lg:text-base text-white/80">Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-sm lg:text-base text-white/80">Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl lg:text-3xl font-bold text-white mb-1">5★</div>
            <div className="text-sm lg:text-base text-white/80">Évaluation</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero