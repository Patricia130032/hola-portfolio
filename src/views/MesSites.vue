<template>
  <div class="gallery-page">
    <nav class="gallery-nav">
      <router-link to="/" class="back-link">← Retour au Portfolio</router-link>
    </nav>

    <header class="gallery-header">
      <h1 class="arkhip-title">Web Design</h1>
      <div class="separator"></div>
      <p class="gallery-subtitle">Interfaces & Expériences Numériques</p>
    </header>

    <div class="web-grid">
      <div v-for="(site, index) in sites" :key="index" class="web-item">
        <div class="web-image-box">
          <img :src="site.url" :alt="site.alt" />
          <div class="web-overlay">
            <a :href="site.link" target="_blank" class="visit-btn">Visiter le site</a>
          </div>
        </div>
        <div class="web-info">
          <h3>{{ site.title }}</h3>
          <p>{{ site.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const sites = [
  {
    url: new URL('../assets/web/portfoliopat1212.webp', import.meta.url).href,
    title: "HolaMuse",
    description: "Plateforme CMS personnalisée pour artistes.",
    link: "https://cms2.patricia-hola.com/",
    alt: "Capture d'écran HolaMuse"
  },
  // Tes futurs sites viendront ici...
];
</script>

<style scoped>
.gallery-page { background-color: #F6F2EE; min-height: 100vh; padding: 120px 8% 80px; }
.gallery-header { text-align: center; margin-bottom: 60px; }
.arkhip-title { font-family: 'Arkhip', sans-serif; font-size: 3rem; text-transform: uppercase; }
.separator { width: 50px; height: 3px; background-color: #E72362; margin: 20px auto; }

.web-grid {
  display: flex;
  flex-direction: column;
  gap: 80px; /* On mise sur une présentation aérée, un site par ligne ou deux */
  max-width: 1000px;
  margin: 0 auto;
}

.web-item { display: grid; grid-template-columns: 1.5fr 1fr; gap: 40px; align-items: center; }

.web-image-box {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.web-image-box img { width: 100%; display: block; transition: transform 0.5s; }

.web-overlay {
  position: absolute; inset: 0; background: transparent;
  display: flex; align-items: center; justify-content: center;
  opacity: 0; transition: opacity 0.3s;
}

.web-image-box:hover .web-overlay { opacity: 1; }
.web-image-box:hover img { transform: scale(1.05); }

.visit-btn {
  color: white; border: 2px solid white; padding: 12px 25px;
  text-decoration: none; text-transform: uppercase; font-weight: 700;
}

.web-info h3 { font-family: 'Arkhip', sans-serif; font-size: 1.5rem; margin-bottom: 15px; }
.web-info p { line-height: 1.6; color: #555; }

@media (max-width: 768px) {
  .web-item { grid-template-columns: 1fr; text-align: center; }
}
</style>
