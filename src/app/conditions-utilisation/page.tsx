import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation - Mahalli.tn',
  description: 'Conditions générales d\'utilisation de Mahalli.tn, plateforme immobilière tunisienne pour location saisonnière et vente immobilière.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function ConditionsUtilisationPage() {
  return (
    <div className="min-h-screen pt-8 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Conditions Générales d'Utilisation
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-amber-50 rounded-xl p-6 mb-8">
              <p className="text-amber-800 mb-0">
                <strong>Important :</strong> En utilisant le site Mahalli.tn, vous acceptez ces conditions d'utilisation. 
                Veuillez les lire attentivement avant d'utiliser nos services.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Objet et champ d'application
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Les présentes conditions générales d'utilisation (CGU) régissent l'utilisation du site web Mahalli.tn, 
              plateforme spécialisée dans la location saisonnière et la vente immobilière en Tunisie. 
              Elles s'appliquent à tous les utilisateurs du site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Acceptation des conditions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              L'utilisation du site Mahalli.tn implique l'acceptation pleine et entière des présentes CGU. 
              Si vous n'acceptez pas ces conditions, vous devez cesser d'utiliser le site immédiatement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Services proposés
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Mahalli.tn propose les services suivants :
            </p>
            <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
              <li>• Mise en relation entre propriétaires et locataires/acheteurs</li>
              <li>• Présentation d'annonces immobilières</li>
              <li>• Services de conseil et d'accompagnement</li>
              <li>• Estimation de biens immobiliers</li>
              <li>• Support client et assistance</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Obligations des utilisateurs
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              En utilisant notre site, vous vous engagez à :
            </p>
            <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
              <li>• Fournir des informations exactes et à jour</li>
              <li>• Respecter les droits des autres utilisateurs</li>
              <li>• Ne pas utiliser le site à des fins illégales</li>
              <li>• Ne pas publier de contenu offensant ou inapproprié</li>
              <li>• Respecter les droits de propriété intellectuelle</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Utilisation interdite
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Il est strictement interdit d'utiliser le site pour :
            </p>
            <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
              <li>• Publier de fausses annonces ou informations</li>
              <li>• Harceler ou menacer d'autres utilisateurs</li>
              <li>• Tenter de pirater ou compromettre la sécurité du site</li>
              <li>• Collecter des données personnelles d'autres utilisateurs</li>
              <li>• Utiliser des robots ou scripts automatisés</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Responsabilité de Mahalli.tn
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mahalli.tn s'efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons garantir :
            </p>
            <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
              <li>• L'exactitude de toutes les informations présentes sur le site</li>
              <li>• La disponibilité permanente du site</li>
              <li>• L'absence d'erreurs ou de bugs</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mahalli.tn ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Propriété intellectuelle
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tous les éléments du site (textes, images, logos, vidéos, etc.) sont protégés par le droit d'auteur. 
              Toute reproduction, même partielle, est interdite sans autorisation écrite préalable de Mahalli.tn.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Protection des données
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Le traitement de vos données personnelles est régi par notre 
              <a href="/politique-confidentialite" className="text-blue-600 hover:underline"> Politique de Confidentialité</a>. 
              En utilisant notre site, vous acceptez cette politique.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Modification des conditions
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mahalli.tn se réserve le droit de modifier ces CGU à tout moment. Les modifications entrent en vigueur 
              dès leur publication sur le site. Il est de votre responsabilité de consulter régulièrement les CGU.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              10. Résiliation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Mahalli.tn se réserve le droit de suspendre ou supprimer l'accès au site à tout utilisateur 
              qui ne respecte pas les présentes conditions, sans préavis ni indemnité.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              11. Droit applicable et juridiction
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Les présentes CGU sont soumises au droit tunisien. Tout litige sera de la compétence exclusive 
              des tribunaux de Tunis, Tunisie.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              12. Contact
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pour toute question concernant ces conditions d'utilisation, contactez-nous :
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="text-gray-800 mb-2">
                <strong>Email :</strong> legal@mahalli.tn<br />
                <strong>Téléphone :</strong> +216 42 614 477<br />
                <strong>Adresse :</strong> Ben Arous, Tunisie 2013
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mt-8">
              <p className="text-blue-800 text-sm">
                <strong>Version :</strong> 1.0<br />
                <strong>Dernière mise à jour :</strong> Janvier 2024<br />
                <strong>Entrée en vigueur :</strong> Janvier 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}