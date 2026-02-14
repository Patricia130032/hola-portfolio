<template>
  <div class="not-found-container">
    <div class="content">
      <h1 class="arkhip-title">Oups !</h1>
      <p class="message">Cette page s'est égarée dans le brouillard ...
        En attendant son retour, nous vous proposons un moment de détente.
        Reconstituez l'image en cliquant sur les cases autour de l'espace vide.
      </p>

      <div class="puzzle-board">
<div
  v-for="(tile, index) in tiles"
  :key="index"
  :class="['tile', { 'empty': tile === null }]"
  :style="tile !== null ? {
    backgroundImage: `url(${projectImage})`,
    backgroundPosition: getBackgroundPosition(tile)
  } : (isSolved ? {
    backgroundImage: `url(${projectImage})`,
    backgroundPosition: '100% 100%'
  } : {})"
  @click="moveTile(index)"
></div>
      </div>

      <transition name="fade">
        <p v-if="isSolved" class="win-message">Bravo ! Vous avez l'œil d'une artiste ! ✨</p>
      </transition>

      <router-link to="/" class="back-home">
        Retourner à l'accueil
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// On utilise l'image automne.webp située dans tes assets
const projectImage = new URL('../assets/pochettes/automne.webp', import.meta.url).href;

const tiles = ref([]);
const isSolved = ref(false);

const initPuzzle = () => {
  // État gagnant : [0, 1, 2, 3, 4, 5, 6, 7, null]
  let newTiles = [0, 1, 2, 3, 4, 5, 6, 7, null];

  // Mélange (Algorithme de Fisher-Yates)
  for (let i = newTiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newTiles[i], newTiles[j]] = [newTiles[j], newTiles[i]];
  }

  // On s'assure que le puzzle n'est pas déjà résolu par pur hasard
  tiles.value = newTiles;
  isSolved.value = false;
};

const getBackgroundPosition = (tileValue) => {
  // Calcule la position de l'image pour chaque morceau (3x3)
  const row = Math.floor(tileValue / 3);
  const col = tileValue % 3;
  return `${col * 50}% ${row * 50}%`;
};

const moveTile = (index) => {
  if (isSolved.value) return; // On bloque le jeu une fois gagné

  const emptyIndex = tiles.value.indexOf(null);

  // Coordonnées de la case cliquée
  const row = Math.floor(index / 3);
  const col = index % 3;

  // Coordonnées de la case vide
  const emptyRow = Math.floor(emptyIndex / 3);
  const emptyCol = emptyIndex % 3;

  // Vérifie si la case est à côté de la case vide
  const isAdjacent = (Math.abs(row - emptyRow) + Math.abs(col - emptyCol)) === 1;

  if (isAdjacent) {
    const newTiles = [...tiles.value];
    newTiles[emptyIndex] = newTiles[index];
    newTiles[index] = null;
    tiles.value = newTiles;
    checkWin();
  }
};

const checkWin = () => {
  const winState = [0, 1, 2, 3, 4, 5, 6, 7, null];
  if (JSON.stringify(tiles.value) === JSON.stringify(winState)) {
    isSolved.value = true;
  }
};

onMounted(initPuzzle);
</script>

<style scoped>
.not-found-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F6F2EE; /* Ton beige clair */
  text-align: center;
  padding: 40px 20px;
}

.arkhip-title {
  font-family: 'Arkhip', sans-serif;
  font-size: clamp(2.5rem, 10vw, 5rem);
  color: #2B2B2B;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.message {
  font-family: 'Open Sans', sans-serif;
  color: #555;
  margin-bottom: 30px;
  max-width: 600px;
}

/* PLATEAU DU PUZZLE */
.puzzle-board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 4px;
  margin: 0 auto 30px auto;
  width: 308px;
  background-color: #2B2B2B;
  border: 4px solid #2B2B2B;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.tile {
  width: 100px;
  height: 100px;
  background-size: 300px 300px; /* Taille totale de l'image (3x100px) */
  cursor: pointer;
  transition: transform 0.1s ease-out, background-color 0.3s;
}

.tile:hover:not(.empty) {
  filter: brightness(1.1);
}

.tile.empty {
  background-color: #F6F2EE;
  cursor: default;
  /* On prépare la transition pour que l'image apparaisse en douceur */
  transition: background-color 0.5s ease, background-image 0.5s ease;
}

/* Cette règle s'active automatiquement quand isSolved devient vrai */
.tile.empty[style*="background-image"] {
  background-color: transparent;
}

.win-message {
  color: #E72362;
  font-weight: 800;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.back-home {
  display: inline-block;
  padding: 15px 35px;
  background-color: #2B2B2B;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}

.back-home:hover {
  background-color: #E72362;
  transform: translateY(-3px);
}

/* ANIMATIONS */
.fade-enter-active { transition: opacity 0.5s; }
.fade-enter-from { opacity: 0; }
</style>
