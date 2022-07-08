/* ############################## INIZIO DESCRIZIONE COMPONENT ############################## */

questa component implementa il footer che viene inserito all'interno del default layout 

/* ############################## FINE DESCRIZIONE COMPONENT ############################### */
<template>
  <!-- this footer is composed by 4 main columns -->
  <div class="footer">
    <footer>
      <div class="container">
        <!-- this is the row containint all the 4 main columnes -->
        <div class="row">
          <!-- Column 1 - It contains the logo of our website and some generic info -->
          <div class="col-xl space">
            <NuxtLink to="/">
              <div class="logo">
                <img
                  class="logo-img"
                  src="https://i.ibb.co/NspjQxV/logo.webp"
                  alt="Logo"
                />
              </div>
            </NuxtLink>
            <div class="paragraph-sx">
              <span class="subtitle-footer">Studente:</span> Bosso Francesco
              <br />
              <span class="subtitle-footer">Codice persona:</span> 10555965
              <br />
              <hr class="line">
              <span class="subtitle-footer">Tutor Accademico:</span> Prof.ssa Brovelli Maria 
              <br />
              <span class="subtitle-footer">Tutors Ministero:</span> Dott. Tomellini Renzo
              <br />
              <span class="subtitle-footer"></span> Dott. Magagna Davide
              
              
            </div>
          </div>
          <!-- Column 2 - It contains the vision that we want to accomplish with our website -->
          <!-- <div class="col-xl space">
            <h1 class="title-footer">Vision</h1>
            <p class="paragraph">
              La "vision" di questo progetto è quella di fornire, a studenti,
              professionisti e analisti, una via d'accesso preferenziale e
              strutturata nei confronti di dati di Land Cover e Land Use su
              scala nazionale.
            </p>
          </div> -->
          <!-- Column 3 - It contains the links to all the sections of the website -->
          <div class="col-xl space">
            <NuxtLink class="section" to="/risorse">Risorse</NuxtLink>
            <hr class="line" />
            <NuxtLink class="section" to="/statistiche">Statistiche</NuxtLink>
            <hr class="line" />
            <NuxtLink class="section" to="/progetto">Progetto</NuxtLink>
            <hr class="line" />
            <NuxtLink class="section" to="/contatti">Contatti</NuxtLink>
          </div>
          <!-- Column 4 - It contains the icons of all social media pages of our site -->
          <div class="col-xl space">
            <div class="row">
              <div class="social col">
                <a href="https://www.mite.gov.it/"
                  ><img
                    class="icons"
                    src="https://i.ibb.co/HG6ThtZ/mite.webp"
                    alt="MiTE_icon"
                /></a>
              </div>
              <div class="social col">
                <a href="https://it.wikipedia.org/wiki/Istituto_superiore_per_la_protezione_e_la_ricerca_ambientale"
                  ><img
                    class="icons"
                    src="https://i.ibb.co/yNtLbzf/ispra.webp"
                    alt="ISPRA_icon"
                /></a>
              </div>
               <div class="social col">
                <a href="https://www.linkedin.com/in/francesco-bosso-614814130/"
                  ><img
                    class="icons"
                    src="https://i.ibb.co/6tSw7GQ/linkedin.webp"
                    alt="linkedin_icon"
                /></a>
              </div>
              <div class="social col">
                <a href="https://github.com/FBosso/LCLU-italy-webgis"
                  ><img
                    class="icons"
                    src="https://i.ibb.co/16mgKT5/github.webp"
                    alt="github_icon"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
.footer {
  margin-top: 40px;
  background: rgb(60, 128, 125);
  width: 100%;
}
.row {
  text-align: center;
}

.section {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 1.2em;
  font-weight: 400;
  transition: 0.2s ease;
  padding: 5px;
  border-radius: 10px;
}
.section:hover {
  color: black;
  background: rgba(255, 255, 255, 0.728);
}
.icons {
  height: 50px;
  transition: 0.4s ease;
  filter: invert();
  padding: 5px;
  border-radius: 10px;
}
.icons:hover {
  filter: none;
  background: rgba(255, 255, 255, 0.728);
}
.social {
  padding: 0%;
  padding-top: 30px;
}
.title-footer {
  font-weight: 700;
  font-size: 180%;
  text-align: left;
  color: white;
}
.logo {
  text-align: center;
}
.logo-img {
  height: 60px;
  margin-bottom: 5px;
}
.subtitle-footer {
  font-weight: 600;
}
.paragraph {
  text-align: justify;
  font-size: 0.95rem;
  color: white;
}
@media screen and (max-width: 500px) {
  .paragraph {
    text-align: left;
  }
}
.paragraph-sx {
  text-align: center;
  font-size: 0.95rem;
  color: white;
}
.space {
  padding: 40px;
}
.line{
  border: solid 1px white;
  background: white;
  
}
/* footer{
  zoom:90%
} */
</style>