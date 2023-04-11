<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['update-search'])

const updateSearch = (event) => {
    emit('update-search', event.target.value)
}
</script>

<template>
    <header>
        <div class="search">
            <input @input="updateSearch" type="text" placeholder="search characters...">
        </div>
    </header>
</template>


<style scoped>
header {
    background: no-repeat center url('../../rick-and-morty-netflix-2020-9d-2560x1440.jpg');
    background-size: cover;
    height: 40rem;
    display: flex;
    justify-content: center;
}

.search input {
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