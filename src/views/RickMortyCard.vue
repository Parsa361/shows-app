<script setup>
import CharacterCard from '../components/CharacterCard.vue'
import defineErrors from '../composable/defineErrors';
import ErrorCard from '../components/ErrorCard.vue';
import Loading from '../components/Loading.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, RouterLink } from 'vue-router'

const { hasError, handleError } = defineErrors()
const character = ref(null)
const route = useRoute()
const isLoading = ref(false)

onMounted(async () => {
    try {
        isLoading.value = true
        const response = await axios.get(`https://rickandmortyapi.com/api/character/${route.params.id}`)
        isLoading.value = false
        character.value = response.data
    } catch (error) {
        handleError(error)
        character.value = []
    }
})
</script>

<template>
    <div class="container">
        <CharacterCard 
        v-if="character" 
            :name="character.name" 
            :image="character.image" 
            :location="character.location.name"
            :status="character.status" 
            :species="character.species" 
            :origin="character.origin.name" />

        <div v-if="isLoading && !hasError">
            <Loading />
        </div>

        <div v-if="hasError">
            <ErrorCard :hasError="hasError"/>
        </div>

        <div v-if="character" class="btn-container">
            <RouterLink to="/" class="home-btn">Home</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: black;
    padding: 100px 0;
}
.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.home-btn {
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    color: white;
    background-color: yellowgreen;
    padding: 1.5rem 4rem;
    border-radius: 10px;
    margin: 5rem;
}
.home-btn:hover {
    transform: scale(0.9);
    transition: transform 0.4s ease;
}
</style>