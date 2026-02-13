<template>
  <div class="legal-page">
    <div class="legal-container">
      <h1 class="arkhip-title">Mentions Légales</h1>
      <div class="separator"></div>

      <section class="legal-content">

        <h3>Édition du site</h3>
        <p>Le site <strong>HolaDesign</strong> est édité par Patricia Lecoutère.</p>
        <p>Statut : étudiante.</p>
        <p>Adresse professionnelle : Wavre, Belgique.</p>
        <p>Adresse e-mail : patricia-hola@hotmail.com</p>
        <h3>Hébergement</h3>
        <p>Ce site est hébergé par Vercel.</p>

        <h3>Propriété intellectuelle</h3>
        <p>L’ensemble des contenus présents sur ce site (textes, images, créations graphiques, logos, éléments visuels, structure et design) sont protégés par le droit d’auteur et la propriété intellectuelle. Ils sont la propriété exclusive de HolaDesign.</p>
        <p>Toute reproduction, représentation, modification ou adaptation, totale ou partielle, de ces éléments est interdite sans autorisation écrite préalable.</p>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Tu peux utiliser le même style que ci-dessus */
.legal-page { background-color: #F6F2EE; min-height: 100vh; padding: 120px 8% 60px; color: #2B2B2B; }
.legal-container { max-width: 800px; margin: 0 auto; }
.arkhip-title { font-family: 'Arkhip', sans-serif; font-size: 2.5rem; text-transform: uppercase; margin-bottom: 20px; }
.separator { width: 50px; height: 3px; background-color: #E72362; margin-bottom: 40px; }
.legal-content h3 { margin-top: 30px; font-weight: 700; text-transform: uppercase; font-size: 0.9rem; color: #E72362; }
.legal-content p { margin-bottom: 20px; line-height: 1.8; opacity: 0.8; }
</style>
