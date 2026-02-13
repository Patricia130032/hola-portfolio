<template>
  <nav class="navbar">
    <div class="nav-container">
      <ul class="nav-links desktop-only left-group">
        <li><router-link to="/">Accueil</router-link></li>

        <li class="dropdown" @mouseenter="isDropdownOpen = true" @mouseleave="isDropdownOpen = false">
          <a @click.prevent="scrollToSection('projects')" class="dropdown-trigger">
            Projets <span class="arrow-down">▾</span>
          </a>
          <transition name="fade">
            <ul v-if="isDropdownOpen" class="dropdown-menu">
              <li><router-link to="/sites" @click="closeMenu">Sites Web</router-link></li>
              <li><router-link to="/pochettes" @click="closeMenu">Pochettes CD</router-link></li>
              <li><router-link to="/logos" @click="closeMenu">Logos</router-link></li>
            </ul>
          </transition>
        </li>
      </ul>

      <div class="logo">
        <router-link to="/" @click="closeMenu">
          <img src="/images/Hola-Design.svg" alt="Logo" class="logo-img" />
        </router-link>
      </div>

      <ul class="nav-links desktop-only right-group">
        <li><a @click.prevent="scrollToSection('about')" class="dropdown-trigger">À propos</a></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>

      <div class="burger" @click="toggleMenu">
        <div :class="{ 'line1-active': isMenuOpen }"></div>
        <div :class="{ 'line2-active': isMenuOpen }"></div>
        <div :class="{ 'line3-active': isMenuOpen }"></div>
      </div>

      <div :class="['mobile-menu', { 'mobile-menu-active': isMenuOpen }]">
        <router-link to="/" @click="closeMenu">Accueil</router-link>

        <div class="mobile-dropdown-container">
          <p class="mobile-link-toggle" @click="isMobileSubOpen = !isMobileSubOpen">
            Projets <span class="arrow-down-small">{{ isMobileSubOpen ? '▴' : '▾' }}</span>
          </p>
          <transition name="slide">
            <div v-if="isMobileSubOpen" class="mobile-sub-menu">
              <router-link to="/sites" @click="closeMenu">Sites Web</router-link>
              <router-link to="/pochettes" @click="closeMenu">Pochettes CD</router-link>
              <router-link to="/logos" @click="closeMenu">Logos</router-link>
            </div>
          </transition>
        </div>

        <a @click.prevent="scrollToSection('about')">À propos</a>
        <router-link to="/contact" @click="closeMenu">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isMenuOpen = ref(false);
const isDropdownOpen = ref(false);
const isMobileSubOpen = ref(false);

const router = useRouter();
const route = useRoute();

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value; };

const closeMenu = () => {
  isMenuOpen.value = false;
  isDropdownOpen.value = false;
  isMobileSubOpen.value = false;
};

// Fonction pour gérer le scroll même en changeant de page
const scrollToSection = async (sectionId) => {
  closeMenu();

  if (route.path !== '/') {
    // Si on est ailleurs, on rentre à l'accueil d'abord
    await router.push('/');
    // On laisse 400ms au DOM pour se charger avant de scroller
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  } else {
    // Si on est déjà sur l'accueil, on scroll direct
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
/* --- NAVBAR DE BASE --- */
.navbar {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 80px;
  background-color: #2B2B2B;
  display: flex; align-items: center; z-index: 1000;
}
.nav-container {
  width: 95%; max-width: 1200px; margin: 0 auto;
  display: flex; justify-content: center; align-items: center;
}

/* --- LIENS BUREAU --- */
.nav-links { display: flex; list-style: none; gap: 1.5rem; flex: 1; }
.left-group { justify-content: flex-end; }
.right-group { justify-content: flex-start; }

.nav-links :deep(a), .dropdown-trigger, .mobile-menu a {
  color: white !important;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 1px;
  transition: color 0.3s;
  cursor: pointer;
}
.nav-links :deep(a:hover), .dropdown-trigger:hover, .mobile-menu a:hover {
  color: #E72362 !important;
}

/* --- DROPDOWN BUREAU --- */
.dropdown { position: relative; }
.arrow-down { font-size: 0.7rem; margin-left: 5px; vertical-align: middle; }
.dropdown-menu {
  position: absolute; top: 100%; left: 50%; transform: translateX(-50%);
  background-color: #2B2B2B; list-style: none; padding: 15px 0;
  min-width: 180px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); margin-top: 10px;
}
.dropdown-menu li :deep(a) {
  padding: 10px 20px; display: block; font-size: 0.75rem;
  white-space: nowrap; color: white !important; text-align: center;
}

/* --- MENU MOBILE --- */
.mobile-menu {
  position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
  background-color: #2B2B2B; display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  gap: 1.5rem;
  transform: translateY(-100%); transition: transform 0.5s ease;
  z-index: 1050;
}
.mobile-menu-active { transform: translateY(0); }

.mobile-menu a, .mobile-link-toggle {
  font-size: 1.1rem !important;
  letter-spacing: 2px;
}

.mobile-dropdown-container { text-align: center; width: 100%; }
.mobile-link-toggle { color: white; display: block; text-transform: uppercase; }
.arrow-down-small { font-size: 0.8rem; color: #E72362; margin-left: 5px; }

.mobile-sub-menu {
  display: flex; flex-direction: column; gap: 1rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 1rem; margin-top: 1rem;
}
.mobile-sub-menu a {
  font-size: 0.85rem !important;
  color: #A0A0A0 !important;
}

/* BURGER */
.burger { cursor: pointer; display: none; z-index: 1100; }
.burger div { width: 25px; height: 3px; background-color: white; margin: 5px; transition: 0.3s; }

@media (max-width: 900px) {
  .desktop-only { display: none; }
  .burger { display: block; }
}

/* ANIMATIONS */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: all 0.3s ease-out; max-height: 200px; }
.slide-enter-from, .slide-leave-to { opacity: 0; max-height: 0; transform: translateY(-10px); }

/* --- LOGO --- */
.logo { padding: 0 1.5rem; flex: 0 0 auto; }
.logo-img { height: 45px; width: auto; display: block; }
</style>
