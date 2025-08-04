import { Metadata } from 'next'
import { Shield, Users, Search, FileText, Calculator, Phone, MapPin, CheckCircle, Star, Award, Clock, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Nos Services - Mahalli | Services Immobiliers en Tunisie',
  description: 'Découvrez tous nos services immobiliers : estimation gratuite, accompagnement personnalisé, visite virtuelle, assistance juridique. Expert en location saisonnière et vente immobilière en Tunisie.',
  keywords: 'services immobiliers tunisie, estimation immobilière, accompagnement immobilier, visite virtuelle, assistance juridique, expert immobilier ben arous',
  openGraph: {
    title: 'Nos Services - Mahalli | Expert Immobilier Tunisie',
    description: 'Services complets pour location saisonnière et vente immobilière en Tunisie. Estimation gratuite, accompagnement personnalisé.',
    url: 'https://mahalli.tn/services',
  },
}

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Calculator,
      title: 'Estimation Gratuite',
      description: 'Obtenez une estimation précise et gratuite de votre bien immobilier par nos experts.',
      features: [
        'Évaluation par expert certifié',
        'Analyse comparative du marché',
        'Rapport détaillé sous 48h',
        'Conseil sur la stratégie tarifaire'
      ],
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Users,
      title: 'Accompagnement Personnalisé',
      description: 'Un conseiller dédié vous accompagne à chaque étape de votre projet immobilier.',
      features: [
        'Conseiller dédié disponible',
        'Suivi personnalisé du dossier',
        'Négociation des meilleures conditions',
        'Support jusqu\'à la signature'
      ],
      color: 'bg-success/10 text-success'
    },
    {
      icon: Shield,
      title: 'Vérification Complète',
      description: 'Tous nos biens sont vérifiés et validés par notre équipe avant publication.',
      features: [
        'Visite et inspection sur site',
        'Vérification des documents',
        'Authentification des photos',
        'Validation des équipements'
      ],
      color: 'bg-accent/10 text-accent-foreground'
    },
    {
      icon: Search,
      title: 'Recherche Personnalisée',
      description: 'Trouvez le bien de vos rêves grâce à notre service de recherche sur mesure.',
      features: [
        'Analyse de vos besoins',
        'Recherche ciblée active',
        'Sélection de biens exclusifs',
        'Présentation des meilleures options'
      ],
      color: 'bg-secondary/10 text-secondary-foreground'
    }
  ]

  const additionalServices = [
    {
      icon: FileText,
      title: 'Assistance Juridique',
      description: 'Support juridique complet pour vos transactions immobilières.',
      includes: ['Vérification des titres de propriété', 'Rédaction des contrats', 'Conseil fiscal', 'Formalités administratives']
    },
    {
      icon: Phone,
      title: 'Support 24/7',
      description: 'Assistance disponible à tout moment pour vos urgences.',
      includes: ['Hotline dédiée', 'Intervention rapide', 'Support technique', 'Conseil à distance']
    },
    {
      icon: MapPin,
      title: 'Visite Virtuelle',
      description: 'Découvrez les propriétés depuis chez vous avec nos visites 360°.',
      includes: ['Photos professionnelles', 'Visite virtuelle 360°', 'Plans interactifs', 'Vidéo de présentation']
    },
    {
      icon: Award,
      title: 'Garantie Qualité',
      description: 'Satisfaction garantie avec notre politique de qualité.',
      includes: ['Engagement qualité', 'Garantie satisfaction', 'Service après-vente', 'Suivi post-transaction']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Premier Contact',
      description: 'Échangez avec notre équipe pour définir vos besoins et objectifs.',
      icon: Phone
    },
    {
      step: '02', 
      title: 'Analyse & Évaluation',
      description: 'Nous analysons votre demande et évaluons les meilleures options.',
      icon: Search
    },
    {
      step: '03',
      title: 'Présentation Solutions',
      description: 'Découvrez notre sélection personnalisée de biens ou services.',
      icon: FileText
    },
    {
      step: '04',
      title: 'Accompagnement',
      description: 'Nous vous accompagnons jusqu\'à la finalisation de votre projet.',
      icon: CheckCircle
    }
  ]

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="mahalli-bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 lg:mb-6">
            Nos Services
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-6 lg:mb-8 max-w-3xl mx-auto">
            Un accompagnement complet pour tous vos projets immobiliers en Tunisie
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/90">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Expertise locale</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5" />
              <span>Service premium</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Disponibilité 7j/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <span>Satisfaction garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Services Principaux
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos services phares conçus pour répondre à tous vos besoins immobiliers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-card rounded-3xl p-8 lg:p-10 card-shadow hover:shadow-2xl transition-all duration-300 border border-border">
                  <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl ${service.color} mb-6`}>
                    <IconComponent className="h-8 w-8 lg:h-10 lg:w-10" />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-foreground">
                        <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Services Complémentaires
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des services additionnels pour une expérience immobilière complète
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-card rounded-2xl p-6 lg:p-8 card-shadow hover:shadow-xl transition-all duration-300 border border-border">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.includes.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Processus
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un processus simple et efficace pour concrétiser vos projets immobiliers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto mahalli-bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold group-hover:bg-primary/90 transition-colors duration-300">
                      {step.step}
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      <IconComponent className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 mahalli-bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 lg:mb-6">
            Prêt à commencer votre projet ?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 lg:mb-10 leading-relaxed">
            Contactez-nous dès aujourd'hui pour bénéficier de nos services d'experts 
            et concrétiser vos projets immobiliers en Tunisie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+21642614477"
              className="inline-flex items-center justify-center px-8 py-4 bg-card text-foreground font-semibold rounded-xl hover:bg-card/90 transition-colors duration-200 shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Appelez maintenant
            </a>
            <Button 
              asChild
              variant="outline" 
              className="bg-primary/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary/30 px-8 py-4 rounded-xl font-semibold"
            >
              <a href="/contact">
                <FileText className="h-5 w-5 mr-2" />
                Demande de devis
              </a>
            </Button>
          </div>
          <div className="mt-8 text-primary-foreground/90 text-sm">
            <p>📍 Ben Arous, Tunisie | 📞 42 614 477 / 93 128 882</p>
          </div>
        </div>
      </section>
    </div>
  )
}