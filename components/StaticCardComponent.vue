/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of a card (not interactive, not clickable) wich is 
able to display an image with a predefined size independetly from its dimension (aka: the content 
is adapted to the dimension of the card without the need to stretch it). This component is used
in the pages of points of interest and services in order to display a preview of each of them. 
The required parameters are:
    - an image;
    - a title (for image description) - only if needed;
    - a footer (for further information related to the image) - only if needed;*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <div class="center">
    <!-- this v-if is implemented in order to occupy the space of the following h3 only if the 
    parameter "title" is actually passed. Without the v-if there would be, even if the title is 
    not passed, a small occupied (unused) space on top of the card -->
    

    <div class="image-s center marg">
      <!-- the classes specicied for that image are reported in the main.css file (since are also 
      used by IndexCard.vue and CardComponent.vue) and are needed to adapt the content to the 
      frame of the card without stetch the image itself -->
      <img
        :src="`${image}`"
        class="card-image img-fluid"
        :alt="`${title}-img`"
      />
    </div>
    <h2>
      <!-- this v-if is implemented in order to use the following "a" tag only if the parameter 
      "footer" is actually passed -->
      <a v-if="footer" class="mail">{{ footer }}</a>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'StaticCardComponent',
  props: {
    image: { type: String, required: true },
    title: { type: String, required: false, default: null },
    footer: { type: String, required: false, default: null },
  },
}
</script>

<style scoped>
.center {
  text-align: center;
  
}
.mail {
  color: black;
}
.bold {
  font-weight: 600;
}
.image-s {
  height: 380px;
  border-radius: 10px;
}
.card-image {
  height: 365.9px;
}
.marg {
  margin: 10px;
}
</style>