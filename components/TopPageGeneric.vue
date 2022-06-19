/* ############################## START COMPONENT DESCRIPTION ############################## */

/* this component is used for the creation of the top part of generic pages such as 
all-servicer/index.vue, all-pois/index.vue, all-events/index.vue, all-itineraries/index.vue. 
It aggregates three different sections (considered too small, simple and poorly reusable to be 
synthesized in 2 actual ad hoc components) in a single one in order to create a big row 
containing: 
    - A Big title (giving a suggestion on the content of the page);
    - A Description (describing the content of the page);
    - A Dynamic tag element (in order to make the UI more fun to watch)

The required parameters are:
    - The Title of the page;
    - The Descritpion of the page;
    - The array ontaining the words to be displayied in the dynamic tag*/
    
/* ############################## END COMPONENT DESCRIPTION ############################### */
<template>
    <div class="row">
      <div class="col-md">
        <!-- here the title is passed in order to be displayed in the first column -->
        <h1 class="header">{{ name }}</h1>
      </div>
      <div class="col-md">
        <!-- here the description is passed in order to be displayed in the second column -->
        <p class="snippet">{{ description }}</p>
        <!-- here the array is passed in order to be dynamically displayed in the second column -->
        <p class="tags"># {{dynTags[0]}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TopPageGeneric',
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    tags:{type: Array,required:true}
  },
  data() {
    return {
      // props are unmodifiable and i want change order for animation
      dynTags: this.tags
    }
  },
  mounted(){
    window.setInterval(()=>{
      this.pollTag();
    }, 1000);

  },
  methods: {
    // this function take the first tag element and move it to the last place
    // the page display only the tag in the first position 
    pollTag(){
      const first = this.dynTags.shift();
      this.dynTags = this.dynTags.concat(first);
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.tags {
  font-size: 1.8rem;
  font-weight: 800;
}
</style>