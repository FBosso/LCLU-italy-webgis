<template>
    <div class="container mt-5">
        <TopPageGeneric :name="topData.name" :description="topData.description" :tags="topData.tags" />
    </div>
</template>

<script>
    export default {
        name: "IndiciPage",
        data(){
            return{
                topData:{
                    name: "Indici",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, soluta deserunt dolor asperiores amet aut doloremque illum similique, rem voluptates temporibus animi excepturi. Fugit alias quae inventore asperiores? Voluptas, laudantium.",
                    tags: ["Accessibilità", "Reperibilità", "Clusters"]
                }
            }
        }
    }
</script>

<style scoped>

</style>