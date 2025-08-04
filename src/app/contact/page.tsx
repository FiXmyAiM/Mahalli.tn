'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Note: Metadata export doesn't work in client components, so we'll handle SEO differently
const pageMetadata = {
  title: 'Contact - Mahalli | Contactez nos Experts Immobiliers',
  description: 'Contactez Mahalli pour tous vos besoins immobiliers en Tunisie. Nos experts à Ben Arous vous accompagnent : 42 614 477 / 93 128 882. Devis gratuit sous 48h.',
  keywords: 'contact mahalli tunisie, expert immobilier ben arous, devis immobilier gratuit, conseil immobilier tunisie, contact agence immobilière',
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'location',
    message: '',
    budget: '',
    location: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'location',
          message: '',
          budget: '',
          location: ''
        })
      }, 3000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['42 614 477', '93 128 882'],
      action: 'Appelez-nous',
      link: 'tel:+21642614477',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@mahalli.tn', 'info@mahalli.tn'],
      action: 'Écrivez-nous',
      link: 'mailto:contact@mahalli.tn',
      color: 'bg-success/10 text-success'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Ben Arous', 'Tunisie 2013'],
      action: 'Nous rendre visite',
      link: '#',
      color: 'bg-accent/10 text-accent-foreground'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun-Ven: 8h-18h', 'Sam: 8h-14h'],
      action: 'Disponibilités',
      link: '#',
      color: 'bg-secondary/10 text-secondary-foreground'
    }
  ]

  const faqItems = [
    {
      question: 'Quel est le délai pour recevoir une estimation ?',
      answer: 'Nous vous fournissons une estimation gratuite sous 48 heures après réception de votre demande.'
    },
    {
      question: 'Proposez-vous des visites virtuelles ?',
      answer: 'Oui, nous proposons des visites virtuelles 360° pour tous nos biens afin de vous faire gagner du temps.'
    },
    {
      question: 'Y a-t-il des frais cachés ?',
      answer: 'Non, nous pratiquons une politique de transparence totale. Tous nos tarifs sont clairement affichés.'
    },
    {
      question: 'Couvrez-vous toute la Tunisie ?',
      answer: 'Nous couvrons principalement Ben Arous et les régions avoisinantes, avec des partenaires dans toute la Tunisie.'
    }
  ]

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="mahalli-bg-primary py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 lg:mb-6">
            Contactez-Nous
          </h1>
          <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-6 lg:mb-8 max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour répondre à tous vos besoins immobiliers
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/90">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Réponse sous 2h</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Devis gratuit</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Conseil personnalisé</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Plusieurs Moyens de Nous Contacter
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choisissez le moyen qui vous convient le mieux pour nous joindre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="bg-card rounded-2xl p-8 card-shadow hover:shadow-xl transition-all duration-300 text-center group border border-border">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${info.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2 mb-6">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <a
                    href={info.link}
                    className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    {info.action}
                    <MessageCircle className="h-4 w-4 ml-2" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Envoyez-nous un Message
            </h2>
            <p className="text-lg text-muted-foreground">
              Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
            </p>
          </div>

          <div className="bg-card rounded-3xl card-shadow p-8 lg:p-12 border border-border">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nom complet *
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-12"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full h-12 px-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent bg-card text-foreground"
                    >
                      <option value="location">Location saisonnière</option>
                      <option value="vente">Vente immobilière</option>
                      <option value="estimation">Demande d'estimation</option>
                      <option value="conseil">Conseil immobilier</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                      Localisation souhaitée
                    </label>
                    <Input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full h-12"
                      placeholder="Ex: Hammamet, Ben Arous..."
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                      Budget approximatif
                    </label>
                    <Input
                      type="text"
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full h-12"
                      placeholder="Ex: 50,000 DT - 100,000 DT"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-3 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none bg-card text-foreground"
                    placeholder="Décrivez votre projet, vos besoins, vos questions..."
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 mahalli-bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 h-auto rounded-xl font-semibold text-base shadow-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                  <a
                    href="tel:+21642614477"
                    className="flex-1 inline-flex items-center justify-center bg-success hover:bg-success/90 text-success-foreground px-8 py-4 rounded-xl font-semibold text-base shadow-lg transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Appel direct
                  </a>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Message envoyé avec succès !
                </h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
                </p>
                <div className="text-sm text-primary">
                  Vous pouvez aussi nous appeler directement : 42 614 477
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Trouvez rapidement les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 card-shadow border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <AlertCircle className="h-6 w-6 text-primary mr-3" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Notre Localisation
            </h2>
            <p className="text-lg text-muted-foreground">
              Venez nous rendre visite à Ben Arous
            </p>
          </div>
          
          <div className="bg-card rounded-2xl p-8 card-shadow border border-border">
            <div className="aspect-w-16 aspect-h-9 h-96 bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Carte interactive - Ben Arous, Tunisie
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Intégration Google Maps à venir
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}