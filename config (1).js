// ==========================================
// FICHIER DE CONFIGURATION - DONNÉES SENSIBLES
// ==========================================
// ⚠️ CE FICHIER NE DOIT JAMAIS ÊTRE COMMITÉ SUR GITHUB

const CONFIG = {
  // ==========================================
  // INFORMATIONS DE CONTACT
  // ==========================================
  contact: {
    // REMPLACEZ avec votre vrai email
    email: "domaine.morchoisne@gmail.com",
    
    // Version obfusquée pour affichage public (protection anti-spam)
    emailDisplay: "domaine.morchoisne [at] gmail.com",
    
    // Téléphone (optionnel)
    phone: "",
    
    // REMPLACEZ avec votre vrai compte Instagram
    // Exemple : "https://instagram.com/domaine_morchoisne"
    instagram: "https://instagram.com/votre_compte_reel",
    
    // Autres réseaux sociaux (optionnel)
    facebook: "",
    twitter: ""
  },
  
  // ==========================================
  // ADRESSE PHYSIQUE DU DOMAINE
  // ==========================================
  address: {
    street: "17 rue du 19 mars 1962, Bonvilliers",
    city: "MORIGNY-CHAMPIGNY",
    postalCode: "91150",
    country: "FR",
    region: "Île-de-France",
    department: "Essonne",
    
    // Coordonnées GPS (pour Google Maps)
    // ⚠️ Si vous voulez flouter votre position exacte,
    // modifiez légèrement ces coordonnées (±0.01)
    coordinates: {
      lat: 48.4209,
      lng: 2.2235
    }
  },
  
  // ==========================================
  // PROPRIÉTAIRES DU DOMAINE
  // ==========================================
  owners: {
    // Liste des propriétaires
    names: ["Pierre-Louis Morchoisne", "Philippe Morchoisne"],
    
    // Nom à afficher sur le site
    displayName: "Pierre-Louis & Philippe MORCHOISNE",
    
    // Informations individuelles (optionnel)
    details: {
      pierreLouis: {
        role: "Vigneron",
        bio: "Passionné de viticulture..."
      },
      philippe: {
        role: "Fondateur",
        bio: "À l'origine du projet..."
      }
    }
  },
  
  // ==========================================
  // PARAMÈTRES SEO ET TECHNIQUES
  // ==========================================
  seo: {
    // Code de vérification Google Search Console
    // ⚠️ REMPLACEZ avec votre vrai code si vous en avez un
    googleVerification: "f3067d3499508ab0",
    
    // URL du site en production
    siteUrl: "https://domaine-morchoisne.github.io/Domaine-Morchoisne/",
    
    // Pour Google Analytics (optionnel)
    // Exemple : "G-XXXXXXXXXX"
    googleAnalyticsId: "",
    
    // Image par défaut pour les partages sociaux
    defaultImage: "https://domaine-morchoisne.github.io/Domaine-Morchoisne/images/famille1.jpg"
  },
  
  // ==========================================
  // PARAMÈTRES DU SITE
  // ==========================================
  site: {
    name: "Domaine MORCHOISNE",
    tagline: "Vignoble familial biologique en Île-de-France",
    description: "Le Domaine MORCHOISNE, vignoble familial biologique à Bonvilliers près d'Étampes, cultive les cépages Floréal et Voltis.",
    
    // Horaires d'ouverture (pour Schema.org)
    openingHours: "Mo-Fr 09:00-18:00",
    
    // Année de création
    foundedYear: 2020,
    
    // Certifications
    certifications: ["Agriculture Biologique", "Ecocert"]
  }
};

// ==========================================
// EXPORT DE LA CONFIGURATION
// ==========================================
// Ne pas modifier cette partie
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}

// Pour une utilisation dans le navigateur
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}