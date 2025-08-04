import { Shield, Users, DollarSign, Headphones, CheckCircle, Award, Clock, ThumbsUp } from 'lucide-react'

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: 'Locations Vérifiées',
      description: 'Chaque propriété est visitée et validée par notre équipe avant mise en ligne',
      color: 'bg-success/10 mahalli-success',
      stat: '100%',
      statLabel: 'Vérifiées'
    },
    {
      icon: Users,
      title: 'Accompagnement Personnalisé',
      description: 'Un conseiller dédié vous accompagne du premier contact à la finalisation',
      color: 'bg-primary/10 mahalli-primary',
      stat: '1:1',
      statLabel: 'Support'
    },
    {
      icon: DollarSign,
      title: 'Tarifs Justes',
      description: 'Prix transparents sans frais cachés, équitables pour tous',
      color: 'bg-accent/10 mahalli-accent',
      stat: '0%',
      statLabel: 'Frais cachés'
    },
    {
      icon: Headphones,
      title: 'Assistance Complète',
      description: 'Support 7j/7 pendant votre séjour et suivi post-transaction',
      color: 'bg-primary/10 mahalli-primary',
      stat: '24/7',
      statLabel: 'Disponible'
    },
  ]

  const features = [
    {
      icon: CheckCircle,
      title: 'Processus Simplifié',
      description: 'Réservation ou achat en quelques clics seulement'
    },
    {
      icon: Award,
      title: 'Qualité Garantie',
      description: 'Sélection rigoureuse de nos partenaires propriétaires'
    },
    {
      icon: Clock,
      title: 'Réponse Rapide',
      description: 'Réponse garantie sous 2 heures en moyenne'
    },
    {
      icon: ThumbsUp,
      title: 'Satisfaction Client',
      description: '98% de nos clients nous recommandent'
    },
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-4 lg:mb-6 text-balance">
            Pourquoi choisir{' '}
            <span className="text-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mahalli</span> ?
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Nous nous engageons à vous offrir la meilleure expérience immobilière en Tunisie, 
            avec des services qui font la différence.
          </p>
        </div>

        {/* Main Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {indicators.map((indicator, index) => {
            const IconComponent = indicator.icon
            return (
              <div key={index} className="bg-card rounded-2xl p-6 lg:p-8 card-shadow hover:shadow-xl transition-all duration-300 group border border-border/50">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full ${indicator.color} mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 lg:h-10 lg:w-10" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 lg:mb-4">
                    {indicator.title}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed mb-4 lg:mb-6">
                    {indicator.description}
                  </p>
                  
                  {/* Stat */}
                  <div className="border-t border-border pt-4">
                    <div className="text-2xl lg:text-3xl font-bold mahalli-primary mb-1">
                      {indicator.stat}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {indicator.statLabel}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-card rounded-3xl p-8 lg:p-12 card-shadow border border-border/50">
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 lg:mb-4">
              L'expérience Mahalli en plus
            </h3>
            <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">
              Des services additionnels pensés pour votre confort et votre tranquillité d'esprit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-primary/10 mahalli-primary rounded-xl mb-3 lg:mb-4 group-hover:mahalli-bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="h-6 w-6 lg:h-7 lg:w-7" />
                  </div>
                  <h4 className="text-lg lg:text-xl font-semibold text-foreground mb-2 lg:mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 mahalli-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 mahalli-bg-primary rounded-full animate-pulse"></span>
            <span>Plus de 2000 clients satisfaits</span>
          </div>
          <p className="text-lg text-muted-foreground italic">
            "Mahalli, là où commence votre prochain chapitre."
          </p>
        </div>
      </div>
    </section>
  )
}

export default TrustIndicators