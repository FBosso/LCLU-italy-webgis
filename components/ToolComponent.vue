<template>
  <NuxtLink :to="link">
    <div class="tool">
      {{ name }}
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'ToolComponent',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    name: {
      type: String,
      /* the name is not always required since in th individual event page the 
      title is displayed directly on the page with a different style */
      required: false,
    },
    link: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.tool {
  background: rgb(128, 60, 65);
  border-radius: 10px;
  text-align: center;
  padding: 10px;
  margin: 5px;
  border: solid 2px white;
  transition: 0.25s linear;
}
.tool:hover{
    border: solid 2px black;
    background: transparent;
    color: black;
}
a {
  color: white;
}
</style>