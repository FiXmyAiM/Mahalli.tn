import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { title: 'Locations Saisonnières', href: '/locations' },
    { title: 'Ventes Immobilières', href: '/ventes' },
    { title: 'Nos Services', href: '/services' },
    { title: 'À Propos', href: '/a-propos' },
    { title: 'Contact', href: '/contact' },
  ]

  const locations = [
    { title: 'Ben Arous', href: '/locations/ben-arous' },
    { title: 'Hammamet', href: '/locations/hammamet' },
    { title: 'Sousse', href: '/locations/sousse' },
    { title: 'Djerba', href: '/locations/djerba' },
    { title: 'Tunis', href: '/locations/tunis' },
    { title: 'Nabeul', href: '/locations/nabeul' },
  ]

  const services = [
    { title: 'Estimation Gratuite', href: '/services/estimation' },
    { title: 'Accompagnement Personnalisé', href: '/services/accompagnement' },
    { title: 'Visite Virtuelle', href: '/services/visite-virtuelle' },
    { title: 'Assistance Juridique', href: '/services/juridique' },
  ]

  return (
    <footer className="mahalli-bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    src="/mahallilogo.png"
                    alt="Mahalli.tn Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                Votre nouvelle référence pour la location saisonnière et la vente immobilière en Tunisie. 
                Là où commence votre prochain chapitre.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 mahalli-primary flex-shrink-0" />
                  <span className="text-sm text-secondary-foreground/70">Ben Arous, Tunisie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 mahalli-primary flex-shrink-0" />
                  <div className="flex flex-col space-y-1">
                    <a href="tel:+21642614477" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                      42 614 477
                    </a>
                    <a href="tel:+21693128882" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                      93 128 882
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 mahalli-primary flex-shrink-0" />
                  <a href="mailto:contact@mahalli.tn" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                    contact@mahalli.tn
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-secondary-foreground">Navigation</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.title}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Destinations Populaires */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-secondary-foreground">Destinations Populaires</h3>
              <ul className="space-y-2">
                {locations.map((location) => (
                  <li key={location.title}>
                    <Link 
                      href={location.href} 
                      className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {location.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-secondary-foreground">Nos Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.title}>
                    <Link 
                      href={service.href} 
                      className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Trust Indicators */}
              <div className="mt-6 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-secondary-foreground/70">
                  <div className="w-2 h-2 mahalli-bg-success rounded-full"></div>
                  <span>Locations vérifiées</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-secondary-foreground/70">
                  <div className="w-2 h-2 mahalli-bg-primary rounded-full"></div>
                  <span>Tarifs justes</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-secondary-foreground/70">
                  <div className="w-2 h-2 mahalli-bg-accent rounded-full"></div>
                  <span>Assistance 7j/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-sm text-secondary-foreground/70">
                © 2024 Mahalli. Tous droits réservés.
              </p>
              <div className="flex space-x-4 text-sm text-secondary-foreground/70">
                <Link href="/mentions-legales" className="hover:text-primary transition-colors">
                  Mentions légales
                </Link>
                <Link href="/politique-confidentialite" className="hover:text-primary transition-colors">
                  Confidentialité
                </Link>
                <Link href="/conditions-utilisation" className="hover:text-primary transition-colors">
                  CGU
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-sm text-secondary-foreground/70">
              <span>Développé avec</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>en Tunisie</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer