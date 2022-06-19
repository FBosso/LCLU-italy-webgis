<template>
    <div class="container mt-5">
        <TopPageGeneric :name="topData.name" :description="topData.description" :tags="topData.tags" />
    </div>
</template>

<script>
    export default {
        name: "RisorsePage",
        data(){
            return{
                topData:{
                    name: "Risorse",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, soluta deserunt dolor asperiores amet aut doloremque illum similique, rem voluptates temporibus animi excepturi. Fugit alias quae inventore asperiores? Voluptas, laudantium.",
                    tags: ["DatiGeospaziali", "Regioni", "LandCover", "LandUse"]
                }
            }
        }
    }
</script>

<style scoped>

</style>