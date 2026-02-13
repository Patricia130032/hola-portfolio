<template>
  <footer class="site-footer">
    <div class="footer-container">

      <div class="footer-left">
        <router-link to="/">
          <img src="/images/Hola-Design.svg" alt="Hola Design Logo" class="footer-logo-img" />
        </router-link>
      </div>

      <div class="footer-center">
        <div class="footer-legal-links">
          <router-link to="/mentions-legales">Mentions Légales</router-link>
          <span class="sep">|</span>
          <router-link to="/confidentialite">Confidentialité</router-link>
        </div>
        <p class="copyright">
          © {{ new Date().getFullYear() }} Patricia Hola — Tous droits réservés.
        </p>
      </div>

      <div class="footer-right">
        <button @click="scrollToTop" class="back-to-top-footer" aria-label="Remonter">
          <span class="arrow-up">↑</span>
        </button>
      </div>

    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
.site-footer {
  background-color: #2B2B2B; /* Gris foncé */
  padding: 50px 8%;
  margin-top: 80px;
  color: #A0A0A0; /* Gris clair pour le texte par défaut */
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* LOGO */
.footer-logo-img {
  height: 45px;
  width: auto;
  display: block;
}

/* CENTRE : LIENS & COPYRIGHT */
.footer-center {
  text-align: center;
}

.footer-legal-links {
  margin-bottom: 10px;
}

.footer-legal-links a {
  color: #A0A0A0 !important; /* Gris clair */
  text-decoration: none;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s;
}

.footer-legal-links a:hover {
  color: #E72362 !important; /* Rappel du rose au survol */
}

.sep {
  margin: 0 10px;
  color: #444;
}

.copyright {
  font-size: 0.75rem;
  letter-spacing: 0.5px;
}

/* BOUTON RETOUR EN HAUT */
.back-to-top-footer {
  background: transparent;
  border: 1px solid #444;
  color: #A0A0A0;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top-footer:hover {
  border-color: #E72362;
  color: #E72362;
  transform: translateY(-3px);
}

.arrow-up {
  font-size: 1.2rem;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .footer-container {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
  .footer-left, .footer-right {
    display: flex;
    justify-content: center;
  }
}
</style>
