<script setup>
import '../assets/animation.css'
import axios from 'axios'
import Card from '../components/Card.vue'
import NavBar from '../components/NavBar.vue';
import ErrorCard from '../components/ErrorCard.vue'
import defineErrors from '../composable/defineErrors';
import { onMounted, ref, watch } from 'vue'
import PaginationBtn from '../components/paginationBtn.vue';

const { hasError, handleError } = defineErrors()
const characters = ref(null)
const isLoading = ref(false)
const page = ref(0)
const search = ref('')

const updateSearch = (searchValue) => {
    search.value = searchValue
}

const increment = (paginationPage) => {
    page.value = paginationPage
}
const decrement = (paginationPage) => {
    page.value = paginationPage
}

onMounted(async () => {
    try {
        hasError.value = ''
        isLoading.value = true
        const response = await axios.get('https://rickandmortyapi.com/api/character/?page=1')
        characters.value = response.data.results
        isLoading.value = false
    } catch (error) {
        handleError(error);
    }
})

watch(() => page.value, async () => {
    hasError.value = ''
    isLoading.value = true
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page.value}`)
    characters.value = response.data.results
    isLoading.value = false
})

watch(search, async () => {
    try {
        hasError.value = ''
        isLoading.value = true
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${search.value}`)
        characters.value = response.data.results
        isLoading.value = false
    } catch (error) {
        handleError(error);
        characters.value = []
    }
})
</script>

<template>
    <NavBar @update-search="updateSearch" />

    <div class="container">
        <PaginationBtn @increment="increment" @decrement="decrement" :isLoading="isLoading" />

        <div v-if="isLoading && !hasError">
            <div class="spin-container">
                <NSpace>
                    <NSpin size="large" class="spiner" />
                </NSpace>
            </div>
        </div>

        <div v-if="!hasError && !isLoading" class="cards">
            <TransitionGroup name="fade">
                <Card v-for="character in characters" :key="character.id" :name="character.name" :image="character.image"
                    :species="character.species" />
            </TransitionGroup>
        </div>

        <ErrorCard v-if="hasError" :hasError="hasError" />

        <PaginationBtn @increment="increment" @decrement="decrement" :isLoading="isLoading" />
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

.spin-container {
    position: relative;
    margin: 20px auto;
}

.spiner {
    position: absolute;
    right: 50%;
    left: 50%;
}
</style>