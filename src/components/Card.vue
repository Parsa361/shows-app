<script setup>
const { name, image, species } = defineProps([
    'name',
    'image',
    'species',
])
</script>

<template>
        <NCard class="n-card">
            <template #cover>
                <img :src="image">
            </template>
            <div class="content">
                <h1>{{ name }}</h1>
                <p>{{ species }}</p>
            </div>
        </NCard>
</template>



<style scoped>
.n-card {
    height: 400px;
    width: 300px;
}
.n-card:hover {
    transform: scale(0.9);
    transition: transform 0.5s ease;
}

.n-card img {
    object-fit: cover;
    height: 280px;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content h1 {
    font-size: 20px;
}

.content p {
    font-size: 16px;
}

</style>