<script setup>
import '../assets/animation.css'
import axios from 'axios'
import Card from '../components/Card.vue'
import { onMounted, ref, watch } from 'vue'

const characters = ref(null)
const page = ref(1)
const isLoading = ref(false)

onMounted(async () => {
    isLoading.value = true
    const response = await axios.get('https://rickandmortyapi.com/api/character/?page=1')
    characters.value = response.data.results
    isLoading.value = false
})

watch(page, async () => {
    isLoading.value = true
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page.value}`)
    characters.value = response.data.results
    isLoading.value = false
})
</script>

<template>
    <div class="container">
        <div class="btn-container">
            <button @click="page--" :disabled="page <= 1">&lt</button>
            <button @click="page++" :disabled="isLoading">></button>
        </div>

        <div class="cards">
            <TransitionGroup name="fade">
                <Card v-for="character in characters" :key="character.id" :name="character.name" :image="character.image"
                    :species="character.species" />
            </TransitionGroup>
        </div>

        <div class="btn-container">
            <button @click="page--" :disabled="page <= 1">&lt</button>
            <button @click="page++" :disabled="isLoading">></button>
        </div>
    </div>
</template>



<style scoped>
.container {
    background-color: black;
    padding: 40px 0px;
}

.cards {
    max-width: 1400px;
    margin: 0px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px 12px;
}

.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

button {
    background-color: #FAEBD7;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    cursor: pointer;
    border: 2px solid rgb(233, 138, 5);
    margin: 20px 0;
}
</style>