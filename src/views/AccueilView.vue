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
              <p v-for="(text, index) in [...slogans, ...slogans, ...slogans]" :key="index" class="subtitle-dark">
                {{ text }} <span class="diamond-small">◆</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="content-section">
        <div class="section-header">
          <span class="section-number">01</span>
          <h2 class="section-title">Sélection de travaux</h2>
          <span class="mobile-hint">← Glissez →</span>
        </div>

        <div class="carousel-container">
          <div class="carousel" ref="carousel" @scroll="updateProgress">
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

          <div class="progress-bar-container">
            <div class="progress-bar-fill" :style="{ width: scrollProgress + '%' }"></div>
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
            <p>Que vous soyez au début d'une aventure ou en quête d'un second souffle pour votre image, je vous accompagne avec soin et discrétion. Travaillons ensemble, à votre rythme, pour donner à votre projet l'éclat qu'il mérite.</p><br>
            <p>Patricia</p>

            <div class="about-details">
              <div class="detail-item">
                <strong>Expertise</strong>
                <span>Branding, Web Design, Print</span>
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

const slogans = [
  "Identités visuelles uniques",
  "Design imprimé & web",
  "Donnons vie à vos projets",
  "Sensibilité créative",
  "Un coup de frais pour votre image",
  "Design sur mesure"
];

const carousel = ref(null);
const isTransitioning = ref(false);
const scrollProgress = ref(0);

const originalProjects = [
  { title: "HolaMuse", alt: "site HolaMuse", image: new URL('../assets/portfoliopat1212.webp', import.meta.url).href, link: "/sites" },
  { title: "Pochettes CD", alt: "pochettes cd", image: new URL('../assets/witticisms.webp', import.meta.url).href, link: "/pochettes" },
  { title: "Logos", alt: "logos", image: new URL('../assets/logopoire.webp', import.meta.url).href, link: "/logos" }
];
const extendedProjects = computed(() => [...originalProjects, ...originalProjects, ...originalProjects]);

const updateProgress = () => {
  const container = carousel.value;
  if (container) {
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    scrollProgress.value = (scrollLeft / maxScroll) * 100;
  }
};

onMounted(() => {
  const container = carousel.value;
  if (container) {
    const card = container.querySelector('.project-item');
    if (card) {
      const cardWidth = card.offsetWidth + 30;
      container.scrollLeft = cardWidth * originalProjects.length;
      updateProgress();
    }
  }
});

const scrollCarousel = (direction) => {
  const container = carousel.value;
  if (!container || isTransitioning.value) return;
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
    updateProgress();
  }, 500);
};
</script>

<style scoped>
/* --- BASE & UTILS --- */
.portfolio-wrapper { background-color: #F6F2EE; color: #2B2B2B; font-family: 'Open Sans', sans-serif; min-height: 100vh; overflow-x: hidden; }

/* HERO */
.hero { height: 50vh; display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden; }
.arkhip-title-relief.bevel-white {
  font-family: 'Arkhip', sans-serif; font-size: clamp(2.5rem, 8vw, 5.5rem); text-transform: uppercase;
  color: rgba(43, 43, 43, 0.4); text-align: center; line-height: 1.1; letter-spacing: -1px;
  text-shadow: 1px 1px 0px #FFFFFF, 2px 2px 0px #FFFFFF, 4px 4px 12px rgba(0, 0, 0, 0.05);
}

/* MARQUEE */
.marquee-wrapper { width: 100%; overflow: hidden; margin-top: 40px; white-space: nowrap; border-top: 1px solid rgba(0,0,0,0.03); border-bottom: 1px solid rgba(0,0,0,0.03); padding: 15px 0; }
.marquee-content { display: inline-flex; animation: scrollLeft 40s linear infinite; }
.subtitle-dark { font-family: 'Open Sans', sans-serif; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 4px; padding-right: 80px; color: #2B2B2B; font-weight: 600; }
.diamond-small { color: #E72362; margin-left: 40px; }
@keyframes scrollLeft { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }

/* SECTIONS */
.content-section { padding: 60px 8% 80px 8%; max-width: 1400px; margin: 0 auto; width: 100%; box-sizing: border-box; }
.section-header { display: flex; align-items: center; gap: 15px; margin-bottom: 35px; }
.section-number { font-size: 0.8rem; font-weight: 700; color: #E72362; }
.section-title { font-family: 'Arkhip', sans-serif; font-size: 1.1rem; text-transform: uppercase; }
.mobile-hint { display: none; font-size: 0.7rem; color: #E72362; font-weight: bold; opacity: 0.6; text-transform: uppercase; margin-left: auto; }

/* CAROUSEL */
.carousel { display: flex; gap: 30px; overflow-x: auto; scroll-behavior: smooth; scroll-snap-type: x mandatory; scrollbar-width: none; padding-bottom: 10px; }
.carousel::-webkit-scrollbar { display: none; }
.project-item { flex: 0 0 calc((100% - 60px) / 3); min-width: 0; scroll-snap-align: start; }
.image-box { position: relative; aspect-ratio: 1/1; overflow: hidden; background: #EBE7E4; }
.image-box img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(100%); transition: 0.7s ease; }
.project-item:hover img { filter: grayscale(0%); transform: scale(1.02); }
.hover-overlay { position: absolute; inset: 0; background: rgba(231, 35, 98, 0.1); color: white; display: flex; align-items: center; justify-content: center; font-family: 'Arkhip', sans-serif; text-transform: uppercase; font-size: 0.8rem; opacity: 0; transition: 0.4s; }
.project-item:hover .hover-overlay { opacity: 1; }
.project-name { font-size: 1.2rem; margin-top: 15px; font-weight: 600; }

.progress-bar-container { width: 100%; height: 2px; background: rgba(0,0,0,0.05); margin-top: 20px; display: none; position: relative; }
.progress-bar-fill { position: absolute; height: 100%; background: #E72362; transition: width 0.2s ease; }
.carousel-controls { margin-top: 30px; }
.control-btn { background: none; border: 1px solid rgba(43, 43, 43, 0.2); width: 50px; height: 50px; cursor: pointer; margin-right: 15px; transition: 0.3s; }
.control-btn:hover { background: #2B2B2B; color: white; }

/* À PROPOS (STYLE RESTAURÉ) */
.about-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: center; margin-top: 40px; }
.about-greeting { font-family: 'Arkhip', sans-serif; font-size: 1.8rem; margin-bottom: 25px; color: #2B2B2B; }
.about-text p { font-size: 1.1rem; line-height: 1.8; color: #444; margin-bottom: 20px; }
.about-details { margin-top: 40px; display: flex; flex-direction: column; gap: 15px; border-top: 1px solid rgba(0,0,0,0.1); padding-top: 30px; }
.detail-item { display: flex; flex-direction: column; }
.detail-item strong { font-family: 'Arkhip', sans-serif; font-size: 0.75rem; text-transform: uppercase; color: #E72362; letter-spacing: 1px; }
.contact-link { font-size: 1rem; color: #444; display: flex; align-items: center; gap: 10px; text-decoration: none; transition: color 0.3s; margin-top: 5px; }
.contact-link:hover { color: #E72362; }
.icon { color: #E72362; font-weight: bold; width: 20px; }

/* PHOTO & CADRE ROSE */
.about-image { position: relative; display: flex; justify-content: center; }
.image-frame { position: relative; width: 100%; max-width: 350px; }
.profile-photo { width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 4px; position: relative; z-index: 2; }
.frame-decoration { position: absolute; top: 20px; left: 20px; width: 100%; height: 100%; border: 2px solid #E72362; z-index: 1; border-radius: 4px; }

/* RESPONSIVE */
@media (max-width: 1024px) { .project-item { flex: 0 0 calc((100% - 30px) / 2); } }
@media (max-width: 768px) {
  .hero { height: 40vh; }
  .mobile-hint { display: block; }
  .project-item { flex: 0 0 82vw; scroll-snap-align: center; }
  .carousel-controls { display: none; }
  .progress-bar-container { display: block; }
  .about-grid { grid-template-columns: 1fr; }
  .about-image { order: -1; margin-bottom: 50px; }
  .image-frame { max-width: 280px; }
}
</style>
