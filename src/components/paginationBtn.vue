<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['increment', 'decrement'])
const { isLoading } = defineProps(['isLoading'])

const page = ref(1)

const increment = () => {
    page.value++
    emit('increment', page.value)
}
const decrement = () => {
    page.value--
    emit('decrement', page.value)
}
</script>

<template>
    <div class="btn-container">
        <button @click="decrement" :disabled="page <= 1">&lt</button>
        <button @click="increment" :disabled="isLoading">></button>
    </div>
</template>

<style scoped>
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