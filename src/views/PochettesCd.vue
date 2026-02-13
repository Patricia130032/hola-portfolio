<template>
  <div class="gallery-page">
    <nav class="gallery-nav">
      <router-link to="/" class="back-link">
        <span class="arrow">←</span> Retour au Portfolio
      </router-link>
    </nav>

    <header class="gallery-header">
      <h1 class="arkhip-title">Pochettes CD</h1>
      <div class="separator"></div>
      <p class="gallery-subtitle">Design graphique & Direction artistique</p>
    </header>

    <div class="gallery-grid">
      <div v-for="(pochette, index) in pochettes" :key="index" class="gallery-item">
        <div class="image-wrapper">
          <img :src="pochette.url" :alt="pochette.alt" loading="lazy" />
          <div class="hover-info">
            <p class="project-title">{{ pochette.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// N'oublie pas de créer le dossier src/assets/pochettes/
// et d'y placer tes fichiers .webp
const pochettes = [
  {
    url: new URL('../assets/pochettes/accords.webp', import.meta.url).href,
    title: "Accords Parfaits",
    alt: "Design de pochette Accords Parfaits"
  },
  {
    url: new URL('../assets/pochettes/automne.webp', import.meta.url).href,
    title: "Douces nuances d'Automne",
    alt: "Design de pochette Douces nuances d'Automne"
  },

      {
    url: new URL('../assets/pochettes/coeur.webp', import.meta.url).href,
    title: "Le Coeur et l'Esprit",
    alt: "Design de pochette Le Coeur et l'Esprit"
  },
  {
    url: new URL('../assets/pochettes/enigme.webp', import.meta.url).href,
    title: "Énigme",
    alt: "Design de pochette Énigme"
  },{
    url: new URL('../assets/pochettes/evasion.webp', import.meta.url).href,
    title: "Évasion",
    alt: "Design de pochette Évasion"
  },
    {
    url: new URL('../assets/pochettes/envol.webp', import.meta.url).href,
    title: "Envol",
    alt: "Design de pochette Envol"
  },
    {
    url: new URL('../assets/pochettes/galop.webp', import.meta.url).href,
    title: "Galop",
    alt: "Design de pochette Galop"
  },
  {
    url: new URL('../assets/pochettes/jeunesse.webp', import.meta.url).href,
    title: "Souvenirs de Jeunesse",
    alt: "Design de pochette Souvenirs de Jeunesse"
  },
    {
    url: new URL('../assets/pochettes/tensions.webp', import.meta.url).href,
    title: "Tensions",
    alt: "Design de pochette Tensions"
  },
    {
    url: new URL('../assets/pochettes/voltige.webp', import.meta.url).href,
    title: "Voltige",
    alt: "Design de pochette Voltige"
  },
  {
    url: new URL('../assets/pochettes/whirl.webp', import.meta.url).href,
    title: "Whirl of Joy",
    alt: "Design de pochette Whirl of Joy"
  },
    {
    url: new URL('../assets/pochettes/witticisms.webp', import.meta.url).href,
    title: "Witticisms",
    alt: "Design de pochette Witticisms"
  },
  // Tu peux continuer la liste ici...
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

/* GRILLE */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.gallery-item {
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  transition: transform 0.4s ease;
}

.gallery-item:hover {
  transform: translateY(-10px);
}

.image-wrapper {
  position: relative;
  aspect-ratio: 1 / 1;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* INFO AU SURVOL */
.hover-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .hover-info {
  opacity: 1;
}

.project-title {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
}
</style>
