import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Mahalli.tn',
  description: 'Politique de confidentialité et protection des données personnelles sur Mahalli.tn, plateforme immobilière tunisienne.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen pt-8 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Politique de Confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <p className="text-blue-800 mb-0">
                <strong>Chez Mahalli.tn, nous respectons votre vie privée.</strong> Cette politique explique comment nous collectons, 
                utilisons et protégeons vos données personnelles conformément à la législation tunisienne.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              1. Données collectées
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Nous collectons les informations suivantes :
            </p>
            <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
              <li>• <strong>Informations d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
              <li>• <strong>Informations de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
              <li>• <strong>Préférences :</strong> critères de recherche, biens favoris</li>
              <li>• <strong>Communications :</strong> messages envoyés via nos formulaires</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              2. Utilisation des données
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Vos données sont utilisées pour :
            </p>
            <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
              <li>• Vous fournir nos services immobiliers</li>
              <li>• Répondre à vos demandes et questions</li>
              <li>• Améliorer notre site web et nos services</li>
              <li>• Vous envoyer des informations pertinentes (avec votre consentement)</li>
              <li>• Respecter nos obligations légales</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              3. Partage des données
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nous ne vendons jamais vos données personnelles. Nous pouvons les partager uniquement avec :
            </p>
            <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
              <li>• Nos partenaires propriétaires (pour les demandes de location/achat)</li>
              <li>• Nos prestataires techniques (hébergement, analyse)</li>
              <li>• Les autorités compétentes (si requis par la loi)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              4. Conservation des données
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles 
              elles ont été collectées, conformément à la législation tunisienne (maximum 5 ans après votre dernière interaction).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              5. Sécurité des données
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données contre :
            </p>
            <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
              <li>• L'accès non autorisé</li>
              <li>• La modification non autorisée</li>
              <li>• La divulgation ou la destruction</li>
              <li>• La perte accidentelle</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              6. Vos droits
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Conformément à la loi tunisienne, vous disposez des droits suivants :
            </p>
            <ul className="text-gray-600 leading-relaxed mb-6 space-y-2">
              <li>• <strong>Droit d'accès :</strong> consulter les données que nous détenons sur vous</li>
              <li>• <strong>Droit de rectification :</strong> corriger les données inexactes</li>
              <li>• <strong>Droit d'effacement :</strong> demander la suppression de vos données</li>
              <li>• <strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
              <li>• <strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              7. Cookies et technologies similaires
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur 
              pour refuser les cookies, mais certaines fonctionnalités du site pourraient ne pas fonctionner correctement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              8. Contact et réclamations
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Pour exercer vos droits ou pour toute question concernant cette politique, contactez-nous :
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <p className="text-gray-800 mb-2">
                <strong>Email :</strong> privacy@mahalli.tn<br />
                <strong>Téléphone :</strong> +216 42 614 477<br />
                <strong>Adresse :</strong> Ben Arous, Tunisie 2013
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              9. Modifications
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Cette politique peut être modifiée à tout moment. Les modifications importantes vous seront notifiées 
              par email ou via une notification sur notre site.
            </p>

            <div className="bg-green-50 rounded-xl p-6 mt-8">
              <p className="text-green-800 text-sm">
                <strong>Dernière mise à jour :</strong> Janvier 2024<br />
                <strong>Entrée en vigueur :</strong> Janvier 2024<br />
                Pour toute question, contactez-nous à privacy@mahalli.tn
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}