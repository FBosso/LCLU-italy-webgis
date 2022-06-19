/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used to create the footer of the website. Even if this component is only 
used in the default.vue layout we decided to implement it separately in order to maintain a 
certain order and do not act directly on the layout for future modifications*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
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
              <span class="subtitle-footer">Bergamo, Lombardia (IT)</span>
              <br />
              <span class="subtitle-footer">Postal Code:</span> 24121-24129
              <br />
              <span class="subtitle-footer">Coordinates:</span> 45°41′N ,9°40′E
              <br>
              <span class="subtitle-footer">Neighboring municipalities:</span>
              Azzano San Paolo, Curno, Gorle, Lallio, Mozzo, Orio al Serio,
              Paladina, Ponteranica, Seriate, Sorisole, Stezzano, Torre Boldone,
              Treviolo, Valbrembo
            </div>
          </div>
          <!-- Column 2 - It contains the vision that we want to accomplish with our website -->
          <div class="col-xl space">
            <h1 class="title-footer">Vision</h1>
            <p class="paragraph">
              The vision of Locus is to provide an immersive and wonderful
              experience in visiting one of the most beautiful city of northern
              Italy: Bergamo. The history of Bergamo is full of art, nature and
              adventures and our vision is to spread it all over the word making
              it accesible with our intercative website!
            </p>
          </div>
          <!-- Column 3 - It contains the links to all the sections of the website -->
          <div class="col-xl space">
            <NuxtLink class="section" to="/all-itineraries">Itineraries</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/all-places">Places</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/all-events">Events</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/all-services">Services</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/about-the-town">About the town</NuxtLink>
            <hr />
            <NuxtLink class="section" to="/contact-us">Contact-Us</NuxtLink>
          </div>
          <!-- Column 4 - It contains the icons of all social media pages of our site -->
          <div class="col-xl space">
            <div class="row">
              <div class="social col">
                <a href="https://www.facebook.com"
                  ><img
                    class="icons"
                    src="https://i.ibb.co/PYKHqfs/facebook.webp"
                    alt="facebook_icon"
                /></a>
              </div>
              <div class="social col">
                <a href="https://www.linkedin.com"
                  ><img
                    class="icons"
                    src="https://i.ibb.co/6tSw7GQ/linkedin.webp"
                    alt="linkedin_icon"
                /></a>
              </div>
              <div class="social col">
                <a href="https://www.twitter.com"
                  ><img
                    class="icons"
                    src="https://i.ibb.co/6WyDyMg/twitter.webp"
                    alt="twitter_icon"
                /></a>
              </div>
              <div class="social col">
                <a href="https://github.com/FBosso/Locus"
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
  font-size: 1em;
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
  text-align: left;
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
.paragraph-sx{
  text-align: left;
  font-size: 0.95rem;
  color: white;
}
.space {
  padding: 40px;
}
hr {
  margin: 15px;
}
</style>