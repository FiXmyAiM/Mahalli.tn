import { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Users, Star, Award, Heart, Target, Eye, TrendingUp, Clock, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'À Propos - Mahalli | Expert Immobilier Ben Arous Tunisie',
  description: 'Découvrez Mahalli, votre expert immobilier de confiance en Tunisie. Spécialisés en location saisonnière et vente immobilière à Ben Arous et dans toute la Tunisie depuis 2024.',
  keywords: 'mahalli tunisie, expert immobilier ben arous, agence immobilière tunisie, location saisonnière expert, vente immobilière ben arous, histoire mahalli',
  openGraph: {
    title: 'À Propos de Mahalli | Votre Expert Immobilier en Tunisie',
    description: 'Expert immobilier de confiance spécialisé en location saisonnière et vente immobilière en Tunisie.',
    url: 'https://mahalli.tn/a-propos',
  },
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous sommes passionnés par l\'immobilier tunisien et fiers de promouvoir notre patrimoine.'
    },
    {
      icon: Shield,
      title: 'Confiance',
      description: 'La transparence et l\'honnêteté sont au cœur de toutes nos relations avec nos clients.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque service que nous proposons à nos clients.'
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'Une approche humaine et personnalisée pour chaque projet immobilier.'
    }
  ]

  const team = [
    {
      name: 'Ahmed Mahalli',
      role: 'Fondateur & Directeur Général',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Expert immobilier avec 15 ans d\'expérience dans le marché tunisien.'
    },
    {
      name: 'Fatma Ben Ali',
      role: 'Responsable Locations Saisonnières',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Spécialiste du tourisme et de l\'hospitalité, passionnée par l\'accueil.'
    },
    {
      name: 'Mohamed Trabelsi',
      role: 'Expert en Ventes Immobilières',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Négociateur expert avec une connaissance approfondie du marché local.'
    },
    {
      name: 'Leila Hammami',
      role: 'Conseillère Clientèle',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      description: 'Dédiée à l\'accompagnement personnalisé de chaque client.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Propriétés gérées', icon: MapPin },
    { number: '2000+', label: 'Clients satisfaits', icon: Users },
    { number: '98%', label: 'Taux de satisfaction', icon: Star },
    { number: '24/7', label: 'Support disponible', icon: Clock }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'Lancement de Mahalli',
      description: 'Création de la plateforme avec une vision claire : démocratiser l\'accès à l\'immobilier en Tunisie.'
    },
    {
      year: '2024',
      title: 'Partenariats Stratégiques',
      description: 'Développement d\'un réseau de partenaires propriétaires de qualité à travers la Tunisie.'
    },
    {
      year: '2024',
      title: 'Innovation Technologique',
      description: 'Intégration de visites virtuelles 360° et d\'outils d\'estimation en ligne.'
    },
    {
      year: '2025',
      title: 'Expansion Régionale',
      description: 'Objectif d\'expansion vers les principales destinations touristiques tunisiennes.'
    }
  ]

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 mahalli-bg-primary"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                À Propos de{' '}
                <span className="text-accent-foreground">Mahalli</span>
              </h1>
              <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-6 leading-relaxed">
                Votre partenaire de confiance pour l'immobilier en Tunisie
              </p>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Chez Mahalli, nous croyons que chaque Tunisien mérite d'avoir accès aux meilleures 
                opportunités immobilières. Notre mission est de vous accompagner dans la réalisation 
                de vos rêves, qu'il s'agisse de trouver la location parfaite pour vos vacances ou 
                d'investir dans votre futur chez-vous.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden card-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Équipe Mahalli"
                  width={600}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-card rounded-3xl p-8 lg:p-12 card-shadow border border-border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mr-4">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Notre Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rendre l'immobilier accessible à tous les Tunisiens en proposant des services 
                transparents, fiables et adaptés aux besoins locaux. Nous voulons être le pont 
                entre les propriétaires et les chercheurs de biens, en créant de la valeur pour 
                chaque transaction.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 lg:p-12 card-shadow border border-border">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-success/10 text-success rounded-xl flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Notre Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Devenir la référence incontournable de l'immobilier en Tunisie, reconnue pour 
                son expertise, son intégrité et son innovation. Nous aspirons à transformer 
                l'expérience immobilière en la rendant simple, transparente et humaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les principes qui guident notre travail quotidien et notre relation avec nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="bg-card rounded-2xl p-8 card-shadow hover:shadow-xl transition-all duration-300 text-center group border border-border">
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-24 mahalli-bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Mahalli en Chiffres
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Des résultats qui témoignent de notre engagement et de votre confiance
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-foreground/90 text-lg">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des professionnels passionnés et expérimentés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden card-shadow hover:shadow-xl transition-all duration-300 group border border-border">
                <div className="aspect-w-1 aspect-h-1 h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Parcours
            </h2>
            <p className="text-lg text-muted-foreground">
              Les étapes clés de notre développement
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 mahalli-bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="bg-card rounded-xl p-6 card-shadow flex-1 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 mahalli-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4 lg:mb-6">
            Rejoignez la famille Mahalli
          </h2>
          <p className="text-xl text-secondary-foreground/90 mb-8 lg:mb-10 leading-relaxed">
            Découvrez pourquoi des milliers de Tunisiens nous font confiance pour leurs projets immobiliers.
            Votre prochain chapitre commence ici.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-card text-foreground hover:bg-card/90 px-8 py-4 rounded-xl font-semibold shadow-lg"
            >
              <a href="/contact">
                Contactez-nous
              </a>
            </Button>
            <Button 
              asChild
              variant="outline" 
              className="bg-primary text-primary-foreground border-primary hover:bg-primary/90 px-8 py-4 rounded-xl font-semibold"
            >
              <a href="/services">
                Nos Services
              </a>
            </Button>
          </div>
          <div className="mt-8 text-secondary-foreground/80 text-sm">
            <p>📍 Ben Arous, Tunisie | 📞 42 614 477 / 93 128 882</p>
            <p className="mt-2 italic">"Mahalli, là où commence votre prochain chapitre."</p>
          </div>
        </div>
      </section>
    </div>
  )
}