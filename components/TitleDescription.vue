/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of a section made of "Title + Descritpion" releted to 
something specific. We used this component in each page where a "specific element" have to be 
displayed (a point of interest, an itinerary, an event) and it allows us to render its name and 
a short description. The required parameters are:
    - The name of the "specific element";
    - The description of the "specific element";*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
  <div>
    <h1 class="header">{{ name }}</h1>
    <p class="snippet">
      {{ description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TitleDescription',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    name: {
      type: String,
      /* the name is not always required since in th individual event page the 
      title is displayed directly on the page with a different style */
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
</style>