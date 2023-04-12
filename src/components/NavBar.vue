<script setup>
import { defineEmits } from 'vue'
import Carousel from './Carousel.vue';

const emit = defineEmits(['update-search'])

const updateSearch = (event) => {
    emit('update-search', event.target.value)
}
</script>

<template>
    <header>
        <input @input="updateSearch" type="text" placeholder="search characters...">
    </header>
    <Carousel />
</template>


<style scoped>
header {
    display: flex;
    justify-content: center;
}

header input {
    box-sizing: border-box;
    padding: 10px 20px;
    min-width: 250px;
    border-radius: 10px;
    margin: 10px;
    outline: none;
    background-color: antiquewhite;
    border: none;
}
</style>