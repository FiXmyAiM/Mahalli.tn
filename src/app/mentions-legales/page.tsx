import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions Légales - Mahalli.tn',
  description: 'Mentions légales de Mahalli.tn, plateforme immobilière tunisienne spécialisée en location saisonnière et vente immobilière.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen pt-8 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Mentions Légales
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Informations sur l'entreprise
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              <strong>Raison sociale :</strong> Mahalli SARL<br />
              <strong>Adresse :</strong> Ben Arous, Tunisie 2013<br />
              <strong>Téléphone :</strong> +216 42 614 477 / +216 93 128 882<br />
              <strong>Email :</strong> contact@mahalli.tn<br />
              <strong>Directeur de publication :</strong> Ahmed Mahalli
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Hébergement du site
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ce site est hébergé par Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Propriété intellectuelle
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur. 
              Toute reproduction, même partielle, est interdite sans autorisation préalable écrite de Mahalli.tn.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Utilisation du site
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              L'utilisateur s'engage à utiliser ce site conformément aux lois tunisiennes en vigueur. 
              Mahalli.tn se réserve le droit de refuser l'accès au site à tout utilisateur ne respectant pas ces conditions.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Responsabilité
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mahalli.tn s'efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons garantir 
              l'exactitude, la complétude ou l'actualité de toutes les informations présentes sur le site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Protection des données personnelles
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Conformément à la loi tunisienne sur la protection des données personnelles, vous disposez d'un droit d'accès, 
              de rectification et de suppression des données vous concernant. Pour exercer ce droit, contactez-nous à : 
              contact@mahalli.tn
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ce site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. 
              En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Droit applicable
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Les présentes mentions légales sont soumises au droit tunisien. 
              Tout litige sera soumis aux tribunaux compétents de Tunis.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mt-8">
              <p className="text-blue-800 text-sm">
                <strong>Dernière mise à jour :</strong> Janvier 2024<br />
                Pour toute question concernant ces mentions légales, contactez-nous à contact@mahalli.tn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}