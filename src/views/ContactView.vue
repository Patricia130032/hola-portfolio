<template>
  <div class="contact-page">
    <nav class="gallery-nav">
      <router-link to="/" class="back-link">← Retour au Portfolio</router-link>
    </nav>

    <div class="contact-container">
      <header class="contact-header">
        <h1 class="arkhip-title">Contact</h1>
        <div class="separator"></div>
        <p class="contact-intro">Une idée ? Un projet ? N'hésitez pas à m'envoyer un message.</p>
      </header>

      <div class="contact-content">
        <form
          action="https://formspree.io/f/xgolaave"
          method="POST"
          class="contact-form"
        >
          <div class="form-group">
            <label for="name">Prénom & Nom</label>
            <input type="text" name="name" id="name" required placeholder="Votre nom" />
          </div>

          <div class="form-group">
            <label for="email">Adresse email</label>
            <input type="email" name="email" id="email" required placeholder="votre@email.com" />
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea name="message" id="message" required placeholder="Parlez-moi de votre projet..."></textarea>
          </div>

          <input type="hidden" name="_subject" value="Nouveau message depuis Hola Design !" />

          <button type="submit" class="submit-btn">Envoyer le message</button>
        </form>

        <div class="contact-info">
          <div class="info-block">
            <h3>Email</h3>
            <p>patricia-hola@hotmail.com</p>
          </div>

          <div class="info-block">
            <h3>Réseaux Sociaux</h3>
            <div class="social-links">
              <a href="https://www.facebook.com/patricia.lecoutere" target="_blank" class="social-link">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page { background-color: #F6F2EE; min-height: 100vh; padding: 120px 8% 80px; }
.contact-container { max-width: 1000px; margin: 0 auto; }
.contact-header { text-align: center; margin-bottom: 60px; }
.arkhip-title { font-family: 'Arkhip', sans-serif; font-size: clamp(2.5rem, 6vw, 4rem); text-transform: uppercase; margin-bottom: 20px; color: #2B2B2B; }
.separator { width: 60px; height: 4px; background-color: #E72362; margin: 0 auto 20px; }
.contact-intro { font-size: 1.1rem; color: #555; }
.contact-content { display: grid; grid-template-columns: 1.5fr 1fr; gap: 80px; margin-top: 40px; }

/* FORMULAIRE */
.contact-form { display: flex; flex-direction: column; gap: 25px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group label { font-weight: 700; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1px; color: #2B2B2B; }
.form-group input, .form-group textarea {
  padding: 15px; border: 1px solid rgba(43, 43, 43, 0.1);
  background: white; font-family: inherit; font-size: 1rem; transition: border-color 0.3s;
}
.form-group textarea { min-height: 150px; resize: vertical; }
.form-group input:focus, .form-group textarea:focus { outline: none; border-color: #E72362; }

.submit-btn {
  background-color: #2B2B2B; color: white; border: none; padding: 18px;
  text-transform: uppercase; font-weight: 700; letter-spacing: 2px;
  cursor: pointer; transition: all 0.3s;
}
.submit-btn:hover { background-color: #E72362; transform: translateY(-2px); }

/* INFOS */
.info-block { margin-bottom: 40px; }
.info-block h3 { font-family: 'Arkhip', sans-serif; font-size: 0.9rem; text-transform: uppercase; margin-bottom: 15px; color: #E72362; }
.social-link { text-decoration: none; color: #2B2B2B; font-weight: 700; font-size: 1.2rem; transition: color 0.3s; }
.social-link:hover { color: #E72362; }

@media (max-width: 768px) {
  .contact-content { grid-template-columns: 1fr; gap: 40px; }
}
</style>
