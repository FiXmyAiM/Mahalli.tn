import Link from 'next/link'
import { Home, Search, Phone, ArrowLeft, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl lg:text-9xl font-bold text-blue-200 mb-4">
            404
          </div>
          <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
            <MapPin className="h-12 w-12" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Page non trouvée
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Désolé, la page que vous cherchez n'existe pas ou a été déplacée. 
          Mais ne vous inquiétez pas, nous pouvons vous aider à trouver ce que vous cherchez !
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-semibold">
            <Link href="/">
              <Home className="h-5 w-5 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-semibold">
            <Link href="/contact">
              <Phone className="h-5 w-5 mr-2" />
              Nous contacter
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Pages populaires
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link 
              href="/locations" 
              className="flex items-center p-4 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                🏖️
              </div>
              <div>
                <div className="font-medium text-gray-900">Locations</div>
                <div className="text-sm text-gray-500">Vacances</div>
              </div>
            </Link>
            <Link 
              href="/ventes" 
              className="flex items-center p-4 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                🏠
              </div>
              <div>
                <div className="font-medium text-gray-900">Ventes</div>
                <div className="text-sm text-gray-500">Immobilier</div>
              </div>
            </Link>
            <Link 
              href="/services" 
              className="flex items-center p-4 rounded-xl hover:bg-blue-50 transition-colors group"
            >
              <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <div>
                <div className="font-medium text-gray-900">Services</div>
                <div className="text-sm text-gray-500">Expertise</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-2">
            Besoin d'aide ? Contactez-nous directement
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-blue-600">
            <a href="tel:+21642614477" className="flex items-center hover:text-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              42 614 477
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a href="tel:+21693128882" className="flex items-center hover:text-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              93 128 882
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}