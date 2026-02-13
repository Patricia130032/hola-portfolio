<template>
  <div class="gallery-page">
    <nav class="gallery-nav">
      <router-link to="/" class="back-link">
        <span class="arrow">←</span> Retour au Portfolio
      </router-link>
    </nav>

    <header class="gallery-header">
      <h1 class="arkhip-title">Logotypes</h1>
      <div class="separator"></div>
      <p class="gallery-subtitle">Identités visuelles & Marques</p>
    </header>

    <div class="logo-grid">
      <div v-for="(logo, index) in logos" :key="index" class="logo-item">
        <div class="logo-display">
          <img :src="logo.url" :alt="logo.alt" loading="lazy" />
        </div>
        <div class="logo-meta">
          <p class="client-name">{{ logo.client }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// N'oublie pas de créer le dossier src/assets/logos/
const logos = [
  {
    url: new URL('../assets/logos/logopoire.webp', import.meta.url).href,
    client: "La Bonne Poire",
    alt: "Logo magasin La Bonne Poire"
  },
  {
    url: new URL('../assets/logos/logompm.webp', import.meta.url).href,
    client: "MPM Design",
    alt: "Logo Studio MPM Design"
  },
    {
    url: new URL('../assets/logos/logoHolaMuse.webp', import.meta.url).href,
    client: "HolaMuse",
    alt: "Logo HolaMuse"
  },
  {
    url: new URL('../assets/logos/logocouchard.webp', import.meta.url).href,
    client: "Roman Couchard",
    alt: "Logo Roman Couchard"
  },
    {
    url: new URL('../assets/logos/logobonapp.webp', import.meta.url).href,
    client: "Bon'app",
    alt: "Logo Bon'app, traiteur marocain"
  },
  {
    url: new URL('../assets/logos/logochine.webp', import.meta.url).href,
    client: "Chine et Rénove",
    alt: "Logo Atelier Chine et Rénove"
  },
  // Ajoute tes autres logos ici
];
</script>

<style scoped>
.gallery-page {
  background-color: #F6F2EE;
  min-height: 100vh;
  padding: 120px 8% 80px;
}

.gallery-nav { margin-bottom: 40px; }

.back-link {
  text-decoration: none;
  color: #2B2B2B;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 2px;
  transition: color 0.3s;
}

.back-link:hover { color: #E72362; }

.gallery-header {
  text-align: center;
  margin-bottom: 80px;
}

.arkhip-title {
  font-family: 'Arkhip', sans-serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
  text-transform: uppercase;
  margin-bottom: 15px;
}

.separator {
  width: 50px;
  height: 3px;
  background-color: #E72362;
  margin: 0 auto 20px;
}

.gallery-subtitle {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  opacity: 0.7;
}

/* GRILLE LOGOS */
.logo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 50px; /* Plus d'espace entre les logos */
  max-width: 1200px;
  margin: 0 auto;
}

.logo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-display {
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #FDFDFD; /* Fond très blanc pour le logo */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px; /* Zone de respiration pour le logo */
  border-radius: 4px;
  transition: all 0.4s ease;
  border: 1px solid rgba(0,0,0,0.03);
}

.logo-display img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* Important : ne coupe jamais le logo */
  transition: transform 0.4s ease;
}

/* EFFET AU SURVOL */
.logo-item:hover .logo-display {
  background-color: #EBE7E4; /* Le fond devient beige foncé */
  transform: scale(1.02);
}

.logo-item:hover .logo-display img {
  transform: scale(1.1);
}

.logo-meta {
  margin-top: 20px;
  text-align: center;
}

.client-name {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #2B2B2B;
  opacity: 0.6;
}

@media (max-width: 768px) {
  .logo-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
  }
}
</style>
