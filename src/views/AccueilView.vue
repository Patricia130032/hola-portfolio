<template>
  <div id="hola-portfolio" class="portfolio-wrapper">
    <div class="main-content">
      <section id="home" class="hero">
        <div class="hero-title-container">
          <h1 class="arkhip-title-relief bevel-white">Création visuelle</h1>
        </div>
        <div class="marquee-wrapper">
          <div class="marquee">
            <div class="marquee-content">
              <p v-for="n in 4" :key="n" class="subtitle-dark">
                Identités, design imprimé & web <span class="diamond-small">◆</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="content-section">
        <div class="section-header">
          <span class="section-number">01</span>
          <h2 class="section-title">Sélection de travaux</h2>
        </div>

        <div class="carousel-wrapper">
          <div class="carousel" ref="carousel">
            <div v-for="(project, index) in extendedProjects" :key="index" class="project-item">
              <a v-if="project.link.startsWith('http')" :href="project.link" target="_blank" rel="noopener noreferrer" class="project-link">
                <div class="image-box">
                  <img :src="project.image" :alt="project.alt" loading="lazy" />
                  <div class="hover-overlay">Voir le projet</div>
                </div>
              </a>

              <router-link v-else :to="project.link" class="project-link">
                <div class="image-box">
                  <img :src="project.image" :alt="project.alt" loading="lazy" />
                  <div class="hover-overlay">Voir le projet</div>
                </div>
              </router-link>

              <div class="project-meta">
                <span class="project-cat">Portfolio</span>
                <h3 class="project-name">{{ project.title }}</h3>
              </div>
            </div>
          </div>

          <div class="carousel-controls">
            <button @click="scrollCarousel(-1)" class="control-btn">←</button>
            <button @click="scrollCarousel(1)" class="control-btn">→</button>
          </div>
        </div>
      </section>

      <section id="about" class="content-section">
        <div class="section-header">
          <span class="section-number">02</span>
          <h2 class="section-title">À propos</h2>
        </div>

        <div class="about-grid">
          <div class="about-text">
            <h3 class="about-greeting">Bienvenue !</h3>
            <p>Parce que chaque projet porte une histoire unique, je mets ma sensibilité créative au service de vos idées. Mon approche est simple : vous écouter vraiment pour traduire votre vision en images cohérentes et élégantes.</p>
            <p>Que vous soyez au début d'une aventure ou en quête d'un second souffle pour votre image, je vous accompagne avec soin et discrétion. Mon but n'est pas seulement de créer de "beaux" graphismes, mais de concevoir des outils qui vous ressemblent et qui durent. Travaillons ensemble, à votre rythme, pour donner à votre projet l'éclat qu'il mérite.</p><br>
            <p>Patricia</p>

            <div class="about-details">
              <div class="detail-item">
                <strong>Expertise</strong>
                <span>Branding, Web Design, Print</span>
              </div>
              <div class="detail-item">
                <strong>Localisation</strong>
                <span>Disponible pour vos projets à distance</span>
              </div>
              <div class="detail-item">
                <strong>Contact</strong>
                <a href="mailto:patricia-hola@hotmail.com" class="contact-link">
                  <span class="icon">✉</span> patricia-hola@hotmail.com
                </a>
                <a href="tel:+32475933442" class="contact-link">
                  <span class="icon">☎</span> +32 475 933 442
                </a>
              </div>
            </div>
          </div>

          <div class="about-image">
            <div class="image-frame">
              <img src="@/assets/patricia-hola.webp" alt="Patricia Hola" class="profile-photo" />
              <div class="frame-decoration"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const carousel = ref(null);
const isTransitioning = ref(false);

const originalProjects = [
  {
    title: "HolaMuse",
    alt: "site HolaMuse",
    image: new URL('../assets/portfoliopat1212.webp', import.meta.url).href,
    link: "/sites"
  },
  {
    title: "Pochettes CD",
    alt: "pochettes cd",
    image: new URL('../assets/witticisms.webp', import.meta.url).href,
    link: "/pochettes"
  },
  {
    title: "Logos",
    alt: "logos",
    image: new URL('../assets/logopoire.webp', import.meta.url).href,
    link: "/logos"
  }
];

const extendedProjects = computed(() => [...originalProjects, ...originalProjects, ...originalProjects]);

onMounted(() => {
  const container = carousel.value;
  if (container) {
    const card = container.querySelector('.project-item');
    if (card) {
      // Ajusté à 30 pour correspondre au nouveau gap
      const cardWidth = card.offsetWidth + 30;
      container.scrollLeft = cardWidth * originalProjects.length;
    }
  }
});

const scrollCarousel = (direction) => {
  const container = carousel.value;
  if (!container || isTransitioning.value) return;
  // Ajusté à 30 pour correspondre au nouveau gap
  const cardWidth = container.querySelector('.project-item').offsetWidth + 30;
  isTransitioning.value = true;
  container.style.scrollBehavior = 'smooth';
  container.scrollLeft += direction * cardWidth;
  setTimeout(() => {
    container.style.scrollBehavior = 'auto';
    const totalWidth = cardWidth * originalProjects.length;
    if (container.scrollLeft >= totalWidth * 2) container.scrollLeft = totalWidth;
    else if (container.scrollLeft <= totalWidth - cardWidth) container.scrollLeft = totalWidth * 2 - cardWidth;
    isTransitioning.value = false;
  }, 500);
};
</script>

<style scoped>
/* --- BASE --- */
.portfolio-wrapper { background-color: #F6F2EE; color: #2B2B2B; font-family: 'Open Sans', sans-serif; min-height: 100vh; }

/* HERO */
.hero { height: 70vh; display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden; }
.arkhip-title-relief.bevel-white { font-family: 'Arkhip', sans-serif; font-size: clamp(2.5rem, 8vw, 5.5rem); text-transform: uppercase; color: rgba(43, 43, 43, 0.4); text-align: center; line-height: 1; text-shadow: 1px 1px 0px #FFFFFF, 2px 2px 0px #FFFFFF, 3px 3px 0px #FFFFFF, 4px 4px 12px rgba(0, 0, 0, 0.05); letter-spacing: -1px; }
.marquee-wrapper { width: 100%; overflow: hidden; margin-top: 40px; white-space: nowrap; }
.marquee-content { display: inline-flex; animation: scrollLeft 20s linear infinite; }
.subtitle-dark { font-family: 'Open Sans', sans-serif; font-size: 0.95rem; text-transform: uppercase; letter-spacing: 4px; padding-right: 120px; color: #2B2B2B; font-weight: 600; display: inline-block; }
.diamond-small { color: #E72362; margin: 0 15px; }
@keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

/* CAROUSEL AJUSTÉ POUR 3 IMAGES */
.content-section { padding: 80px 8%; max-width: 1400px; margin: 0 auto; width: 100%; box-sizing: border-box; }
.section-header { display: flex; align-items: center; gap: 15px; margin-bottom: 40px; }
.section-number { font-size: 0.8rem; font-weight: 700; color: #E72362; }
.section-title { font-family: 'Arkhip', sans-serif; font-size: 1.1rem; text-transform: uppercase; }

.carousel {
  display: flex;
  gap: 30px;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.project-item {
  /* Calcul mathématique pour que 3 cartes rentrent pile poil avec les espaces */
  flex: 0 0 calc((100% - (2 * 30px)) / 3);
  min-width: 0;
}

.image-box { position: relative; aspect-ratio: 1/1; overflow: hidden; background: #EBE7E4; }
.image-box img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: 0.7s ease; }
.project-item:hover img { filter: grayscale(0%); transform: scale(1.02); }
.hover-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: transparent; color: white; display: flex; align-items: center; justify-content: center; font-family: 'Arkhip', sans-serif; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; opacity: 0; transition: opacity 0.4s ease; }
.project-item:hover .hover-overlay { opacity: 1; }
.project-meta { margin-top: 20px; }
.project-name { font-size: 1.2rem; margin-top: 5px; font-weight: 600; }
.carousel-controls { margin-top: 40px; }
.control-btn { background: none; border: 1px solid rgba(43, 43, 43, 0.2); width: 50px; height: 50px; cursor: pointer; margin-right: 15px; transition: 0.3s; }
.control-btn:hover { background: #2B2B2B; color: white; }

/* --- À PROPOS --- */
.about-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; margin-top: 40px; }
.about-greeting { font-family: 'Arkhip', sans-serif; font-size: 1.8rem; margin-bottom: 25px; color: #2B2B2B; }
.about-text p { font-size: 1.1rem; line-height: 1.8; color: #444; margin-bottom: 20px; }
.about-details { margin-top: 40px; display: flex; flex-direction: column; gap: 15px; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 30px; }
.detail-item { display: flex; flex-direction: column; }
.detail-item strong { font-family: 'Arkhip', sans-serif; font-size: 0.75rem; text-transform: uppercase; color: #E72362; letter-spacing: 1px; }

.contact-link {
  font-size: 1rem;
  color: #444;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  transition: color 0.3s;
  margin-top: 5px;
}
.contact-link:hover { color: #E72362; }
.icon { color: #E72362; font-weight: bold; width: 20px; }

.about-image { position: relative; display: flex; justify-content: center; }
.image-frame { position: relative; width: 100%; max-width: 350px; }
.profile-photo { width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 4px; position: relative; z-index: 2; }
.frame-decoration { position: absolute; top: 20px; left: 20px; width: 100%; height: 100%; border: 2px solid #E72362; z-index: 1; }

/* RESPONSIVE */
@media (max-width: 1024px) {
  .project-item { flex: 0 0 calc((100% - 30px) / 2); } /* 2 images sur tablette */
}

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-image { order: -1; margin-bottom: 30px; }
}

@media (max-width: 600px) {
  .project-item { flex: 0 0 85%; } /* 1 image presque pleine sur mobile */
}
</style>
