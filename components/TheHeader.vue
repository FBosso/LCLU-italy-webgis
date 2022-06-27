/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used to create the navbar of the website. Even if this component is only 
used in the default.vue layout we decided to implement it separately in order to maintain a 
certain order and do not act directly on the layout for future modifications*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>

  <nav class="navbar navbar-expand-xl navbar-light px-3 header">
    <!-- <div class="container"> -->
    <NuxtLink class="navbar-brand" to="/"
      ><img
        class="logo"
        src="https://i.ibb.co/NspjQxV/logo.webp"
        alt="logo"
        width="70"
        height="70"
    /></NuxtLink>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div id="navbarToggler" class="collapse navbar-collapse">
      <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          style="color: white"
        >
          <div class="cont">
            <NuxtLink :to="navItem.path" style="color: white" class="nav-link">
              {{ navItem.name }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
    <!-- </div> -->
  </nav>
</template>

<script scoped>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'Risorse',
          path: '/risorse',
        },
        {
          name: 'Statistiche',
          path: '/statistiche',
        },
        {
          name: 'Progetto',
          path: '/progetto',
        },
        {
          name: 'Contatti',
          path: '/contatti',
        },
      ],
    }
  },
}
</script>

<style scoped>
a {
  font-size: 25px;
  font-weight: 300;
}
.nav-link {
  margin: 0 10px 5px 10px;
  border-radius: 10px;
}
.nav-link:hover {
  background: rgba(128, 60, 64, 0.5);
}
@media screen and (max-width: 992px) {
  .nav-link:hover {
    background: none;
    color: black;
  }
  .cont:hover {
    border-radius: 10px;
    background: rgba(128, 60, 64, 0.5);
    width: 40%;
  }
}
.header {
  background: rgb(60, 128, 125);
}
nav{
  zoom: 90%
}
</style>
