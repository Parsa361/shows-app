<script setup>
import axios from 'axios'
import Card from '../components/Card.vue'
import NavBar from '../components/NavBar.vue';
import ErrorCard from '../components/ErrorCard.vue'
import defineErrors from '../composable/defineErrors';
import PaginationBtn from '../components/paginationBtn.vue';
import Loading from '../components/Loading.vue';
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const { hasError, handleError } = defineErrors()
const characters = ref(null)
const isLoading = ref(false)
const page = ref(0)
const search = ref('')
const router = useRouter()

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
        <PaginationBtn 
            @increment="increment" 
            @decrement="decrement" 
            :isLoading="isLoading" />

        <div v-if="isLoading && !hasError">
            <Loading />
        </div>

        <div v-if="characters" class="cards">
            <TransitionGroup name="fade">
                <Card 
                    @click="router.push(`/rick-morty/${character.id}`)" 
                    v-for="character in characters"
                        :key="character.id" 
                        :name="character.name" 
                        :image="character.image" 
                        :species="character.species" />
            </TransitionGroup>
        </div>

        <ErrorCard v-if="hasError" :hasError="hasError" />

        <PaginationBtn 
            @increment="increment" 
            @decrement="decrement" 
            :isLoading="isLoading" />
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

.fade-enter-from {
    opacity: 0;
    transform: scale(0);

}

.fade-enter-to {
    opacity: 1;
    transform: scale(1);

}

.fade-enter-active {
    transition: all 1s ease;
}
</style>