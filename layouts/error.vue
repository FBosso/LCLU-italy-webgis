/* ############################## START LAYOUT DESCRIPTION ############################## */

/* this layout is used to render a message and an animation in case the user try to access 
a page that does not exist.

/* ############################## START LAYOUT DESCRIPTION ############################## */
<template>
  <!-- this will be the content of the 404.html of the static site -->
  <div class="container">
    <div class="row">
      <div class="col-md pack">
        <p class="header">Ops! This page does not exist</p>
      </div>
      <div class="col-md pack">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets3.lottiefiles.com/packages/lf20_mk6o3c37.json"
          background="transparent"
          speed="1"
          style="width: 500px; height: 500px"
          loop
          autoplay
          class="animation col-md"
        ></lottie-player>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorLayout',
}
</script>

<style scoped>
.pack {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
}
</style>