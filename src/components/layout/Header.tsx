'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    {
      title: 'Locations Saisonnières',
      href: '/locations',
      submenu: [
        { title: 'Villas', href: '/locations/villas' },
        { title: 'Appartements', href: '/locations/appartements' },
        { title: 'Maisons avec Piscine', href: '/locations/piscine' },
        { title: 'Bord de Mer', href: '/locations/bord-de-mer' },
      ]
    },
    {
      title: 'Ventes Immobilières',
      href: '/ventes',
      submenu: [
        { title: 'Appartements', href: '/ventes/appartements' },
        { title: 'Villas', href: '/ventes/villas' },
        { title: 'Terrains', href: '/ventes/terrains' },
        { title: 'Commercial', href: '/ventes/commercial' },
      ]
    },
    { title: 'Nos Services', href: '/services' },
    { title: 'À Propos', href: '/a-propos' },
    { title: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative h-10 w-10 flex-shrink-0">
              <Image
                src="/mahallilogo.png"
                alt="Mahalli.tn Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden text-xl font-bold text-foreground sm:inline-block">
              Mahalli<span className="mahalli-primary">.tn</span>
            </span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex space-x-1">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  href={item.href}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200"
                >
                  {item.title}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-1 w-56 bg-card rounded-xl card-shadow border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted/50 hover:text-primary transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info Desktop */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 mahalli-primary" />
              <span className="text-muted-foreground">Ben Arous, Tunisie</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 mahalli-primary" />
              <div className="flex flex-col text-sm">
                <a href="tel:+21642614477" className="mahalli-primary font-medium hover:underline">
                  42 614 477
                </a>
                <a href="tel:+21693128882" className="mahalli-primary font-medium hover:underline">
                  93 128 882
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Contact & Menu */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a 
              href="tel:+21642614477" 
              className="flex items-center space-x-1 mahalli-primary hover:text-primary/80"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Appeler</span>
            </a>
            <Button
              variant="ghost"
              size="sm"
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="border-t bg-card py-4">
              <div className="space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Mobile Contact Info */}
              <div className="mt-6 px-4 pt-4 border-t">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 mahalli-primary" />
                    <span className="text-sm text-muted-foreground">Ben Arous, Tunisie</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href="tel:+21642614477" className="flex items-center space-x-2 mahalli-primary font-medium">
                      <Phone className="h-4 w-4" />
                      <span>42 614 477</span>
                    </a>
                    <a href="tel:+21693128882" className="mahalli-primary font-medium">
                      93 128 882
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header