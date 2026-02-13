<template>
  <div id="app-wrapper">
    <NavBar />

    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <FooterView />
    <template>
  <div id="app">
    <NavBar />

    <router-view />

    <transition name="fade">
      <button
        v-show="showButton"
        @click="scrollToTop"
        class="back-to-top"
      >
        <span class="arrow">↑</span>
      </button>
    </transition>

    <Footer />
  </div>
</template>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterView from './components/FooterView.vue'
</script>

<style>
/* --- STYLES GLOBAUX --- */
/* Pas de 'scoped' ici pour influencer tout le site */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  /* Défilement fluide pour les ancres (#projects, #about) */
  scroll-behavior: smooth;
}

body {
  /* On utilise tes polices préférées */
  font-family: 'Open Sans', sans-serif;
  background-color: #F6F2EE; /* Ton fond crème HolaDesign par défaut */
  color: #2B2B2B;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  /* Marge pour ne pas que le contenu soit caché sous la Navbar (80px) */
  margin-top: 80px;
  /* Garantit que le footer reste en bas même si la page est peu remplie */
  min-height: calc(100vh - 80px);
}

/* --- TRANSITION ENTRE LES PAGES --- */
/* Petit effet de fondu fluide lors du changement de route */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Suppression des soulignements par défaut sur tous les liens du site */
a {
  text-decoration: none;
  color: inherit;
}
</style>
