<script setup>
import '../assets/animation.css'
import axios from 'axios'
import Card from '../components/Card.vue'
import { onMounted, ref, watch } from 'vue'

const characters = ref(null)
const page = ref(1)

onMounted(async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character/?page=1')
    characters.value = response.data.results
})

watch(page, async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page.value}`)
    characters.value = response.data.results
})
</script>

<template>
    <div class="container">
        <div class="cards">
            <TransitionGroup name="fade">
                <Card v-for="character in characters" :key="character.id" :name="character.name" :image="character.image"
                    :species="character.species" />
            </TransitionGroup>
        </div>

        <div class="btn-container">
            <button @click="page--">&lt</button>
            <button @click="page++">></button>
        </div>
    </div>
</template>



<style scoped>
.container {
    background-color: black;
}

.cards {
    max-width: 1400px;
    padding: 40px 0px;
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
    margin-bottom: 20px;
}
</style>